import type { Metadata } from "next";
import { Inter, Give_You_Glory } from "next/font/google";
import "./globals.css";

// Configure the Inter font (for body text)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Handwritten devotional font
const giveYouGlory = Give_You_Glory({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-give-you-glory",
});

export const metadata: Metadata = {
  title: "Ganga Prasadam | Sacred Services & Holy Offerings",
  description:
    "Ganga Prasadam offers sacred services like Ganga Aarti, Pind Daan, Asthi Visarjan, and holy rituals performed on the banks of Maa Ganga. Book trusted pandit services with devotion and authenticity.",
  keywords: [
    "Ganga Prasadam",
    "Ganga Aarti booking",
    "Pind Daan Haridwar",
    "Asthi Visarjan",
    "Ganga ritual services",
    "Pandit services Haridwar",
    "Hindu rituals Ganga",
    "Spiritual services India",
    "Holy Ganga Prasadam",
    "Ganga puja booking",
  ],
  openGraph: {
    title: "Ganga Prasadam | Sacred Services & Holy Offerings",
    description:
      "Book authentic Ganga rituals including Ganga Aarti, Pind Daan, Asthi Visarjan, and other sacred services with trusted pandits at the holy banks of Maa Ganga.",
    url: "https://gangaprasadam.vercel.app/",
    siteName: "Ganga Prasadam",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ganga Prasadam - Sacred Rituals & Holy Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Prasadam | Sacred Services & Holy Offerings",
    description:
      "Experience divine rituals at Maa Ganga with Ganga Prasadam. Book Ganga Aarti, Pind Daan, Asthi Visarjan, and other holy services with trusted pandits.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${giveYouGlory.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
