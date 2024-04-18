import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://attraktives-hs.vercel.app"),
  title: {
    default: "Attraktives Headshot",
    template: "%s | Attraktives Headshot",
  },
  description:
    "Remove the background of an image and craft an attractive profile pictures for social media.",
  twitter: {
    card: "summary_large_image",
    creator: "@iambolajiayo",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://attraktives-hs.vercel.app",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    "imgly",
    "cedsk",
    "@cedsk/sdk",
    "@cedsk/engine",
    "clerk",
    "image editor",
    "headshot editor",
    "create profile picture",
    "change headshot background",
    "next.js",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "Bolaji Ayodeji", url: "https://bolajiayodeji.com" }],
  creator: "Bolaji Ayodeji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ibm.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
