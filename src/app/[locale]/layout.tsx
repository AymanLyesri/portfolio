import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import MouseGradient from "@/components/MouseGradient";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: `${t("name")} | ${t("title")}`,
    description: t("tagline"),
    keywords: [
      "Software Engineer",
      "Full-Stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "Portfolio",
    ],
    authors: [{ name: t("name") }],
    openGraph: {
      title: `${t("name")} | ${t("title")}`,
      description: t("tagline"),
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script src="https://donations-aymanlyesri.vercel.app/widget.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <MouseGradient />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
