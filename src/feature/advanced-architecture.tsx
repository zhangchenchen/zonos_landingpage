import React from 'react';
import { Network, ChevronLeft } from 'lucide-react';

const AdvancedArchitectureFeature: React.FC = () => {
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
              <Network className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Advanced Architecture</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI is built on a sophisticated neural network architecture that combines state-of-the-art AI techniques to deliver unprecedented voice quality and flexibility.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Technical Foundation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Model Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Transformer-based encoder-decoder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>1.2 billion parameters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Multi-head attention mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Neural vocoder network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Acoustic feature modeling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Training Data</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>200,000+ hours of labeled audio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>50+ languages and dialects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>10,000+ distinct voice profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Diverse emotional expressions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>High-quality studio recordings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Neural Network Structure</h3>
            <div className="relative p-4 rounded-lg bg-gray-800/50 mb-8 overflow-hidden">
              <div className="w-full h-36 md:h-64 relative">
                {/* Simplified Neural Network Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Input Layer */}
                  <div className="flex flex-col items-center mx-2">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={`input-${i}`} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-500 my-1"></div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">Input</div>
                  </div>
                  
                  {/* Encoder Layers */}
                  <div className="flex flex-col items-center mx-2">
                    {[0, 1, 2, 3, 4, 5, 6].map(i => (
                      <div key={`enc-${i}`} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 my-1"></div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">Encoder</div>
                  </div>
                  
                  {/* Hidden Layers */}
                  <div className="flex flex-col items-center mx-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <div key={`hidden-${i}`} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500 my-1"></div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">Hidden</div>
                  </div>
                  
                  {/* Decoder Layers */}
                  <div className="flex flex-col items-center mx-2">
                    {[0, 1, 2, 3, 4, 5, 6].map(i => (
                      <div key={`dec-${i}`} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500 my-1"></div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">Decoder</div>
                  </div>
                  
                  {/* Vocoder Layers */}
                  <div className="flex flex-col items-center mx-2">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={`out-${i}`} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-pink-500 my-1"></div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">Vocoder</div>
                  </div>
                </div>
                
                {/* Connection lines (simplified) */}
                <div className="absolute inset-0 opacity-20">
                  {/* Many connecting lines would be here in a real visualization */}
                  <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Zonos AI utilizes a sophisticated multi-component architecture that processes text through several specialized neural networks:
            </p>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">1.</span>
                <span><strong className="text-white">Text Analysis:</strong> Processes linguistic features, phonetics, and semantic context</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">2.</span>
                <span><strong className="text-white">Voice Embedding:</strong> Captures unique voice characteristics from reference audio</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">3.</span>
                <span><strong className="text-white">Prosody Modeling:</strong> Generates natural rhythms, intonation, and emotion</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">4.</span>
                <span><strong className="text-white">Neural Vocoder:</strong> Converts acoustic features into high-quality waveforms</span>
              </li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Zero-Shot Learning Capabilities</h3>
              <p className="text-gray-300">
                Our architecture can generalize from limited examples to new voices, languages, and emotions without explicit training, thanks to advanced meta-learning techniques.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Continuous Learning</h3>
              <p className="text-gray-300">
                The system constantly improves through continued training on new data, with regular model updates that enhance quality and expand capabilities.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Modular Design</h3>
              <p className="text-gray-300">
                Components can be upgraded independently, allowing for targeted improvements to specific aspects of voice synthesis without rebuilding the entire system.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Optimized Inference</h3>
              <p className="text-gray-300">
                Sophisticated model quantization and compilation techniques enable high-speed processing on various hardware platforms, from cloud GPUs to edge devices.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Publications</h2>
            <p className="text-gray-300 mb-4">
              Our team regularly contributes to the scientific community with research papers on voice synthesis technology:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>"Transformer-based Acoustic Modeling for High-Fidelity Speech Synthesis" (2023)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>"Zero-Shot Voice Cloning with Minimal Reference Audio" (2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>"Emotion-Aware Speech Synthesis using Multi-head Attention Networks" (2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>"Optimizing Neural Vocoders for Real-time Inference" (2021)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedArchitectureFeature; 