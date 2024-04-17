import type { Metadata } from "next";
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
    "A simple web application that enables users to craft an attractive profile picture for social media platforms.",
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
        width: 500,
        height: 500,
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
        <body className={ibm.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
