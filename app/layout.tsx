import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuri Loureiro — Sites para Psicólogos",
  description:
    "Landing pages de alta conversão e design premium para psicólogos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={space.className}>{children}</body>
    </html>
  );
}
