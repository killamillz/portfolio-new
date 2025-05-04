import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alozie Ogochukwu Bright",
  description: "Portfolio to great works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <div className="w-full flex justify-center items-center px-10">
          <div className="flex flex-col min-h-[100dvh] w-[1440px] pt-[200px]">
            <div className="flex flex-col w-full">
              <div className="fixed top-10 left-0 right-0 z-[999] w-[1440px] px-10">
                <Header />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
