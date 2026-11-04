import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/layout/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NNW Studios — Never Not Working®",
    template: "%s | NNW Studios",
  },
  description:
    "A multidisciplinary creative company operating across music production, entertainment, culture, events, and consulting.",
  metadataBase: new URL("https://nnwstudios.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NNW Studios",
    title: "NNW Studios — Never Not Working®",
    description:
      "Culture. Sound. Experiences. Strategy. Book a studio session and join the creative ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NNW Studios — Never Not Working®",
    description:
      "Culture. Sound. Experiences. Strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
