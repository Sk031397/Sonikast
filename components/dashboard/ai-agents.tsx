'use client';
import { Plus, Play, Pause, Edit, Trash2, Zap, ChevronDown, RotateCw, Bell } from 'lucide-react';
import React, { useState } from 'react';

// Define TypeScript interfaces for our data structures
interface AIAgent {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'error';
  type: 'trader' | 'analyzer' | 'notifier';
  lastRun: string;
  performance: number;
  confidence: number;
}

const AIAgentsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAgent, setExpandedAgent] = useState<number | null>(null);
  
  // Sample AI agents data
  const aiAgents: AIAgent[] = [
    { 
      id: 1, 
      name: 'Market Sentiment Analyzer', 
      description: 'Analyzes market trends and predicts potential price movements based on sentiment analysis of news and social media.',
      status: 'active', 
      type: 'analyzer',
      lastRun: '10 minutes ago',
      performance: 85,
      confidence: 72
    },
    { 
      id: 2, 
      name: 'Volatility Guardian', 
      description: 'Monitors portfolio for unusual volatility and automatically adjusts positions to maintain target risk levels.',
      status: 'active', 
      type: 'trader',
      lastRun: '35 minutes ago',
      performance: 92,
      confidence: 88
    },
    { 
      id: 3, 
      name: 'Earnings Report Alert', 
      description: 'Sends notifications about upcoming earnings reports and analyzes results against expectations.',
      status: 'paused', 
      type: 'notifier',
      lastRun: '2 days ago',
      performance: 79,
      confidence: 81
    },
    { 
      id: 4, 
      name: 'Arbitrage Scout', 
      description: 'Identifies price discrepancies across exchanges and suggests potential arbitrage opportunities.',
      status: 'error', 
      type: 'trader',
      lastRun: '6 hours ago',
      performance: 63,
      confidence: 45
    }
  ];
  
  const filteredAgents = selectedCategory === 'all' 
    ? aiAgents 
    : aiAgents.filter(agent => agent.type === selectedCategory);
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-600 text-green-100';
      case 'paused': return 'bg-yellow-600 text-yellow-100';
      case 'error': return 'bg-red-600 text-red-100';
      default: return 'bg-gray-600 text-gray-100';
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'trader': return <Zap className="w-4 h-4 text-purple-400" />;
      case 'analyzer': return <RotateCw className="w-4 h-4 text-blue-400" />;
      case 'notifier': return <Bell className="w-4 h-4 text-yellow-400" />;
      default: return null;
    }
  };
  
  const toggleAgentExpansion = (id: number) => {
    if (expandedAgent === id) {
      setExpandedAgent(null);
    } else {
      setExpandedAgent(id);
    }
  };

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">AI Agents</h1>
        <p className="text-gray-400">Manage your automated financial assistants</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Active Agents</h3>
            <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">2 Running</span>
          </div>
          <p className="text-3xl font-bold">2/4</p>
          <p className="text-gray-400 text-sm mt-1">50% utilization</p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Agent Performance</h3>
            <span className="text-xs px-2 py-1 rounded bg-blue-900 text-blue-400">Good</span>
          </div>
          <p className="text-3xl font-bold">79.8%</p>
          <p className="text-gray-400 text-sm mt-1">Avg success rate</p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Trading Volume</h3>
            <span className="text-xs px-2 py-1 rounded bg-purple-900 text-purple-400">Automated</span>
          </div>
          <p className="text-3xl font-bold">$4,328</p>
          <p className="text-gray-400 text-sm mt-1">Last 24 hours</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-4">
            <h3 className="font-medium text-lg">Your Agents</h3>
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button 
                className={`px-3 py-1 text-sm rounded-md transition ${selectedCategory === 'all' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-md transition ${selectedCategory === 'trader' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setSelectedCategory('trader')}
              >
                Traders
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-md transition ${selectedCategory === 'analyzer' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setSelectedCategory('analyzer')}
              >
                Analyzers
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-md transition ${selectedCategory === 'notifier' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setSelectedCategory('notifier')}
              >
                Notifiers
              </button>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            <Plus className="w-5 h-5" />
            <span>Create Agent</span>
          </button>
        </div>
        
        {/* Agents List */}
        <div className="px-6 pb-6 space-y-4">
          {filteredAgents.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p>No agents found in this category</p>
            </div>
          ) : (
            filteredAgents.map(agent => (
              <div key={agent.id} className="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${agent.type === 'trader' ? 'bg-purple-900' : agent.type === 'analyzer' ? 'bg-blue-900' : 'bg-yellow-900'}`}>
                      {getTypeIcon(agent.type)}
                    </div>
                    <div>
                      <h4 className="font-medium">{agent.name}</h4>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(agent.status)}`}>
                          {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                        </span>
                        <span className="text-gray-400 text-xs">Last run: {agent.lastRun}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {agent.status === 'active' ? (
                      <button className="p-2 text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition">
                        <Pause className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-2 text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition">
                        <Play className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-2 text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition"
                      onClick={() => toggleAgentExpansion(agent.id)}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedAgent === agent.id ? 'transform rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                
                {expandedAgent === agent.id && (
                  <div className="p-4 border-t border-gray-600 bg-gray-800">
                    <p className="text-gray-300 mb-4">{agent.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Performance Score</p>
                        <div className="h-2 bg-gray-700 rounded-full mb-1">
                          <div 
                            className={`h-2 rounded-full ${agent.performance > 80 ? 'bg-green-500' : agent.performance > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${agent.performance}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>{agent.performance}%</span>
                          <span>Goal: 90%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Confidence Level</p>
                        <div className="h-2 bg-gray-700 rounded-full mb-1">
                          <div 
                            className={`h-2 rounded-full ${agent.confidence > 80 ? 'bg-green-500' : agent.confidence > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${agent.confidence}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>{agent.confidence}%</span>
                          <span>Threshold: 75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
                        View Activity Log
                      </button>
                      <button className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded transition">
                        Configure Parameters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAgentsTab;