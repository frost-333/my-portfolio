import { Heart } from 'lucide-react';

/**
 * Footer Component - Modern Tech Minimalism
 * Simple footer with copyright and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FP</span>
              </div>
              <span className="font-bold text-foreground">Fadhil Prasetya</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Fullstack Developer & Project Lead
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'Email', href: 'mailto:fadhilprast333@gmail.com' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Fadhil Budi Prasetya. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
