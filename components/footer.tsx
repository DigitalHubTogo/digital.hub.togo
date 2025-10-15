import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.webp" alt="Digital Hub Togo" width={40} height={40} className="w-10 h-10" />
              <span className="font-bold text-lg">digital hub Togo</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre partenaire pour l'excellence en technologie et innovation au Togo.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/DigitalHubTogo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/digital-hub-togo/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:digital.hub.togo@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Masterclasses
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Cours de soutien IT
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Conseils et services informatique
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Formation en entreprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Nous rejoindre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Sokodé, Togo</li>
              <li>
                <a
                  href="mailto:contact@digitalhubtogo.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  digital.hub.togo@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+22890000000" className="text-muted-foreground hover:text-primary transition-colors">
                  +228 93 56 12 40
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Digital Hub Togo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
