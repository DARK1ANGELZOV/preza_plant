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

export default function PlantVisionPage() {
  return (
    <>
      
      {/* Scroll-snap container */}
      <main 
        className="h-screen overflow-y-auto overflow-x-hidden bg-[#050505] text-[#f8fafc]"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {/* РЎР»Р°Р№Рґ 1: РћР±Р»РѕР¶РєР° */}
        <CoverSection />
        
        {/* РЎР»Р°Р№Рґ 2: РџСЂРѕР±Р»РµРјР° */}
        <ProblemSection />
        
        {/* РЎР»Р°Р№Рґ 3: Р’Р°Р¶РЅРѕСЃС‚СЊ (Precision Agriculture) */}
        <PrecisionAgricultureSection />
        
        {/* РЎР»Р°Р№Рґ 4: Р РµС€РµРЅРёРµ */}
        <SolutionSection />
        
        {/* РЎР»Р°Р№Рґ 5: Р”РµРјРѕРЅСЃС‚СЂР°С†РёСЏ */}
        <LiveDemoSection />
        
        {/* РЎР»Р°Р№Рґ 6: AI Pipeline */}
        <PipelineSection />
        
        {/* РЎР»Р°Р№Рґ 7: РђСЂС…РёС‚РµРєС‚СѓСЂР° */}
        <ArchitectureSection />
        
        {/* РЎР»Р°Р№Рґ 8: AI-РґРІРёР¶РѕРє */}
        <AIEngineSection />
        
        {/* РЎР»Р°Р№Рґ 9: Р”РѕРІРµСЂРёРµ */}
        <TrustProtocolSection />
        
        {/* РЎР»Р°Р№Рґ 10: РЎСЂР°РІРЅРµРЅРёРµ СЃ РєРѕРЅРєСѓСЂРµРЅС‚Р°РјРё */}
        <CompetitorMatrixSection />
        
        {/* РЎР»Р°Р№Рґ 11: SaaS-СЌРєРѕСЃРёСЃС‚РµРјР° */}
        <SaaSEcosystemSection />
        
        {/* РЎР»Р°Р№Рґ 12: РљР°С‡РµСЃС‚РІРѕ */}
        <SystemQualitySection />
        
        {/* РЎР»Р°Р№Рґ 13: Р‘СѓРґСѓС‰РµРµ */}
        <RoadmapSection />
        
        {/* РЎР»Р°Р№Рґ 14: Р¤РёРЅР°Р» */}
        <FinalVisionSection />
        
        {/* РЎР»Р°Р№Рґ 15: РљРѕРЅС‚Р°РєС‚С‹ */}
        <FooterSection />
      </main>
    </>
  )
}
