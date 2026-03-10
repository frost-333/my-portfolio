/**
 * Skills Section - Modern Tech Minimalism
 * Technical skills and expertise showcase
 */
export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'AWS', 'CI/CD', 'Linux', 'Kubernetes'],
    },
    {
      title: 'Leadership',
      skills: ['Team Management', 'Agile/Scrum', 'Code Review', 'Mentoring', 'Project Planning', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-8 bg-secondary border border-border rounded-sm hover:border-primary transition-colors group"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-primary group-hover:h-8 transition-all" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background text-foreground text-sm font-medium rounded-sm border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {[
                { name: 'Web Development', level: 95 },
                { name: 'Backend Development', level: 90 },
                { name: 'Database Design', level: 85 },
                { name: 'Cloud Infrastructure', level: 80 },
                { name: 'Team Leadership', level: 88 },
              ].map((proficiency) => (
                <div key={proficiency.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">{proficiency.name}</span>
                    <span className="text-sm text-primary font-bold">{proficiency.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${proficiency.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
