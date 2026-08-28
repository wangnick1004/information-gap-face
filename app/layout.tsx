import type { Metadata } from "next";
import { Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "日拍比價小幫手 | 一鍵破解日拍行情，跟代購盤子價說掰掰！",
  description: "專為台灣日淘買家量身打造的 AI 比價 LINE Bot。拍照秒查 Mercari、Yahoo! 拍賣、駿河屋真實底價，毫秒級日文翻譯與台幣換算，享獨家 Buyee 隱藏折扣！",
  keywords: ["日拍比價", "Mercari比價", "日本代購", "Buyee折扣碼", "Yahoo拍賣", "LINE Bot比價", "日拍行情", "日本中古挖寶"],
  openGraph: {
    title: "日拍比價小幫手 | 一鍵破解日拍行情，跟代購盤子價說掰掰！",
    description: "拍照秒查日本各大拍賣真實底價，AI 視覺辨識 + 毫秒級繁中翻譯 + 獨家 Buyee 折扣券！",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} ${plusJakartaSans.variable} dark`}>
      <body className="min-h-screen bg-[#090d14] text-slate-100 font-sans selection:bg-[#06C755]/30 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
