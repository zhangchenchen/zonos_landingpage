import {
  Wand2,
  Globe2,
  Heart,
  Music,
  Zap,
  Youtube,
  Gamepad2,
  Accessibility,
  GraduationCap,
  Building2,
  Github,
  ChevronRight,
  Play,
  BarChart2,
  Network,
  Code2
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-gray-900"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Zonos AI: The Future of Voice Synthesis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Powered by 200,000+ hours of multilingual training data, Zonos AI delivers next-generation voice synthesis with unmatched speed, accuracy, and naturalness.
            </p>
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                Experience Zonos AI
                <ChevronRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Zonos AI Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Wand2 className="w-8 h-8" />, title: 'Zero-Shot Voice Cloning', description: 'Clone any voice perfectly with just seconds of audio' },
              { icon: <Globe2 className="w-8 h-8" />, title: 'Multilingual Support', description: 'Support for English, Chinese, Japanese, French, German, and more' },
              { icon: <Heart className="w-8 h-8" />, title: 'Emotion Control System', description: 'AI-driven precise emotional expression control' },
              { icon: <Music className="w-8 h-8" />, title: 'High-Quality Output', description: 'Professional 44kHz audio quality output' },
              { icon: <Zap className="w-8 h-8" />, title: 'Real-Time Processing', description: 'Instant voice generation with millisecond response' },
              { icon: <Network className="w-8 h-8" />, title: 'Advanced Architecture', description: 'Built on cutting-edge neural network technology' }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors">
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Zonos AI Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Youtube className="w-8 h-8" />, title: 'Content Creators', description: 'Video voiceovers, podcasts, audio content' },
              { icon: <Gamepad2 className="w-8 h-8" />, title: 'Game Developers', description: 'Character voicing, real-time voice interaction' },
              { icon: <Accessibility className="w-8 h-8" />, title: 'Accessibility Solutions', description: 'Smart text reading, voice assistance' },
              { icon: <GraduationCap className="w-8 h-8" />, title: 'Education Platforms', description: 'Language learning, online courses' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Enterprise Solutions', description: 'AI customer service, voice assistants' },
              { icon: <Code2 className="w-8 h-8" />, title: 'API Integration', description: 'Flexible voice service integration' }
            ].map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg">
                <div className="text-purple-400 mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Zonos AI Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Model Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Transformer-based encoder-decoder architecture</li>
                <li>• 1.2 billion parameters</li>
                <li>• Multi-head attention mechanism</li>
                <li>• Advanced vocoder network</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">System Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CUDA-compatible GPU (4GB+ VRAM)</li>
                <li>• 16GB RAM recommended</li>
                <li>• Python 3.8+</li>
                <li>• Docker support available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-6 py-3">
              <Github className="w-6 h-6" />
              <span className="text-2xl font-bold">15.2k</span>
              <span className="text-gray-400">stars</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-6 py-3">
              <BarChart2 className="w-6 h-6" />
              <span className="text-2xl font-bold">99.8%</span>
              <span className="text-gray-400">accuracy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-6 py-3">
              <Play className="w-6 h-6" />
              <span className="text-2xl font-bold">1M+</span>
              <span className="text-gray-400">generations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          © 2025 Zonos AI. All rights reserved. Dedicated to providing cutting-edge AI voice solutions.
        </div>
      </footer>
    </div>
  );
}

export default App;