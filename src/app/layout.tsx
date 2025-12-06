import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayman Lyesri | Software Engineer Portfolio",
  description:
    "Full-Stack Developer & Cloud Architect building scalable solutions and elegant user experiences. Specialized in TypeScript, React, Node.js, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
