import React from 'react';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    date?: string;
    author?: string;
    category?: string;
    readTime?: string;
  };
}

export default function BlogLayout({ children, meta = {} }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{meta?.title || 'Blog Post'}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span>{meta?.date || ''}</span>
              {meta?.date && meta?.author && <span>•</span>}
              <span>{meta?.author || ''}</span>
              {meta?.author && meta?.readTime && <span>•</span>}
              <span>{meta?.readTime || ''}</span>
              {meta?.readTime && meta?.category && <span>•</span>}
              <span className="text-cyan-400">{meta?.category || ''}</span>
            </div>
          </header>
          
          <div className="prose prose-invert prose-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 