import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - Modern Tech Minimalism
 * Clean introduction with background image
 * Features: Large heading, description, CTA button
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/hero-background-TCBMdrHyVh8JBiy9czk5vF.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        {/* Accent Line */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Welcome to my portfolio
          </span>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 items-center lg:items-start">
          <div className="flex-1 min-w-0">
            {/* Gradient Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 leading-tight">
              Fadhil Budi Prasetya
            </h1>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Fullstack Developer & <span className="text-primary">Project Lead</span>
            </h2>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 w-full sm:w-80 lg:w-80">
            <img
              src="/src/assets/photo_2026-02-24_21-56-46 (2).jpg"
              alt="Fadhil Budi Prasetya"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="max-w-2xl">
          <p>Description</p>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
            With over 3 years of experience in programming, I specialize in building innovative solutions and leading development teams to deliver exceptional results.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-sm text-foreground/60">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-foreground/60">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <p className="text-sm text-foreground/60">Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
