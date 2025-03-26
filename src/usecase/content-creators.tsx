import React from 'react';
import { Youtube, ChevronLeft } from 'lucide-react';

const ContentCreatorsUseCase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to home
        </a>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 rounded-lg mr-6">
              <Youtube className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Content Creators</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI empowers content creators with lightning-fast, high-quality voice synthesis technology that transforms content production workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Video Voiceovers</h3>
              <p className="text-gray-300">
                Create professional-quality voiceovers for your videos in seconds without expensive recording equipment or voice actors. Perfect for YouTube videos, tutorials, explainers, and more.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Podcasts</h3>
              <p className="text-gray-300">
                Generate voice narration for podcast intros, transitions, and segments. Create consistent voice branding across all your episodes with customizable voice profiles.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Audio Content</h3>
              <p className="text-gray-300">
                Produce audiobooks, guided meditations, and other audio content with natural-sounding voices. Adjust emotion, pace, and tone to match your content's needs.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Multilingual Content</h3>
              <p className="text-gray-300">
                Expand your audience by creating content in multiple languages without hiring translators or voice actors for each language. Zonos AI supports seamless multilingual voice generation.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "Zonos AI has revolutionized my YouTube workflow. I can now produce videos in multiple languages and create consistent voiceovers without spending hours recording. My production time has been cut in half, and the quality is indistinguishable from professional voice actors."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Sarah Chen, YouTube Creator with 1.2M subscribers</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI for Content Creation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorsUseCase; 