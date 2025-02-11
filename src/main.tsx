import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import App from './App';
import BlogLayout from './components/BlogLayout';
import IntroPost from './blog/introducing-zonos-ai-v0-1.mdx';
import TechnicalPost from './blog/zonos-ai-technical-deep-dive.mdx';
import GettingStartedPost from './blog/getting-started-with-zonos-ai.mdx';
import './index.css';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mb-6" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-4" {...props} />,
  p: (props: any) => <p className="text-gray-300 mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="text-gray-300" {...props} />,
  code: (props: any) => <code className="bg-gray-800 rounded px-2 py-1" {...props} />,
  pre: (props: any) => (
    <pre className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4" {...props} />
  ),
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider components={components}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/introducing-zonos-ai-v0-1.html" element={
            <BlogLayout meta={IntroPost.frontmatter}>
              <IntroPost />
            </BlogLayout>
          } />
          <Route path="/blog/zonos-ai-technical-deep-dive.html" element={
            <BlogLayout meta={TechnicalPost.frontmatter}>
              <TechnicalPost />
            </BlogLayout>
          } />
          <Route path="/blog/getting-started-with-zonos-ai.html" element={
            <BlogLayout meta={GettingStartedPost.frontmatter}>
              <GettingStartedPost />
            </BlogLayout>
          } />
        </Routes>
      </Router>
    </MDXProvider>
  </StrictMode>
);
