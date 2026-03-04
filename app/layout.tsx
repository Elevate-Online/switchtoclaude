import type { Metadata } from "next";
import Script from "next/script";
import LaunchBanner from "@/components/LaunchBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Switch from ChatGPT to Claude — Free Migration Guide",
  description: "Switch from ChatGPT to Claude in 15 minutes. Import your memory with Anthropic's official tool, then build project instructions with our free generator. Join 1M+ people making the switch.",
  metadataBase: new URL('https://switchtoclaude.com'),
  openGraph: {
    title: "Switch from ChatGPT to Claude — Free Migration Guide",
    description: "Switch from ChatGPT to Claude in 15 minutes. Import your memory with Anthropic's official tool, then build project instructions with our free generator. Join 1M+ people making the switch.",
    url: 'https://switchtoclaude.com',
    siteName: 'Switch to Claude',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Switch from ChatGPT to Claude — Free Migration Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Switch from ChatGPT to Claude — Free Migration Guide",
    description: "Extract what ChatGPT knows about you and rebuild it in Claude. Free guide with exact prompts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D071F3GT0J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D071F3GT0J');
          `}
        </Script>
        <LaunchBanner />
        {children}
      </body>
    </html>
  );
}
