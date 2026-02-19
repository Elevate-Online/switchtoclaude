import { promises as fs } from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideContent from '@/components/GuideContent';
import EmailCaptureInline from '@/components/EmailCaptureInline';
import Link from 'next/link';

export const metadata = {
  title: 'Migration Guide — Switch from ChatGPT to Claude',
  description: 'Step-by-step guide to migrate from ChatGPT to Claude with exact prompts to preserve your context.',
};

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'content', 'guide.md');
  const content = await fs.readFile(filePath, 'utf8');

  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <GuideContent content={content} />

        {/* Course Upsell Banner */}
        <div className="my-16 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Go Deeper?
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            The full course covers Skills, MCP integrations, and building a complete AI operating system with Claude.
          </p>
          <Link
            href="https://claudeforeveryone.com"
            target="_blank"
            className="inline-block px-6 py-3 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors"
          >
            Check Out Claude for Everyone →
          </Link>
        </div>

        {/* Bottom Email Signup */}
        <div className="my-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Updates & More Templates
          </h2>
          <p className="text-gray-300 mb-6">
            Join the email list for ongoing updates, skill templates, and workflow guides.
          </p>
          <EmailCaptureInline buttonText="Join the List" />
        </div>
      </article>

      <Footer />
    </main>
  );
}
