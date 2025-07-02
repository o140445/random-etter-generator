import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Random Letter Generator - Online Tool for Random Letters',
    template: '%s | Random Letter Generator'
  },
  description: "Instantly generate random letters, numbers, and symbols online. Perfect for passwords, games, and more. Supports a-z, custom length, and advanced options.",
  keywords: ['random letter generator', 'random letters', 'password generator', 'random characters'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/',
    languages: {
      'en': '/',
      'de': '/de',
      'fr': '/fr',
      'it': '/it',
      'es': '/es',
      'pt': '/pt',
      'ja': '/ja',
      'ko': '/ko',
    },
  },
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
    title: 'Random Letter Generator - Online Tool for Random Letters',
    description: 'Instantly generate random letters, numbers, and symbols online. Perfect for passwords, games, and more.',
    url: 'https://www.random-letter-generator.com/',
    siteName: 'Random Letter Generator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Letter Generator - Online Tool for Random Letters',
    description: 'Instantly generate random letters, numbers, and symbols online. Perfect for passwords, games, and more.',
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
}: {
  children: React.ReactNode
}) {
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
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
