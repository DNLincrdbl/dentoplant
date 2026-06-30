import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PublicChrome } from "@/components/public-chrome";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentoplant Fogászati és Implantológiai Rendelő — Szeged",
  description:
    "Dentoplant fogászati és implantológiai rendelő Szegeden. Fogágybetegségek kezelése, implantológia, digitális mosolytervezés, fogszabályozás és mikroszkópos fogászat egy helyen.",
  metadataBase: new URL("https://dentoplant.hu"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
