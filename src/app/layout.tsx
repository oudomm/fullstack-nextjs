import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/header/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISTAD FullStack | Professional Financial Planning",
  description:
    "Empowering you to make better financial decisions. Professional money planners for your business and personal growth.",
  keywords: [
    "Financial Planning",
    "Money Management",
    "Business Growth",
    "ISTAD",
    "FullStack",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "ISTAD FullStack | Professional Financial Planning",
    description:
      "Empowering you to make better financial decisions. Professional money planners for your business and personal growth.",
    url: "https://your-domain.com",
    siteName: "ISTAD FullStack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ISTAD FullStack Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISTAD FullStack | Professional Financial Planning",
    description:
      "Empowering you to make better financial decisions. Professional money planners for your business and personal growth.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://fullstack-nextjs.oudom.pro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon and other meta tags are handled by Next.js metadata above */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary errorComponent={Error}>
          <NavbarComponent />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
