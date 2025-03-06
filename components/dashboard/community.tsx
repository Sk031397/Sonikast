'use client';
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Community = () => {
  const discussions = [
    {
      id: 1,
      user: 'JaneDoe',
      avatar: 'JD',
      topic: 'Best open-source UI libraries?',
      replies: 12,
      likes: 30,
    },
    {
      id: 2,
      user: 'TechWizard',
      avatar: 'TW',
      topic: 'Looking for contributors to my AI project!',
      replies: 8,
      likes: 22,
    },
    {
      id: 3,
      user: 'DevGeek',
      avatar: 'DG',
      topic: 'How to optimize React performance?',
      replies: 15,
      likes: 40,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Community</h2>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Start a Discussion</h3>
        <Textarea placeholder="Share your thoughts or ask a question..." className="mb-3" />
        <Button variant="default">Post</Button>
      </div>

      <div className="grid gap-6">
        {discussions.map((post) => (
          <Card key={post.id} className="bg-gray-800 shadow-md">
            <CardHeader className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center text-white font-bold rounded-full">
                {post.avatar}
              </div>
              <div>
                <h3 className="font-semibold">{post.user}</h3>
                <p className="text-sm text-gray-400">{post.topic}</p>
              </div>
            </CardHeader>

            <CardContent className="flex justify-between text-gray-300">
              <span>{post.replies} Replies</span>
              <span>❤️ {post.likes}</span>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button variant="secondary">Comment</Button>
              <Button variant="default">Like</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;
