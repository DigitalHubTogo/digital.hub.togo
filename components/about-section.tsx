import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Qui sommes-nous ?</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Digital Hub Togo</strong> est une communauté dynamique de passionnés
                de technologie, dédiée à l'excellence et à l'innovation dans le domaine de l'informatique.
              </p>
              <p>
                Nous croyons fermement que la technologie est un levier de transformation sociale et économique. C'est
                pourquoi nous nous engageons à rendre l'éducation tech accessible à tous, en proposant des formations de
                et des services de qualité avec un accompagnement personnalisé.
              </p>
              <p>
                Notre équipe d'experts combine expérience pratique et passion pédagogique pour offrir des services qui
                répondent aux besoins réels du marché togolais et africain.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/DigitalHubTogo" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://www.linkedin.com/company/digital-hub-togo/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Digital Hub Togo Logo"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
