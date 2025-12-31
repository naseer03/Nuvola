import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-white via-blue-50/30 to-red-50/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-secondary mb-6 leading-tight text-balance">
            Technology & Cloud
            <span className="block text-primary mt-2">Consulting Excellence</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Expert solutions in Oracle, Databases, Cloud Architecture, Business Analytics & IT Recruitment. Serving
            Central America, USA & Europe since 2016.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-14">
              <Link href="#contact">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 h-14 bg-transparent"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "9+", label: "Years Experience" },
              { number: "100+", label: "Projects Delivered" },
              { number: "3", label: "Continents Served" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
