import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import App from './App';
import BlogLayout from './components/BlogLayout';
import LegalLayout from './components/LegalLayout';
import IntroPost from './blog/introducing-zonos-ai-v0-1.mdx';
import TechnicalPost from './blog/zonos-ai-technical-deep-dive.mdx';
import GettingStartedPost from './blog/getting-started-with-zonos-ai.mdx';
import FuturePost from './blog/future-of-ai-voice-synthesis.mdx';
import VoiceCloningPost from './blog/voice-cloning-revolution.mdx';
import TermsOfService from './legal/terms-of-service.mdx';
import PrivacyPolicy from './legal/privacy-policy.mdx';
import ContentCreatorsUseCase from './usecase/content-creators';
import GameDevelopersUseCase from './usecase/game-developers';
import AccessibilitySolutionsUseCase from './usecase/accessibility-solutions';
import EducationPlatformsUseCase from './usecase/education-platforms';
import EnterpriseSolutionsUseCase from './usecase/enterprise-solutions';
import APIIntegrationUseCase from './usecase/api-integration';
import VoiceCloningFeature from './feature/voice-cloning';
import MultilingualSupportFeature from './feature/multilingual-support';
import EmotionControlFeature from './feature/emotion-control';
import HighQualityOutputFeature from './feature/high-quality-output';
import RealTimeProcessingFeature from './feature/real-time-processing';
import AdvancedArchitectureFeature from './feature/advanced-architecture';
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

// 创建路由配置
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/blog/introducing-zonos-ai-v0-1.html",
    element: (
      <BlogLayout meta={IntroPost.frontmatter}>
        <IntroPost />
      </BlogLayout>
    )
  },
  {
    path: "/blog/zonos-ai-technical-deep-dive.html",
    element: (
      <BlogLayout meta={TechnicalPost.frontmatter}>
        <TechnicalPost />
      </BlogLayout>
    )
  },
  {
    path: "/blog/getting-started-with-zonos-ai.html",
    element: (
      <BlogLayout meta={GettingStartedPost.frontmatter}>
        <GettingStartedPost />
      </BlogLayout>
    )
  },
  {
    path: "/blog/future-of-ai-voice-synthesis.html",
    element: (
      <BlogLayout meta={FuturePost.frontmatter}>
        <FuturePost />
      </BlogLayout>
    )
  },
  {
    path: "/blog/voice-cloning-revolution.html",
    element: (
      <BlogLayout meta={VoiceCloningPost.frontmatter}>
        <VoiceCloningPost />
      </BlogLayout>
    )
  },
  {
    path: "/terms-of-service",
    element: (
      <LegalLayout meta={TermsOfService.frontmatter}>
        <TermsOfService />
      </LegalLayout>
    )
  },
  {
    path: "/privacy-policy",
    element: (
      <LegalLayout meta={PrivacyPolicy.frontmatter}>
        <PrivacyPolicy />
      </LegalLayout>
    )
  },
  {
    path: "/usecase/content-creators",
    element: <ContentCreatorsUseCase />
  },
  {
    path: "/usecase/game-developers",
    element: <GameDevelopersUseCase />
  },
  {
    path: "/usecase/accessibility-solutions",
    element: <AccessibilitySolutionsUseCase />
  },
  {
    path: "/usecase/education-platforms",
    element: <EducationPlatformsUseCase />
  },
  {
    path: "/usecase/enterprise-solutions",
    element: <EnterpriseSolutionsUseCase />
  },
  {
    path: "/usecase/api-integration",
    element: <APIIntegrationUseCase />
  },
  {
    path: "/feature/voice-cloning",
    element: <VoiceCloningFeature />
  },
  {
    path: "/feature/multilingual-support",
    element: <MultilingualSupportFeature />
  },
  {
    path: "/feature/emotion-control",
    element: <EmotionControlFeature />
  },
  {
    path: "/feature/high-quality-output",
    element: <HighQualityOutputFeature />
  },
  {
    path: "/feature/real-time-processing",
    element: <RealTimeProcessingFeature />
  },
  {
    path: "/feature/advanced-architecture",
    element: <AdvancedArchitectureFeature />
  }
], {
  // 此选项会使React Router不尝试处理无效路径，让服务器处理
  basename: '/'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider components={components}>
      <RouterProvider router={router} />
    </MDXProvider>
  </StrictMode>
);
