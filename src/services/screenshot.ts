import puppeteer, { Browser, Page } from "puppeteer";

export interface ScreenshotOptions {
  url: string;
  fullPage?: boolean;
  width?: number;
  height?: number;
  format?: "png" | "jpeg" | "webp";
  quality?: number;
}

export class ScreenshotService {
  private browser: Browser | null = null;

  /**
   * Initialize the browser instance
   */
  private async initBrowser(): Promise<Browser> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-accelerated-2d-canvas",
          "--no-first-run",
          "--no-zygote",
          "--disable-gpu",
        ],
      });
    }
    return this.browser;
  }

  /**
   * Take a screenshot of the specified URL with retry logic
   * @param options - Screenshot configuration options
   * @param retries - Number of retry attempts after initial try (default: 1, meaning 2 total attempts)
   * @returns Buffer containing the screenshot image
   */
  async takeScreenshot(
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

    for (let attempt = 0; attempt <= retries; attempt++) {
      console.log(
        `[Screenshot] Attempt ${attempt + 1}/${retries + 1} for ${url}`
      );

      let page: Page | null = null;

      try {
        const browser = await this.initBrowser();
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

        return screenshot as Buffer;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error(`[Screenshot] Attempt ${attempt + 1} failed:`, errorMsg);

        if (page) {
          await page.close();
          console.log("[Screenshot] Page closed after error");
        }

        // If this is a timeout and we have retries left, try again
        if (
          attempt < retries &&
          (errorMsg.includes("timeout") || errorMsg.includes("Navigation"))
        ) {
          console.log(`[Screenshot] Retrying due to timeout...`);
          continue;
        }

        // If it's not a timeout or we're out of retries, throw
        console.error(`[Screenshot] Failed after ${attempt + 1} attempts`);
        throw error;
      }
    }

    console.error("[Screenshot] All retry attempts exhausted");
    throw new Error("Failed to take screenshot after retries");
  }

  /**
   * Close the browser instance
   */
  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

// Singleton instance
let screenshotService: ScreenshotService | null = null;

/**
 * Get the singleton instance of ScreenshotService
 */
export function getScreenshotService(): ScreenshotService {
  if (!screenshotService) {
    screenshotService = new ScreenshotService();
  }
  return screenshotService;
}
