import type { Metadata } from "next";

import { Raleway, Noto_Serif, Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.scss";
import { SiteProvider } from "@/context/SiteContext";

const raleway = Raleway({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-raleway",
});
const notoSerif = Noto_Serif({
  subsets: ["cyrillic"],
  weight: ["300"],
  variable: "--font-notoSerif",
});

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["300"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "МайстерМеблів",
  description: "МайстерМеблів. Новомосковськ, Дніпро",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${raleway.variable} ${notoSerif.variable} ${inter.variable}`}
      >
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
