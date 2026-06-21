import EmailCaptureConvertKit from '@/components/EmailCaptureConvertKit';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude vs ChatGPT — The Honest Comparison (2026)',
  description:
    'Claude and ChatGPT compared on writing, coding, context, agents, privacy, and pricing. A neutral side-by-side from someone who uses both daily.',
  alternates: {
    canonical: 'https://switchtoclaude.com/claude-vs-chatgpt',
  },
  openGraph: {
    title: 'Claude vs ChatGPT — The Honest Comparison (2026)',
    description:
      'Claude and ChatGPT compared on writing, coding, context, agents, privacy, and pricing. A neutral side-by-side from someone who uses both daily.',
    url: 'https://switchtoclaude.com/claude-vs-chatgpt',
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Claude vs ChatGPT — The Honest Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude vs ChatGPT — The Honest Comparison (2026)',
    description:
      'Claude and ChatGPT compared on writing, coding, context, agents, privacy, and pricing. A neutral side-by-side from someone who uses both daily.',
  },
};

// FAQPage schema — picks up rich results on common comparison queries.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Claude better than ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is universally better. Claude tends to lead on long-document analysis, coding via Claude Code, and tone control in writing. ChatGPT tends to lead on image generation, voice mode, and the breadth of its third-party ecosystem. Most people who try both find their answer in a day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main difference between Claude and ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The companies have different priorities. Anthropic, which makes Claude, was founded by ex-OpenAI researchers focused on AI safety and interpretability. OpenAI, which makes ChatGPT, ships product features faster and has a broader consumer footprint. In day-to-day use, the biggest practical differences are coding workflows (Claude Code is a separate developer tool), writing tone (Claude is generally easier to steer), and image generation (ChatGPT has it built in).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Claude train on your conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthropic does not train its models on Claude.ai consumer conversations by default. Users can opt in. Commercial customers on the API and Claude for Work tiers get zero-retention options. ChatGPT trains on free and Plus tier conversations by default; users can turn that off in settings, and Team/Enterprise tiers are excluded by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for writing — Claude or ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most heavy writers prefer Claude. It tends to hold a voice across long pieces, takes correction well, and resists the corporate-AI tone that ChatGPT defaults to. ChatGPT is faster for short drafts and has more aggressive search integration. If your writing is long-form, technical, or voice-sensitive, Claude is the safer pick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for coding — Claude or ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claude has a meaningful lead on coding through Claude Code, a dedicated terminal-based coding tool that reads your repo, runs commands, and writes code in place. ChatGPT has Code Interpreter and Codex CLI, but Claude Code is the tool most professional engineers in 2026 are reaching for. For one-off code snippets in a chat window, both are excellent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Claude cost vs ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both have a free tier with rate limits. Paid plans run about $20/month each for the personal tier (Claude Pro, ChatGPT Plus). Team plans are roughly $25-$30 per seat per month. Both offer API pricing for developers, with similar per-token rates on the comparable models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use both Claude and ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and many people do. The free tiers are generous enough that you can run a real comparison on your own work before paying. Sign up for both, run the same two or three prompts you actually use day to day, and decide based on the output.',
      },
    },
  ],
};

export default function ClaudeVsChatGPTPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <p className="text-sm text-claude-orange font-semibold uppercase tracking-wide">
            Updated 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight text-gray-900">
            Claude vs ChatGPT
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-balance max-w-3xl mx-auto">
            The honest comparison. What each one does best, where they differ,
            and how to decide which fits your work.
          </p>
          <div id="hero-cta" className="pt-4">
            <EmailCaptureConvertKit
              tagId="16393383"
              buttonText="Get the switching guide (free)"
            />
          </div>
          <p className="text-sm text-gray-500">
            From someone who uses both daily. No fanboy nonsense.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The honest summary
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Both are excellent. Most of the &ldquo;X is dead&rdquo; takes you
              see online are wrong.
            </p>
            <p>
              They differ in five places that actually matter for daily work:{' '}
              <strong className="text-gray-900">writing quality</strong>,{' '}
              <strong className="text-gray-900">coding strength</strong>,{' '}
              <strong className="text-gray-900">context window and memory</strong>
              ,{' '}
              <strong className="text-gray-900">agentic capability</strong>, and{' '}
              <strong className="text-gray-900">the company behind each</strong>
              .
            </p>
            <p>
              Each one is the better tool for someone. Most people who actually
              try both find their answer in a day, not a week of reading
              comparison articles.
            </p>
          </div>
        </div>
      </section>

      {/* Capability Comparison Table */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Side-by-side: capabilities
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Where each tool stands today. The notes column flags the meaningful
          edge when there is one.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-4 pr-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Criterion
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-900">
                  Claude
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-900">
                  ChatGPT
                </th>
                <th className="py-4 pl-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonRows.map((row) => (
                <tr key={row.criterion} className="align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">
                    {row.criterion}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{row.claude}</td>
                  <td className="py-4 px-4 text-gray-700">{row.chatgpt}</td>
                  <td className="py-4 pl-4 text-sm text-gray-500 italic">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {comparisonRows.map((row) => (
            <div
              key={row.criterion}
              className="border border-gray-200 rounded-lg p-5 bg-white"
            >
              <h3 className="font-bold text-gray-900 mb-3">{row.criterion}</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-claude-orange uppercase tracking-wide mb-1">
                    Claude
                  </dt>
                  <dd className="text-gray-700">{row.claude}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    ChatGPT
                  </dt>
                  <dd className="text-gray-700">{row.chatgpt}</dd>
                </div>
                {row.note && (
                  <div className="pt-2 border-t border-gray-100">
                    <dd className="text-xs text-gray-500 italic">{row.note}</dd>
                  </div>
                )}
              </dl>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 italic">
          Capabilities current as of 2026. Both companies ship fast.
          Double-check anything load-bearing before you make a switch.
        </p>
      </section>

      {/* Where Claude Wins */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Where Claude wins
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          The cases where Claude is the better pick, in our experience using
          both day to day.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {claudeWins.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-6 bg-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Where ChatGPT Wins */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Where ChatGPT wins
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          The cases where ChatGPT is the better pick. Pretending these
          don&apos;t exist is how comparison articles lose trust.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {chatgptWins.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-6 bg-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy + Ethics */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy and ethics
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          For a lot of switchers this is the deciding factor. The facts, not
          the vibes.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Training on your conversations
            </h3>
            <p className="text-gray-700 mb-3">
              Anthropic does not train its models on Claude.ai consumer
              conversations by default. You can opt in if you want to
              contribute. Commercial customers on the API and Claude for Work
              get zero-retention options for sensitive data.
            </p>
            <p className="text-gray-700">
              OpenAI trains on free and Plus tier conversations by default. You
              can turn that off in settings, and the Team and Enterprise tiers
              are excluded by default. The default behavior is the part that
              matters. Most people never change the setting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Why this matters for regulated work
            </h3>
            <p className="text-gray-700">
              If you work in legal, medical, financial services, or anything
              else where client data has compliance weight, the default privacy
              posture is the part that should drive your decision. Both
              companies offer compliant tiers. Read the actual terms before
              putting regulated data into either tool.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              The values question
            </h3>
            <p className="text-gray-700 mb-3">
              Some of the loudest switching has been values-driven, not
              feature-driven. The{' '}
              <Link
                href="https://quitgpt.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-orange hover:underline font-medium"
              >
                #QuitGPT
              </Link>{' '}
              movement has crossed a million people boycotting ChatGPT over
              OpenAI&apos;s political donations, government contracts, and
              leadership decisions.
            </p>
            <p className="text-gray-700">
              That is a real signal but it is not a reason on its own. The
              tool still has to do your work. Read the rest of this page before
              you decide.
            </p>
          </div>
        </div>
      </section>

      {/* Use-case recommendations */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Which one for your use case
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          A quick matrix. If you mostly do one of these, here is the call.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {useCases.map((item) => (
              <div
                key={item.useCase}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-6 p-5 md:items-center"
              >
                <p className="text-gray-900 font-medium">{item.useCase}</p>
                <p className="text-claude-orange font-semibold text-sm md:text-base">
                  {item.pick}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6 italic">
          &ldquo;Either&rdquo; means we genuinely have no strong preference.
          Use whichever one you already pay for.
        </p>
      </section>

      {/* How to try Claude */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to actually try Claude
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Three steps. No friction. Decide in a day, not a week.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-claude-orange text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Sign up at claude.ai
              </h3>
              <p className="text-gray-700 text-sm">
                Free tier, no credit card. Takes about 60 seconds.{' '}
                <Link
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-orange hover:underline font-medium"
                >
                  claude.ai
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-claude-orange text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Run two specific prompts
              </h3>
              <p className="text-gray-700 text-sm">
                Our{' '}
                <Link
                  href="/guide"
                  className="text-claude-orange hover:underline font-medium"
                >
                  free switching guide
                </Link>{' '}
                has the two prompts that move your ChatGPT context into Claude.
                Copy-paste, no setup required.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-claude-orange text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Decide in a day, not a week
              </h3>
              <p className="text-gray-700 text-sm">
                Use Claude for the same work you used ChatGPT for yesterday.
                You will know inside 24 hours which tool is better for you.
                Keep both accounts open during the test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-gray-50">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Want the full migration guide?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Free. The two copy-paste prompts, the Project setup walkthrough,
            and the bonus templates. In your inbox in under a minute.
          </p>
          <EmailCaptureConvertKit
            tagId="16393383"
            buttonText="Get the free guide"
          />
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Keep reading
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/why-claude-over-chatgpt"
            className="block border border-gray-200 rounded-lg p-6 hover:border-claude-orange transition-colors"
          >
            <p className="text-sm text-claude-orange font-semibold uppercase tracking-wide mb-2">
              Opinion piece
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Why Claude over ChatGPT
            </h3>
            <p className="text-gray-700 text-sm">
              The case for switching. Values, safety culture, and what
              Anthropic is actually building toward.
            </p>
          </Link>

          <Link
            href="/guide"
            className="block border border-gray-200 rounded-lg p-6 hover:border-claude-orange transition-colors"
          >
            <p className="text-sm text-claude-orange font-semibold uppercase tracking-wide mb-2">
              Migration guide
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              How to switch in 15 minutes
            </h3>
            <p className="text-gray-700 text-sm">
              The two prompts and the project setup that move your ChatGPT
              workflow into Claude. Free, no setup.
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ---------- Data ----------

type ComparisonRow = {
  criterion: string;
  claude: string;
  chatgpt: string;
  note: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    criterion: 'Writing quality and tone control',
    claude: 'Holds a voice across long pieces. Takes correction well.',
    chatgpt: 'Fast on short drafts. Defaults to a corporate-AI tone.',
    note: 'Claude edge for long-form and voice-sensitive writing.',
  },
  {
    criterion: 'Long-document analysis',
    claude: '200K-token context window on Pro. Reads a whole book at once.',
    chatgpt: '128K on Plus, 1M on some Enterprise tiers.',
    note: 'Both handle long docs. Claude is more consistent across the full window.',
  },
  {
    criterion: 'Coding',
    claude: 'Claude Code (terminal tool) reads your repo and writes in place.',
    chatgpt: 'Codex CLI plus in-chat code blocks. Code Interpreter for data.',
    note: 'Claude Code is the tool most professional engineers reach for in 2026.',
  },
  {
    criterion: 'Reasoning and decomposition',
    claude: 'Extended Thinking mode shows its work on hard problems.',
    chatgpt: 'o-series models do similar reasoning, often faster.',
    note: 'Close. Pick the one whose output style you prefer.',
  },
  {
    criterion: 'Memory and Projects',
    claude: 'Projects (knowledge + instructions) plus global memory.',
    chatgpt: 'Custom GPTs, memory, and per-chat instructions.',
    note: 'Different shapes. Both work. Projects feel cleaner for serious workflows.',
  },
  {
    criterion: 'Agentic features',
    claude: 'Computer Use, Claude Cowork, MCP integrations.',
    chatgpt: 'Operator (browser agent), GPT Actions.',
    note: 'Anthropic ships agentic features more aggressively right now.',
  },
  {
    criterion: 'Image generation',
    claude: 'No native image generation.',
    chatgpt: 'DALL-E built in. Strong out of the box.',
    note: 'ChatGPT edge. If you generate images, this alone is the decision.',
  },
  {
    criterion: 'Voice mode',
    claude: 'Voice mode on mobile (newer, simpler).',
    chatgpt: 'Advanced Voice Mode, more mature, more natural.',
    note: 'ChatGPT edge for voice-first interaction.',
  },
  {
    criterion: 'Pricing (personal)',
    claude: 'Free tier, Pro at $20/mo, Max at $100-200/mo.',
    chatgpt: 'Free tier, Plus at $20/mo, Pro at $200/mo.',
    note: 'Essentially even on the personal tier.',
  },
  {
    criterion: 'Pricing (team)',
    claude: 'Team at $30/seat/mo (min 5 seats). Enterprise: contact.',
    chatgpt: 'Team at $25-30/seat/mo. Enterprise: contact.',
    note: 'Even. Both run real volume discounts above 50 seats.',
  },
  {
    criterion: 'Mobile and desktop apps',
    claude: 'iOS, Android, macOS, Windows. Desktop is newer.',
    chatgpt: 'iOS, Android, macOS, Windows. Native desktop apps mature.',
    note: 'ChatGPT slight edge on desktop polish, otherwise parity.',
  },
  {
    criterion: 'API and developer ecosystem',
    claude: 'Strong API. Smaller but high-quality third-party tools.',
    chatgpt: 'Huge ecosystem. Plugins, GPTs, every framework.',
    note: 'ChatGPT edge for breadth. Claude edge for depth in coding workflows.',
  },
  {
    criterion: 'Privacy default',
    claude: 'Does not train on consumer conversations by default.',
    chatgpt: 'Trains on free and Plus conversations by default.',
    note: 'Default behavior is what matters. Most users never change settings.',
  },
  {
    criterion: 'Image upload and understanding',
    claude: 'Strong vision. Reads documents, screenshots, charts well.',
    chatgpt: 'Strong vision. Comparable.',
    note: 'Even.',
  },
  {
    criterion: 'Speed',
    claude: 'Sonnet is fast. Opus is slower, more careful.',
    chatgpt: 'Faster on most short prompts. Reasoning models slow down.',
    note: 'ChatGPT slight edge on raw speed. Close enough that it rarely decides.',
  },
];

const claudeWins = [
  {
    title: 'Long-document analysis at scale',
    body: 'Claude\'s 200K context window plus consistent quality across the full window makes it the better tool for reading whole books, contract bundles, long research PDFs, or a quarter of meeting transcripts in one go. ChatGPT can handle long context too, but Claude holds quality further into the document.',
  },
  {
    title: 'Coding through Claude Code',
    body: 'Claude Code reads your repo, runs commands, writes code in place, and ships changes. It is the tool that pulled a lot of professional engineers off ChatGPT in 2025-2026. If your work is shipping production code, this is the single biggest reason to switch.',
  },
  {
    title: 'Writing in your voice',
    body: 'Most heavy writers find Claude easier to steer. It picks up tone from one or two example pieces, holds it across a long draft, and resists the corporate-AI rhythm that ChatGPT defaults to. If your writing is voice-sensitive, this is real.',
  },
  {
    title: 'Privacy-first default posture',
    body: 'Anthropic does not train on Claude.ai consumer conversations by default. For sensitive work (legal, medical, regulated industries) the default privacy posture is what matters, because most people never change settings.',
  },
];

const chatgptWins = [
  {
    title: 'Image generation',
    body: 'DALL-E is built into ChatGPT. You ask for an image, you get one. Claude does not have native image generation. If image generation is a real part of your workflow, this alone is the answer.',
  },
  {
    title: 'Voice mode',
    body: 'Advanced Voice Mode on ChatGPT is the more mature and natural voice interface. Claude has voice mode but it is newer and simpler. If you use AI hands-free or while walking, ChatGPT is the better tool today.',
  },
  {
    title: 'Wider third-party ecosystem',
    body: 'GPTs, plugins, and a larger integration footprint mean almost every third-party tool has a ChatGPT integration first. Claude\'s MCP ecosystem is growing fast but is smaller. If you live inside a specific tool stack, check whether ChatGPT or Claude has the integration you need.',
  },
  {
    title: 'Speed on quick prompts',
    body: 'For short conversational prompts, ChatGPT is usually a beat faster than Claude. Not a huge gap, but if you fire dozens of one-line questions a day, you will feel it.',
  },
];

const useCases = [
  { useCase: 'Long-form writing, books, technical writing', pick: 'Claude' },
  { useCase: 'Production coding workflows', pick: 'Claude (Claude Code)' },
  { useCase: 'Image generation', pick: 'ChatGPT' },
  { useCase: 'Voice-first interaction', pick: 'ChatGPT' },
  { useCase: 'General research with a wide corpus', pick: 'Either' },
  {
    useCase: 'Privacy-sensitive work (legal, medical, regulated)',
    pick: 'Claude',
  },
  { useCase: 'Team rollout with a shared workspace', pick: 'Claude (Projects + Teams)' },
  { useCase: 'Reading and analyzing long PDFs', pick: 'Claude' },
  { useCase: 'Quick one-off questions throughout the day', pick: 'Either' },
  {
    useCase: 'Building agents that take real actions',
    pick: 'Claude (MCP + Computer Use)',
  },
];
