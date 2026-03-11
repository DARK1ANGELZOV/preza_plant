import Image from "next/image"
import { Dna, Ruler, Thermometer } from "lucide-react"

export function PrecisionAgricultureSection() {
  return (
    <section 
      className="h-[100vh] min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - DNA Spirals & Chloroplasts */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-dna.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full text-center px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 03 — Важность"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance tracking-tighter">
          <span className="bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">{"Precision Agriculture"}</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">{"требует количественных данных"}</span>
        </h2>
        
        <p className="text-xl text-[#a1a1aa] mb-12 max-w-3xl mx-auto leading-relaxed">
          {"Автономное фенотипирование — фундамент современной агробиотехнологии и селекционных программ"}
        </p>
        
        {/* Feature Cards - Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/60 backdrop-blur-xl text-left" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.05)' }}>
            <div className="w-14 h-14 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mb-5" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
              <Dna className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-3">{"Высокопроизводительное фенотипирование"}</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              {"Автоматизированная количественная оценка морфологических характеристик с субмиллиметровой точностью калибровки ChArUco"}
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/60 backdrop-blur-xl text-left" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.05)' }}>
            <div className="w-14 h-14 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mb-5" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
              <Ruler className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-3">{"Морфометрическая экстракция"}</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              {"Автоматическое извлечение геометрических параметров: длина корня, площадь листовой пластины, угол филлотаксиса"}
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/60 backdrop-blur-xl text-left" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.05)' }}>
            <div className="w-14 h-14 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mb-5" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
              <Thermometer className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-3">{"Адаптивная селекция"}</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              {"Мониторинг фенотипической пластичности в ответ на абиотические стрессы для идентификации устойчивых генотипов"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
