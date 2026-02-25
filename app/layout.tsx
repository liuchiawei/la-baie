import type { Metadata } from "next";
import { Noto_Serif_JP, Cormorant_Garamond, Roboto } from "next/font/google";
import "./globals.css";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { Footer } from "@/components/layout/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Baie | 洗練されたフレンチレストラン",
    template: "%s | La Baie",
  },
  description: "La Baie は、洗練されたフレンチ料理と上質な空間で特別なひとときを提供するレストランです。",
  keywords: ["フレンチ", "レストラン", "東京", "ウェディング", "コース料理"],
  openGraph: {
    title: "La Baie | 洗練されたフレンチレストラン",
    description: "La Baie は、洗練されたフレンチ料理と上質な空間で特別なひとときを提供するレストランです。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Baie | 洗練されたフレンチレストラン",
    description: "La Baie は、洗練されたフレンチ料理と上質な空間で特別なひとときを提供するレストランです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${cormorant.variable} ${roboto.variable} antialiased bg-neutral-950 text-foreground`}
      >
        <div className="w-full h-full mx-auto bg-neutral-950 text-neutral-50">
          <ConditionalHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
