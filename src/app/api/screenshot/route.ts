import { NextRequest, NextResponse } from "next/server";
import { takeScreenshot } from "@/services/screenshot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, fullPage, width, height, format, quality } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const screenshot = await takeScreenshot({
      url,
      fullPage: fullPage ?? true,
      width: width ?? 1920,
      height: height ?? 1080,
      format: format ?? "png",
      quality: quality ?? 80,
    });

    // Determine content type based on format
    const contentType =
      format === "jpeg"
        ? "image/jpeg"
        : format === "webp"
        ? "image/webp"
        : "image/png";

    // Return the image as a response
    return new NextResponse(screenshot as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="screenshot.${
          format || "png"
        }"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Screenshot error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to take screenshot";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  console.log("[API] Screenshot request received for:", url);

  if (!url) {
    console.log("[API] Error: No URL provided");
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    console.log("[API] Taking screenshot...");
    const screenshot = await takeScreenshot({
      url,
      fullPage: searchParams.get("fullPage") !== "false",
      width: parseInt(searchParams.get("width") || "1280"),
      height: parseInt(searchParams.get("height") || "720"),
      format: (searchParams.get("format") as "png" | "jpeg" | "webp") || "jpeg",
      quality: parseInt(searchParams.get("quality") || "50"),
    });

    const format = searchParams.get("format") || "jpeg";
    const contentType =
      format === "jpeg"
        ? "image/jpeg"
        : format === "webp"
        ? "image/webp"
        : "image/png";

    console.log(
      `[API] Screenshot successful, returning ${screenshot.length} bytes`
    );

    return new NextResponse(screenshot as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="screenshot.${format}"`,
        "Cache-Control":
          "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("[API] Screenshot error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to take screenshot";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
