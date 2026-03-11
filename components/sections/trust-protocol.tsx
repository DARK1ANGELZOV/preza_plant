"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2, AlertTriangle, XCircle, Gauge } from "lucide-react"

const modes = [
  {
    id: "valid",
    label: "Валидно",
    sublabel: "ChArUco Calibrated",
    color: "#22c55e",
    icon: CheckCircle2,
    score: 94,
    description: "Высокая достоверность с калиброванными измерениями через ChArUco-маркеры"
  },
  {
    id: "estimated",
    label: "Оценочно",
    sublabel: "Interpolated",
    color: "#f59e0b",
    icon: AlertTriangle,
    score: 72,
    description: "Частичное перекрытие маркеров — применена пространственная интерполяция"
  },
  {
    id: "warning",
    label: "Требует проверки",
    sublabel: "Low Confidence",
    color: "#ef4444",
    icon: XCircle,
    score: 38,
    description: "Недостаточная достоверность — рекомендуется ручная верификация результатов"
  }
]

export function TrustProtocolSection() {
  const [activeMode, setActiveMode] = useState("valid")
  const currentMode = modes.find(m => m.id === activeMode) || modes[0]
  
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Laser Grid Laboratory */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-laser.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 09 — Доверие"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center text-balance tracking-tighter bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"Trust Score Protocol"}
        </h2>
        <p className="text-lg text-[#a1a1aa] mb-8 text-center max-w-2xl mx-auto">
          {"Интерпретируемый AI: каждое измерение сопровождается индексом достоверности"}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Racing Dashboard Style Gauge Widget */}
          <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 60px rgba(16, 185, 129, 0.1)' }}>
            {/* Mode Toggle - Glass Style */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-emerald-500/20 mb-6">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex-1 px-3 py-2 rounded-lg font-mono text-xs transition-all ${
                    activeMode === mode.id 
                      ? 'text-[#050505] font-bold' 
                      : 'text-[#71717a] hover:text-[#f8fafc]'
                  }`}
                  style={{ 
                    backgroundColor: activeMode === mode.id ? mode.color : 'transparent',
                    boxShadow: activeMode === mode.id ? `0 0 20px ${mode.color}50` : 'none'
                  }}
                >
                  {mode.label}
                </button>
              ))}
            </div>
            
            {/* Racing Dashboard Gauge */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52">
                {/* Outer glow ring */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{ 
                    boxShadow: `0 0 40px ${currentMode.color}, 0 0 80px ${currentMode.color}40`
                  }}
                />
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background track */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#1a1a1a" strokeWidth="6" />
                  {/* Tick marks */}
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="12"
                      x2="50"
                      y2="16"
                      stroke="#334155"
                      strokeWidth="1"
                      transform={`rotate(${i * 26.4} 50 50)`}
                    />
                  ))}
                  {/* Progress arc with glow */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={currentMode.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${currentMode.score * 2.64} 264`}
                    className="transition-all duration-700"
                    style={{ filter: `drop-shadow(0 0 12px ${currentMode.color})` }}
                  />
                </svg>
                {/* Center display - Dashboard style */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Gauge 
                    className="w-6 h-6 mb-1 transition-colors duration-300"
                    style={{ color: currentMode.color }}
                  />
                  <span 
                    className="text-5xl sm:text-6xl font-bold font-mono transition-colors duration-300"
                    style={{ 
                      color: currentMode.color,
                      textShadow: `0 0 30px ${currentMode.color}80`
                    }}
                  >
                    {currentMode.score}
                  </span>
                  <span className="text-[10px] text-[#71717a] uppercase tracking-widest mt-1">{"TRUST SCORE"}</span>
                </div>
              </div>
            </div>
            
            {/* Status LED Panel - Racing telemetry style */}
            <div 
              className="p-4 rounded-xl border backdrop-blur-xl transition-all duration-300"
              style={{ 
                borderColor: `${currentMode.color}40`,
                backgroundColor: `${currentMode.color}08`,
                boxShadow: `inset 0 0 30px ${currentMode.color}10`
              }}
            >
              <div className="flex items-center gap-3 mb-1">
                {/* Glowing LED indicator */}
                <div 
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: currentMode.color,
                    boxShadow: `0 0 15px ${currentMode.color}, 0 0 30px ${currentMode.color}80`
                  }}
                />
                <span 
                  className="font-mono text-sm font-bold uppercase transition-colors duration-300"
                  style={{ color: currentMode.color }}
                >
                  {currentMode.label} — {currentMode.sublabel}
                </span>
              </div>
              <p className="text-sm text-[#a1a1aa] ml-6">{currentMode.description}</p>
            </div>
          </div>
          
          {/* Mode Cards - Glass Bento Style */}
          <div className="space-y-3">
            {modes.map((mode) => (
              <div 
                key={mode.id}
                className="p-5 rounded-2xl border backdrop-blur-xl cursor-pointer transition-all duration-300"
                style={{
                  borderColor: activeMode === mode.id ? `${mode.color}50` : 'rgba(16, 185, 129, 0.2)',
                  backgroundColor: activeMode === mode.id ? `${mode.color}08` : 'rgba(10, 10, 10, 0.5)',
                  boxShadow: activeMode === mode.id ? `0 0 40px ${mode.color}15` : 'none'
                }}
                onClick={() => setActiveMode(mode.id)}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative backdrop-blur-xl"
                    style={{ 
                      backgroundColor: `${mode.color}15`,
                      border: `1px solid ${mode.color}30`
                    }}
                  >
                    <mode.icon className="w-5 h-5" style={{ color: mode.color }} />
                    {/* Glowing LED indicator */}
                    <div 
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: mode.color,
                        boxShadow: activeMode === mode.id ? `0 0 12px ${mode.color}` : 'none'
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#f8fafc]">{mode.label}</h3>
                    <p className="text-sm text-[#71717a]">{mode.sublabel}</p>
                  </div>
                  <div 
                    className="font-mono text-3xl font-bold transition-all duration-300"
                    style={{ 
                      color: mode.color,
                      textShadow: activeMode === mode.id ? `0 0 20px ${mode.color}60` : 'none'
                    }}
                  >
                    {mode.score}%
                  </div>
                </div>
              </div>
            ))}
            
            {/* ChArUco Calibration Info */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-[#0a0a0a]/50 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }} />
                <span className="font-mono text-xs text-emerald-500 uppercase tracking-wider">{"ChArUco Calibration"}</span>
              </div>
              <p className="text-xs text-[#a1a1aa]">
                {"Субмиллиметровая точность через калибровочные маркеры OpenCV ChArUco для преобразования px → mm"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
