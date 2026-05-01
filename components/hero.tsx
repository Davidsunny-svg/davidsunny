import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="px-4 md:px-8 py-32 md:py-48 max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Main heading - strong hierarchy */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-tight">
              Full-stack developer.
              <br />
              Building thoughtful software.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed">
              I design and build web and mobile applications that solve real problems. Python, React, TypeScript, iOS, Android.
            </p>
          </div>

          {/* CTA - simple and clear */}
          <div className="flex flex-col sm:flex-row gap-3 pt-8">
            <Link href="#projects">
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 font-medium"
              >
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/5 rounded-full px-8 font-medium"
              >
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
