import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:idd@example.com", color: "primary" },
    { icon: Github, label: "GitHub", href: "https://github.com", color: "secondary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "accent" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "primary" }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary min-h-[150px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Feel free to reach out through any of these platforms. I'm always open to 
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-${social.color}/10 flex items-center justify-center group-hover:bg-${social.color}/20 transition-colors`}>
                        <social.icon className={`w-6 h-6 text-${social.color}`} style={{
                          color: social.color === "primary" 
                            ? "hsl(var(--primary))" 
                            : social.color === "secondary"
                            ? "hsl(var(--secondary))"
                            : "hsl(var(--accent))"
                        }} />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
