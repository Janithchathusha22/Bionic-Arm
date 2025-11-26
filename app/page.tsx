import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TechnologySection } from "@/components/technology-section"
import { GallerySection } from "@/components/gallery-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TimelineSection } from "@/components/timeline-section"
import { DownloadsSection } from "@/components/downloads-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ObjectivesSection />
      <BenefitsSection />
      <TechnologySection />
      <GallerySection />
      <HowItWorksSection />
      <TimelineSection />
      <DownloadsSection />
      <Footer />
    </main>
  )
}
