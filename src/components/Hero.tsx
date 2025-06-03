
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-healing-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gentle-bounce"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-serenity-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gentle-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8 flex justify-center space-x-4 animate-fade-in">
          <div className="flex items-center justify-center w-16 h-16 bg-healing-100 rounded-full">
            <Heart className="w-8 h-8 text-healing-600" />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-serenity-100 rounded-full">
            <Users className="w-8 h-8 text-serenity-600" />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-calm-100 rounded-full">
            <Shield className="w-8 h-8 text-calm-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Support Your{' '}
          <span className="bg-gradient-to-r from-healing-600 to-serenity-600 bg-clip-text text-transparent">
            Mental Health
          </span>
          <br />
          Connect with Community
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join a safe, anonymous community where you can find support, track your wellness journey, 
          and access free mental health resources. You're not alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-healing-600 hover:bg-healing-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Join Community
          </Button>
          <Button size="lg" variant="outline" className="border-serenity-600 text-serenity-700 hover:bg-serenity-50 px-8 py-4 text-lg rounded-full transition-all duration-300">
            Explore Resources
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-healing-600 mb-2">24/7</div>
            <div className="text-gray-600">Anonymous Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-serenity-600 mb-2">Free</div>
            <div className="text-gray-600">Mental Health Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-calm-600 mb-2">Safe</div>
            <div className="text-gray-600">Community Space</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
