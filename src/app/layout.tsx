import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://moments-photography.com"),
  title: {
    default: "Moment's | Wedding Photography & Cinematography",
    template: "%s | Moment's Photography"
  },
  description: "Moment's Photography & Cinematography captures weddings, Gaye Holud celebrations, and engagement stories with timeless honesty and modern visual craft.",
  keywords: [
    "wedding photography",
    "wedding cinematography",
    "gaye holud photography",
    "engagement photography",
    "couple photoshoot",
    "Moment's photography"
  ],
  authors: [{ name: "Moment's Photography & Cinematography", url: "https://moments-photography.com" }],
  creator: "Moment's Photography & Cinematography",
  publisher: "Moment's Photography & Cinematography",
  openGraph: {
    title: "Moment's | Wedding Photography & Cinematography",
    description: "Weddings, Gaye Holud celebrations, and engagement stories. Professional photography & cinema.",
    url: "https://moments-photography.com",
    siteName: "Moment's Photography",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
