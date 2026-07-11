import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Vazirmatn,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const ThemeProviderAny =
  ThemeProvider as unknown as React.ComponentType<Record<string, unknown>>;

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "Hani | Frontend Developer",
    template: "%s | Hani",
  },
  description:
    "Frontend Developer specializing in Next.js, TypeScript and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${vazirmatn.variable}
      `}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <ThemeProviderAny
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProviderAny>
      </body>
    </html>
  );
}