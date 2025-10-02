import { Code2, Sparkles, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "Building end-to-end solutions with modern web and mobile technologies"
    },
    {
      icon: Sparkles,
      title: "ML Integration",
      description: "Implementing intelligent features with machine learning capabilities"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing for speed, scalability, and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating innovative solutions that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-full h-full text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a full-stack developer with a passion for creating seamless digital experiences. 
              With expertise spanning from frontend frameworks like <span className="text-primary font-semibold">React.js</span> to 
              backend powerhouses like <span className="text-secondary font-semibold">Django REST Framework</span>, 
              I build robust applications that scale.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              My experience extends to mobile development with <span className="text-accent font-semibold">Flutter</span> and 
              implementing <span className="text-primary font-semibold">Machine Learning</span> solutions. 
              I believe in writing clean, maintainable code and following best practices to deliver 
              exceptional results for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
