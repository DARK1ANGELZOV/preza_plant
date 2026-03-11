import Image from "next/image"
import { Key, MessageSquare, Code, FileText } from "lucide-react"

const features = [
  {
    icon: Key,
    title: "Авторизация",
    description: "JWT-токены с role-based access control",
    tags: ["OAuth 2.0", "RBAC"],
    accent: false
  },
  {
    icon: MessageSquare,
    title: "История",
    description: "Сохранение всех анализов с контекстом",
    tags: ["Версионность", "Поиск"],
    accent: false
  },
  {
    icon: Code,
    title: "API",
    description: "RESTful endpoints с OpenAPI документацией",
    tags: ["OpenAPI 3.0", "SDK"],
    accent: true,
    badge: "REST"
  },
  {
    icon: FileText,
    title: "Отчёты PDF/CSV",
    description: "Автоматическая генерация отчётов",
    tags: ["PDF", "CSV", "JSON"],
    accent: false
  }
]

export function SaaSEcosystemSection() {
  return (
    <section 
      className="h-[100vh] w-full min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Server Room */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-saas.jpg"
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
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 11 — SaaS"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center text-balance bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent tracking-[-0.02em]">
          {"SaaS-экосистема"}
        </h2>
        <p className="text-lg text-[#71717a] mb-8 text-center max-w-2xl mx-auto">
          {"Всё для интеграции анализа растений в ваш workflow"}
        </p>
        
        {/* Glass Bento Grid */}
        <div className="grid grid-cols-2 gap-5">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: feature.accent ? 'rgba(16, 185, 129, 0.05)' : 'rgba(10, 10, 10, 0.5)',
                border: feature.accent ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(16, 185, 129, 0.2)',
                boxShadow: feature.accent ? '0 0 40px rgba(16, 185, 129, 0.1)' : 'none'
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl"
                  style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    boxShadow: feature.accent ? '0 0 20px rgba(16, 185, 129, 0.2)' : 'none'
                  }}
                >
                  <feature.icon className="w-6 h-6 text-emerald-500" />
                </div>
                {feature.badge && (
                  <span 
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{feature.title}</h3>
              <p className="text-[#71717a] mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {feature.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 rounded-full backdrop-blur-xl"
                    style={{
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      color: '#71717a'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
