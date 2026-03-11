"use client"

import Image from "next/image"
import { Sprout, ArrowRight } from "lucide-react"

export function FooterSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Elegant Glow */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-footer.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>
      
      <div className="max-w-4xl mx-auto w-full text-center px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 15 — Контакты"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)' }}>
            <Sprout className="w-8 h-8 text-emerald-500" />
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"PlantVision AI"}
        </h2>
        
        <p className="text-lg text-[#71717a] mb-10 max-w-xl mx-auto">
          Precision Agriculture Technology
        </p>
        
        {/* CTA Button */}
        <button className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-emerald-500 text-[#050505] font-bold text-lg hover:bg-emerald-400 transition-colors">
          Начать анализ
          <ArrowRight className="w-5 h-5" />
        </button>
        
        {/* Version */}
        <div className="mt-10">
          <span className="font-mono text-xs px-4 py-2 rounded-full border border-emerald-500/20 bg-[#0a0a0a] text-[#71717a]">
            v0.8.2-beta | Deep-Tech Phenotyping
          </span>
        </div>
        
        {/* Footer Links */}
        <div className="mt-10 pt-6 border-t border-emerald-500/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#71717a]">
            <a href="#" className="hover:text-[#f8fafc] transition-colors">Документация</a>
            <a href="#" className="hover:text-[#f8fafc] transition-colors">API Reference</a>
            <a href="#" className="hover:text-[#f8fafc] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#f8fafc] transition-colors">Контакты</a>
          </div>
          
          <p className="mt-6 text-xs text-[#71717a]">
            © 2026 PlantVision AI. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  )
}
