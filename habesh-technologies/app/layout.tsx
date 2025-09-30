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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habesha-Technologies",
  description:
    "Habesha Technologies delivers future-ready IT solutions tailored to modern business needs. We specialize in innovative digital systems that drive growth and efficiency. Empowering organizations with technology designed for tomorrow, today.",
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
        {/* Load main.js last, as it may depend on all the plugins above */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
