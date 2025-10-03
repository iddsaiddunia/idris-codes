import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AllProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Django REST backend, and integrated payment processing",
      tech: ["React", "Django", "PostgreSQL", "Stripe"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application built with Flutter, featuring real-time workout monitoring",
      tech: ["Flutter", "Firebase", "ML Kit"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "AI Content Analyzer",
      description: "Machine learning powered content analysis tool with sentiment detection and text classification",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      gradient: "from-accent to-primary"
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable messaging platform with WebSocket support, group chats, and media sharing capabilities",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, team collaboration, and progress tracking",
      tech: ["React", "Redux", "Node.js", "MySQL"],
      gradient: "from-secondary to-primary"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "Real-time weather application with interactive maps, detailed forecasts, and location-based alerts",
      tech: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
      gradient: "from-accent to-secondary"
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for creative professionals with drag-and-drop interface",
      tech: ["React", "Strapi", "GraphQL", "PostgreSQL"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Community-driven cooking app with recipe search, meal planning, and nutritional information",
      tech: ["React Native", "Firebase", "Algolia", "Stripe"],
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                A complete showcase of my work and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10 transition-all group-hover:scale-105"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 transition-all group-hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Animated corner decoration */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AllProjects;
