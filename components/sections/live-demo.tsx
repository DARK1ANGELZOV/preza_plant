"use client"

import Image from "next/image"

export function LiveDemoSection() {
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Full-bleed Background Plant Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/plant-specimen.jpg"
          alt="Plant specimen under analysis"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />
      </div>
      
      {/* Digital Scanner Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Corner Brackets - UI Frame */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-emerald-500" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-emerald-500" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-emerald-500" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-emerald-500" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />
        
        {/* Animated Scanning Lines */}
        <div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse"
          style={{ 
            top: '30%',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4)'
          }}
        />
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse"
          style={{ top: '50%', animationDelay: '0.5s' }}
        />
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-pulse"
          style={{ top: '70%', animationDelay: '1s' }}
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-[0.03]" />
        
        {/* Glowing Detection Points on Leaves */}
        <div className="absolute top-[25%] left-[35%] w-3 h-3 rounded-full bg-emerald-500 animate-ping" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 1)' }} />
        <div className="absolute top-[30%] left-[55%] w-2 h-2 rounded-full bg-emerald-500 animate-ping" style={{ animationDelay: '0.3s', boxShadow: '0 0 15px rgba(16, 185, 129, 0.8)' }} />
        <div className="absolute top-[35%] left-[45%] w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" style={{ animationDelay: '0.6s', boxShadow: '0 0 18px rgba(16, 185, 129, 0.9)' }} />
        
        {/* Glowing Points on Root */}
        <div className="absolute bottom-[30%] left-[45%] w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" style={{ animationDelay: '0.2s', boxShadow: '0 0 15px rgba(245, 158, 11, 0.8)' }} />
        <div className="absolute bottom-[25%] left-[50%] w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-ping" style={{ animationDelay: '0.5s', boxShadow: '0 0 18px rgba(245, 158, 11, 0.9)' }} />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* Section Label - Top Left */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 05 — Интерфейс"}</span>
        </div>
        
        {/* Title - Top Center */}
        <div className="text-center mb-auto pt-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
            {"Цифровой сканер"}
          </h2>
          <p className="text-lg text-[#a1a1aa] mt-2">
            {"AI-сегментация с субпиксельной точностью"}
          </p>
        </div>
        
        {/* Floating Metric Widgets */}
        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 space-y-4">
          {/* Root Widget */}
          <div 
            className="p-4 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#f59e0b]/40 min-w-[160px]"
            style={{ boxShadow: '0 0 40px rgba(245, 158, 11, 0.15)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#a1a1aa]">{"Корень"}</span>
              <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" style={{ boxShadow: '0 0 10px rgba(245, 158, 11, 1)' }} />
            </div>
            <p className="text-4xl font-bold font-mono text-[#f59e0b]" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}>
              {"58"}<span className="text-lg text-[#a1a1aa]">{"мм"}</span>
            </p>
          </div>
          
          {/* Stem Widget */}
          <div 
            className="p-4 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-emerald-500/40 min-w-[160px]"
            style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#a1a1aa]">{"Стебель"}</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 1)' }} />
            </div>
            <p className="text-4xl font-bold font-mono text-emerald-500" style={{ textShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}>
              {"41"}<span className="text-lg text-[#a1a1aa]">{"мм"}</span>
            </p>
          </div>
          
          {/* Trust Score Widget */}
          <div 
            className="p-4 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-emerald-500/50 min-w-[160px]"
            style={{ boxShadow: '0 0 50px rgba(16, 185, 129, 0.2)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#a1a1aa]">{"Точность"}</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 5px rgba(16, 185, 129, 1)' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 5px rgba(16, 185, 129, 1)' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 5px rgba(16, 185, 129, 1)' }} />
              </div>
            </div>
            <p className="text-4xl font-bold font-mono text-emerald-500" style={{ textShadow: '0 0 25px rgba(16, 185, 129, 0.6)' }}>
              {"94"}<span className="text-lg">%</span>
            </p>
            <div className="mt-2 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
              <div className="h-full w-[94%] rounded-full bg-emerald-500" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }} />
            </div>
          </div>
        </div>
        
        {/* Detection Labels - Left side */}
        <div className="absolute top-[30%] left-12 space-y-3">
          <div 
            className="px-4 py-2 rounded-lg bg-emerald-500 text-[#050505] font-mono text-sm font-bold"
            style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)' }}
          >
            {"ЛИСТЬЯ"}
          </div>
          <div 
            className="px-4 py-2 rounded-lg bg-[#f59e0b] text-[#050505] font-mono text-sm font-bold"
            style={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.6)' }}
          >
            {"КОРЕНЬ"}
          </div>
        </div>
        
        {/* Bottom Status Bar */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 1)' }} />
              <span className="font-mono text-sm text-emerald-500">{"АНАЛИЗ АКТИВЕН"}</span>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-[#71717a]">
            <span>{"FPS: 60"}</span>
            <span>{"Latency: 12ms"}</span>
            <span>{"Model: YOLOv11-seg"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
