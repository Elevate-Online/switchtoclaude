import EmailCaptureInline from '@/components/EmailCaptureInline';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Switch from ChatGPT to Claude — Without Starting Over
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 text-balance max-w-3xl mx-auto">
            The free migration guide with exact prompts to extract what ChatGPT knows about you and rebuild it — better — in Claude.
          </p>
          <div className="pt-4">
            <EmailCaptureInline />
          </div>
          <p className="text-sm text-gray-400">
            Join 700,000+ people making the switch
          </p>
        </div>
      </section>

      {/* Why People Are Switching */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why People Are Switching
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-claude-orange">Values Matter</h3>
            <p className="text-gray-300">
              OpenAI&apos;s $25M Trump donation. For many, this was the final straw.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-claude-orange">Quality Declining</h3>
            <p className="text-gray-300">
              GPT-5.2 outputs getting shorter, less thorough. Claude maintains depth.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-claude-orange">Built for Work</h3>
            <p className="text-gray-300">
              Claude Projects, Skills, and MCP integrations make it better for serious work, not just chat.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="https://twitter.com/hashtag/QuitGPT"
            target="_blank"
            className="text-claude-orange hover:underline"
          >
            Join the #QuitGPT movement →
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            The Problem
          </h2>
          <p className="text-xl text-gray-300">
            You&apos;ve trained ChatGPT for months. Your tone. Your context. Your workflows. Starting over feels like losing everything.
          </p>
          <p className="text-2xl font-semibold text-claude-orange">
            This guide fixes that.
          </p>
        </div>
      </section>

      {/* What's In The Guide */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          What&apos;s In The Guide
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3">The Migration Prompt</h3>
            <p className="text-gray-300">
              Extract everything ChatGPT knows about you — your writing style, preferences, context, and workflows — in one comprehensive export.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3">The Instructions Generator</h3>
            <p className="text-gray-300">
              Turn your ChatGPT context into perfectly formatted Claude Project instructions that work even better than before.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3">What Claude Can Do That ChatGPT Can&apos;t</h3>
            <p className="text-gray-300">
              Learn about Projects for persistent context, Skills for automation, and MCP integrations that connect Claude to your entire workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Who Made This */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Who Made This
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <p className="text-gray-300 mb-4">
              Built by <span className="font-semibold text-white">Nicole Patten</span>. Ex-Google engineer (7 years). Runs her entire consulting business from Claude Projects.
            </p>
            <p className="text-gray-300">
              Nicole helps teams build AI-powered workflows through{' '}
              <Link href="https://elevateonline.com" target="_blank" className="text-claude-orange hover:underline">
                Elevate Online
              </Link>{' '}
              and the full{' '}
              <Link href="https://claudeforeveryone.com" target="_blank" className="text-claude-orange hover:underline">
                Claude for Everyone course
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-gray-300">
            Free guide + bonus: skill templates and prompt files
          </p>
          <EmailCaptureInline buttonText="Get the Free Guide" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
