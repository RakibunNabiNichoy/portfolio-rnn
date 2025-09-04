import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cpu, Palette, Users, Globe } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "PHP", "Java", "HTML", "CSS", "JavaScript", "MySQL", "LaTeX", "XML"],
      color: "text-primary",
    },
    {
      title: "AI/ML & Data Science",
      icon: Cpu,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Data Analysis",
        "Algorithm Design",
      ],
      color: "text-secondary",
    },
    {
      title: "Development Tools",
      icon: Database,
      skills: ["Android Studio", "Visual Studio Code", "Firebase", "Bootstrap", "Git", "Cisco Packet Tracer"],
      color: "text-accent",
    },
    {
      title: "Design & Media",
      icon: Palette,
      skills: ["Adobe Products", "Blender Software", "UI/UX Design", "Photography", "Video Editing"],
      color: "text-primary",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Public Speaking",
        "Leadership",
        "Teamwork",
        "Organization Management",
        "Project Management",
        "Research",
      ],
      color: "text-secondary",
    },
    {
      title: "Languages & Platforms",
      icon: Globe,
      skills: ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)", "Windows", "Android"],
      color: "text-accent",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-white max-w-3xl mx-auto text-balance">
            A comprehensive overview of my technical skills, tools, and competencies across various domains of computer
            science and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs text-black hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Research Areas Highlight */}
        <div className="mt-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">Current Research Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-black mb-2">Artificial Intelligence</h4>
                  <p className="text-sm text-black">Game AI, NPC Behavior, Emotional Intelligence</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Computer Vision</h4>
                  <p className="text-sm text-black">Traffic Analysis, Image Classification, Real-time Processing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Cryptography</h4>
                  <p className="text-sm text-black">SMPC, Privacy-Preserving Computation, Security Protocols</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
