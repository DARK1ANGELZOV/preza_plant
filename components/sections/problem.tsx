import Image from "next/image"
import { Ruler, Clock, AlertTriangle, Keyboard } from "lucide-react"

export function ProblemSection() {
  return (
    <section 
      className="h-[100vh] min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Analog Dead-End with Strong Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-problem.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full text-center px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 02 — Проблема"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-balance leading-none tracking-tighter bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"Ручной анализ —"}
        </h2>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-10 text-balance leading-none tracking-tighter bg-gradient-to-r from-[#ef4444] to-[#f87171] bg-clip-text text-transparent">
          {"аналоговый тупик"}
        </h2>
        
        <p className="text-xl sm:text-2xl text-[#a1a1aa] mb-12 max-w-3xl mx-auto leading-relaxed">
          {"Традиционные методы фенотипирования не масштабируются для современных исследований и агропроизводства"}
        </p>
        
        {/* Pain Points Grid - Glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl border border-[#ef4444]/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-7 h-7 text-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{"Линейки"}</h3>
            <p className="text-sm text-[#a1a1aa]">{"Погрешность ±2мм и субъективность оператора"}</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-[#ef4444]/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center mx-auto mb-4">
              <Keyboard className="w-7 h-7 text-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{"Ручной ввод"}</h3>
            <p className="text-sm text-[#a1a1aa]">{"40% времени на транскрипцию данных"}</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-[#ef4444]/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{"Человеческий фактор"}</h3>
            <p className="text-sm text-[#a1a1aa]">{"Усталость искажает результаты"}</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-[#ef4444]/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.08)' }}>
            <div className="w-14 h-14 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{"Низкая скорость"}</h3>
            <p className="text-sm text-[#a1a1aa]">{"10-15 минут на один образец"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
