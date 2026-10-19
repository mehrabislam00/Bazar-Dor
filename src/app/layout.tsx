import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Category from "@/components/category/category";
import PriceTicker from "@/components/Priceticker/Priceticker";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/ToastProvider/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bazar-Dor | Your Daily Shopping Companion",
    template: "%s | Bazar-Dor",
  },
  description: "Track daily prices and compare markets with Bazar-Dor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        <ToastProvider />

        <Navbar />
        <Category />
        <PriceTicker />
        <div className="flex min-h-0 flex-1 flex-col bg-[#E1E8E1]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
