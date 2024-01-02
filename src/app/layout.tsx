import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMV - For Wanderers",
  description: "Book My Vacation",
};

const fontNunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontNunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
