import React from 'react';
import { Building2, ChevronLeft } from 'lucide-react';

const EnterpriseSolutionsUseCase: React.FC = () => {
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
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Enterprise Solutions</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI delivers enterprise-grade voice synthesis solutions that transform customer service, internal communications, and brand experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Customer Service</h3>
              <p className="text-gray-300">
                Deploy natural-sounding voice assistants that handle customer inquiries 24/7. Provide consistent brand voice across all customer touchpoints while reducing support costs.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Voice Assistants</h3>
              <p className="text-gray-300">
                Create internal productivity tools with voice interfaces that streamline workflows and improve employee efficiency. Support multiple languages for global teams.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Brand Voice Creation</h3>
              <p className="text-gray-300">
                Develop a distinctive voice identity for your brand that can be consistently applied across all audio communications, from marketing materials to product experiences.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Training & Onboarding</h3>
              <p className="text-gray-300">
                Create engaging training materials with high-quality voice narration. Scale employee onboarding with consistent delivery of information across all teams and regions.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "Implementing Zonos AI across our customer service channels reduced call waiting times by 68% while maintaining high customer satisfaction scores. The ROI has been exceptional, with a 42% reduction in support costs in the first quarter alone."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Sophia Williams, CTO at Global Commerce Solutions</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI for Enterprise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsUseCase; 