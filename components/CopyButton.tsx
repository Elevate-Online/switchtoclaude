'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 bg-claude-orange hover:bg-claude-coral text-white rounded-lg font-medium transition-all ${className}`}
      aria-label="Copy to clipboard"
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  );
}
