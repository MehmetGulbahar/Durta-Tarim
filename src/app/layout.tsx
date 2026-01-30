import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Analytics } from "@vercel/analytics/next"
import { FloatingContact } from "@/components/floating-contact"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durta Meyve Sebze A.Ş.",
  description: "Sektörün Öncüsü - Taze meyve ve sebze tedarik zinciri çözümleri",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background")} suppressHydrationWarning>
        {children}
        <FloatingContact />
        <Analytics />
        </body>
      </html>
  );
}
