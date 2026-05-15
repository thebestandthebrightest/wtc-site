import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wellnessthroughclay.com"),
  title: "Wellness Through Clay",
  description:
    "A student-led ceramics and wellness initiative at Rutgers, creating low-pressure spaces to work with clay, connect, and decompress.",
  keywords: [
    "Wellness Through Clay",
    "Rutgers ceramics",
    "Rutgers wellness",
    "clay workshop",
    "student wellness",
    "ceramics club",
    "Rutgers art",
    "pottery workshop"
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://wellnessthroughclay.com"
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],
    shortcut: ["/icon.svg"],
    apple: [
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ]
  },
  openGraph: {
    title: "Wellness Through Clay",
    description:
      "A student-led ceramics and wellness initiative at Rutgers, creating low-pressure spaces to work with clay, connect, and decompress.",
    url: "https://wellnessthroughclay.com",
    siteName: "Wellness Through Clay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wellness Through Clay social preview with editorial clay creations and warm burgundy branding."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Through Clay",
    description:
      "A student-led ceramics and wellness initiative at Rutgers, creating low-pressure spaces to work with clay, connect, and decompress.",
    images: ["/og-image.png"]
  }
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
