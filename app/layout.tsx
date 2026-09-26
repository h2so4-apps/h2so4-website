import type { Metadata, Viewport } from "next";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://h2so4apps.com"),
  title: {
    default: "H2SO4 — 小さな便利を、毎日に。",
    template: "%s | H2SO4",
  },
  description:
    "H2SO4は、雲電卓（KumoCalc）やふるマネを開発する個人アプリブランドです。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "H2SO4",
    title: "H2SO4 — 小さな便利を、毎日に。",
    description: "暮らしの中の「少し面倒」を、すっきり使えるアプリに。",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "H2SO4 — 小さな便利を、毎日に。" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "H2SO4 — 小さな便利を、毎日に。",
    description: "暮らしの中の「少し面倒」を、すっきり使えるアプリに。",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
