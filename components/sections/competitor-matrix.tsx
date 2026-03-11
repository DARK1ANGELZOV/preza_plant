import Image from "next/image"
import { Check, X, Minus } from "lucide-react"

const features = [
  { name: "Instance Segmentation", plantvision: true, imagej: false, rootnav: "partial" },
  { name: "Real-time анализ", plantvision: true, imagej: false, rootnav: false },
  { name: "Мульти-орган детекция", plantvision: true, imagej: false, rootnav: "partial" },
  { name: "Cloud API", plantvision: true, imagej: false, rootnav: false },
  { name: "Батч-обработка", plantvision: true, imagej: true, rootnav: true },
  { name: "Chat-интерфейс", plantvision: true, imagej: false, rootnav: false },
  { name: "Авто-калибровка", plantvision: true, imagej: false, rootnav: "partial" },
  { name: "PHI расчёт", plantvision: true, imagej: false, rootnav: false },
]

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-7 h-7 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-[#22c55e]" />
      </div>
    )
  }
  if (value === "partial") {
    return (
      <div className="w-7 h-7 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
        <Minus className="w-4 h-4 text-[#f59e0b]" />
      </div>
    )
  }
  return (
    <div className="w-7 h-7 rounded-full bg-[#ef4444]/10 flex items-center justify-center">
      <X className="w-4 h-4 text-[#ef4444]/50" />
    </div>
  )
}

export function CompetitorMatrixSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Data Analytics */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-competitor.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      <div className="max-w-5xl mx-auto w-full px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 10 — Сравнение"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center text-balance bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"PlantVision AI vs Конкуренты"}
        </h2>
        <p className="text-lg text-[#a1a1aa] mb-8 text-center max-w-2xl mx-auto">
          {"Преимущество: All-in-one AI"}
        </p>
        
        {/* Comparison Table with Glassmorphism */}
        <div className="rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-5 border-b border-emerald-500/20 bg-[#0a0a0a]">
            <div className="text-sm text-[#71717a]">Функция</div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-1">
                <span className="font-bold text-emerald-500">PlantVision</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500">All-in-One</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm text-[#f8fafc]">ImageJ</span>
            </div>
            <div className="text-center">
              <span className="text-sm text-[#f8fafc]">RootNav</span>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-emerald-500/10">
            {features.map((feature) => (
              <div key={feature.name} className="grid grid-cols-4 gap-4 p-4 items-center">
                <div className="text-sm text-[#f8fafc]">{feature.name}</div>
                <div className="flex justify-center">
                  <StatusIcon value={feature.plantvision} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon value={feature.imagej} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon value={feature.rootnav} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Row */}
          <div className="grid grid-cols-4 gap-4 p-5 border-t border-emerald-500/20 bg-[#0a0a0a]">
            <div className="text-sm text-[#71717a]">Покрытие</div>
            <div className="text-center">
              <span className="font-mono text-xl font-bold text-emerald-500">8/8</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-xl text-[#71717a]">1/8</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-xl text-[#71717a]">3/8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
