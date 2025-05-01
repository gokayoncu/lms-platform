import { type Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/components/provider/toast-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LMS Platform",
  description: "LMS Platform - Online Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
          <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
            <Navbar/>
          </div>
          <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 transition-all">
            <Sidebar />
          </div>
          <main className="md:pl-56 pt-[80px] h-full">
            <ToastProvider/>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
