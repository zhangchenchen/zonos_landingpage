import React from 'react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    lastUpdated?: string;
  };
}

export default function LegalLayout({ children, meta = {} }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{meta?.title || 'Legal Document'}</h1>
            {meta?.lastUpdated && (
              <div className="text-gray-400">
                Last Updated: {meta.lastUpdated}
              </div>
            )}
          </header>
          
          <div className="prose prose-invert prose-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 