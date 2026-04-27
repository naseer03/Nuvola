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
    { name: "Oracle", logo: "/client-logos/oracle.png" },
    { name: "W3tec", logo: "/client-logos/w3tec.png" },
    { name: "Oracle", logo: "/client-logos/oracle.png" },
    { name: "W3tec", logo: "/client-logos/w3tec.png" },
    { name: "Oracle", logo: "/client-logos/oracle.png" },
    { name: "W3tec", logo: "/client-logos/w3tec.png" },
  ]

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
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

        {/* Scrolling logos container */}
        <div className="relative w-full overflow-hidden">
          {/* Left solid edge */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-white z-10 pointer-events-none"></div>
          
          {/* Right solid edge */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-white z-10 pointer-events-none"></div>

          {/* Scrolling logos */}
          <div className="flex animate-scroll-left">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                style={{ minWidth: "150px" }}
              >
                <div className="relative w-full h-16 lg:h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={150}
                    height={60}
                    className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
