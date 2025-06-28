import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Random Letter Generator | Instantly Generate Letters & Numbers Online",
  description: "Free online random letter generator. Instantly generate random letters, numbers, and symbols for passwords, games, and more. Supports A-Z and custom length.",
  keywords: "random letter generator, random alphabet generator, randomizer, online tool",
  authors: [{ name: "Random Letter Generator" }],
  creator: "Random Letter Generator",
  publisher: "Random Letter Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.random-letter-generator.com'),
  openGraph: {
    title: "Random Letter Generator | Instantly Generate Letters & Numbers Online",
    description: "Free online random letter generator. Instantly generate random letters, numbers, and symbols for passwords, games, and more. Supports A-Z and custom length.",
    url: 'https://www.random-letter-generator.com',
    siteName: 'Random Letter Generator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Random Letter Generator | Instantly Generate Letters & Numbers Online",
    description: "Free online random letter generator. Instantly generate random letters, numbers, and symbols for passwords, games, and more. Supports A-Z and custom length.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5KHMF5HFGM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KHMF5HFGM');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
