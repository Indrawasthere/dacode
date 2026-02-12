import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/cursor";
import { cn } from "@/lib/utils";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dacode - Enterprise Software Engineering",
  description:
    "Building resilient infrastructures and intelligent ecosystems for the next era of business.",
  generator: "Next.js",
  keywords: [
    "enterprise software",
    "web development",
    "nextjs",
    "typescript",
    "ai integration",
    "crm",
    "hris",
    "wms",
  ],
  authors: [{ name: "Dacode.io" }],
  openGraph: {
    title: "Dacode - Enterprise Software Engineering",
    description:
      "Building resilient infrastructures and intelligent ecosystems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dacode - Enterprise Software Engineering",
    description:
      "Building resilient infrastructures and intelligent ecosystems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased min-h-screen bg-black",
        )}
      >
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
