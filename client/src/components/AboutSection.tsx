/**
 * About Section - Modern Tech Minimalism
 * Professional background and expertise overview
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I'm Fadhil Budi Prasetya, a passionate Fullstack Developer and Project Lead Developer with a proven track record of delivering innovative solutions and leading high-performing development teams.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                My expertise spans across modern web technologies, cloud infrastructure, and agile development practices. I'm committed to writing clean, maintainable code and fostering collaborative team environments.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Currently working at PT Braincode Digital Teknologi, where I lead development initiatives and mentor junior developers to achieve excellence.
              </p>
            </div>

            {/* Right Column - Key Points */}
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-sm border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-2">Leadership</h3>
                <p className="text-foreground/60">
                  Experienced in leading development teams and managing complex projects from conception to deployment.
                </p>
              </div>
              <div className="bg-background p-6 rounded-sm border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-2">Full Stack</h3>
                <p className="text-foreground/60">
                  Proficient in both frontend and backend technologies, enabling me to build complete solutions.
                </p>
              </div>
              <div className="bg-background p-6 rounded-sm border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-2">Innovation</h3>
                <p className="text-foreground/60">
                  Passionate about exploring new technologies and implementing cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8\">Professional Experience</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-16 bg-border mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Project Lead Developer (2024 - Present)</h4>
                  <p className="text-primary font-semibold">PT Braincode Digital Teknologi</p>
                  <p className="text-foreground/60 text-sm">Leading development team in designing and implementing innovative solutions</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-16 bg-border mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Fullstack Developer (2023 - 2024)</h4>
                  <p className="text-primary font-semibold">Network Service Digitalization Department</p>
                  <p className="text-foreground/60 text-sm\">Developing and maintaining full-stack applications with modern technologies</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-16 bg-border mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Software Developer (2023)</h4>
                  <p className="text-primary font-semibold">Various Tech Companies</p>
                  <p className="text-foreground/60 text-sm">Building robust applications and contributing to team success</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-16 bg-border mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Software Operation Engineer (2022 - 2023)</h4>
                  <p className="text-primary font-semibold">Braincode Solution</p>
                  <p className="text-foreground/60 text-sm">Maintaining servers, monitoring systems, and ensuring smooth operation of software infrastructure</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-16 bg-border mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Owner / Seller (2021 - 2022)</h4>
                  <p className="text-primary font-semibold">Warung Vape, Cilacap Regency</p>
                  <p className="text-foreground/60 text-sm">Running a personal business selling vape liquids and related products</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Welding Engineer (2020 - 2021)</h4>
                  <p className="text-primary font-semibold">Pertamina RUIV (RU4)</p>
                  <p className="text-foreground/60 text-sm">Hands-on welding engineer with practical experience in industrial projects, skilled but still learning advanced techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
