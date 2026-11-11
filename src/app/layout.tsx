import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Gopi Raj portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Motion Designer, Graphic Designer and Web Developer",
  address: { "@type": "PostalAddress", addressLocality: "Ranchi", addressCountry: "IN" },
  sameAs: site.socials.map((s) => s.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
