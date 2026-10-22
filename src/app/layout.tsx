import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  "https://moments-by-babu.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Moment's | Wedding Photography & Cinematography Studio",
    template: "%s | Moment's Photography & Cinematography"
  },
  description: "Official studio of Moment's Photography & Cinematography. Timeless Bengali wedding photography, cinematic wedding films, Gaye Holud celebrations, and pre-wedding romance across Banskhali, Chattogram, Dhaka, and Sylhet. Directed by Al Shahriar Babu.",
  applicationName: "Moment's Photography",
  keywords: [
    "Moment's Photography",
    "Moment's Cinematography",
    "wedding photography Bangladesh",
    "cinematic wedding film Dhaka",
    "Chittagong wedding photographer",
    "Banskhali wedding photography studio",
    "Gaye Holud cinematography",
    "pre wedding shoot Bangladesh",
    "bridal portraits Bangladesh",
    "Al Shahriar Babu",
    "Belal Mahmud photographer",
    "Anik Das cinematographer",
    "Sk Abdullah cinematographer",
    "01643-666825",
    "alshahriar.7775@gmail.com",
    "Moments7775"
  ],
  authors: [{ name: "Al Shahriar Babu", url: SITE_URL }],
  creator: "Moment's Photography & Cinematography",
  publisher: "Moment's Photography & Cinematography",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/logo.png?v=4", type: "image/png" }
    ],
    shortcut: "/favicon.ico?v=4",
    apple: [
      { url: "/logo.png?v=4", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Moment's | Wedding Photography & Cinematography",
    description: "Capturing weddings, festive Gaye Holud celebrations, and milestone love stories with timeless honesty and cinema-grade craft. Contact: 01643-666825.",
    url: SITE_URL,
    siteName: "Moment's Photography & Cinematography",
    locale: "en_US",
    alternateLocale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Moment's Photography & Cinematography Studio Logo Banner",
      },
      {
        url: "/og-square.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "Moment's Photography Official Brand Logo",
      },
      {
        url: "/logo.png",
        width: 335,
        height: 417,
        type: "image/png",
        alt: "Moment's Official Brand Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moment's | Wedding Photography & Cinematography",
    description: "Capturing weddings, Gaye Holud celebrations, and milestone love stories with timeless honesty and cinema-grade craft. Contact: 01643-666825.",
    images: ["/og-image.jpg"],
    creator: "@Moments7775"
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
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "bn-BD": SITE_URL,
    },
  },
  category: "Photography & Cinematography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PhotographyBusiness", "LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        "name": "Moment's Photography & Cinematography",
        "alternateName": ["Moment's", "Moment's Studio", "Moment's by Al Shahriar Babu"],
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "image": `${SITE_URL}/og-image.jpg`,
        "description": "Moment's Photography & Cinematography captures weddings, Gaye Holud celebrations, and engagement stories with timeless honesty and cinema-grade craft.",
        "telephone": "+8801643666825",
        "email": "alshahriar.7775@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Laxmi Square, Ground Floor, #Shop no-92",
          "addressLocality": "Banskhali",
          "addressRegion": "Chattogram",
          "postalCode": "4390",
          "addressCountry": "BD"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.0463,
          "longitude": 91.9567
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Al Shahriar Babu",
          "jobTitle": "Founder & CEO"
        },
        "priceRange": "৳18,000 - ৳65,000",
        "currenciesAccepted": "BDT",
        "paymentAccepted": "Cash, bKash, Bank Transfer",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Chattogram" },
          { "@type": "AdministrativeArea", "name": "Dhaka" },
          { "@type": "AdministrativeArea", "name": "Sylhet" },
          { "@type": "AdministrativeArea", "name": "Banskhali" },
          { "@type": "Country", "name": "Bangladesh" }
        ],
        "sameAs": [
          "https://www.facebook.com/Moments7775"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Photography & Cinematography Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Day Wedding Photography & Cinematography"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gaye Holud & Festive Cinema Coverage"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pre-Wedding & Outdoor Romance Stories"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bridal Solo & Reception Portraiture"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Moment's Photography & Cinematography",
        "description": "Timeless Wedding Photography and Cinematic Films across Bangladesh",
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        {/* Instant Image Preloads for Zero-Latency First Render */}
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/works/antu-nandita-wedding-embrace.jpg" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Favicons & App Icons */}
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" type="image/png" href="/logo.png?v=4" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=4" />

        {/* WhatsApp & OpenGraph Dedicated Crawl Tags */}
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Moment's Photography & Cinematography Studio Banner with Logo" />
        <link rel="image_src" href={`${SITE_URL}/og-image.jpg`} />
        <meta itemProp="image" content={`${SITE_URL}/og-image.jpg`} />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
