import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto text-balance">
            I'm a passionate AI/ML engineer and researcher with a strong background in computer science. Currently
            pursuing cutting-edge research in artificial intelligence while building practical solutions that make a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-white mb-6 leading-relaxed">
              I graduated with a B.Sc. in Computer Science and Engineering from Jatiya Kabi Kazi Nazrul Islam University
              with a CGPA of 3.03/4.00. My academic journey has been focused on artificial intelligence, machine
              learning, and their practical applications in solving real-world problems.
            </p>
            <p className="text-white mb-6 leading-relaxed">
              Currently, I'm working on three exciting research papers covering AI for NPC behavior in games, secure
              multi-party computation, and computer vision for traffic analysis. These projects showcase my commitment
              to advancing the field of AI through innovative research.
            </p>
            <p className="text-white leading-relaxed">
              Beyond academics, I'm actively involved in leadership roles and have experience hosting programming
              contests, demonstrating my commitment to the tech community and knowledge sharing.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Education</h4>
                    <p className="text-sm text-black">
                      B.Sc. in Computer Science and Engineering
                      <br />
                      Jatiya Kabi Kazi Nazrul Islam University (2024)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Research Focus</h4>
                    <p className="text-sm text-black">
                      AI/ML, Computer Vision, Cryptographic Protocols,
                      <br />
                      Game AI, and Secure Multi-Party Computation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
