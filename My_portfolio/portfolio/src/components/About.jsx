import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer with a strong foundation in full-stack web development. 
            Specialized in building responsive, scalable applications using modern JavaScript technologies. 
            Experienced in component-based architecture, RESTful API design, and database management. 
            Committed to writing clean, maintainable code and continuously learning new technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-105 hover:border-primary/50 animate-slide-in-left group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Education</h3>
                <p className="text-primary font-medium">Bachelor of Computer Application</p>
                <p className="text-sm text-muted-foreground">Silver Oak University | 2023-2025</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: 8.6</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Comprehensive study of computer science fundamentals including data structures, 
                  algorithms, web technologies, database management, and software engineering principles. 
                  Completed multiple hands-on projects demonstrating full-stack development capabilities.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-105 hover:border-primary/50 animate-slide-in-right group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Experience & Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hands-on experience in delivering clean, high-quality full-stack solutions with 
                  expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in 
                  building RESTful APIs, implementing authentication systems, and creating responsive user interfaces.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Frontend: React.js, Redux, HTML5, CSS3, Bootstrap, Tailwind CSS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Backend: Node.js, Express.js, RESTful API design, JWT authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Database: MongoDB, Mongoose ODM, SQL fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Tools: Git, GitHub, VS Code, Postman, Chrome DevTools</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 hover:border-primary/50 animate-scale-in group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all cursor-default">
                English (Proficient)
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all cursor-default">
                Hindi (Native)
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all cursor-default">
                Gujarati (Basic)
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;