interface Skill {
  title: string
  description: string
  icon: string
}

const skills: Skill[] = [
  {
    title: 'Backend & APIs',
    description: 'Python services, REST APIs, database design, server architecture. Building robust systems that scale.',
    icon: '⚙️',
  },
  {
    title: 'Frontend & Web',
    description: 'React, Next.js, TypeScript, responsive design. Creating clean, performant web experiences.',
    icon: '✨',
  },
  {
    title: 'Mobile Development',
    description: 'Native iOS (Swift) and Android (Kotlin). Following platform design guidelines, delivering native performance.',
    icon: '📱',
  },
  {
    title: 'Full-Stack Integration',
    description: 'Connecting frontend, backend, and databases. API integration, real-time systems, complex workflows.',
    icon: '🔗',
  },
]

export function WhatWeFix() {
  return (
    <section id="what-we-fix" className="px-4 md:px-8 py-24 md:py-40 max-w-4xl mx-auto">
      <div className="space-y-16">
        {/* Section header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I work across the full stack—from backend systems to native mobile apps.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="space-y-4 p-0"
            >
              {/* Icon */}
              <div className="text-3xl">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
