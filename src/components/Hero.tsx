import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import developerVector from "@/assets/developer-vector.png";
import grassDewBg from "@/assets/grass-dew-background.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grass dew background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={grassDewBg} 
          alt="Grass with water dew background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Floating 3D cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg transform rotate-12 animate-float" 
             style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg transform -rotate-12 animate-float-slow" 
             style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-card/30 backdrop-blur-sm border border-accent/20 rounded-lg transform rotate-6 animate-float" 
             style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg transform -rotate-6 animate-float-slow" 
             style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-up text-center lg:text-left">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full">
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Idd D Said
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with React, Django, Flutter, and Machine Learning
            </p>

            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right side - Developer Vector */}
          <div 
            className="relative animate-float hidden lg:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="relative z-10 transition-transform duration-300 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
              }}
            >
              <img 
                src={developerVector} 
                alt="Developer illustration" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl animate-glow" />
          </div>
        </div>

        <div className="pt-12 animate-bounce text-center">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
