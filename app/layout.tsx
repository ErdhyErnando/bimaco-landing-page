import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

// Import fonts using Next.js font system
import { Montserrat, Raleway } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bimaco - Premium Coffee",
  description: "Premium coffee for couples - 100% natural ingredients",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
      <body className="font-montserrat">
        <div className="relative z-10 bg-[#08112E] min-h-screen">
          <div className="px-4">
            <NavBar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
