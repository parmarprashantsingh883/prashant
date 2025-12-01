import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, MessageSquare, Sparkles } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "React.js", level: "Advanced", category: "Frontend" },
    { name: "Node.js", level: "Advanced", category: "Backend" },
    { name: "Express.js", level: "Advanced", category: "Backend" },
    { name: "MongoDB", level: "Advanced", category: "Database" },
    { name: "JavaScript (ES6+)", level: "Advanced", category: "Language" },
    { name: "HTML5", level: "Expert", category: "Frontend" },
    { name: "CSS3", level: "Expert", category: "Frontend" },
    { name: "Bootstrap", level: "Advanced", category: "Framework" },
    { name: "Tailwind CSS", level: "Advanced", category: "Framework" },
    { name: "SQL", level: "Intermediate", category: "Database" },
    { name: "Python", level: "Intermediate", category: "Language" },
    { name: "RESTful APIs", level: "Advanced", category: "Backend" },
    { name: "Git & GitHub", level: "Advanced", category: "Tools" },
    { name: "Redux", level: "Intermediate", category: "State Management" }
  ];

  const softSkills = [
    { name: "Team Leadership", description: "Leading development teams to deliver projects on time" },
    { name: "Communication", description: "Clear technical and non-technical communication" },
    { name: "Problem-Solving", description: "Analytical thinking and creative solutions" },
    { name: "Time Management", description: "Efficient project planning and execution" },
    { name: "Adaptability", description: "Quick learning of new technologies and frameworks" },
    { name: "Attention to Detail", description: "Writing clean, maintainable code" }
  ];

  const aiTools = [
    { name: "Bolt", description: "AI-powered development assistant" },
    { name: "Lovable", description: "Full-stack app builder" },
    { name: "Claude", description: "Advanced AI for code assistance" },
    { name: "ChatGPT", description: "Problem-solving and debugging" },
    { name: "DeepSeek", description: "Code optimization and analysis" },
    { name: "GitHub Copilot", description: "AI pair programmer" },
    { name: "Gemini", description: "Google's AI assistant" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-105 hover:border-primary/50 animate-fade-in group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Code2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Technical Skills</h3>
            </div>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all group/item border border-transparent hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                      {skill.level}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-105 hover:border-primary/50 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Soft Skills</h3>
            </div>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all group/item border border-transparent hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium text-foreground group-hover/item:text-primary transition-colors block mb-1">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{skill.description}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur hover:scale-105 hover:border-primary/50 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">AI Tools</h3>
            </div>
            <div className="space-y-3">
              {aiTools.map((tool, index) => (
                <div
                  key={index}
                  className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all group/item border border-transparent hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium text-foreground group-hover/item:text-primary transition-colors block mb-1">
                    {tool.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{tool.description}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;