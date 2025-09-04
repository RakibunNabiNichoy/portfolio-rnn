import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-white max-w-3xl mx-auto text-balance">
            I'm always interested in discussing new opportunities, research collaborations, or innovative AI projects.
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-white">nichoy.rnn@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-white">+8801791388700</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
                  <a href="https://github.com/RakibunNabiNichoy" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/rakibun-nabi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-lg">Let's Collaborate</CardTitle>
                <CardDescription>I'm particularly interested in:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI/ML Research Opportunities</li>
                  <li>• Computer Vision Projects</li>
                  <li>• Game AI Development</li>
                  <li>• Academic Collaborations</li>
                  <li>• Open Source Contributions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-black mb-2 block">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-black mb-2 block">
                      Email
                    </label>
                    <Input id="email" name="_replyto" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-black mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="What's this about?" required />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-black mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                  />
                </div>

                <input type="hidden" name="_subject" value="New contact form submission from portfolio" />
                <input type="hidden" name="_next" value="https://your-portfolio-url.com/thank-you" />

                <Button type="submit" className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
