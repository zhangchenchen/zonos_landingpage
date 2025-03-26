import React from 'react';
import { Globe2, ChevronLeft } from 'lucide-react';

const MultilingualSupportFeature: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to home
        </a>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-lg mr-6">
              <Globe2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Multilingual Support</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI breaks language barriers with comprehensive multilingual support across major world languages, delivering native-quality pronunciation and natural intonation.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Supported Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">English</div>
                <div className="text-xs text-gray-400 mt-1">US, UK, AU variants</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Chinese</div>
                <div className="text-xs text-gray-400 mt-1">Mandarin, Cantonese</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Spanish</div>
                <div className="text-xs text-gray-400 mt-1">Spain, Latin America</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">French</div>
                <div className="text-xs text-gray-400 mt-1">France, Canada</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">German</div>
                <div className="text-xs text-gray-400 mt-1">Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Japanese</div>
                <div className="text-xs text-gray-400 mt-1">Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Korean</div>
                <div className="text-xs text-gray-400 mt-1">Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Hindi</div>
                <div className="text-xs text-gray-400 mt-1">Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Arabic</div>
                <div className="text-xs text-gray-400 mt-1">Modern Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Portuguese</div>
                <div className="text-xs text-gray-400 mt-1">Brazil, Portugal</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">Russian</div>
                <div className="text-xs text-gray-400 mt-1">Standard</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-gray-300 font-medium">+ 20 more</div>
                <div className="text-xs text-gray-400 mt-1">and expanding</div>
              </div>
            </div>
            <p className="text-gray-400 mt-6 text-sm text-center">Regularly updated with new languages and regional accents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Native-Quality Pronunciation</h3>
              <p className="text-gray-300">
                Our AI models are trained on native speakers to ensure authentic pronunciation, proper stress patterns, and natural rhythm in each language.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cross-Language Voice Cloning</h3>
              <p className="text-gray-300">
                Clone a voice in one language and use it to speak any other supported language while maintaining the original voice's unique characteristics.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Accent Control</h3>
              <p className="text-gray-300">
                Adjust accent strength to match your needs, from strong regional accents to neutral international pronunciations suitable for global audiences.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Real-Time Translation</h3>
              <p className="text-gray-300">
                Combine with our translation API for seamless text translation and voice synthesis in one step, perfect for multilingual content creation.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "Zonos AI's multilingual capabilities transformed our e-learning platform. We can now deliver courses in 28 languages with consistent voice quality across all content. Student engagement has increased by 45% in international markets."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Maria Rodriguez, Director of Content at Global Learning Institute</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultilingualSupportFeature; 