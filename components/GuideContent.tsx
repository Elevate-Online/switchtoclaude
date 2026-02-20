'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CopyButton from './CopyButton';

interface GuideContentProps {
  content: string;
}

export default function GuideContent({ content }: GuideContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-12 first:mt-0 text-gray-900">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 pb-3 border-b border-gray-200 text-gray-900" id={String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-4 mt-8 text-claude-orange">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 mb-6 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="ml-4">{children}</li>
          ),
          code: ({ inline, children, ...props }: any) => {
            const codeString = String(children).replace(/\n$/, '');

            if (inline) {
              return (
                <code className="bg-gray-100 text-claude-orange px-2 py-1 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              );
            }

            return (
              <div className="relative my-6 group">
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto">
                  <code className="text-gray-800 text-sm font-mono block" {...props}>
                    {children}
                  </code>
                </pre>
                <div className="absolute top-4 right-4">
                  <CopyButton text={codeString} />
                </div>
              </div>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-claude-orange">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-200 px-4 py-3 text-gray-700">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="border-gray-200 my-8" />
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-claude-orange pl-6 py-2 my-6 italic text-gray-600 bg-gray-50">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
