'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AppNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center">
          <Image src={'/logo.png'} alt="logo" height={50} width={50} priority/>
          <span className="text-2xl font-bold text-white">SONIKAST</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium" onClick={() => {}}>Connect Wallet</Button>
        </div>
        
        <Button className="md:hidden bg-cyan-500 hover:bg-cyan-600 text-black">Menu</Button>
    </nav>
  );
};
