import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, FileText, Presentation, Code, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Publications() {
  const publications = [
    {

      title: "One-class classification for Speaker-Specific Audio Spoof Detection",
      authors: "Hashim Ali, Surya Subramani, Nithin Sai Adupa, Lekha Bollinani, Sali El-loh",
      conference: "IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)",
      year: "2025",
      venue: "Tahoe City, California, USA",
      abstract:
        "This paper introduces a speaker-specific framework for detecting audio deepfakes. By combining self-supervised learning embeddings with a one-class SVM trained only on genuine speech, the method reliably identifies synthetic voices. Evaluations on benchmark and real-world datasets show strong performance across diverse spoofing techniques, making it a practical solution for safeguarding individuals, such as political figures, against audio impersonation.",
      tags: ["Audio Deepfakes" , "Speech Spoofing Detection" , "Text-to-Speech (TTS)", "Voice Conversion (VC)","Self-Supervised Learning (SSL)", "One-Class Classification" ],

      pdfUrl: "/papers/emotion-analysis-semeval2024.pdf",
      conferenceUrl: "https://semeval.github.io/",
      materials: [
        { type: "slides", url: "/papers/emotion-analysis-slides.pdf", label: "Presentation Slides" },
        { type: "code", url: "https://github.com/alexjohnson/emotion-analysis", label: "Source Code" },
        { type: "supplementary", url: "/papers/emotion-analysis-supplementary.pdf", label: "Supplementary Material" },
      ],
    },
    {
      title: "μTESLA 3: Mechanisms of Surface Texture Enhanced Boundary Layer Pump",
      authors: "Rohma Rizvi, Sali El-loh, Siyu Chen, Kai Duan, Joe F. Lo",
      conference: "µTAS 2021 (International Conference on Miniaturized Systems for Chemistry and Life Sciences)",
      year: "2021",
      venue: "Palm Springs, California, USA",
      abstract:
        "This paper investigates how surface texture influences the performance of the μTesla rotor version 3. By varying the amplitude and frequency of sinusoidal textures on the rotor surfaces, the authors demonstrate that the boundary layer flow and pump output can be effectively controlled, as confirmed through simulations and experimental measurements",
      tags: [ "μTesla Rotor", "Microfluidics", "Surface Texture Engineering", "Boundary Layer Flow", "Pump Performance", "Fluid Dynamics", "Experimental Validation", "Computational Fluid Dynamics (CFD)"],
      pdfUrl: "/papers/fatigue-detection-itsc2023.pdf",
      conferenceUrl: "https://2023.ieee-itsc.org/",
      materials: [
        { type: "slides", url: "/papers/fatigue-detection-slides.pdf", label: "Presentation Slides" },
        { type: "code", url: "https://github.com/alexjohnson/fatigue-detection", label: "Source Code" },
        { type: "demo", url: "/demos/fatigue-detection", label: "Live Demo" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-bold font-space-grotesk">Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Publications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space-grotesk">Publications</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Research papers and academic contributions in computer vision, machine learning, and natural language
                processing.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {publications.map((paper, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-space-grotesk text-xl mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-2">{paper.authors}</CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{paper.conference}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                        <span>•</span>
                        <span>{paper.venue}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{paper.abstract}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <Button size="sm" asChild>
                      <a href={paper.pdfUrl} target="_blank" rel="noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={paper.conferenceUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Conference
                      </a>
                    </Button>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3">Related Materials</h4>
                    <div className="flex flex-wrap gap-2">
                      {paper.materials.map((material, materialIndex) => (
                        <Button key={materialIndex} size="sm" variant="ghost" asChild>
                          <a href={material.url} target="_blank" rel="noreferrer">
                            {material.type === "slides" && <Presentation className="mr-2 h-4 w-4" />}
                            {material.type === "code" && <Code className="mr-2 h-4 w-4" />}
                            {(material.type === "dataset" ||
                              material.type === "supplementary" ||
                              material.type === "demo") && <FileText className="mr-2 h-4 w-4" />}
                            {material.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
