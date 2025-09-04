import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"

export function Research() {
  const researchPapers = [
    {
      title:
        "AI for NPC (Non-Player Character) Behavior: Emotionally Intelligent NPCs for Realistic Player Interactions in Games",
      description:
        "Developing advanced AI systems that enable non-player characters to exhibit emotionally intelligent behaviors, creating more immersive and realistic gaming experiences through sophisticated player interaction models.",
      year: "2025",
      status: "Ongoing",
      domain: "Machine Learning",
      area: "Artificial Intelligence",
      technologies: ["Python", "Deep Learning", "Natural Language Processing", "Game AI"],
    },
    {
      title: "Leveraging Tokenization to Reduce Computational Overhead in SMPC",
      description:
        "Analyzing tokenization as a lightweight alternative to Homomorphic Encryption and Differential Privacy in Secure Multi-Party Computation, focusing on reducing computational complexity while maintaining security guarantees.",
      year: "2025",
      status: "Ongoing",
      domain: "Cryptographic Protocols",
      area: "Secure Multi-Party Computation (SMPC)",
      technologies: ["Python", "Cryptography", "Security Protocols", "Algorithm Optimization"],
    },
    {
      title: "Classifying Traffic Congested Areas from Real-Time Image Dataset Using Deep Learning",
      description:
        "Implementing computer vision techniques to automatically identify and classify traffic congestion patterns from real-time image data, contributing to smart city infrastructure and traffic management systems.",
      year: "2025",
      status: "Ongoing",
      domain: "Machine Learning",
      area: "Computer Vision",
      technologies: ["Python", "Deep Learning", "Computer Vision", "Image Processing"],
    },
  ]

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Research Publications</h2>
          <p className="text-lg text-white max-w-3xl mx-auto text-balance">
            Current research initiatives focusing on cutting-edge AI technologies, security protocols, and computer
            vision applications.
          </p>
        </div>

        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary"
            >
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      {paper.status}
                    </Badge>
                    <Badge variant="outline" className="text-black">
                      {paper.domain}
                    </Badge>
                    <Badge variant="outline" className="text-black">
                      {paper.area}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{paper.year}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                  {paper.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">{paper.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <FileText className="h-4 w-4" />
                    Paper
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Details
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
