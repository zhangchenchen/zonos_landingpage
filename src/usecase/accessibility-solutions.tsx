import React from 'react';
import { Accessibility, ChevronLeft } from 'lucide-react';

const AccessibilitySolutionsUseCase: React.FC = () => {
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
              <Accessibility className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Accessibility Solutions</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI is breaking down barriers with next-generation accessibility tools powered by advanced voice synthesis technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Smart Text Reading</h3>
              <p className="text-gray-300">
                Transform any written content into natural-sounding speech with context-aware intonation and rhythm. Ideal for people with visual impairments or reading difficulties.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Voice Assistance</h3>
              <p className="text-gray-300">
                Create personalized voice assistants that respond naturally to user needs, with adjustable speaking rates, tones, and accents to match user preferences.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Educational Support</h3>
              <p className="text-gray-300">
                Enhance learning materials with high-quality voice narration for students with diverse learning needs. Support for multiple languages enables inclusive education globally.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Voice Identity Preservation</h3>
              <p className="text-gray-300">
                Help people with speech impairments preserve their voice identity through personalized voice cloning, ensuring they can maintain their vocal personality even if speech ability changes.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "Implementing Zonos AI in our assistive technology platform has been transformative for our users. The natural-sounding voices and high comprehension accuracy have significantly improved the user experience for people with visual impairments."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Dr. Amelia Patel, Director of Accessibility Innovation at AssistTech</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI for Accessibility Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySolutionsUseCase; 