'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface EmailCaptureProps {
  tagId: string;
  buttonText?: string;
  placeholder?: string;
  showName?: boolean;
}

export default function EmailCapture({
  tagId,
  buttonText = 'Join Waitlist',
  placeholder = 'Enter your email',
  showName = false,
}: EmailCaptureProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, tagId }),
      });

      if (!res.ok) throw new Error('Failed to subscribe');

      setStatus('success');
      setEmail('');
      setFirstName('');

      // Redirect to guide page after successful submission
      setTimeout(() => {
        router.push('/guide');
      }, 1000);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto rounded-lg bg-green-50 p-4 text-green-800 text-sm text-center">
        ✓ You&apos;re in! Redirecting to the guide...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        {showName && (
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-claude-orange focus:ring-2 focus:ring-claude-orange focus:ring-opacity-20 transition-all"
          />
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-claude-orange focus:ring-2 focus:ring-claude-orange focus:ring-opacity-20 transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm hover:shadow-md"
          >
            {status === 'loading' ? 'Submitting...' : buttonText}
          </button>
        </div>
        {status === 'error' && <p className="text-red-600 text-sm">{error}</p>}
        <p className="text-xs text-gray-500 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}