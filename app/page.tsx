'use client';

import Scene3D from '@/components/Scene3D';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0f]">
      {/* 3D Scene Background */}
      <div className="fixed inset-0 w-full h-full opacity-30">
        <Scene3D />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 md:px-12 py-8 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            APMA
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#markets" className="text-white/70 hover:text-white transition-colors">Markets</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          </nav>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20">
          <div className="w-full max-w-7xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Main Title */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                WORLD&apos;S FIRST
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Autonomous Prediction
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Market Agent
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Revolutionizing prediction markets with autonomous AI agents that create, manage, and optimize markets 24/7
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
                Explore Markets
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 w-full px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Autonomous AI</h3>
                <p className="text-white/60">Self-managing agents that create and optimize markets continuously</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
                <p className="text-white/60">Built on Solana for instant transactions and minimal fees</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Decentralized</h3>
                <p className="text-white/60">Fully on-chain, transparent, and trustless market operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm">Initializing markets...</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
