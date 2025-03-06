import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "./contact/components/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "مدیریت مخاطبین",
    template: "مدیریت مخاطبین | %s",
  },
};

const vazirmatn: NextFontWithVariable = localFont({
  src: "../../public/assets/fonts/Vazirmatn.woff2",
  display: "swap",
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={`${vazirmatn.variable} font-vazirmatn`}
    >
      <body>
        <Toaster />
        <Header />
        <div className="flex">{children}</div>
      </body>
    </html>
  );
}
