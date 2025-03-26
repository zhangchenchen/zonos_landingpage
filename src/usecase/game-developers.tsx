import React from 'react';
import { Gamepad2, ChevronLeft } from 'lucide-react';

const GameDevelopersUseCase: React.FC = () => {
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
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Game Developers</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI transforms game development with advanced voice synthesis that enables dynamic character voices and immersive player experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Character Voicing</h3>
              <p className="text-gray-300">
                Generate authentic character voices for your games without the limitations of traditional voice acting. Create thousands of unique NPC voices with distinctive personalities and accents.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Real-time Voice Interaction</h3>
              <p className="text-gray-300">
                Implement dynamic dialogue systems that respond to player choices in real-time with appropriate emotions and context. Create truly interactive narrative experiences.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Procedural Content</h3>
              <p className="text-gray-300">
                Generate voiced content on-the-fly for procedurally generated game elements. Scale your game world with unlimited unique voiced interactions.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Localization</h3>
              <p className="text-gray-300">
                Easily localize your game to multiple languages without recording separate voice talent for each region. Maintain consistent character voices across all languages.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "With Zonos AI, we were able to voice over 500 NPCs in our open-world RPG with just a handful of voice actor references. Players can't tell the difference, and we saved months of recording time and tens of thousands in budget."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Mark Johnson, Lead Developer at Infinite Realms Studios</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI for Game Development
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDevelopersUseCase; 