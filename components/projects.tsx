import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Tuberculosis Detection using Machine Learning",
      description:
        "Developed a machine learning model to detect tuberculosis from medical imaging data, contributing to early diagnosis and treatment.",
      year: "2024",
      technologies: ["Python", "Machine Learning", "Medical Imaging", "Data Analysis"],
      category: "AI/ML",
    },
    {
      title: "Transcript and Certificate Withdraw System",
      description:
        "Built a comprehensive web-based system for students to request and manage their academic transcripts and certificates digitally.",
      year: "2023",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      category: "Web Development",
    },
    {
      title: "CSE Diary - Academic Management App",
      description:
        "Created a mobile application for computer science students to manage their academic schedules, assignments, and course materials.",
      year: "2022",
      technologies: ["Android Studio", "Firebase", "Java", "XML"],
      category: "Mobile Development",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Implemented a classic Tic Tac Toe game with intelligent AI opponent using minimax algorithm for optimal gameplay.",
      year: "2021",
      technologies: ["C", "Algorithm Design", "Game Logic"],
      category: "Game Development",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-white max-w-3xl mx-auto text-balance">
            A showcase of my technical projects spanning AI/ML, web development, mobile apps, and game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs text-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
