import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Eye, Image as ImageIcon, Github } from "lucide-react";
import { useState } from "react";
import ProjectLightbox from "./ProjectLightbox";
import medinestImg from "@/assets/projects/medinest-screenshot.jpg";
import iotImg from "@/assets/projects/iot-screenshot.jpg";
import niviaImg from "@/assets/projects/nivia-screenshot.jpg";
import proservicesImg from "@/assets/projects/proservices-screenshot.jpg";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: "MediNest – Healthcare Website",
      date: "July 2025",
      image: medinestImg,
      description: "Comprehensive healthcare platform designed to streamline patient care and medical services. Built with modern React architecture and responsive design principles to ensure optimal user experience across all devices. Features include appointment scheduling, doctor profiles, service listings, and patient testimonials.",
      features: [
        "Reusable React components with props and state management for dynamic content rendering",
        "Advanced booking system with real-time availability checking and confirmation",
        "Responsive grid layouts using Bootstrap 5 for seamless mobile and desktop experiences",
        "Clean medical-grade UI with accessibility features (WCAG compliant)",
        "Interactive doctor cards with detailed profiles, specializations, and ratings",
        "Service catalog with search and filter functionality"
      ],
      tech: ["React", "HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React Router"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "IoT-Based Object Detection System",
      date: "September 2024",
      image: iotImg,
      description: "Innovative IoT solution for real-time object detection and distance measurement using ultrasonic sensors and Arduino microcontrollers. System integrates hardware components with Python software for intelligent automation and obstacle avoidance applications. Ideal for smart parking systems, robotics, and industrial automation.",
      features: [
        "Advanced Python logic for sensor data processing and pattern recognition",
        "Real-time distance measurement with sub-centimeter accuracy",
        "Configurable alert system with multiple notification methods (LED, buzzer, display)",
        "Data logging and visualization for analysis and optimization",
        "Low-latency response system for immediate threat detection",
        "Scalable architecture supporting multiple sensor integration"
      ],
      tech: ["Arduino", "Python", "IoT", "Ultrasonic Sensor", "Serial Communication"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "NIVIA Sports Clone",
      date: "July 2025",
      image: niviaImg,
      description: "Full-featured e-commerce clone of NIVIA Sports website showcasing advanced frontend development skills. Implemented pixel-perfect design replication with enhanced user experience features including product filtering, dynamic cart management, and smooth animations. Focused on performance optimization and SEO best practices.",
      features: [
        "Comprehensive navigation system with mega-menu and category filtering",
        "Dynamic product listings with sort, filter, and search capabilities",
        "Individual product pages with image galleries, size selection, and reviews",
        "Shopping cart functionality with quantity management and price calculations",
        "Responsive design optimized for mobile, tablet, and desktop viewports",
        "Fast loading times with lazy loading and optimized assets"
      ],
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "ProServices – Business Website",
      date: "February 2025",
      image: proservicesImg,
      description: "Professional multi-page business website built with React and modern component architecture. Designed to showcase business services, portfolio, and facilitate client communication. Features include animated sections, contact forms with validation, and integrated partner showcase. Optimized for conversions and lead generation.",
      features: [
        "Multi-page architecture with React Router for seamless navigation",
        "Home page with hero section, service overview, and call-to-action elements",
        "Detailed services page with pricing tables and feature comparisons",
        "Portfolio/Projects gallery with filtering and lightbox functionality",
        "Partners section with logo carousel and testimonial integration",
        "Contact form with real-time validation and email integration",
        "Responsive Bootstrap grid system with custom breakpoints"
      ],
      tech: ["React", "Bootstrap", "JavaScript", "React Router", "Formik"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const handleImageClick = (images, index = 0) => {
    setSelectedImages(images);
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-[1.02] hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div 
                className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                onClick={() => handleImageClick([project.image])}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ImageIcon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="View Live">
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4 max-h-32 overflow-hidden">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start group/item">
                      <span className="text-primary mr-2 group-hover/item:scale-125 transition-transform">•</span>
                      <span className="group-hover/item:text-foreground transition-colors line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50 flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 group/btn hover:border-primary hover:bg-primary/10 transition-all"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 group/btn hover:border-primary hover:bg-primary/10 transition-all"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectLightbox
        images={selectedImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={selectedIndex}
      />
    </section>
  );
};

export default Projects;