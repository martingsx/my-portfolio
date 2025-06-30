import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import './globals.css';
import Navbar from "@/src/components/navbar";



const urbanist = Urbanist({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Portfolio | Martín González",
  description: "Portfolio Martín González 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

