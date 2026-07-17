import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PublicChrome } from "@/components/public-chrome";
import { LocaleProvider } from "@/lib/i18n/context";
import { getLocale } from "@/lib/i18n/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocaleProvider locale={locale}>
          <PublicChrome>{children}</PublicChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
