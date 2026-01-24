"use client"

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
       <Providers>
         <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
       </Providers>
      </body>
    </html>
  );
}
