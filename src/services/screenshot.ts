// @ts-ignore - @sparticuz/chromium doesn't have type definitions
import chromium from "@sparticuz/chromium";
import puppeteer, { Browser, Page } from "puppeteer-core";

export interface ScreenshotOptions {
  url: string;
  fullPage?: boolean;
  width?: number;
  height?: number;
  format?: "png" | "jpeg" | "webp";
  quality?: number;
}

// Simple mutex to prevent concurrent Chromium access
let isChromiumBusy = false;
const chromiumQueue: Array<() => void> = [];

async function acquireChromiumLock(): Promise<void> {
  if (!isChromiumBusy) {
    isChromiumBusy = true;
    return;
  }

  return new Promise((resolve) => {
    chromiumQueue.push(resolve);
  });
}

function releaseChromiumLock(): void {
  const next = chromiumQueue.shift();
  if (next) {
    next();
  } else {
    isChromiumBusy = false;
  }
}

/**
 * Take a screenshot of the specified URL with retry logic
 * Optimized for serverless environments (Vercel)
 * @param options - Screenshot configuration options
 * @param retries - Number of retry attempts after initial try (default: 1, meaning 2 total attempts)
 * @returns Buffer containing the screenshot image
 */
export async function takeScreenshot(
  options: ScreenshotOptions,
  retries: number = 1
): Promise<Buffer> {
  const {
    url,
    fullPage = false,
    width = 1280,
    height = 720,
    format = "jpeg",
    quality = 50,
  } = options;

  console.log(`[Screenshot] Starting screenshot for: ${url}`);

  // Validate URL
  if (!url) {
    console.error("[Screenshot] Error: URL is required");
    throw new Error("URL is required");
  }

  try {
    new URL(url);
  } catch (error) {
    console.error("[Screenshot] Error: Invalid URL provided:", url);
    throw new Error("Invalid URL provided");
  }

  let browser: Browser | null = null;

  // Acquire lock to prevent concurrent Chromium access
  await acquireChromiumLock();

  try {
    for (let attempt = 0; attempt <= retries; attempt++) {
      console.log(
        `[Screenshot] Attempt ${attempt + 1}/${retries + 1} for ${url}`
      );

      let page: Page | null = null;

      try {
        // Launch browser with Chromium for serverless
        console.log("[Screenshot] Launching browser...");

        const executablePath = await chromium.executablePath();
        console.log("[Screenshot] Chromium executable path:", executablePath);

        browser = await puppeteer.launch({
          args: [
            ...chromium.args,
            "--disable-web-security",
            "--disable-features=IsolateOrigins,site-per-process",
            "--single-process",
            "--no-sandbox",
            "--disable-setuid-sandbox",
          ],
          defaultViewport: chromium.defaultViewport,
          executablePath,
          headless: chromium.headless,
        });
        console.log("[Screenshot] Browser initialized");

        page = await browser.newPage();
        console.log("[Screenshot] New page created");

        // Set viewport
        await page.setViewport({ width, height });
        console.log(`[Screenshot] Viewport set to ${width}x${height}`);

        // Navigate to the URL
        console.log(`[Screenshot] Navigating to ${url}...`);
        await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });
        console.log("[Screenshot] Page loaded successfully");

        // Wait for content to render
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("[Screenshot] Waited 500ms for render");

        // Take screenshot
        console.log("[Screenshot] Taking screenshot...");
        const screenshot = await page.screenshot({
          type: format,
          fullPage,
          quality: format !== "png" ? quality : undefined,
          encoding: "binary",
        });
        console.log(
          `[Screenshot] Screenshot taken successfully (${screenshot.length} bytes)`
        );

        await page.close();
        console.log("[Screenshot] Page closed");

        if (browser) {
          await browser.close();
          console.log("[Screenshot] Browser closed");
        }

        // Release the lock before returning
        releaseChromiumLock();
        return screenshot as Buffer;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        const errorStack = error instanceof Error ? error.stack : "";
        console.error(`[Screenshot] Attempt ${attempt + 1} failed:`, errorMsg);
        console.error(`[Screenshot] Error stack:`, errorStack);

        if (page) {
          try {
            await page.close();
            console.log("[Screenshot] Page closed after error");
          } catch (closeError) {
            console.error("[Screenshot] Error closing page:", closeError);
          }
        }

        if (browser) {
          try {
            await browser.close();
            console.log("[Screenshot] Browser closed after error");
          } catch (closeError) {
            console.error("[Screenshot] Error closing browser:", closeError);
          }
        }

        // If this is a timeout or ETXTBSY error and we have retries left, try again
        if (
          attempt < retries &&
          (errorMsg.includes("timeout") ||
            errorMsg.includes("Navigation") ||
            errorMsg.includes("ETXTBSY"))
        ) {
          console.log(`[Screenshot] Retrying due to: ${errorMsg}`);
          // Add a small delay before retry to avoid immediate re-execution
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }

        // If it's not a retriable error or we're out of retries, release lock and throw
        console.error(`[Screenshot] Failed after ${attempt + 1} attempts`);
        releaseChromiumLock();
        throw error;
      }
    }

    console.error("[Screenshot] All retry attempts exhausted");
    releaseChromiumLock();
    throw new Error("Failed to take screenshot after retries");
  } finally {
    // Ensure lock is always released
    if (isChromiumBusy) {
      releaseChromiumLock();
    }
  }
}
