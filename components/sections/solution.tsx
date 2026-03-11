import Image from "next/image"
import { Camera, Bot, BarChart3, Sprout, ArrowRight, Layers, Ruler, Leaf, GitBranch } from "lucide-react"

export function SolutionSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Technology & Circuits */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-solution.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.02]" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 04 — Решение"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-balance tracking-tighter leading-none bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"PlantVision AI"}
        </h2>
        
        <p className="text-xl sm:text-2xl text-[#a1a1aa] mb-12 max-w-2xl mx-auto">
          {"Сегментация органов. Перевод пикселей в миллиметры."}
        </p>
        
        {/* Visual Pipeline */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12 flex-wrap">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/70 backdrop-blur-xl flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.05)' }}>
              <Camera className="w-10 h-10 sm:w-11 sm:h-11 text-[#71717a]" />
            </div>
            <span className="font-mono text-sm text-[#71717a]">{"Фото"}</span>
          </div>
          
          <ArrowRight className="w-8 h-8 text-emerald-500" style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }} />
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-emerald-500/50 bg-emerald-500/10 backdrop-blur-xl flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.25)' }}>
              <Bot className="w-10 h-10 sm:w-11 sm:h-11 text-emerald-500" />
            </div>
            <span className="font-mono text-sm text-emerald-500">{"AI-модель"}</span>
          </div>
          
          <ArrowRight className="w-8 h-8 text-emerald-500" style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }} />
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/70 backdrop-blur-xl flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.05)' }}>
              <BarChart3 className="w-10 h-10 sm:w-11 sm:h-11 text-[#71717a]" />
            </div>
            <span className="font-mono text-sm text-[#71717a]">{"Метрики"}</span>
          </div>
          
          <ArrowRight className="w-8 h-8 text-emerald-500" style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }} />
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/70 backdrop-blur-xl flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.05)' }}>
              <Sprout className="w-10 h-10 sm:w-11 sm:h-11 text-[#22c55e]" />
            </div>
            <span className="font-mono text-sm text-[#71717a]">{"Инсайты"}</span>
          </div>
        </div>
        
        {/* Features Row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Layers className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-[#f8fafc]">{"Сегментация"}</p>
              <p className="text-sm text-[#a1a1aa]">{"Instance isolation"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Ruler className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-[#f8fafc]">{"Измерение"}</p>
              <p className="text-sm text-[#a1a1aa]">{"px → mm"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Bot className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-[#f8fafc]">{"Интерпретация"}</p>
              <p className="text-sm text-[#a1a1aa]">{"AI-инсайты"}</p>
            </div>
          </div>
        </div>
        
        {/* Supported Parts */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-base text-[#a1a1aa]">{"Поддерживается:"}</span>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl">
            <GitBranch className="w-5 h-5 text-emerald-500" />
            <span className="text-base text-[#f8fafc]">{"Корень"}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl">
            <Sprout className="w-5 h-5 text-emerald-500" />
            <span className="text-base text-[#f8fafc]">{"Стебель"}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl">
            <Leaf className="w-5 h-5 text-emerald-500" />
            <span className="text-base text-[#f8fafc]">{"Листья"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
