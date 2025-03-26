import React from 'react';
import { Zap, ChevronLeft } from 'lucide-react';

const RealTimeProcessingFeature: React.FC = () => {
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
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Real-Time Processing</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI delivers instant voice generation with millisecond-level response times, enabling real-time interactive applications and seamless user experiences.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Performance Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">~50ms</div>
                <div className="text-sm text-gray-400">Initial response time</div>
              </div>
              <div className="bg-gray-800/50 p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24x</div>
                <div className="text-sm text-gray-400">Faster than real-time</div>
              </div>
              <div className="bg-gray-800/50 p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">API uptime</div>
              </div>
            </div>
            
            <div className="h-8 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '4%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-8">
              <span>0ms</span>
              <span>Zonos AI (50ms)</span>
              <span>Competitor A (450ms)</span>
              <span>Competitor B (900ms)</span>
              <span>1000ms</span>
            </div>
            
            <p className="text-gray-300 text-center">
              Benchmark tests show Zonos AI processes text-to-speech at 24x real-time speed on standard hardware.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Streaming Audio Generation</h3>
              <p className="text-gray-300">
                Start playback instantly while content is still being generated, eliminating waiting time for users. Perfect for chatbots, virtual assistants, and interactive applications.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Low-Latency API</h3>
              <p className="text-gray-300">
                Our optimized API architecture delivers consistent sub-100ms response times even under high load, with global edge distribution for minimal latency anywhere in the world.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Parallel Processing</h3>
              <p className="text-gray-300">
                Generate multiple voice outputs simultaneously with our highly parallelized architecture. Process hours of audio content in minutes.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Adaptive Resource Allocation</h3>
              <p className="text-gray-300">
                Our system intelligently allocates processing resources based on workload demands, ensuring consistent performance even during usage spikes.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Technical Implementation</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-gray-300 mb-4">
                  Zonos AI achieves its exceptional speed through several technological innovations:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">1.</span>
                    <span>Highly optimized neural network architecture with reduced computational complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">2.</span>
                    <span>Custom CUDA kernels for GPU acceleration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">3.</span>
                    <span>Streaming inference pipeline that processes text incrementally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">4.</span>
                    <span>Predictive processing that anticipates upcoming text</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-2/5 bg-gray-800/50 p-4 rounded-lg overflow-hidden">
                <pre className="text-xs text-gray-300 overflow-x-auto">
                  <code>{`// Real-time streaming example
const stream = await zonosAI.synthesize({
  text: "This will begin playing immediately",
  voice_id: "en_female_natural",
  streaming: true,
  onChunk: (audioChunk) => {
    // Process each audio chunk as it arrives
    audioPlayer.appendBuffer(audioChunk);
  }
});`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Real-World Applications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Interactive Voice Assistants:</strong> Respond to user queries with natural voice in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Live Broadcasting:</strong> Generate voice narration for live events without perceptible delay</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Games and VR:</strong> Create dynamic dialogue that responds to player actions immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Accessibility Tools:</strong> Real-time text-to-speech for screen readers and assistive technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeProcessingFeature; 