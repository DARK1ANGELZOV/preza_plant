"use client"

import { CoverSection } from "@/components/sections/cover"
import { ProblemSection } from "@/components/sections/problem"
import { PrecisionAgricultureSection } from "@/components/sections/precision-agriculture"
import { SolutionSection } from "@/components/sections/solution"
import { LiveDemoSection } from "@/components/sections/live-demo"
import { PipelineSection } from "@/components/sections/pipeline"
import { ArchitectureSection } from "@/components/sections/architecture"
import { AIEngineSection } from "@/components/sections/ai-engine"
import { TrustProtocolSection } from "@/components/sections/trust-protocol"
import { CompetitorMatrixSection } from "@/components/sections/competitor-matrix"
import { SaaSEcosystemSection } from "@/components/sections/saas-ecosystem"
import { SystemQualitySection } from "@/components/sections/system-quality"
import { RoadmapSection } from "@/components/sections/roadmap"
import { FinalVisionSection } from "@/components/sections/final-vision"
import { FooterSection } from "@/components/sections/footer"
import { FileDown } from "lucide-react"

export default function PlantVisionPage() {
  const handleSavePDF = () => {
    window.print()
  }
  
  return (
    <>
      {/* Floating PDF Export Button - Fixed bottom-right */}
      <button
        onClick={handleSavePDF}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-[#050505] font-bold text-base shadow-lg transition-all hover:from-emerald-400 hover:to-emerald-500 hover:scale-105 backdrop-blur-xl border border-emerald-400/30"
        style={{ boxShadow: '0 0 50px rgba(16, 185, 129, 0.5), 0 0 100px rgba(16, 185, 129, 0.2)' }}
      >
        <FileDown className="w-5 h-5" />
        <span>{"Скачать PDF"}</span>
      </button>
      
      {/* Scroll-snap container */}
      <main 
        className="h-screen overflow-y-auto overflow-x-hidden bg-[#050505] text-[#f8fafc]"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {/* Слайд 1: Обложка */}
        <CoverSection />
        
        {/* Слайд 2: Проблема */}
        <ProblemSection />
        
        {/* Слайд 3: Важность (Precision Agriculture) */}
        <PrecisionAgricultureSection />
        
        {/* Слайд 4: Решение */}
        <SolutionSection />
        
        {/* Слайд 5: Демонстрация */}
        <LiveDemoSection />
        
        {/* Слайд 6: AI Pipeline */}
        <PipelineSection />
        
        {/* Слайд 7: Архитектура */}
        <ArchitectureSection />
        
        {/* Слайд 8: AI-движок */}
        <AIEngineSection />
        
        {/* Слайд 9: Доверие */}
        <TrustProtocolSection />
        
        {/* Слайд 10: Сравнение с конкурентами */}
        <CompetitorMatrixSection />
        
        {/* Слайд 11: SaaS-экосистема */}
        <SaaSEcosystemSection />
        
        {/* Слайд 12: Качество */}
        <SystemQualitySection />
        
        {/* Слайд 13: Будущее */}
        <RoadmapSection />
        
        {/* Слайд 14: Финал */}
        <FinalVisionSection />
        
        {/* Слайд 15: Контакты */}
        <FooterSection />
      </main>
    </>
  )
}
