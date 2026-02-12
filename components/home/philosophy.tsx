"use client"

import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Philosophy() {
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

  const philosophyItems = [
    {
      title: "Creativity",
      description: "We create innovative solutions that efficiently solve your problems, not just relying on documentation for implementation.",
      tags: ["Innovation", "Problem Solving", "Custom Solutions"],
      image: "/professional-technology-team-office.jpg",
      accentColor: "primary",
      textColor: "text-primary",
    },
    {
      title: "Planning",
      description: "Achieving specific objectives through strategic planning is, and will always be, our top priority.",
      tags: ["Strategic Planning", "Goal-Oriented", "Results-Driven"],
      image: "/modern-technology-consulting-office-with-team-coll.jpg",
      accentColor: "accent",
      textColor: "text-accent",
    },
    {
      title: "Flexibility",
      description: "Flexibility to handle urgent projects, regardless of overnight schedules. Get resources on demand.",
      tags: ["24/7 Support", "On-Demand", "Agile Approach"],
      image: "/professional-business-team-technology-consulting.jpg",
      accentColor: "secondary",
      textColor: "text-secondary",
    },
    {
      title: "Availability",
      description: "We guarantee timely support through Service Level Agreements (SLAs).",
      tags: ["SLA Guaranteed", "Timely Support", "Reliable Service"],
      image: "/contact-communication-technology-global.jpg",
      accentColor: "primary",
      textColor: "text-primary",
    },
    {
      title: "Technology",
      description: "A multidisciplinary team with high technical capabilities in various technological areas.",
      tags: ["Expert Team", "Multi-Disciplinary", "Technical Excellence"],
      image: "/modern-database-servers-technology.jpg",
      accentColor: "accent",
      textColor: "text-accent",
    },
    {
      title: "Immersion",
      description: "At Nuvola, we enjoy being a key part in creating value for our clients' projects. That's why we work closely with multiple contacts within your organization as if we were part of it. This way, we gain a deep understanding of your processes and can easily identify improvement opportunities.",
      tags: ["Deep Integration", "Value Creation", "Process Understanding"],
      image: "/diverse-technology-professionals-team.jpg",
      accentColor: "secondary",
      textColor: "text-secondary",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Sparkles className="w-4 h-4" />
            Our Values
          </div>

          <h2
            id="philosophy-heading"
            className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Philosophy
            </span>
          </h2>

          <p
            className={`text-lg text-muted-foreground text-pretty leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            The core principles that guide everything we do and drive our commitment to excellence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {philosophyItems.map((item, index) => (
            <Card
              key={item.title}
              className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-200 overflow-hidden relative bg-white rounded-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <CardContent className="p-6 relative">
                {/* Title */}
                <h3 className={`text-2xl font-bold ${item.textColor} mb-3 group-hover:opacity-90 transition-opacity duration-300`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags/Keywords */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
