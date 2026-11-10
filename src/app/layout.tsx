import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpasiZalogaj – Platforma za smanjenje otpada od hrane",
  description: "Povezivanje prodajnih mjesta s viškom hrane, kupaca i humanitarnih organizacija.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
