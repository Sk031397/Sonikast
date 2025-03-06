'use client';
import { Bell, Settings } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces for our data structure
interface AssetData {
  id: number;
  name: string;
  ticker: string;
  allocation: number;
  price: number;
  change: number;
  note: string;
  color: string;
}

const SonikastApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(70);
  
  // Sample portfolio data
  const portfolioData: AssetData[] = [
    { id: 1, name: 'Bitcoin', ticker: 'BTC', allocation: 35, price: 52428.65, change: 2.4, note: 'C#', color: 'bg-yellow-500' },
    { id: 2, name: 'Ethereum', ticker: 'ETH', allocation: 25, price: 3128.92, change: -1.2, note: 'A', color: 'bg-blue-500' },
    { id: 3, name: 'Solana', ticker: 'SOL', allocation: 15, price: 142.78, change: 5.7, note: 'E', color: 'bg-purple-500' },
    { id: 4, name: 'Polkadot', ticker: 'DOT', allocation: 10, price: 12.43, change: 0.8, note: 'G', color: 'bg-pink-500' },
    { id: 5, name: 'Cardano', ticker: 'ADA', allocation: 15, price: 0.58, change: -0.5, note: 'D', color: 'bg-green-500' }
  ];
  
  // Visualization animation
  const [waveform, setWaveform] = useState<number[]>(Array(10).fill(20));
  
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setWaveform(prev => 
          prev.map(() => Math.max(20, Math.floor(Math.random() * 80)))
        );
      }, 200);
      
      return () => clearInterval(interval);
    } else {
      setWaveform(Array(10).fill(20));
    }
  }, [isPlaying]);

  return (
        <div className="flex-1 p-6">
          {/* Dashboard Content */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Your Financial Symphony</h1>
            <p className="text-gray-400">Create and listen to your investment portfolio as musical compositions</p>
          </div>
          
          {/* Audio Player */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <button 
                  className={`w-12 h-12 rounded-full ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} flex items-center justify-center transition duration-300`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                <div>
                  <h3 className="font-medium">Bull Market Symphony</h3>
                  <p className="text-gray-400 text-sm">Last updated: Today at 10:45 AM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728M3 19.5h18M3 14.5h18M3 9.5h18M3 4.5h18" />
                </svg>
                <div className="flex-1 md:w-48">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <span className="text-sm">{volume}%</span>
              </div>
            </div>
            
            {/* Waveform Visualization */}
            <div className="mt-6 flex items-end justify-between h-24 px-4">
              {waveform.map((height, i) => (
                <div 
                  key={i}
                  className="w-6 rounded-t bg-gradient-to-t from-blue-500 to-purple-500 transition-all duration-200 ease-in-out"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          
          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Total Value</h3>
                <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">+3.2%</span>
              </div>
              <p className="text-3xl font-bold">$32,486.75</p>
              <p className="text-gray-400 text-sm mt-1">Updated just now</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Harmony Score</h3>
                <span className="text-xs px-2 py-1 rounded bg-blue-900 text-blue-400">Good</span>
              </div>
              <p className="text-3xl font-bold">78/100</p>
              <p className="text-gray-400 text-sm mt-1">Balanced composition</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Market Sentiment</h3>
                <span className="text-xs px-2 py-1 rounded bg-yellow-900 text-yellow-400">Neutral</span>
              </div>
              <p className="text-3xl font-bold">52/100</p>
              <p className="text-gray-400 text-sm mt-1">Slightly bullish</p>
            </div>
          </div>
          
          {/* Assets Table */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-6">
              <h3 className="font-medium text-lg">Portfolio Assets</h3>
              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add Asset</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 bg-opacity-50 text-left">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Asset</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">24h</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Allocation</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Musical Note</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {portfolioData.map(asset => (
                    <tr key={asset.id} className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full ${asset.color} flex items-center justify-center mr-3`}>
                            <span className="font-bold text-xs">{asset.ticker.substring(0, 2)}</span>
                          </div>
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-gray-400 text-sm">{asset.ticker}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={asset.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                          {asset.change >= 0 ? '+' : ''}{asset.change}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${asset.color}`} 
                            style={{ width: `${asset.allocation}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 mt-1">{asset.allocation}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">{asset.note}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
};

export default SonikastApp;