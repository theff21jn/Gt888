import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";

import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TopUp — เติมเกมไว ปลอดภัย ราคาดีที่สุด",
  description:
    "แพลตฟอร์มเติมเกมอันดับ 1 รวมเกมยอดนิยมกว่า 100 เกม เติมไวเข้าเกมทันที ปลอดภัย 100% บริการตลอด 24 ชั่วโมง",
  keywords: [
    "เติมเกม",
    "เติม RoV",
    "เติม Free Fire",
    "เติม Genshin",
    "เติมเกมราคาถูก",
  ],
  openGraph: {
    title: "TopUp — เติมเกมไว ปลอดภัย ราคาดีที่สุด",
    description:
      "เติมเกมโปรดของคุณ ง่าย ไว ในไม่กี่วินาที รวมเกมยอดนิยมกว่า 100 เกม",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
