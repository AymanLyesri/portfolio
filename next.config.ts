import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // v15 made this property stable
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
};

export default withNextIntl(nextConfig);
