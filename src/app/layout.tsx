import type { Metadata } from "next";
import { DM_Serif_Display, Fira_Code, Noto_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yang Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          dmSerifDisplay.variable,
          firaCode.variable,
          notoSans.variable,
          "bg-portfolio text-neutral-900 antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}