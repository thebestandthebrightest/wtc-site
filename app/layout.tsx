import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Wellness Through Clay",
  description: "Standalone Wellness Through Clay website recreation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
