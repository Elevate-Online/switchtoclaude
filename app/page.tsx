import EmailCaptureInline from '@/components/EmailCaptureInline';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight text-gray-900">
            Switch from ChatGPT to Claude — Without Starting Over
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-balance max-w-3xl mx-auto">
            Your ChatGPT training, workflows, and context — moved to Claude in 15 minutes.
          </p>
          <div className="pt-4">
            <EmailCaptureInline />
          </div>
          <p className="text-sm text-gray-500">
            Join 700,000+ people making the switch
          </p>
        </div>
      </section>

      {/* Why People Are Switching */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
          Why People Are Switching
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-claude-orange mb-2">Values Matter</h3>
            <p className="text-gray-700">
              OpenAI&apos;s $25M Trump donation. For many, this was the final straw.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-claude-orange mb-2">Quality Declining</h3>
            <p className="text-gray-700">
              GPT-5.2 outputs getting shorter, less thorough. Claude maintains depth.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-claude-orange mb-2">Built for Work</h3>
            <p className="text-gray-700">
              Claude Projects, Skills, and MCP integrations make it better for serious work, not just chat.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="https://quitgpt.org"
            target="_blank"
            className="text-claude-orange hover:underline font-medium"
          >
            Join the #QuitGPT movement →
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The Problem
          </h2>
          <p className="text-xl text-gray-700">
            You&apos;ve trained ChatGPT for months. Your tone. Your context. Your workflows. Switching from ChatGPT to Claude feels like losing everything.
          </p>
          <p className="text-2xl font-semibold text-claude-orange">
            This guide fixes that.
          </p>
        </div>
      </section>

      {/* Prompt Preview */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            Here&apos;s What You&apos;ll Get
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-900">The Migration Prompt (Preview)</h3>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm font-mono text-gray-700 overflow-x-auto">
              <p className="mb-2">I&apos;m migrating from ChatGPT to Claude and want to preserve everything you know about me.</p>
              <p className="mb-2">Please generate a comprehensive profile that includes:</p>
              <p className="mb-1">1. My writing style and tone preferences</p>
              <p className="mb-1">2. My professional context and role</p>
              <p className="text-gray-500">... and 4 more steps</p>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              The full guide includes two complete copy-paste prompts plus step-by-step instructions.
            </p>
          </div>
        </div>
      </section>

      {/* What's In The Guide */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900">
          What&apos;s In The Guide
        </h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📋</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">The Migration Prompt</h3>
                <p className="text-gray-700">
                  Extract everything ChatGPT knows about you — your writing style, preferences, context, and workflows — in one comprehensive export.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚙️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">The Instructions Generator</h3>
                <p className="text-gray-700">
                  Turn your ChatGPT context into perfectly formatted Claude Project instructions that work even better than before.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">What Claude Can Do That ChatGPT Can&apos;t</h3>
                <p className="text-gray-700">
                  Learn about Projects for persistent context, Skills for automation, and MCP integrations that connect Claude to your entire workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Will I lose my ChatGPT chat history?</h3>
            <p className="text-gray-700">
              No, this migration extracts what ChatGPT <em>knows about you</em> (your preferences, context, style), not your chat history. Your ChatGPT account remains unchanged.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">How long does the migration take?</h3>
            <p className="text-gray-700">
              About 15 minutes. You&apos;ll run two prompts and copy-paste the results. The guide walks you through every step.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Do I need a paid Claude account?</h3>
            <p className="text-gray-700">
              No, the free Claude account works fine. Claude Pro gives you more usage and Projects, but the migration process works with the free tier.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">What if Claude doesn&apos;t work as well for my use case?</h3>
            <p className="text-gray-700">
              You keep your ChatGPT account. This guide helps you try Claude with your full context so you can compare them fairly. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Who Made This */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
            Who Made This
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <p className="text-gray-700 mb-4">
              Built by <span className="font-semibold text-gray-900">Nicole Patten</span>. Ex-Google engineer (7 years). Runs her entire consulting business from Claude Projects.
            </p>
            <p className="text-gray-700">
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
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-gray-700">
            Free guide + bonus: skill templates and prompt files
          </p>
          <EmailCaptureInline buttonText="Get the Free Guide" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
