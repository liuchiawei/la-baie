import type { Metadata } from "next";
import { Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { Footer } from "@/components/layout/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "La Baie | 洗練されたフレンチレストラン",
    template: "%s | La Baie",
  },
  description: "La Baie は、洗練されたフレンチ料理と上質な空間で特別なひとときを提供するレストランです。",
  keywords: ["フレンチ", "レストラン", "東京", "ウェディング", "コース料理"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${cormorant.variable} antialiased`}
      >
        <ConditionalHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
