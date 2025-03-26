import React from 'react';
import { Code2, ChevronLeft } from 'lucide-react';

const APIIntegrationUseCase: React.FC = () => {
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
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">API Integration</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI offers powerful API solutions for developers to seamlessly integrate advanced voice synthesis capabilities into any application or platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Flexible Voice Service Integration</h3>
              <p className="text-gray-300">
                Easily integrate Zonos AI's voice synthesis capabilities into your applications with our well-documented, developer-friendly API. Support for REST and WebSocket interfaces.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Custom Voice Models</h3>
              <p className="text-gray-300">
                Create and train custom voice models through the API to match specific requirements. Maintain consistent voice identity across all your applications.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Real-time Processing</h3>
              <p className="text-gray-300">
                Implement low-latency voice generation for interactive applications. Our API is optimized for speed with response times measured in milliseconds.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Scalable Infrastructure</h3>
              <p className="text-gray-300">
                Our API is built on cloud infrastructure that automatically scales with your needs. Handle millions of requests without performance degradation.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">API Example</h3>
            <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300 text-sm">
              <code>{`// Simple text-to-speech API request
fetch('https://xxxxxx/v1/tts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    text: "Hello world, this is Zonos AI speaking.",
    voice_id: "en_female_natural",
    emotion: "friendly",
    speed: 1.0
  })
})
.then(response => response.json())
.then(data => {
  const audioUrl = data.audio_url;
  // Use the generated audio in your application
  console.log("Audio generated:", audioUrl);
})
.catch(error => console.error('Error:', error));`}</code>
            </pre>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "After evaluating several TTS solutions, we integrated Zonos AI's API into our mobile app. The voice quality, multilingual support, and API reliability have been exceptional. We've seen a 38% increase in user engagement with voice-enabled features."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Alex Chang, VP of Engineering at MobileConnect</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI API Integration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntegrationUseCase; 