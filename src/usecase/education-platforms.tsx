import React from 'react';
import { GraduationCap, ChevronLeft } from 'lucide-react';

const EducationPlatformsUseCase: React.FC = () => {
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
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Education Platforms</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Zonos AI is revolutionizing digital education with voice synthesis technology that enhances learning experiences and improves accessibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Language Learning</h3>
              <p className="text-gray-300">
                Create authentic pronunciation examples in multiple languages with native-sounding accents. Help students practice conversation with AI voice partners that provide real-time feedback.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Online Courses</h3>
              <p className="text-gray-300">
                Generate professional narration for course materials, allowing educators to focus on content creation rather than recording. Scale up production of educational content quickly.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Interactive Learning</h3>
              <p className="text-gray-300">
                Build interactive learning experiences with voice-guided instructions and feedback. Create dynamic educational content that adapts to student responses.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Global Education Access</h3>
              <p className="text-gray-300">
                Make educational content available in multiple languages without the cost of hiring voice talent for each language. Remove language barriers to knowledge access.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <blockquote className="text-gray-300 italic mb-4">
              "After integrating Zonos AI into our language learning platform, student engagement increased by 47%. The ability to provide authentic pronunciation examples in 28 languages has been a game-changer for our global student base."
            </blockquote>
            <p className="text-right text-cyan-400 font-semibold">— Professor James Liu, Founder of MultiLingual Learning Institute</p>
          </div>
          
          <div className="text-center">
            <a href="https://playground.zyphra.com/chat" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Try Zonos AI for Education
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPlatformsUseCase; 