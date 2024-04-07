import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar/NavBar";
import FooterComponent from "@/components/footer/Footer";
import {Divide} from "lucide-react";
import {FooterDivider} from "flowbite-react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "STAD Commerce",
    description: "STAD Commerce is a platform for selling and buying products online.",
    openGraph: {
        title: "ISTAD Ecommerce Web",
        description:
            "ISTAD Ecommerce Web is a web application for selling products.",
        images: "https://www.picmote.com/static/background.eb78315a.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} h-screen container mx-auto flex flex-col justify-between`}>
        <nav className="mb-4"><NavBar/></nav>
        <main>
            {children}
        </main>
        <FooterDivider/>
        <footer>
            <FooterComponent/>
        </footer>
        </body>
        </html>
    );
}
