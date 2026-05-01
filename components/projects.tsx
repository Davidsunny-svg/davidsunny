'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Project {
  id: string
  title: string
  problem: string
  solution: string
  outcome: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Native iOS Task Manager',
    problem: 'I wanted to deeply understand iOS development and Apple\'s Human Interface Guidelines. Building something meaningful would accelerate my learning.',
    solution: 'Built a full-featured task management app in Swift with Core Data persistence, CloudKit sync, and native UI components following Apple\'s HIG exactly.',
    outcome: 'Shipped to App Store. Gained deep understanding of iOS architecture, SwiftUI, and native platform conventions. 500+ downloads.',
    image: 'bg-gradient-to-br from-blue-100 to-blue-50',
    tags: ['iOS', 'Swift', 'App Store'],
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    problem: 'I wanted to combine my backend skills (Python) with modern frontend (React). Building a data-heavy app would test full-stack capabilities.',
    solution: 'Built a real-time analytics dashboard with Python FastAPI backend, PostgreSQL database, React frontend with WebSockets for live updates, and TypeScript for type safety.',
    outcome: 'Learned production-grade full-stack architecture. Deployed on AWS. Successfully handles 1000+ events/second with sub-100ms latency.',
    image: 'bg-gradient-to-br from-amber-100 to-orange-50',
    tags: ['Python', 'React', 'WebSockets'],
  },
  {
    id: 3,
    title: 'Cross-Platform Social App (Android)',
    problem: 'I wanted to master Android development and understand platform-specific patterns. This required learning Kotlin and Material Design 3.',
    solution: 'Developed a social messaging app in Kotlin using Jetpack Compose, Firebase Realtime Database, and Room for local storage. Followed Material Design 3 principles.',
    outcome: 'Published to Play Store. Deep understanding of Android lifecycle, Compose framework, and platform UX patterns. 300+ active users.',
    image: 'bg-gradient-to-br from-green-100 to-emerald-50',
    tags: ['Android', 'Kotlin', 'Compose'],
  },
  {
    id: 4,
    title: 'Open Source Python CLI Tool',
    problem: 'Wanted to contribute to open source and build a tool that solves a real workflow problem for developers.',
    solution: 'Created and maintained an open-source Python CLI utility with comprehensive testing, documentation, and CI/CD. Published on PyPI.',
    outcome: '2K+ GitHub stars. 50K+ monthly PyPI downloads. Learned best practices for library design, testing, and community maintenance.',
    image: 'bg-gradient-to-br from-purple-100 to-pink-50',
    tags: ['Python', 'Open Source', 'CLI'],
  },
]

const ProjectCard = ({ project }: { project: Project }) => (
  <Card 
    className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex-shrink-0"
    style={{ width: 'calc(100vw - 32px)' }}
  >
    {/* Image preview */}
    <div className={`h-48 ${project.image} overflow-hidden`} />
    
    <CardHeader className="pb-3">
      <CardTitle className="text-xl text-foreground">
        {project.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-4">
      {/* Problem */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Problem
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* Solution */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Solution
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* Outcome */}
      <div className="space-y-2 pt-2 border-t border-border">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Outcome
        </p>
        <p className="text-sm font-medium text-primary">
          {project.outcome}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
)

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState(true)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = window.innerWidth - 32
    const newIndex = Math.round(scrollLeft / cardWidth)
    setCurrentIndex(Math.min(newIndex, projects.length - 1))
  }

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const cardWidth = window.innerWidth - 32
    const scrollLeft = index * cardWidth
    scrollContainerRef.current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    })
    setCurrentIndex(index)
  }

  return (
    <section id="projects" className="px-4 md:px-8 py-24 md:py-40 max-w-4xl mx-auto w-full">
      <div className="space-y-16">
        {/* Section header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Personal projects demonstrating full-stack capabilities across web and mobile platforms.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden space-y-4">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 pt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border w-2 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              {/* Image preview */}
              <div className={`h-56 ${project.image} overflow-hidden`} />
              
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Problem */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Problem
                  </p>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Solution
                  </p>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Outcome
                  </p>
                  <p className="text-sm md:text-base font-medium text-primary">
                    {project.outcome}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
