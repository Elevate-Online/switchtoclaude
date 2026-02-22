import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — Switch to Claude',
  description: 'Thanks for joining! Check your email for the migration guide.',
  alternates: {
    canonical: 'https://switchtoclaude.com/thanks',
  },
  openGraph: {
    title: 'Thank You — Switch to Claude',
    description: 'Thanks for joining! Check your email for the migration guide.',
    url: 'https://switchtoclaude.com/thanks',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Thank You — Switch to Claude',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You — Switch to Claude',
    description: 'Thanks for joining! Check your email for the migration guide.',
  },
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <div className="text-6xl mb-6">✓</div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            You&apos;re In. Check Your Email.
          </h1>

          <p className="text-xl text-gray-700">
            Your migration guide and bonus templates are on their way to your inbox.
          </p>

          <div className="pt-8">
            <Link
              href="/guide"
              className="inline-block px-8 py-4 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors text-lg shadow-sm hover:shadow-md"
            >
              Read the Guide Now →
            </Link>
          </div>

          <div className="pt-12 border-t border-gray-200 mt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Want to Go Deeper?
            </h2>
            <p className="text-gray-700 mb-6">
              The full course covers Skills, MCP integrations, and building a complete AI operating system with Claude.
            </p>
            <Link
              href="https://claudeforeveryone.com"
              target="_blank"
              className="inline-block px-6 py-3 border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white rounded-lg font-medium transition-all"
            >
              Explore Claude for Everyone →
            </Link>
          </div>

          <div className="pt-12 text-sm text-gray-600">
            <p>
              Built by{' '}
              <Link href="https://linkedin.com/in/npatten" target="_blank" className="text-claude-orange hover:underline">
                Nicole Patten
              </Link>
              {' '}at{' '}
              <Link href="https://elevateonline.com" target="_blank" className="text-claude-orange hover:underline">
                Elevate Online
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
