import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="px-4 md:px-8 py-16 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Main content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                David Sunny
              </h3>
              <p className="text-muted-foreground max-w-md">
                Full-stack developer building thoughtful software. Python, React, mobile apps.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex gap-6">
              <Link 
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <a 
                href="https://x.com/northmarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {currentYear} David Sunny. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
