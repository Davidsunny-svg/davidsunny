import Image from 'next/image'

export function About() {
  return (
    <section className="px-4 md:px-8 py-24 md:py-40 max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Developer, maker, builder of thoughtful software.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I started coding at 9 years old. What began as curiosity about how things work became a lifelong pursuit of building software that actually matters—software that solves real problems and respects the people who use it.
          </p>

          <p>
            I've worked across the stack: building production Python backends, crafting React applications, shipping native iOS and Android apps. Each platform taught me something different about what good design and engineering looks like.
          </p>

          <p>
            I believe in clarity. In clean code that speaks for itself. In interfaces so thoughtful they feel obvious. In architecture that scales not through complexity, but through careful decisions made early. I'm deeply influenced by Apple's philosophy: constraint drives focus, and focus drives excellence.
          </p>

          <p>
            When I'm not coding, I'm thinking about how to build better tools, how to design experiences that feel right, and how to write code that others can understand and enjoy.
          </p>
        </div>

        {/* Tech Stack - simple list */}
        <div className="space-y-6 pt-8 border-t border-border">
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Technologies I Use
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-2">Backend</p>
                <p className="text-base text-foreground">Python, FastAPI, Django, PostgreSQL, Redis</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-2">Frontend</p>
                <p className="text-base text-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-2">Mobile</p>
                <p className="text-base text-foreground">iOS (Swift, SwiftUI), Android (Kotlin, Compose)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-2">DevOps & Tools</p>
                <p className="text-base text-foreground">Docker, AWS, Git, Figma, Xcode, Android Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
