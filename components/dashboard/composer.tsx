'use client';
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Play, StopCircle, PlusCircle, Trash } from 'lucide-react';

const Composer = () => {
  const [tracks, setTracks] = useState([{ id: 1, name: 'New Track', volume: 50 }]);
  const [isPlaying, setIsPlaying] = useState(false);

  const addTrack = () => {
    setTracks((prevTracks) => [
      ...prevTracks,
      { id: prevTracks.length + 1, name: `Track ${prevTracks.length + 1}`, volume: 50 },
    ]);
  };

  const removeTrack = (id:number) => {
    setTracks((prevTracks) => prevTracks.filter(track => track.id !== id));
  };

  return (
    <div className='flex-1 p-6'>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Sonic Composer</h1>
        <p className="text-gray-400">Create, manage, and fine-tune your tracks with ease.</p>
      </div>
      <div className="flex space-x-4 mb-6">
        <Button onClick={() => setIsPlaying(!isPlaying)} className="bg-blue-600 hover:bg-blue-700">
          {isPlaying ? <StopCircle className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span className="ml-2">{isPlaying ? 'Stop' : 'Play'}</span>
        </Button>
        <Button onClick={addTrack} className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="w-5 h-5" />
          <span className="ml-2">Add Track</span>
        </Button>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[70vh]">
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
