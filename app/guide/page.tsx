import { promises as fs } from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideContent from '@/components/GuideContent';
import EmailCaptureConvertKit from '@/components/EmailCaptureConvertKit';
import Link from 'next/link';

export const metadata = {
  title: 'Migration Guide — Switch from ChatGPT to Claude',
  description: 'Step-by-step guide to migrate from ChatGPT to Claude with exact prompts to preserve your context.',
};

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'content', 'guide.md');
  const content = await fs.readFile(filePath, 'utf8');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8 pb-6 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Reading time:</span> 12 minutes
          </p>
        </div>

        <GuideContent content={content} />

        {/* Course Upsell Banner */}
        <div className="my-16 bg-gradient-to-r from-claude-orange to-claude-coral border border-claude-orange rounded-lg p-8 md:p-12 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Want to Go Deeper?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            The full course covers Skills, MCP integrations, and building a complete AI operating system with Claude.
          </p>
          <Link
            href="https://claudeforeveryone.com"
            target="_blank"
            className="inline-block px-6 py-3 bg-white text-claude-orange hover:bg-gray-50 rounded-lg font-medium transition-colors shadow-sm"
          >
            Check Out Claude for Everyone →
          </Link>
        </div>

        {/* Bottom Email Signup */}
        <div className="my-16 text-center bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Get Updates & More Templates
          </h2>
          <p className="text-gray-700 mb-6">
            Join the email list for ongoing updates, skill templates, and workflow guides.
          </p>
          <EmailCaptureConvertKit tagId="16393383" buttonText="Get Free Guide" />
        </div>
      </article>

      <Footer />
    </main>
  );
}
