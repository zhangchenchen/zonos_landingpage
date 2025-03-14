declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react';

  interface MDXContent extends ComponentType<ComponentProps<'div'>> {
    frontmatter: {
      title: string;
      date?: string;
      author?: string;
      category?: string;
      readTime?: string;
      lastUpdated?: string;
    };
  }

  const content: MDXContent;
  export default content;
} 