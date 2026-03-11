import Image from "next/image"
import { Globe, Server, Cpu, Database, Activity } from "lucide-react"

const layers = [
  { name: "Frontend", tech: "Next.js 16 + React 19", icon: Globe, color: "#f8fafc", description: "Server Components, ISR" },
  { name: "Backend API", tech: "FastAPI Async", icon: Server, color: "#10B981", description: "Pydantic v2, OpenAPI 3.1" },
  { name: "ML Engine", tech: "YOLO v11 / ONNX", icon: Cpu, color: "#f59e0b", description: "GPU inference, TensorRT" },
  { name: "Task Queue", tech: "Redis / Celery", icon: Database, color: "#ef4444", description: "Async job processing" },
  { name: "Observability", tech: "Prometheus + Grafana", icon: Activity, color: "#8b5cf6", description: "Real-time metrics" }
]

export function ArchitectureSection() {
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Technical Blueprint with Strong Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-blueprint.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 07 — Архитектура"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-center text-balance tracking-tighter bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent leading-none">
          {"Production-Grade SaaS"}
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-10 text-center max-w-2xl mx-auto">
          {"Масштабируемая микросервисная архитектура для высоких нагрузок"}
        </p>
        
        {/* Stack Diagram with Glowing Nodes */}
        <div className="relative p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl" style={{ boxShadow: '0 0 60px rgba(16, 185, 129, 0.1)' }}>
          <div className="relative space-y-3">
            {layers.map((layer, index) => (
              <div 
                key={layer.name}
                className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.4)',
                  border: `1px solid ${layer.color}40`,
                  boxShadow: `0 0 25px ${layer.color}15`
                }}
              >
                {/* Glowing Node */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative"
                  style={{ 
                    backgroundColor: `${layer.color}15`,
                    border: `1px solid ${layer.color}50`,
                    boxShadow: `0 0 25px ${layer.color}40`
                  }}
                >
                  <layer.icon className="w-6 h-6" style={{ color: layer.color }} />
                  {index < layers.length - 1 && (
                    <div 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-7"
                      style={{ 
                        background: `linear-gradient(to bottom, ${layer.color}70, ${layers[index + 1].color}70)`,
                        boxShadow: `0 0 8px ${layer.color}50`
                      }}
                    />
                  )}
                </div>
                
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="font-bold text-lg text-[#f8fafc] min-w-[130px]">{layer.name}</h3>
                  <code 
                    className="font-mono text-sm px-3 py-1.5 rounded-lg w-fit backdrop-blur-xl"
                    style={{ 
                      backgroundColor: `${layer.color}20`, 
                      color: layer.color,
                      border: `1px solid ${layer.color}40`,
                      textShadow: `0 0 10px ${layer.color}40`
                    }}
                  >
                    {layer.tech}
                  </code>
                  <p className="text-sm text-[#a1a1aa]">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Data Flow Indicator */}
          <div className="mt-6 pt-6 border-t border-emerald-500/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 1)' }} />
                <span className="text-base text-[#a1a1aa]">{"Request → Processing → Response"}</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="text-[#71717a]">{"p99 Latency"}</span>
                <span className="text-emerald-500 font-bold" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}>{"< 50ms"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
