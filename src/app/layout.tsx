import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import React from "react";
import "@/styles/index.scss";

const notoSans = Noto_Sans({
  variable: "--noto-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const str = "1234";
  console.log(error);

  return (
    <html lang="ko">
      <body className={notoSans.variable}>
        <div id="wrapper">{children}</div>
      </body>
    </html>
  );
}
