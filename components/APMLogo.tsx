'use client';

export default function APMLogo() {
  return (
    <div className="relative inline-flex items-center gap-2">
      {/* 3D Container with hover effect */}
      <div className="relative transform-gpu" style={{ perspective: '1000px' }}>
        <div className="relative transform-gpu transition-transform duration-500 hover:rotate-y-12" style={{ transformStyle: 'preserve-3d' }}>
          {/* Main Logo - 3D Box representing prediction market */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-cyan-500/40 rounded-lg blur-md"></div>
            
            {/* 3D Box */}
            <div 
              className="relative bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-cyan-500/30 backdrop-blur-sm border border-cyan-400/40 rounded-lg p-1.5 shadow-xl"
              style={{
                boxShadow: '0 8px 24px rgba(6, 182, 212, 0.3), 0 0 16px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transform: 'translateZ(8px)'
              }}
            >
              {/* Prediction Chart Icon */}
              <div className="relative w-6 h-6 flex items-end justify-center gap-0.5">
                {/* Chart bars with 3D depth */}
                <div 
                  className="w-1 bg-gradient-to-t from-cyan-400 to-cyan-600 rounded-t-sm h-2.5"
                  style={{ boxShadow: '0 -2px 4px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
                ></div>
                <div 
                  className="w-1 bg-gradient-to-t from-purple-400 to-purple-600 rounded-t-sm h-4"
                  style={{ boxShadow: '0 -2px 4px rgba(168, 85, 247, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
                ></div>
                <div 
                  className="w-1 bg-gradient-to-t from-cyan-400 to-cyan-600 rounded-t-sm h-3"
                  style={{ boxShadow: '0 -2px 4px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
                ></div>
                <div 
                  className="w-1 bg-gradient-to-t from-purple-400 to-purple-600 rounded-t-sm h-5"
                  style={{ boxShadow: '0 -2px 4px rgba(168, 85, 247, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
                ></div>
              </div>
              
              {/* Upward trend arrow */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2">
                <svg viewBox="0 0 10 10" fill="none" className="w-full h-full drop-shadow-lg">
                  <path
                    d="M5 1L8 6H2L5 1Z"
                    fill="url(#arrowGrad)"
                  />
                  <defs>
                    <linearGradient id="arrowGrad" x1="5" y1="1" x2="5" y2="6" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Label */}
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
        APM
      </span>
    </div>
  );
}
