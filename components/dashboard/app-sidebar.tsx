'use client';
import React, { useEffect, useState } from 'react'
import SonikastApp from '.';
import Composer from './composer';
import Portfolio from './portfolio';
import Marketplace from './marketplace';
import AIAgentsTab from './ai-agents';
import { ChartArea, Computer, Home, Music, ShoppingCartIcon } from 'lucide-react';

interface AppSidebarProps {
    activeTab:string;
    setActiveTab:React.Dispatch<React.SetStateAction<string>>;
}
const AppSidebar = ({activeTab,setActiveTab}:AppSidebarProps) => {
  return (
    <div className='flex'>
      <div className="w-full md:w-64 md:min-h-screen">
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home size={20}/>
              <span>Dashboard</span>
            </button>
          </li>
          
          {/* New AI Agents tab */}
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'ai-agents' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('ai-agents')}
            >
              <Computer size={20}/>
              <span>AI Agents</span>
            </button>
          </li>
          
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'composer' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('composer')}
            >
              <Music size={20}/>
              <span>Sonic Composer</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'portfolio' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('portfolio')}
            >
              <ChartArea size={20}/>
              <span>Portfolio</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'marketplace' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('marketplace')}
            >
              <ShoppingCartIcon size={20}/>
              <span>Marketplace</span>
            </button>
          </li>
        </ul>
        
        <div className="mt-8 border-t border-gray-800 pt-6">
          <h4 className="text-xs uppercase text-gray-500 font-semibold px-4 mb-3">My Compositions</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-sm">Bull Market Symphony</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-sm">DeFi Nocturne</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Altcoin Concerto</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className='flex-1 p-4'>
      {activeTab === 'dashboard' && <SonikastApp/>}
      {activeTab === 'ai-agents' && <AIAgentsTab/>} 
      {activeTab === 'composer' && <Composer/>}
      {activeTab === 'portfolio' && <Portfolio/>}
      {activeTab === 'marketplace' && <Marketplace/>}
    </div>
  </div>
    
  )
}

export default AppSidebar