import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],
weight: ['400', '500', '600', '700'],
variable : '--font-poppins' });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event managementp",
  icons : {
    icon : './asstes/image/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      >{children}</body>
    </html>
  );
}
