import Image from "next/image"
import { Zap, Layers, Package, Shield } from "lucide-react"

const advantages = [
  { icon: Zap, title: "Скорость", description: "Sub-second обработка с GPU-ускорением", metric: "<100мс" },
  { icon: Layers, title: "Instance Segmentation", description: "Пиксельно-точное разделение структур", metric: "99.2% mAP" },
  { icon: Package, title: "Экспорт в ONNX", description: "Кросс-платформенный деплой", metric: "Any Device" }
]

export function AIEngineSection() {
  return (
    <section 
      className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Neural Network */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-ai-engine.jpg"
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
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 08 — AI-движок"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center text-balance bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
          {"YOLO-segmentation core"}
        </h2>
        <p className="text-lg text-[#a1a1aa] mb-8 text-center max-w-2xl mx-auto">
          {"State-of-the-art детекция и сегментация на базе YOLO"}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Model Card */}
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-mono text-sm text-[#71717a] uppercase tracking-wider">Спецификации</h3>
              <span className="font-mono text-xs px-2 py-1 rounded border border-emerald-500/20 text-[#71717a]">YOLOv8-seg</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-emerald-500/10">
                <span className="text-sm text-[#71717a]">Архитектура</span>
                <span className="font-mono text-sm text-[#f8fafc]">CSPDarknet + C2f</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-emerald-500/10">
                <span className="text-sm text-[#71717a]">Параметры</span>
                <span className="font-mono text-sm text-[#f8fafc]">43.6M</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-emerald-500/10">
                <span className="text-sm text-[#71717a]">Input Size</span>
                <span className="font-mono text-sm text-[#f8fafc]">640×640px</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-emerald-500/10">
                <span className="text-sm text-[#71717a]">Precision</span>
                <span className="font-mono text-sm text-emerald-500">FP16 Mixed</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-[#71717a]">Framework</span>
                <span className="font-mono text-sm text-[#f8fafc]">ONNX Runtime</span>
              </div>
            </div>
            
            {/* Production Ready Badge */}
            <div className="mt-5 pt-5 border-t border-emerald-500/20">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#f8fafc]">Production-Ready</p>
                  <p className="text-xs text-[#71717a]">Протестировано</p>
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded bg-emerald-500 text-[#050505] font-bold">
                  STABLE
                </span>
              </div>
            </div>
          </div>
          
          {/* Advantages */}
          <div className="space-y-4">
            {advantages.map((item) => (
              <div 
                key={item.title}
                className="p-5 rounded-2xl border border-emerald-500/20 bg-[#0a0a0a]/50 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-emerald-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="font-mono text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                    {item.metric}
                  </span>
                </div>
                <h3 className="font-bold text-[#f8fafc] mb-1">{item.title}</h3>
                <p className="text-sm text-[#71717a]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
