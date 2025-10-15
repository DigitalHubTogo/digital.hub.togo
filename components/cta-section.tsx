import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Prêt à rejoindre la communauté tech ?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Que vous soyez étudiant, professionnel ou entrepreneur, nous avons les ressources et l'expertise pour vous
            accompagner dans votre parcours tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link href="#contact">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="#services">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
