import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { ParallaxProvider } from '@/components/parallax-provider'

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ParallaxProvider>
  )
}