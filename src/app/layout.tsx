import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moodboard | Collaborative Design Inspiration",
  description: "A collaborative mood board for collecting and sharing visual design inspiration. Discover UI patterns, color palettes, typography, and design ideas.",
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
        <Nav />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="border-t border-border py-6 md:py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Tailwind CSS
              </a>
              , and{" "}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                shadcn/ui
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mosaic Design System
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
