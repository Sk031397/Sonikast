'use client';
import React, { useEffect, useState } from 'react'
import SonikastApp from '.';
import Composer from './composer';
import Portfolio from './portfolio';
import Marketplace from './marketplace';
import Community from './community';

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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <span>Dashboard</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'composer' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('composer')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <span>Sonic Composer</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'portfolio' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('portfolio')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <span>Portfolio</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'marketplace' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('marketplace')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Marketplace</span>
            </button>
          </li>
          <li className="mb-2">
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'community' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveTab('community')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Community</span>
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
      {activeTab === 'composer' && <Composer/>}
      {activeTab === 'portfolio' && <Portfolio/>}
      {activeTab === 'marketplace' && <Marketplace/>}
      {activeTab === 'community' && <Community/>}
    </div>
  </div>
    
  )
}

export default AppSidebar
