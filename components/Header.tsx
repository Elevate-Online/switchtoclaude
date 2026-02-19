import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-claude-orange transition-colors">
          Switch to Claude
        </Link>
        <Link
          href="https://claudeforeveryone.com"
          target="_blank"
          className="px-4 py-2 bg-claude-orange text-white rounded-lg font-medium hover:bg-claude-coral transition-colors text-sm"
        >
          Full Course
        </Link>
      </div>
    </header>
  );
}
