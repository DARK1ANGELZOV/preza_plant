import Image from "next/image"
import { CheckCircle2, Shield, Zap, Code2 } from "lucide-react"

export function SystemQualitySection() {
  return (
    <section 
      className="h-[100vh] min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-6 relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Contextual Background - Matrix Code Rain with Strong Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-matrix.jpg"
          alt=""
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>
      
      <div className="max-w-5xl mx-auto w-full px-8 text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{"Слайд 12 — Качество"}</span>
          <div className="w-8 h-px bg-emerald-500" />
        </div>
        
        {/* Cinematic Terminal Verification Screen */}
        <div className="rounded-2xl border border-emerald-500/30 bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden" style={{ boxShadow: '0 0 80px rgba(16, 185, 129, 0.12)' }}>
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-500/20 bg-[#050505]/80">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs text-[#71717a] ml-4">{"pytest — plantvision/tests — 100% coverage"}</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 sm:p-10 lg:p-14">
            {/* Big Number Display */}
            <div className="mb-8">
              <h2 className="text-8xl sm:text-9xl lg:text-[11rem] font-black font-mono leading-none tracking-tighter bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 60px rgba(16, 185, 129, 0.5))' }}>
                {"182"}
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 font-mono tracking-wider bg-gradient-to-r from-[#f8fafc] to-emerald-400 bg-clip-text text-transparent">
                {"ТЕСТА ПРОЙДЕНО"}
              </p>
              <p className="text-lg text-[#a1a1aa] mt-3">
                {"Золотой стандарт качества и надёжности кода"}
              </p>
            </div>
            
            {/* Success Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-emerald-500/50 bg-emerald-500/10 mb-10 backdrop-blur-xl" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.25)' }}>
              <CheckCircle2 className="w-7 h-7 text-emerald-500" />
              <span className="font-mono text-xl text-emerald-500" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}>{"HTTP 200 — All Systems Operational"}</span>
            </div>
            
            {/* Test Summary Grid */}
            <div className="grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="p-5 rounded-xl bg-[#1a1a1a]/50 border border-emerald-500/30 backdrop-blur-xl" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.08)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-[#22c55e]" />
                  <span className="font-mono text-base text-[#f8fafc]">{"Authentication"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#22c55e]">{"24/24"}</span>
                  <div className="w-20 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <div className="h-full w-full bg-[#22c55e]" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }} />
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#1a1a1a]/50 border border-emerald-500/30 backdrop-blur-xl" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.08)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-[#22c55e]" />
                  <span className="font-mono text-base text-[#f8fafc]">{"ML Inference"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#22c55e]">{"52/52"}</span>
                  <div className="w-20 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <div className="h-full w-full bg-[#22c55e]" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }} />
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#1a1a1a]/50 border border-emerald-500/30 backdrop-blur-xl" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.08)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-[#22c55e]" />
                  <span className="font-mono text-base text-[#f8fafc]">{"API Endpoints"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#22c55e]">{"31/31"}</span>
                  <div className="w-20 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <div className="h-full w-full bg-[#22c55e]" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Completion Info */}
            <div className="mt-10 flex items-center justify-center gap-6 font-mono text-sm text-[#71717a]">
              <span>{"Completed in 12.4s"}</span>
              <span className="text-emerald-500/50">{"•"}</span>
              <span>{"0 warnings"}</span>
              <span className="text-emerald-500/50">{"•"}</span>
              <span className="text-emerald-500">{"100% coverage"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
