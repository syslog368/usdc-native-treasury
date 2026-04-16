'use client';

import React, { useState } from 'react';

export default function ArcAgentDashboard() {
  const [jobStatus, setJobStatus] = useState('Offered');

  // Simulate ERC-8183 Flow
  const handleFundJob = () => setJobStatus('Funded (Escrowed)');
  const handleCompleteJob = () => setJobStatus('Completed (Evaluated)');

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans p-10">
      <header className="max-w-4xl mx-auto border-b border-neutral-800 pb-8 mb-12">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Agentic Economy Dashboard</h1>
        <p className="text-neutral-400 text-lg">
          Powered by Arc Testnet & ERC-8183 Standard
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Network Status Panel */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Network Connectivity</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-400">Chain:</span>
              <span className="text-green-400 font-mono">Arc Testnet</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-400">Native Gas:</span>
              <span className="font-mono">USDC (~$0.01)</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-neutral-400">Finality:</span>
              <span className="font-mono">&lt; 1 Second</span>
            </div>
          </div>
        </div>

        {/* ERC-8183 Job Simulator Panel */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">ERC-8183 Job Escrow</h2>
          <div className="mb-6">
            <p className="text-neutral-400 text-sm mb-1">Current Job Status:</p>
            <p className="text-2xl font-bold text-white">{jobStatus}</p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              onClick={handleFundJob}
              disabled={jobStatus !== 'Offered'}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-neutral-200 disabled:opacity-50 transition"
            >
              Fund Job Escrow (USDC)
            </button>
            <button 
              onClick={handleCompleteJob}
              disabled={jobStatus !== 'Funded (Escrowed)'}
              className="w-full border border-neutral-600 text-white py-3 rounded-lg font-semibold hover:border-white disabled:opacity-50 transition"
            >
              Execute Evaluator & Settle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
