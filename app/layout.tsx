import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latidos - Tecnología Médica Confiable",
  description:
    "Dispositivos médicos seguros, certificados y fáciles de usar, pensados para acompañarte en cada etapa de tu bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
