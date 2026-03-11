import Image from "next/image"
import { Smartphone, Plane, Globe } from "lucide-react"

const roadmapItems = [
  {
    icon: Smartphone,
    title: "Мобильное приложение",
    description: "Нативные iOS и Android приложения для сбора данных в полевых условиях",
    quarter: "Q2 2026",
    status: "in-progress"
  },
  {
    icon: Plane,
    title: "Дроны",
    description: "Обработка аэросъёмки для масштабного фенотипирования",
    quarter: "Q3 2026",
    status: "planned"
  },
  {
    icon: Globe,
    title: "Глобальная база данных",
    description: "Open access база морфометрических данных растений",
    quarter: "Q4 2026",
    status: "planned"
  }
]

export function RoadmapSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Drones in Field */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-roadmap.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 13 — Будущее"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center text-balance bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"Что дальше"}
        </h2>
        <p className="text-lg text-[#a1a1aa] mb-10 text-center max-w-2xl mx-auto">
          {"Расширяем границы автоматизированного анализа растений"}
        </p>
        
        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {roadmapItems.map((item) => (
            <div 
              key={item.title}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                item.status === 'in-progress' 
                  ? 'border-emerald-500/30 bg-emerald-500/5' 
                  : 'border-emerald-500/20 bg-[#0a0a0a]/50'
              }`}
            >
              {/* Quarter Badge */}
              <div className="absolute -top-3 right-5">
                <span className={`font-mono text-xs px-3 py-1 rounded-full border ${
                  item.status === 'in-progress'
                    ? 'border-emerald-500/30 bg-[#0a0a0a] text-emerald-500'
                    : 'border-emerald-500/20 bg-[#0a0a0a] text-[#71717a]'
                }`}>
                  {item.quarter}
                </span>
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${
                  item.status === 'in-progress' ? 'bg-emerald-500' : 'bg-[#334155]'
                }`} />
                <span className={`font-mono text-[10px] uppercase tracking-widest ${
                  item.status === 'in-progress' ? 'text-emerald-500' : 'text-[#71717a]'
                }`}>
                  {item.status === 'in-progress' ? 'В разработке' : 'Запланировано'}
                </span>
              </div>
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                item.status === 'in-progress'
                  ? 'bg-emerald-500/10 border border-emerald-500/20'
                  : 'bg-[#1a1a1a] border border-emerald-500/20'
              }`}>
                <item.icon className={`w-6 h-6 ${
                  item.status === 'in-progress' ? 'text-emerald-500' : 'text-[#71717a]'
                }`} />
              </div>
              
              <h3 className="text-lg font-bold text-[#f8fafc] mb-2">{item.title}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
