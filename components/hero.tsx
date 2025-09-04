import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/images/profile.png"
              alt="Rakibun Nabi"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-primary"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-balance mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Rakibun Nabi</span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground mb-8 text-balance max-w-3xl mx-auto">
            AI/ML Engineer & Researcher specializing in{" "}
            <span className="text-primary font-semibold">Machine Learning</span>,{" "}
            <span className="text-primary font-semibold">Computer Vision</span>, and{" "}
            <span className="text-primary font-semibold">Artificial Intelligence</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/RakibunNabiNichoy" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/rakibun-nabi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:nichoy.rnn@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
              <p className="text-foreground">Research Papers</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">4+</h3>
              <p className="text-foreground">AI/ML Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">B.Sc.</h3>
              <p className="text-foreground">Computer Science & Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
