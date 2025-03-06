'use client';
import { Menu } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  return (
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
            <Image src={'/logo.png'} alt='logo' width={50} height={50} priority/>
          </div>
          <span className="font-bold text-xl text-white tracking-tight">SONIKAST</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-blue-300 transition duration-300">Features</Link>
          <Link href="#how-it-works" className="hover:text-blue-300 transition duration-300">How It Works</Link>
          <Link href="#testimonials" className="hover:text-blue-300 transition duration-300">Community</Link>
          <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition duration-300 shadow-lg"
          onClick={() => router.push('dashboard')}
          >
            Launch App
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button className="p-2">
            <Menu/>
          </Button>
        </div>
      </nav>
  )
}

export default Navbar
