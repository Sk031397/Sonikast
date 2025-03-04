'use client';
import { useState, useEffect, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Navbar } from '@/components/common/navbar';
import { Button } from '@/components/ui/button';

// 3D City Component
const CyberpunkCity = () => {
  // Generate buildings with varying heights and colors
  const buildings = Array.from({length:50}).map((_, i) => ({
    position: [
      Math.random() * 40 - 20,
      0,
      Math.random() * 40 - 20
    ],
    height: Math.random() * 8 + 2,
    width: Math.random() * 2 + 0.5,
    depth: Math.random() * 2 + 0.5,
    color: new THREE.Color(`hsl(${180 + Math.random() * 60}, 100%, ${50 + Math.random() * 30}%)`),
    emissive: new THREE.Color(`hsl(${180 + Math.random() * 60}, 100%, 50%)`),
  }));

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <fog attach="fog" args={['#000', 1, 50]} />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Grid */}
      <gridHelper args={[100, 100, '#444', '#222']} position={[0, 0, 0]} />
      
      {/* Buildings */}
      {buildings.map((building, i) => (
        <mesh key={i} position={[building.position[0], building.height / 2, building.position[2]]}>
          <boxGeometry args={[building.width, building.height, building.depth]} />
          <meshStandardMaterial 
            color={building.color}
            emissive={building.emissive}
            emissiveIntensity={0.5 + Math.random() * 0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }:{ icon:ReactNode, title:string, description:string }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// District Card Component
const DistrictCard = ({ title, description, image }:{title:string, description:string,image:string }) => (
  <div className="group relative overflow-hidden rounded-xl">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${image})`,
        transform: 'scale(1.0)',
        transition: 'transform 0.5s ease-in-out'
      }}
    ></div>
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    
    {/* Content */}
    <div className="relative p-6 h-64 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-10px]">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
    </div>
  </div>
);

// Main Component
export default function SonikastLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Canvas className="absolute inset-0">
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
        
        <div className="container mx-auto px-6 relative z-10 text-center">
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
      
      {/* Features Section */}
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
            Connect Wallet to Begin
          </Button>
        </div>
      </section>
    </div>
  );
}