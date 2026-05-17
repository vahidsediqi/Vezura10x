import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vezura10x.com"),
  title: {
    default: "Vezura10x | Full-Stack Digital Marketing Agency Germany",
    template: "%s | Vezura10x",
  },
  description:
    "Vezura10x is a full-stack digital marketing agency based in Germany, led by Vahid Sediqi. We specialize in SEO, Google Ads, Google Merchant Center, and Shopify to help businesses 10X their revenue.",
  keywords: [
    "digital marketing agency Germany",
    "SEO agency Germany",
    "Google Ads management Germany",
    "Shopify marketing agency",
    "Google Merchant Center setup",
    "Vezura10x",
    "Vahid Sediqi",
    "10X revenue growth",
    "full-stack digital marketing",
    "online marketing Germany",
  ],
  authors: [{ name: "Vahid Sediqi", url: "https://vezura10x.com" }],
  creator: "Vahid Sediqi",
  publisher: "Vezura10x",
  openGraph: {
    type: "website",
    locale: "en_DE",
    url: "https://vezura10x.com",
    siteName: "Vezura10x",
    title: "Vezura10x | Full-Stack Digital Marketing Agency Germany",
    description:
      "We help businesses 10X their revenue through data-driven SEO, Google Ads, Google Merchant Center, and Shopify marketing. Based in Germany.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vezura10x Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vezura10x | Full-Stack Digital Marketing Agency Germany",
    description:
      "We help businesses 10X their revenue through data-driven SEO, Google Ads & Shopify marketing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vezura10x.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050510" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vezura10x",
              description:
                "Full-stack digital marketing agency based in Germany specializing in SEO, Google Ads, Google Merchant Center, and Shopify.",
              founder: {
                "@type": "Person",
                name: "Vahid Sediqi",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
              email: "Vahid@vezura10x.com",
              url: "https://vezura10x.com",
              serviceType: [
                "SEO",
                "Google Ads",
                "Google Merchant Center",
                "Shopify Marketing",
              ],
              areaServed: "Germany",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
