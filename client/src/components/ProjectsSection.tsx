import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Section - Modern Tech Minimalism
 * Showcase of notable projects and work
 */
export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/code-illustration-jNNPT8tf5PVfRvdiGqsp2m.webp',
      link: '#',
      github: '#',
    },
    {
      title: 'Project Management Tool',
      description:
        'Collaborative project management application with real-time updates, task tracking, and team communication features.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'WebSocket'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/tech-pattern-RKVc3EwRVUUSwS3fyXBzWV.webp',
      link: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Data visualization platform for real-time analytics with interactive charts, custom reports, and data export capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'AWS'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/code-illustration-jNNPT8tf5PVfRvdiGqsp2m.webp',
      link: '#',
      github: '#',
    },
    {
      title: 'Mobile App Backend',
      description:
        'Scalable REST API for mobile application with authentication, push notifications, and real-time data synchronization.',
      technologies: ['Node.js', 'Firebase', 'Docker', 'Kubernetes'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/tech-pattern-RKVc3EwRVUUSwS3fyXBzWV.webp',
      link: '#',
      github: '#',
    },
    {
      title: 'CMS Platform',
      description:
        'Headless CMS with flexible content modeling, multi-language support, and powerful API for content delivery.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/code-illustration-jNNPT8tf5PVfRvdiGqsp2m.webp',
      link: '#',
      github: '#',
    },
    {
      title: 'DevOps Automation',
      description:
        'Infrastructure automation and CI/CD pipeline setup for multiple projects, reducing deployment time by 70%.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663419146125/bGfaBSYc6Z6Nx6ddtcsU2s/tech-pattern-RKVc3EwRVUUSwS3fyXBzWV.webp',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-background border border-border rounded-sm overflow-hidden hover:border-primary transition-all hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 text-primary font-semibold hover:bg-primary/10 rounded-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 text-primary font-semibold hover:bg-primary/10 rounded-sm transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Projects
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
