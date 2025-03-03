'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
//import { ConnectWallet } from "@/components/ConnectWallet";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { HomeHeader } from '@/components/common/home-header';

export default function SonikastMetropolis() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <HomeHeader/>
      {/* Hero Section with Background 3D Cyberpunk City */}
      <section className="relative flex flex-col items-center justify-center h-screen z-10">
        <Canvas className="absolute inset-0 w-full h-full z-0">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <CyberpunkCity />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="relative backdrop-blur-md bg-black/50 p-10 rounded-xl text-center z-10">
          <h1 className="text-6xl font-bold text-cyan-400">Welcome to Sonikast Metropolis</h1>
          <p className="text-lg mt-4">The AI-Powered DeFi City of the Future</p>
          <div className="mt-6 space-x-4">
            <Button className="px-6 py-3 text-lg bg-cyan-500 hover:bg-cyan-600">Enter the Metropolis</Button>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <h2 className="text-4xl text-center font-bold">Explore the Metropolis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <FeatureCard title="AI-Powered Finance District" description="Stake, lend, and trade with AI-driven insights." />
          <FeatureCard title="NFT Art Galleries" description="Own dynamic AI-generated NFT masterpieces." />
          <FeatureCard title="Casino District" description="Bet on crypto markets in AI-powered prediction games." />
          <FeatureCard title="AI Workspaces" description="Train AI models for DeFi analysis and automation." />
          <FeatureCard title="Battle Arena" description="Compete in AI trading duels for rewards." />
        </div>
      </section>
    </div>
  );
}

function CyberpunkCity() {
  return (
    <group>
      {/* Buildings */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[Math.random() * 20 - 10, 0, Math.random() * 20 - 10]}>
          <boxGeometry args={[1, Math.random() * 5 + 2, 1]} />
          <meshStandardMaterial color={new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`)} emissive={new THREE.Color('cyan')} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function FeatureCard({ title, description }:{title:string,description:string}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-xl">
      <h3 className="text-2xl font-semibold text-cyan-400">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </motion.div>
  );
}