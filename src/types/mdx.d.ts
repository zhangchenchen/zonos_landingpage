declare module '*.mdx' {
  import type { ComponentType } from 'react';

  interface Frontmatter {
    title: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
  }

  interface MDXContent extends ComponentType<any> {
    frontmatter: Frontmatter;
  }

  const content: MDXContent;
  export default content;
} 