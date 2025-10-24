import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block font-sans">Sali El-loh</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Projects
              </a>
              <Link href="/publications" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Publications
              </Link>
              <Link href="/work" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Work
              </Link>
              <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Skills
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-space-grotesk text-balance">
                Machine Learning Engineer
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-pretty">
                AI graduate specializing in machine learning, data-driven solutions, and intelligent system design
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space-grotesk">About Me</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I’m a Machine Learning Engineer with experience in building intelligent systems and applying AI to
                  solve real-world problems. Over the past few years, I’ve worked on projects ranging from computer
                  vision and deep learning to data analysis and model deployment. I enjoy bridging the gap between
                  research and application, and I’m always looking for opportunities to learn and contribute to
                  impactful work
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="/2025_Resume_SE.pdf" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/salielloh12/" target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
              <Image
                alt="Sali El-loh"
                className="mx-auto overflow-hidden rounded-xl sm:w-full lg:order-last"
                height={1202}
                src="/headshot2.jpg"
                width={990}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space-grotesk">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of my recent projects that showcase my skills and passion for development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    alt="Product Recommendation"
                    className="aspect-video overflow-hidden rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                    height="200"
                    src="/modern-ecommerce-product-recommendation-interface-.jpg"
                    width="400"
                  />
                </div>
                <CardTitle className="font-space-grotesk">Product Recommendation</CardTitle>
                <CardDescription>
                  A personalized product recommendation system with user-specific purchase history and AI-driven
                  suggestions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href="https://github.com/alexjohnson/product-recommendation" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/demos/ecommerce">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-red-200 flex items-center justify-center">
                  <div className="text-4xl">🎬</div>
                </div>
                <CardTitle className="font-space-grotesk">Human Action Recognition</CardTitle>
                <CardDescription>
                  AI-powered system that detects and classifies human actions in videos using deep learning models
                  trained on UCF50 dataset.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href="https://github.com/alexjohnson/human-action-recognition" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/demos/action-recognition">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-4xl">😊</div>
                </div>
                <CardTitle className="font-space-grotesk">Sentiment Analysis</CardTitle>
                <CardDescription>
                  Emotion detection system trained on Friends sitcom conversations using SemEval-2024 ECAC dataset to
                  classify six basic emotions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">BERT</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href="https://github.com/alexjohnson/sentiment-analysis" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/demos/sentiment-analysis">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center">
                  <div className="text-4xl">👁️</div>
                </div>
                <CardTitle className="font-space-grotesk">Passive Fatigue Detection</CardTitle>
                <CardDescription>
                  Real-time fatigue detection system using computer vision to monitor user alertness through webcam
                  analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Real-time</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href="https://github.com/alexjohnson/fatigue-detection" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/demos/fatigue-detection">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space-grotesk">
                Skills & Technologies
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I work with modern technologies to build scalable and efficient applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
            <Card className="text-center">
              <CardHeader>
                <Code className="mx-auto h-12 w-12 text-accent" />
                <CardTitle className="font-space-grotesk">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="mx-auto h-12 w-12 text-accent" />
                <CardTitle className="font-space-grotesk">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="mx-auto h-12 w-12 text-accent" />
                <CardTitle className="font-space-grotesk">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Vercel</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="mx-auto h-12 w-12 text-accent" />
                <CardTitle className="font-space-grotesk">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Expo</Badge>
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">PWA</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space-grotesk">Get In Touch</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm always interested in new opportunities and collaborations. Let's connect!
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild>
                <a href="ellohsali@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/alexjohnson" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-left">© 2025 Sali El-loh. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/alexjohnson"
                target="_blank"
                className="hover:text-accent transition-colors"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                className="hover:text-accent transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:alex@example.com" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
