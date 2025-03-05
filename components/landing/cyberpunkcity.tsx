'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
export const CyberpunkCity = () => {
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