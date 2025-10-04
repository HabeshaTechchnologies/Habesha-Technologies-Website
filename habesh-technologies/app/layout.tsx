import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/swiper-bundle.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/font-awesome-pro.css";
import "@/assets/css/spacing.css";
import "@/assets/css/atropos.min.css";
import "@/assets/css/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Habesha Technologies | Future-Ready IT Solutions",
  description:
    "Habesha Technologies delivers innovative, future-ready IT solutions tailored to modern business needs. We empower organizations with digital systems that drive growth, efficiency, and transformation.",
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // replace if you have one
  },
  openGraph: {
    title: "Habesha Technologies | Future-Ready IT Solutions",
    description:
      "Habesha Technologies specializes in cutting-edge digital systems and IT services that accelerate growth and innovation for modern businesses.",
    url: "https://habeshatechnologies.com", // replace with your actual domain
    siteName: "Habesha Technologies",
    images: [
      {
        url: "/assets/images/habesha/habesha-main-logo.jpg", // replace with your actual image path
        alt: "Habesha Technologies Website Preview",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "/assets/images/habesha/habesha-main-logo.jpg",
    title: "Habesha Technologies | Future-Ready IT Solutions",
    description:
      "Empowering organizations through innovation — Habesha Technologies builds scalable IT systems and digital products for the future.",
    site: "@habeshatech", // replace with your actual Twitter handle if available
    creator: "@habeshatech", // replace with your actual Twitter handle if available
    images: [
      {
        url: "/assets/images/habesha/habesha-main-logo.jpg", // replace with your actual image path
        alt: "Habesha Technologies Meta Preview",
      },
    ],
  },
  links: {
    linkedin: "https://www.linkedin.com/company/habeshatechnologies", // replace or remove if not applicable
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {children}
              <Footer />
            </main>
          </div>
          <Toaster position="bottom-right" richColors />
        </div>

        <Script src="/assets/js/vendor/jquery.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/bootstrap-bundle.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/three.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/hover-effect.umd.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/split-type.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-gl.js" strategy="afterInteractive" />
        <Script src="/assets/js/effect-slicer.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/magnific-popup.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/purecounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope-pkgd.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/imagesloaded-pkgd.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/atropos.js" strategy="afterInteractive" />
        <Script src="/assets/js/backtop.js" strategy="afterInteractive" />
        <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
        <Script src="/assets/js/slider-init.js" strategy="afterInteractive" />
        <Script src="/assets/js/tp-cursor.js" strategy="afterInteractive" />
        <Script src="/assets/js/throwable.js" strategy="afterInteractive" />
        <Script src="/assets/js/matter.js" strategy="afterInteractive" />
        {/* Load main.js last, as it may depend on all the plugins above */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
