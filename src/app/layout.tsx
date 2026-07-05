import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Hani | Frontend Developer",
    template: "%s | Hani",
  },
  description:
    "Frontend Developer specializing in Next.js, TypeScript and modern web technologies.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        {/* مهم: attribute="class" برای sync تم */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}