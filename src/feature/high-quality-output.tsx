import React from 'react';
import { Music, ChevronLeft } from 'lucide-react';

const HighQualityOutputFeature: React.FC = () => {
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
              <Music className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">High-Quality Output</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI produces professional-grade 44kHz audio quality that meets industry standards for broadcasting, entertainment, and commercial applications.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Audio Quality</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>44.1kHz sample rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>24-bit depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Full frequency range (20Hz-20kHz)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Ultra-low noise floor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Natural breathing and mouth sounds</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Export Options</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Uncompressed WAV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>High-quality MP3 (320kbps)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>AAC for streaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>FLAC lossless compression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>OGG format</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Broadcast-Ready Audio</h3>
              <p className="text-gray-300">
                Our high-fidelity output meets professional standards for radio, TV, podcasts, and streaming platforms without requiring additional post-processing.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Advanced Vocoder Technology</h3>
              <p className="text-gray-300">
                Our proprietary neural vocoder creates natural-sounding speech waveforms that eliminate the robotic artifacts common in other AI voice systems.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Optimized Audio Processing</h3>
              <p className="text-gray-300">
                Each voice output is automatically enhanced with subtle compression, EQ, and noise reduction to ensure professional quality across all use cases.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Voice Consistency</h3>
              <p className="text-gray-300">
                Maintain consistent voice characteristics across long-form content, ensuring the same quality from the first word to the last, even in hour-long recordings.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quality Comparison</h3>
            <div className="relative overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left text-gray-300">
                <thead className="text-xs uppercase bg-gray-800/70">
                  <tr>
                    <th scope="col" className="px-6 py-3">Feature</th>
                    <th scope="col" className="px-6 py-3">Standard TTS</th>
                    <th scope="col" className="px-6 py-3">Basic AI Voice</th>
                    <th scope="col" className="px-6 py-3">Zonos AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-4">Sample Rate</td>
                    <td className="px-6 py-4">16kHz</td>
                    <td className="px-6 py-4">22kHz</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">44.1kHz</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-4">Bit Depth</td>
                    <td className="px-6 py-4">16-bit</td>
                    <td className="px-6 py-4">16-bit</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">24-bit</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-4">Breathing Sounds</td>
                    <td className="px-6 py-4">No</td>
                    <td className="px-6 py-4">Basic</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Mouth Articulation</td>
                    <td className="px-6 py-4">Poor</td>
                    <td className="px-6 py-4">Moderate</td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">High-Fidelity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Industry Testimonial</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "In our professional audio production environment, we've tested dozens of AI voice solutions. Zonos AI is the first that truly delivers studio-quality output that requires no additional processing. The high sample rate and natural articulation make it indistinguishable from professional voice talent."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Jonathan Baker, Audio Director at Global Media Productions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQualityOutputFeature; 