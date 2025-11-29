import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseGradient from "@/components/MouseGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayman Lyesri | Software Engineer Portfolio",
  description:
    "Full-Stack Developer & Cloud Architect building scalable solutions and elegant user experiences. Specialized in TypeScript, React, Node.js, and AWS.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Ayman Lyesri" }],
  openGraph: {
    title: "Ayman Lyesri | Software Engineer Portfolio",
    description:
      "Full-Stack Developer & Cloud Architect building scalable solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseGradient />
        {children}
      </body>
    </html>
  );
}
