import React from 'react';
import { Wand2, ChevronLeft } from 'lucide-react';

const VoiceCloningFeature: React.FC = () => {
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
              <Wand2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Zero-Shot Voice Cloning</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI's revolutionary zero-shot voice cloning technology allows perfect replication of any voice with just seconds of audio input.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">How It Works</h2>
            <p className="text-gray-300 mb-6">
              Our proprietary neural network technology analyzes voice characteristics from a small sample of speech and captures the unique qualities that make each voice distinctive. Unlike traditional voice cloning that requires hours of recorded audio, Zonos AI's zero-shot approach needs only 3-5 seconds of clear speech.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3-5</div>
                <div className="text-sm text-gray-400">Seconds of audio needed</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.7%</div>
                <div className="text-sm text-gray-400">Voice matching accuracy</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;1s</div>
                <div className="text-sm text-gray-400">Processing time</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Instant Voice Creation</h3>
              <p className="text-gray-300">
                Upload a short voice sample and instantly generate speech in that voice. Our system processes and creates voice models in real-time, allowing for immediate use.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Perfect Tone Matching</h3>
              <p className="text-gray-300">
                Zonos AI captures not just the basic vocal characteristics but the unique tonal qualities, inflections, and speech patterns that make each voice authentic and recognizable.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Voice Library</h3>
              <p className="text-gray-300">
                Save and manage multiple voice profiles in your personal voice library. Switch between different voices instantly for various projects or content needs.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ethical Framework</h3>
              <p className="text-gray-300">
                Built with ethical considerations at its core. Our voice cloning requires explicit permission and includes digital watermarking to prevent misuse and protect voice identity.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Industry Applications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Media Production:</strong> Create consistent voiceovers even when voice actors are unavailable for additional sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Localization:</strong> Translate content while preserving the original speaker's voice across languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Accessibility:</strong> Help people with speech impairments preserve their voice identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Gaming:</strong> Create unlimited unique character voices from a small set of voice actors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCloningFeature; 