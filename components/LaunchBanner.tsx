'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LaunchBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Auto-expire after March 9, 2026
    const expiry = new Date('2026-03-10T00:00:00');
    if (new Date() >= expiry) return;

    const wasDismissed = sessionStorage.getItem('bannerDismissed') === 'true';
    if (!wasDismissed) setDismissed(false);
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem('bannerDismissed', 'true');
    setDismissed(true);
  };

  return (
    <div className="bg-claude-orange text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm sm:text-base font-medium text-center sm:text-left">
          🚀 Claude for Everyone launches March 9 — join the waitlist for $100 off + free bonuses
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="https://claudeforeveryone.com/#offer"
            target="_blank"
            className="inline-block px-4 py-1.5 bg-white text-claude-orange rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Join Waitlist →
          </Link>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
