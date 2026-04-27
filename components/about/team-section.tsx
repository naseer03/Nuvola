"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function TeamSection() {
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

  const team = [
    {
      name: "Expert Database Architect",
      role: "Oracle ACE & Database Specialist",
      image: "/professional-database-architect-latin.jpg",
      specialty: "Oracle, Cloud Databases",
    },
    {
      name: "Cloud Solutions Lead",
      role: "AWS & Azure Certified",
      image: "/professional-cloud-architect-woman.jpg",
      specialty: "Cloud Migration & Architecture",
    },
    {
      name: "BI & Analytics Director",
      role: "Data Warehouse Expert",
      image: "/professional-data-analyst-man.jpg",
      specialty: "Business Intelligence",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Our Expert Team
          </h2>
          <p
            className={`text-xl text-muted-foreground text-pretty transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Certified professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white hover:text-accent transition-colors">
                      <Linkedin size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
