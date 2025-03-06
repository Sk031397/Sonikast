'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const SonikastLanding = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Simple wave animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Turn Your <span className="text-blue-400">Investments</span> Into <span className="text-purple-400">Music</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10">
          The world&apos;s first sound-driven DeFi platform where your portfolio becomes a symphony
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition duration-300 text-lg shadow-lg">
            Enter the Orchestra
          </button>
          <button className="bg-transparent border border-blue-400 hover:bg-blue-900 px-8 py-3 rounded-lg font-medium transition duration-300 text-lg">
            Watch Demo
          </button>
        </div>
        
        {/* Animated visual element */}
        <div className="relative w-full max-w-4xl h-64 mx-auto bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Animated sound waves */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className={`w-4 rounded-t-full bg-gradient-to-t from-blue-500 to-purple-500 transform transition-all duration-1000 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-50'}`} 
                style={{
                  height: `${20 + Math.sin(i * 0.8) * 40}px`,
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience DeFi Like Never Before</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-purple-800 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Sonic Asset Synthesis</h3>
            <p className="text-gray-300">Transform your crypto holdings into unique audio signatures that reflect their market behavior.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Composition Assistant</h3>
            <p className="text-gray-300">Let our AI analyze market trends and suggest optimal portfolio arrangements for both financial returns and audio aesthetics.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-indigo-800 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">VR Orchestra Experience</h3>
            <p className="text-gray-300">Step into virtual reality and conduct your portfolio like an orchestra, manipulating assets in 3D space.</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-900 bg-opacity-30">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harmonize Your Investments?</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Join the thousands of early adopters already creating financial symphonies
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-medium transition duration-300 text-lg shadow-lg">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SonikastLanding;