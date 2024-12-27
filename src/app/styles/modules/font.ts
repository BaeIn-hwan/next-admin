import { Noto_Sans_KR, Roboto } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600", "700", "900"],
  display: "fallback",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  display: "fallback",
});

export { notoSansKr, roboto };
