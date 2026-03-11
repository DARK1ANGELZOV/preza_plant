"use client"

import Image from "next/image"

export function FinalVisionSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Hero Image Background with Strong Blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-seedling.jpg"
          alt="Seedling with digital neural glow"
          fill
          className="object-cover blur-sm"
        />
        {/* Strong dark overlay for depth */}
        <div className="absolute inset-0 bg-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
      </div>
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 14 — Финал"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        {/* Large Statement with gradient */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-[-0.04em] text-balance mb-6 bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"PlantVision AI:"}
        </h2>
        <p 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-[-0.04em] text-balance bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent"
          style={{ filter: 'drop-shadow(0 0 60px rgba(16, 185, 129, 0.5))' }}
        >
          {"Измеряем рост жизни."}
        </p>
        
        <p className="text-2xl sm:text-3xl text-[#a1a1aa] mt-14 max-w-2xl mx-auto">
          {"Будущее науки о растениях — автоматизированное, точное и доступное для всех."}
        </p>
      </div>
    </section>
  )
}
