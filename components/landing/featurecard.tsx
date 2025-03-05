'use client';

import { ReactNode } from "react";

export const FeatureCard = ({ icon, title, description }:{ icon:ReactNode, title:string, description:string }) => (
    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
  