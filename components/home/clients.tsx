"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clients = [
    { name: "Oracle", logo: "/oracle-logo.png" },
    { name: "Snowflake", logo: "/snowflake-logo.png" },
    { name: "AWS", logo: "/aws-logo.png" },
    { name: "Microsoft Azure", logo: "/microsoft-azure-logo.jpg" },
    { name: "SAP", logo: "/sap-logo.png" },
    { name: "Tableau", logo: "/tableau-logo.png" },
    { name: "Google Cloud", logo: "/images/partners/google-cloud-logo.png" },
    { name: "IBM", logo: "/ibm-logo.png" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-secondary mb-4 text-balance transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className={`text-lg lg:text-xl text-muted-foreground text-pretty transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We partner with the world's leading technology companies to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary/20 aspect-[3/2] flex items-center justify-center overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300"></div>

                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 !relative !w-auto !h-auto max-w-full max-h-full"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">Enterprise Clients</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">15+</div>
            <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">Industry Sectors</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">Client Retention</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
