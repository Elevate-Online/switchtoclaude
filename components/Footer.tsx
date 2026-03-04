import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link href="https://claudeforeveryone.com" target="_blank" className="hover:text-claude-orange transition-colors">
              Claude for Everyone Course
            </Link>
            <Link href="https://elevateonline.com" target="_blank" className="hover:text-claude-orange transition-colors">
              Elevate Online
            </Link>
            <Link href="https://njpatten.com" target="_blank" className="hover:text-claude-orange transition-colors">
              Nicole Patten
            </Link>
            <Link href="https://linkedin.com/in/npatten" target="_blank" className="hover:text-claude-orange transition-colors">
              LinkedIn
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            &copy; 2026 Elevate Online
          </div>
        </div>
      </div>
    </footer>
  );
}
