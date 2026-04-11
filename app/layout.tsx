import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@src/providers";
import PortfolioHeader from "@components/Header";
import PortfolioFooter from "@components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdoulaye Chaibou | Développeur Créatif",
  description: "Portfolio professionnel présentant mes projets et compétences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <PortfolioHeader />
          <main className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>
          <PortfolioFooter />
        </Providers>
      </body>
    </html>
  );
}