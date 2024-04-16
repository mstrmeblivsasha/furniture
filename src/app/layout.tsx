import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.scss";

const raleway = Raleway({ subsets: ["cyrillic"], weight: ["400"] });

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
            <body className={raleway.className}>
                {/* <SiteProvider> */}
                <Header />
                <main>{children}</main>
                <Footer />
                {/* </SiteProvider> */}
            </body>
        </html>
    );
}
