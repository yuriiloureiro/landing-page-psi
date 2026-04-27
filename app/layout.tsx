import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  verification: {
    google: "T2uQE1oKMxHsgHtXx38d7YmQwvTyEZJKoFm2oVf8C9g",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={space.className}>
        {children}
        <GoogleAnalytics gaId="G-WSJ22QE39R" />
      </body>
    </html>
  );
}
