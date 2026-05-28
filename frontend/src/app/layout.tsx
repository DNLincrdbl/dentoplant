import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { PublicChrome } from "@/components/public-chrome";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["SOFT", "opsz"],
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
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
