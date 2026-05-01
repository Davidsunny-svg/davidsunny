import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { WhatWeFix } from '@/components/what-we-fix'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      
      {/* Add top padding to account for fixed nav */}
      <div className="pt-16">
        <Hero />
      </div>

      {/* What We Fix section */}
      <WhatWeFix />

      {/* Projects section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Process section */}
      <div id="process">
        <Process />
      </div>

      {/* About section */}
      <About />

      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
