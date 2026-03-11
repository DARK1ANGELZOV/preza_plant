"use client"

import Image from "next/image"

export function CoverSection() {
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Hero Image Background with Strong Blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-seedling.jpg"
          alt="Seedling with digital neural glow"
          fill
          className="object-cover blur-sm"
          priority
        />
        {/* Strong dark overlay for depth */}
        <div className="absolute inset-0 bg-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
      </div>
      
      {/* Neural network animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.03]" />
        {/* Glowing nodes at grid intersections */}
        <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-emerald-500/40 animate-pulse" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />
        <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-emerald-500/30 animate-pulse" style={{ animationDelay: '0.5s', boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)' }} />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 rounded-full bg-emerald-500/50 animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }} />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Badge - Glass Effect */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl mb-10" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.1)' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }} />
          <span className="font-mono text-xs text-[#71717a] tracking-wider uppercase">{"v0.8.2-beta | Deep-Tech Phenotyping"}</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-[-0.04em] mb-6 text-balance bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent leading-none">
          {"PlantVision AI"}
        </h1>
        
        {/* Subtitle with neural glow */}
        <p 
          className="text-3xl sm:text-4xl lg:text-5xl text-emerald-500 max-w-3xl mx-auto mb-8 font-medium tracking-wide"
          style={{ textShadow: '0 0 50px rgba(16, 185, 129, 0.6), 0 0 100px rgba(16, 185, 129, 0.3)' }}
        >
          {"Измеряем рост жизни"}
        </p>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[#a1a1aa] max-w-2xl mx-auto">
          {"AI-платформа для анализа роста растений через фотографию"}
        </p>
        
        {/* Tech badges - Glass Bento style */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          <span className="font-mono text-sm px-5 py-2.5 rounded-full bg-[#0a0a0a]/70 backdrop-blur-xl border border-emerald-500/40 text-emerald-500" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)' }}>
            {"YOLO Segmentation"}
          </span>
          <span className="font-mono text-sm px-5 py-2.5 rounded-full bg-[#0a0a0a]/70 backdrop-blur-xl border border-emerald-500/20 text-[#a1a1aa]">
            {"ChArUco Calibration"}
          </span>
          <span className="font-mono text-sm px-5 py-2.5 rounded-full bg-[#0a0a0a]/70 backdrop-blur-xl border border-emerald-500/20 text-[#a1a1aa]">
            {"Trust Scoring"}
          </span>
        </div>
      </div>
    </section>
  )
}
