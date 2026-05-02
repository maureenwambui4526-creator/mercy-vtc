import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProgramsSection } from "@/components/sections/programs"
import { FacilitiesSection } from "@/components/sections/facilities"
import { AdmissionsSection } from "@/components/sections/admissions"
import { FeesSection } from "@/components/sections/fees"
import { ImpactSection } from "@/components/sections/impact"
import { LeadershipSection } from "@/components/sections/leadership"
import { GallerySection } from "@/components/sections/gallery"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { NewsSection } from "@/components/sections/news"
import { CTABanner } from "@/components/sections/cta-banner"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <AdmissionsSection />
      <FeesSection />
      <ImpactSection />
      <LeadershipSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
