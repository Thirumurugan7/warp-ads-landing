import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WarpAds",
  description: "A open ads protocol for web3 social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
