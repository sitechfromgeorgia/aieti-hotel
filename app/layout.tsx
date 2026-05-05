import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "სასტუმრო აიეტი — თქვენი სახლი ზღვასთან",
  description: "სასტუმრო აიეტი ქობულეთში — 44 ოთახი, 150 საწოლი, ღია აუზი, ოჯახური ატმოსფერო. ივნისი-სექტემბერი.",
  keywords: "სასტუმრო ქობულეთში, hotel kobuleti, აუზიანი სასტუმრო, აჭარა, სეზონური სასტუმრო",
  openGraph: {
    title: "სასტუმრო აიეტი — ქობულეთი",
    description: "44 ოთახი, 150 საწოლი, ღია აუზი. თქვენი სახლი ზღვასთან.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
