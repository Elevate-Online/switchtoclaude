import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Switch from ChatGPT to Claude — Free Migration Guide",
  description: "Extract what ChatGPT knows about you and rebuild it in Claude. Free guide with exact prompts. Join 700,000+ people making the switch.",
  metadataBase: new URL('https://switchtoclaude.com'),
  openGraph: {
    title: "Switch from ChatGPT to Claude — Free Migration Guide",
    description: "Extract what ChatGPT knows about you and rebuild it in Claude. Free guide with exact prompts. Join 700,000+ people making the switch.",
    url: 'https://switchtoclaude.com',
    siteName: 'Switch to Claude',
    locale: 'en_US',
    type: 'website',
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
      <body>{children}</body>
    </html>
  );
}
