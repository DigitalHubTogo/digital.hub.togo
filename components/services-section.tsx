import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb, Users, Laptop, TrendingUp } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Masterclasses",
    description:
      "Des sessions intensives animées par des experts pour approfondir vos compétences en développement web, mobile, data science et plus encore.",
  },
  {
    icon: Code,
    title: "Cours de soutien IT",
    description:
      "Accompagnement personnalisé pour les étudiants et professionnels souhaitant renforcer leurs connaissances en programmation et technologies.",
  },
  {
    icon: Lightbulb,
    title: "Conseils et Services en informatique",
    description:
      "Expertise stratégique pour accompagner votre transformation digitale, optimiser vos processus et choisir les bonnes technologies.",
  },
  {
    icon: Users,
    title: "Formation en entreprise",
    description:
      "Programmes de formation sur mesure pour vos équipes, adaptés à vos besoins spécifiques et à votre secteur d'activité.",
  },
  {
    icon: Laptop,
    title: "Développement de projets",
    description:
      "Conception et réalisation de solutions digitales innovantes : sites web, applications mobiles, systèmes d'information.",
  },
  {
    icon: TrendingUp,
    title: "Mentorat tech",
    description:
      "Accompagnement individuel pour développer votre carrière dans la tech, préparer vos entretiens et construire votre portfolio.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Nos services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Notre collection de services tech couvre tous les besoins à chaque étape de votre parcours de transformation
            digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
