import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Weber Equipment Services | Small Excavation & Stump Grinding in Kitchener, Waterloo & Cambridge",
  description:
    "Skid steer and mini excavator work, trenching, stump grinding, post holes, debris and hot tub removal, driveway extensions and brushed concrete walkways across Kitchener, Waterloo and Cambridge. 5.0 stars on Google. Call Tim at (519) 998-9027.",
  openGraph: {
    title: "Weber Equipment Services | Kitchener-Waterloo-Cambridge Small Excavation",
    description: "Honest work, fair prices. Small excavation, stump grinding and concrete flatwork. Call (519) 998-9027.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${zilla.variable} ${hanken.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
