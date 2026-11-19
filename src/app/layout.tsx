import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpasiZalogaj – Platforma za smanjenje otpada od hrane",
  description: "Povezivanje prodajnih mjesta s viškom hrane, kupaca i humanitarnih organizacija.",
  openGraph: {
    title: "SpasiZalogaj – Smanjimo otpad od hrane zajedno",
    description:
      "Pronađite višak hrane u svojoj blizini po sniženim cijenama ili ga donirajte humanitarnim organizacijama.",
    images: [{ url: "/hero.png", width: 2048, height: 1152, alt: "SpasiZalogaj" }],
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
