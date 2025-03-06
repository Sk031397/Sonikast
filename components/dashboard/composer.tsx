'use client';
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Play, StopCircle, PlusCircle, Trash } from 'lucide-react';

const Composer = () => {
  const [tracks, setTracks] = useState([{ id: 1, name: 'New Track', volume: 50 }]);
  const [isPlaying, setIsPlaying] = useState(false);

  const addTrack = () => {
    const newTrack = { id: tracks.length + 1, name: `Track ${tracks.length + 1}`, volume: 50 };
    setTracks([...tracks, newTrack]);
  };

  const removeTrack = (id:number) => {
    setTracks(tracks.filter(track => track.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sonic Composer</h2>
      
      <div className="flex items-center space-x-4 mb-6">
        <Button onClick={() => setIsPlaying(!isPlaying)} className="bg-blue-600 hover:bg-blue-700">
          {isPlaying ? <StopCircle className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span className="ml-2">{isPlaying ? 'Stop' : 'Play'}</span>
        </Button>
        <Button onClick={addTrack} className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="w-5 h-5" />
          <span className="ml-2">Add Track</span>
        </Button>
      </div>

      <div className="space-y-4">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <span>{track.name}</span>
            <Slider defaultValue={[track.volume]} max={100} step={1} className="w-40" />
            <Button onClick={() => removeTrack(track.id)} className="bg-red-600 hover:bg-red-700">
              <Trash className="w-5 h-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Composer;
