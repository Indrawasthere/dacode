import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/cursor";
import { Header } from "@/components/header";
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
  title: "Dacode - Data-Driven Web Design for Agencies",
  description:
    "Websites That Convert. A Design Partner That Sticks Around. Deploy. Scale. Ship faster with modern web technologies.",
  generator: "v0.app",
  keywords: [
    "nextjs",
    "vercel",
    "shadcn",
    "react",
    "deployment",
    "web design",
    "agencies",
  ],
  authors: [{ name: "Dacode.io" }],
  openGraph: {
    title: "Dacode - Data-Driven Web Design for Agencies",
    description: "Websites That Convert. A Design Partner That Sticks Around.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dacode - Data-Driven Web Design for Agencies",
    description: "Websites That Convert. A Design Partner That Sticks Around.",
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
          "font-sans antialiased min-h-screen bg-white dark:bg-zinc-950",
        )}
      >
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
