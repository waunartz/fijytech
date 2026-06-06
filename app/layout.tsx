import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FijyTech — AI Otomasyon Ajansı",
  description: "Şirketinizi otomatik pilota alın",
  icons: {
    icon: "/fijytech.png",
    apple: "/fijytech.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
