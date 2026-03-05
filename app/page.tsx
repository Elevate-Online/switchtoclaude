import EmailCaptureConvertKit from '@/components/EmailCaptureConvertKit';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight text-gray-900">
            Switch from ChatGPT to Claude — Without Starting Over
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-balance max-w-3xl mx-auto">
            Your ChatGPT training, workflows, and context — moved to Claude in 15 minutes.
          </p>
          <div id="waitlist" className="pt-4">
            <EmailCaptureConvertKit tagId="16393383" buttonText="Get Free Guide" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <p className="text-gray-500">
              Join 700,000+ people making the switch
            </p>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href="https://quitgpt.org"
              target="_blank"
              className="text-claude-orange hover:underline font-medium"
            >
              #QuitGPT movement →
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Guide Note */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-claude-orange/10 border border-claude-orange/30 rounded-lg p-5 text-center">
          <p className="text-gray-800 text-sm md:text-base">
            <span className="font-semibold">Updated for March 2026:</span> Anthropic launched an official{' '}
            <Link href="https://claude.com/import-memory" target="_blank" className="text-claude-orange hover:underline font-medium">
              memory import tool
            </Link>
            {' '}— but it only imports to your <em>global</em> memory. Our guide covers the extra steps to set up your individual projects correctly.
          </p>
        </div>
      </section>

      {/* #QuitGPT Movement */}
      <section className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/quitgpt-logo.svg"
                alt="QuitGPT movement logo"
                width={144}
                height={144}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                1.2 Million People Have Joined{' '}
                <span className="text-claude-orange">#QuitGPT</span>
              </h2>
              <p className="text-gray-300 text-lg">
                OpenAI&apos;s president donated <span className="text-white font-semibold">$25 million</span> to Trump&apos;s Super PAC. Their CEO gave $1M to the Inaugural Fund. ICE uses GPT-4 for resume screening. The #QuitGPT movement is a grassroots boycott — and it&apos;s growing fast.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <Link
                  href="https://quitgpt.org"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-claude-orange hover:text-white transition-colors font-medium"
                >
                  Learn more at quitgpt.org
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-700">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-claude-orange">$25M</p>
              <p className="text-gray-400 text-sm mt-1">donated to Trump&apos;s Super PAC</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-claude-orange">$125M+</p>
              <p className="text-gray-400 text-sm mt-1">spent opposing AI regulations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-claude-orange">1.2M+</p>
              <p className="text-gray-400 text-sm mt-1">people boycotting ChatGPT</p>
            </div>
          </div>
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
          <h3 className="text-lg font-bold mb-6 text-gray-900 text-center">The Complete Setup (Preview)</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-claude-orange text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Import memory</h4>
                <p className="text-gray-700 text-sm"><Link href="https://claude.com/import-memory" target="_blank" className="text-claude-orange hover:underline">claude.com/import-memory</Link> — 60 seconds, Anthropic&apos;s official tool</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-claude-orange text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Build project instructions</h4>
                <p className="text-gray-700 text-sm"><Link href="https://claudeforeveryone.com/projectinstructions" target="_blank" className="text-claude-orange hover:underline">claudeforeveryone.com/projectinstructions</Link> — 5 minutes, free generator</p>
              </div>
            </div>
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
              <div className="text-3xl">🧠</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Import Your ChatGPT Memory (Official Tool)</h3>
                <p className="text-gray-700">
                  Anthropic just launched a one-copy-paste memory import tool. Bring everything ChatGPT knows about you into Claude in 60 seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚙️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Build Your Project Instructions</h3>
                <p className="text-gray-700">
                  Memory tells Claude who you are. Instructions tell it how to work with you — your tone, focus, challenge level. Use the free generator to build yours in 5 minutes.
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
                  Projects, Skills, and MCP integrations — the architecture that makes Claude actually useful for real work, not just chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Full Course Comparison */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            Free Guide vs. Full Course
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Guide */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">📋</div>
                <h3 className="text-xl font-bold text-gray-900">Free Guide</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Migration prompts to extract your ChatGPT context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Basic Claude Project setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>15-minute migration walkthrough</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Get started today</span>
                </li>
              </ul>
            </div>

            {/* Full Course */}
            <div className="space-y-4 bg-white border-2 border-claude-orange rounded-lg p-6 relative">
              <div className="absolute -top-3 right-6 bg-claude-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                GO DEEPER
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🚀</div>
                <h3 className="text-xl font-bold text-gray-900">Claude for Everyone</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Everything in the free guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Build Skills for automated workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Connect Claude to your tools with MCP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Complete AI operating system architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-claude-orange mt-1">✓</span>
                  <span>Real-world case studies & templates</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="https://claudeforeveryone.com"
                  target="_blank"
                  className="block w-full text-center px-6 py-3 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Walkthrough */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
          Watch the Walkthrough
        </h2>
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dn5dVAznhsE"
            title="How to Switch from ChatGPT to Claude"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Is there more beyond this free guide?</h3>
            <p className="text-gray-700">
              Yes! This guide gets you migrated in 15 minutes. The full{' '}
              <Link href="https://claudeforeveryone.com" target="_blank" className="text-claude-orange hover:underline font-semibold">
                Claude for Everyone course
              </Link>{' '}
              teaches you Skills for automation, MCP integrations to connect Claude to your tools, and how to build a complete AI operating system that runs your workflows.
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
              Built by <Link href="https://njpatten.com" target="_blank" className="font-semibold text-gray-900 hover:text-claude-orange transition-colors">Nicole Patten</Link>. Ex-Google engineer (7 years). Runs her entire consulting business using Claude.
            </p>
            <p className="text-gray-700 mb-6">
              Nicole helps teams build AI-powered workflows through{' '}
              <Link href="https://elevateonline.com" target="_blank" className="text-claude-orange hover:underline">
                Elevate Online
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
              <Link
                href="https://claudeforeveryone.com"
                target="_blank"
                className="flex-1 text-center px-6 py-3 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors shadow-sm"
              >
                Check Out the Full Course →
              </Link>
              <Link
                href="https://linkedin.com/in/npatten"
                target="_blank"
                className="flex-1 text-center px-6 py-3 border-2 border-gray-300 hover:border-claude-orange text-gray-700 hover:text-claude-orange rounded-lg font-medium transition-colors"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <div id="waitlist-bottom" className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-gray-700">
            Free guide + bonus: skill templates and prompt files
          </p>
          <EmailCaptureConvertKit tagId="16393383" buttonText="Get Free Guide" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
