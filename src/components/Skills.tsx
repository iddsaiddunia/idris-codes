const Skills = () => {
  const skills = [
    { name: "React.js", level: 95, color: "primary" },
    { name: "Tailwind CSS", level: 90, color: "primary" },
    { name: "Django REST", level: 88, color: "secondary" },
    { name: "Flutter", level: 85, color: "accent" },
    { name: "Machine Learning", level: 80, color: "secondary" },
    { name: "TypeScript", level: 90, color: "primary" },
    { name: "Python", level: 92, color: "secondary" },
    { name: "Git & CI/CD", level: 87, color: "accent" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                      background: skill.color === "primary" 
                        ? "hsl(var(--primary))" 
                        : skill.color === "secondary"
                        ? "hsl(var(--secondary))"
                        : "hsl(var(--accent))"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
