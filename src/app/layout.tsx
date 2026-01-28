import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "FUH Agency | Influencer Marketing for Cannabis Brands",
  description: "FUH Agency - Bridging the gap between brands and cannabis enthusiasts. Join us for Spannabis 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-fuh-black text-white antialiased selection:bg-fuh-primary selection:text-white">
        <Header />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
