"use client"

import Image from "next/image"

const pipelineNodes = [
  { id: "quality", label: "Контроль качества", sublabel: "QA Check", color: "#10B981" },
  { id: "scale", label: "Калибровка", sublabel: "ChArUco", color: "#06b6d4" },
  { id: "yolo", label: "Сегментация", sublabel: "YOLO v11", color: "#8b5cf6" },
  { id: "morpho", label: "Морфометрия", sublabel: "px → mm", color: "#f59e0b" },
  { id: "phi", label: "PHI-индекс", sublabel: "Health Score", color: "#22c55e" },
]

export function PipelineSection() {
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Neural Network Data Flow */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-neural.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 06 — AI Pipeline"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center text-balance tracking-tighter bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"End-to-End Inference Pipeline"}
        </h2>
        <p className="text-base sm:text-lg text-[#a1a1aa] mb-10 text-center max-w-2xl mx-auto">
          {"Интерпретируемый AI с детерминированной морфометрической экстракцией"}
        </p>
        
        {/* Glowing Data Flow Visualization */}
        <div className="rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden" style={{ boxShadow: '0 0 60px rgba(16, 185, 129, 0.1)' }}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
          
          {/* Pipeline Flow with glowing connections */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
            {pipelineNodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                {/* Node */}
                <div 
                  className="relative flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl backdrop-blur-xl transition-all hover:scale-105"
                  style={{ 
                    border: `1px solid ${node.color}40`,
                    backgroundColor: `${node.color}08`,
                    boxShadow: `0 0 40px ${node.color}20`
                  }}
                >
                  {/* Glowing orb */}
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center relative"
                    style={{ 
                      backgroundColor: `${node.color}15`,
                      boxShadow: `0 0 30px ${node.color}40, inset 0 0 20px ${node.color}15`
                    }}
                  >
                    <span 
                      className="font-mono text-xl sm:text-2xl font-bold"
                      style={{ color: node.color, textShadow: `0 0 15px ${node.color}` }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {/* Pulsing ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{ 
                        border: `2px solid ${node.color}40`,
                        boxShadow: `0 0 15px ${node.color}30`
                      }}
                    />
                  </div>
                  
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#f8fafc]">{node.label}</span>
                  <span 
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xl"
                    style={{ 
                      backgroundColor: `${node.color}15`,
                      color: node.color,
                      border: `1px solid ${node.color}30`,
                      boxShadow: `0 0 10px ${node.color}20`
                    }}
                  >
                    {node.sublabel}
                  </span>
                </div>
                
                {/* Glowing connection line with animated particle */}
                {index < pipelineNodes.length - 1 && (
                  <div className="flex items-center">
                    <div 
                      className="w-8 sm:w-12 lg:w-16 h-1 relative rounded-full overflow-hidden"
                      style={{ 
                        background: `linear-gradient(to right, ${node.color}, ${pipelineNodes[index + 1].color})`,
                        boxShadow: `0 0 15px ${node.color}60`
                      }}
                    >
                      {/* Animated glow particle */}
                      <div 
                        className="absolute top-0 bottom-0 w-3 rounded-full"
                        style={{ 
                          background: `linear-gradient(to right, transparent, white, transparent)`,
                          animation: 'flowParticle 2s ease-in-out infinite',
                          animationDelay: `${index * 0.3}s`
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Technical Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {['Python 3.11', 'CUDA 12.x', 'Ultralytics YOLO', 'OpenCV', 'NumPy', 'ChArUco Calibration'].map((tech) => (
              <span 
                key={tech}
                className="font-mono text-[10px] sm:text-xs px-3 py-1.5 rounded-full backdrop-blur-xl"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.5)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#a1a1aa'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* API Endpoint */}
        <div className="flex items-center justify-center mt-6">
          <code 
            className="font-mono text-sm sm:text-base px-5 py-2.5 rounded-full backdrop-blur-xl"
            style={{ 
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.15)'
            }}
          >
            {"POST /api/analyze → JSON metrics + Overlay PNG"}
          </code>
        </div>
      </div>
      
      {/* CSS for flow particle animation */}
      <style jsx>{`
        @keyframes flowParticle {
          0% { left: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
