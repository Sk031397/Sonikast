'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={'/logo.png'} alt="logo" height={50} width={50} priority/>
          <span className="text-2xl font-bold text-white">SONIKAST</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-white hover:text-cyan-400 transition-colors">Features</Link>
          <Link href="#districts" className="text-white hover:text-cyan-400 transition-colors">Districts</Link>
          <Link href="#roadmap" className="text-white hover:text-cyan-400 transition-colors">Roadmap</Link>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Connect Wallet</Button>
        </div>
        
        <Button className="md:hidden bg-cyan-500 hover:bg-cyan-600 text-black">Menu</Button>
      </div>
    </nav>
  );
};
