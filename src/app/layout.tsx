import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers"
import Footer from "@/components/Footer"
import { Calistoga, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});



export const metadata: Metadata = {
  title: "E15 Time Table",
  description: "Timetable for e15 batch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}>
        <Providers>
          <Header/>
          <main className="grow">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
