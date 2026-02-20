'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface EmailCaptureInlineProps {
  source?: string;
  buttonText?: string;
  placeholder?: string;
  showName?: boolean;
}

export default function EmailCaptureInline({
  source = 'switchtoclaude',
  buttonText = 'Get Free Guide',
  placeholder = 'Enter your email',
  showName = false
}: EmailCaptureInlineProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const portalId = '243707817';
      const formId = '3890ae7b-c23c-4ce8-ae26-9e8824c1e068';
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

      const fields = [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'lead_source',
          value: source,
        }
      ];

      if (showName && name) {
        fields.push({
          name: 'firstname',
          value: name,
        });
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Redirect to thank you page
      router.push('/thanks');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
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
            className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-claude-orange focus:ring-2 focus:ring-claude-orange focus:ring-opacity-20 transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm hover:shadow-md"
          >
            {isSubmitting ? 'Sending...' : buttonText}
          </button>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <p className="text-xs text-gray-500 text-center">
          No spam. Unsubscribe anytime. Your data is secure.
        </p>
      </div>
    </form>
  );
}
