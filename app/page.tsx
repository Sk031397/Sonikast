'use client';
import { useState, useEffect, ReactNode } from 'react';
import { LandingNavbar } from '@/components/common/landingnavbar';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/landing/featurecard';
import { DistrictCard } from '@/components/landing/districtcard';
import { Canvas } from '@react-three/fiber';
import { CyberpunkCity } from '@/components/landing/cyberpunkcity';
import { OrbitControls } from '@react-three/drei';
import { LandingFooter } from '@/components/common/landingfooter';

export default function SonikastLanding() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <LandingNavbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background 3D Scene */}
        <div className="absolute inset-0 -z-10">
          <Canvas className="w-full h-full">
            <CyberpunkCity />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2.5}
            />
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Welcome to Sonikast Metropolis
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            The AI-Powered DeFi City of the Future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-6">
              Enter Metropolis
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <div className="animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-cyan-400 mx-auto" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the innovative technologies powering the Sonikast ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<span className="text-2xl">🧠</span>}
              title="AI-Powered Analytics"
              description="Advanced market insights and predictions powered by our proprietary AI algorithms"
            />
            <FeatureCard 
              icon={<span className="text-2xl">🔗</span>}
              title="Cross-Chain Integration"
              description="Seamlessly connect and trade assets across multiple blockchain networks"
            />
            <FeatureCard 
              icon={<span className="text-2xl">🛡️</span>}
              title="Enhanced Security"
              description="Multi-layered security protocols with real-time threat monitoring and prevention"
            />
            <FeatureCard 
              icon={<span className="text-2xl">📊</span>}
              title="DeFi Optimization"
              description="Automated yield strategies that maximize returns while minimizing risk exposure"
            />
            <FeatureCard 
              icon={<span className="text-2xl">🔄</span>}
              title="Dynamic NFTs"
              description="Evolving digital assets that respond to market conditions and user interactions"
            />
            <FeatureCard 
              icon={<span className="text-2xl">👥</span>}
              title="DAO Governance"
              description="Community-driven decision making through transparent on-chain voting mechanisms"
            />
          </div>
        </div>
      </section>
      
      {/* Districts Section */}
      <section id="districts" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Explore the Districts
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover specialized zones within the Sonikast Metropolis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DistrictCard 
              title="Finance District"
              description="Stake, lend, and trade with AI-driven insights and automated strategies"
              image="/api/placeholder/600/400"
            />
            <DistrictCard 
              title="NFT Art Galleries"
              description="Browse, collect, and create dynamic AI-generated NFT masterpieces"
              image="/api/placeholder/600/400"
            />
            <DistrictCard 
              title="Casino District"
              description="Participate in prediction markets and games with crypto rewards"
              image="/api/placeholder/600/400"
            />
            <DistrictCard 
              title="Battle Arena"
              description="Compete in AI trading duels and strategy competitions for valuable prizes"
              image="/api/placeholder/600/400"
            />
          </div>
        </div>
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our vision for the future of Sonikast Metropolis
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-700"></div>
            
            {/* Roadmap items */}
            <div className="space-y-12">
              {[
                {
                  phase: "Q2 2025",
                  title: "Metropolis Foundation",
                  description: "Launch of Finance District and NFT Galleries with basic functionalities"
                },
                {
                  phase: "Q3 2025",
                  title: "District Expansion",
                  description: "Opening of Casino District and Battle Arena with initial competition framework"
                },
                {
                  phase: "Q4 2025",
                  title: "Advanced AI Integration",
                  description: "Release of AI Workspaces and developer SDK for custom model training"
                },
                {
                  phase: "Q1 2026",
                  title: "Metaverse Evolution",
                  description: "Introduction of cross-chain functionality and expanded metaverse features"
                }
              ].map((item, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/50">
                      <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 mb-3">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 border-4 border-black"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Ready to Enter the Metropolis?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join the next generation of DeFi innovation and experience the future of decentralized finance
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-6">
            Enter Metropolis
          </Button>
        </div>
      </section>
      <LandingFooter/>
    </div>
  );
}
