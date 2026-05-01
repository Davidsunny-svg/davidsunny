interface ProcessStep {
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    title: 'Understand the Problem',
    description: 'I start by deeply understanding what you\'re trying to achieve and why. Not just the feature list, but the actual goal and constraints. Better questions lead to better solutions.',
  },
  {
    title: 'Design with Purpose',
    description: 'I design for clarity and usability first. Every element should have a reason. I sketch, prototype, and validate ideas before writing production code.',
  },
  {
    title: 'Build with Discipline',
    description: 'I write clean, maintainable code. Good architecture today saves weeks of headaches tomorrow. I build for scalability and performance from the start.',
  },
  {
    title: 'Ship and Iterate',
    description: 'I ship early and listen to feedback. Perfection is the enemy of good. Real usage teaches lessons that planning never can. I measure, learn, and improve.',
  },
]

export function Process() {
  return (
    <section id="process" className="px-4 md:px-8 py-24 md:py-40 max-w-4xl mx-auto">
      <div className="space-y-16">
        {/* Section header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, repeatable approach focused on clarity and outcomes.
          </p>
        </div>

        {/* Process steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="space-y-4"
            >
              {/* Step number and title */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-semibold text-foreground">
                  {index + 1}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < steps.length - 1 && (
                <div className="h-px bg-border ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
