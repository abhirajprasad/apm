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
            APM
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
              The Engine That Doesn&apos;t Just Predict — It Drives Reality
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
                Explore Markets
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>

            {/* Comparison Section */}
            <div className="w-full max-w-5xl mx-auto pt-12 md:pt-16">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Traditional Prediction Markets */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <h3 className="text-lg md:text-xl font-semibold text-white/70">Traditional Prediction Markets</h3>
                  </div>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed">
                    You&apos;re a <span className="text-white/70 font-medium">spectator</span> forecasting what might happen.
                  </p>
                </div>

                {/* APM */}
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">APM</h3>
                  </div>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    You&apos;re a <span className="text-cyan-400 font-semibold">participant</span> in the outcome: you stake, you act, you co-create real-world results.
                  </p>
                </div>
              </div>
            </div>

            {/* How APM Works Section */}
            <div className="w-full max-w-6xl mx-auto pt-16 md:pt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Here&apos;s How APM Flips the Script
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Point 1 */}
                <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    Cheap YES isn&apos;t a gamble
                  </h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    It&apos;s a <span className="text-cyan-400 font-semibold">rallying cry</span>: we incentivize early belief so action follows conviction.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    Prediction becomes propulsion
                  </h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Markets don&apos;t just whisper probabilities — they generate the <span className="text-purple-400 font-semibold">momentum</span> to achieve the target.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    Participants aren&apos;t guessing — they&apos;re doing
                  </h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Buying YES means you <span className="text-cyan-400 font-semibold">help achieve</span> the outcome you bet on — and profit when it happens.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    The future isn&apos;t predicted — it&apos;s purchased
                  </h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    With APM, the future isn&apos;t predicted — it&apos;s <span className="text-purple-400 font-semibold">purchased into existence</span>.
                  </p>
                </div>
              </div>
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
