'use client';
import Image from "next/image";
import { Bell,Settings } from "lucide-react";
import { ConnectWallet } from "../common/connect-wallet";
const AppHeader = () => {
  return (
    <header className="border-b border-gray-800 ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
              <Image src={'/logo.png'} alt='logo' width={50} height={50} priority/>
            </div>
            <span className="font-bold text-lg tracking-tight">SONIKAST</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2">
              <Bell size={16}/>
            </button>
            <button className="text-gray-300 hover:text-white p-2">
              <Settings size={16}/>
            </button>
            <div className="relative">
              <ConnectWallet/>
            </div>
          </div>
        </div>
      </header>
  )
}

export default AppHeader
