'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="px-4 md:px-8 py-24 md:py-40 max-w-4xl mx-auto">
      <div className="space-y-16">
        {/* Section header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        {/* Contact options and form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Direct contact */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Direct Contact
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Reach out directly via WhatsApp for the fastest response, or email for detailed inquiries.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">WhatsApp</p>
                <a 
                  href="https://wa.me/2348101521395"
                  className="text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  +234 810 152 1395
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <a 
                  href="mailto:hello@davidsunny.dev"
                  className="text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  hello@davidsunny.dev
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Availability</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-base text-foreground">Available now</p>
                </div>
                <p className="text-sm text-muted-foreground">Typical response: 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground h-11"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground h-11"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-28 border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full h-11 font-medium"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </Button>

            {submitted && (
              <p className="text-sm text-green-600 text-center">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
