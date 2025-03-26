import React from 'react';
import { Heart, ChevronLeft } from 'lucide-react';

const EmotionControlFeature: React.FC = () => {
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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Emotion Control System</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI's advanced Emotion Control System delivers unprecedented expressive range in voice synthesis, enabling genuinely emotional and engaging audio content.
          </p>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Emotional Range</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['Happy', 'Sad', 'Excited', 'Calm', 'Angry', 'Fearful', 'Surprised', 'Confident', 'Doubtful', 'Empathetic', 'Enthusiastic', 'Thoughtful'].map((emotion, index) => (
                <div key={index} className="bg-gray-800/50 p-3 rounded-lg text-center">
                  <div className="text-gray-300">{emotion}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-sm text-center">Each emotion comes with adjustable intensity levels (1-10)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Precise Emotional Expression</h3>
              <p className="text-gray-300">
                Our AI analyzes the emotional context of your text and automatically applies appropriate emotions, or allows you to manually select and fine-tune emotional qualities.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Emotion Transitions</h3>
              <p className="text-gray-300">
                Create natural transitions between different emotional states within a single piece of content, allowing for dynamic storytelling and authentic character development.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Context-Aware Expression</h3>
              <p className="text-gray-300">
                The system interprets punctuation, formatting, and language cues to intelligently apply emotional qualities that match the intended meaning of the text.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Micro-Expression Control</h3>
              <p className="text-gray-300">
                Fine-tune subtle vocal characteristics like breathiness, vocal fry, emphasis, and tone modulation to create truly unique and expressive voice performances.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Technical Implementation</h3>
                <p className="text-gray-300 mb-4">
                  Our emotion control system is powered by a neural network trained on thousands of hours of emotionally labeled speech data. The system identifies and reproduces the subtle acoustic patterns that humans use to express emotions.
                </p>
                <p className="text-gray-300">
                  Parameters include pitch variation, speech rate, voice quality, articulation precision, and dozens of other vocal characteristics that combine to create authentic emotional expression.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800/50 p-4 rounded-lg">
                <pre className="text-xs text-gray-300 overflow-x-auto">
                  <code>{`// Emotion control example
{
  "text": "I can't believe we won!",
  "voice_id": "en_female_01",
  "emotion": {
    "type": "excited",
    "intensity": 0.8,
    "variability": 0.6
  },
  "speaking_rate": 1.2
}`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Audiobooks:</strong> Create engaging narration with character voices that express appropriate emotions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Video Games:</strong> Generate dynamic NPC dialogue that responds emotionally to player actions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Marketing:</strong> Craft emotionally resonant commercials and advertisements that connect with audiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong className="text-white">Virtual Assistants:</strong> Build more natural and empathetic AI interactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionControlFeature; 