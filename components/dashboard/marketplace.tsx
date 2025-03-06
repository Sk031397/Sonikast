'use client';
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Marketplace = () => {
  const products = [
    { id: 1, name: 'OpenDev AI', category: 'Machine Learning', price: 'Free', color: 'bg-blue-500' },
    { id: 2, name: 'CryptoLedger', category: 'Blockchain', price: '$49', color: 'bg-green-500' },
    { id: 3, name: 'UI Kit Pro', category: 'Frontend', price: '$29', color: 'bg-purple-500' },
  ];

  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Marketplace</h1>
        <p className="text-gray-400">Discover a diverse selection of compositions available for purchase or licensing. Browse through unique pieces across various genres, each crafted with creativity and passion.</p>
      </div>
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-gray-800 shadow-md">
            <CardHeader className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${product.color} rounded-full`}></div>
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.category}</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-300">Price: <span className="font-semibold">{product.price}</span></p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button variant="default">View Details</Button>
              <Button variant="secondary">{product.price === 'Free' ? 'Download' : 'Buy'}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
