'use client';
import React from 'react';

const Portfolio = () => {
  const compositions = [
    { id: 1, title: 'Bull Market Symphony', genre: 'Classical', date: 'Feb 12, 2025', color: 'bg-blue-500' },
    { id: 2, title: 'DeFi Nocturne', genre: 'Jazz', date: 'Mar 3, 2025', color: 'bg-purple-500' },
    { id: 3, title: 'Altcoin Concerto', genre: 'Electronic', date: 'Jan 20, 2025', color: 'bg-green-500' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-white mb-4">My Portfolio</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compositions.map((comp) => (
          <div key={comp.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${comp.color} rounded-full`}></div>
              <div>
                <h3 className="text-lg font-semibold">{comp.title}</h3>
                <p className="text-sm text-gray-400">{comp.genre} • {comp.date}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Play
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
