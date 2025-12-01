import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-primary/50 rotate-45 animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 tracking-wider text-lg animate-slide-in-left">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            <span className="gradient-text">Prashant Parmar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in-right">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with React, Node.js, Express, and MongoDB. 
            Passionate about building scalable web applications and solving complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:scale-105 transition-all group"
              asChild
            >
              <Link to="/projects">
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all"
              asChild
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all"
              asChild
            >
              <a href="https://github.com/parmarprashantsingh883" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all"
              asChild
            >
              <a href="https://linkedin.com/in/prashant-parmar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all"
              asChild
            >
              <a href="mailto:Parmarprashantsingh883@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all"
              asChild
            >
              <a href="tel:+919574028096" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;