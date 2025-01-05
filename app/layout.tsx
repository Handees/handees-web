import type { Metadata } from "next";
import { Cabin, Outfit } from "next/font/google";
import ogImage from "./opengraph-image.jpg";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://handees.netlify.app"),
  title: "Get Handees",
  description: "Discover a world of service all in one place",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Carpenter",
    "Hairdresser",
    "Artisan",
    "DSTV",
    "Plumber",
    "Electrician",
  ],

  openGraph: {
    title: "Get Handees",
    description: "Discover a world of service all in one place",
    siteName: "Handees",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    title: "Get Handees",
    description: "Discover a world of service all in one place",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
