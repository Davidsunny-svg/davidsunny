'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/40' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-8 py-4 max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo/Home */}
        <Link href="#" className="hover:opacity-80 transition-opacity">
          <span className="text-lg font-semibold text-foreground whitespace-nowrap">
            David Sunny
          </span>
        </Link>

        {/* Nav items - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="#contact">
          <Button 
            size="sm"
            className="bg-foreground hover:bg-foreground/90 text-background rounded-full font-medium"
          >
            Get in Touch
          </Button>
        </Link>
      </div>
    </nav>
  )
}
