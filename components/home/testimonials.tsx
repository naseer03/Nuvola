"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Testimonials() {
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

  const testimonials = [
    {
      quote:
        "Nuvola transformed our database infrastructure, reducing costs by 40% while improving performance significantly. Their expertise in Oracle is truly world-class.",
      author: "Maria Rodriguez",
      role: "CTO",
      company: "Global Financial Services",
      image: "/professional-woman-executive.png",
      rating: 5,
    },
    {
      quote:
        "Their cloud migration expertise made our transition seamless. The team's knowledge of Oracle and cloud technologies is unmatched in the industry.",
      author: "James Chen",
      role: "VP of Technology",
      company: "Healthcare Solutions Inc.",
      image: "/professional-man-executive-asian.jpg",
      rating: 5,
    },
    {
      quote:
        "Outstanding IT recruitment service. We hired three exceptional developers from their talent pool in Guatemala. Best partnership we've made.",
      author: "Sarah Williams",
      role: "HR Director",
      company: "Tech Innovation Startup",
      image: "/professional-woman-hr-manager.jpg",
      rating: 5,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-xl text-muted-foreground text-pretty transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className={`group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-primary/50 opacity-10 rounded-bl-full" />

              <CardContent className="p-8 relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <Quote className="text-primary" size={32} />
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      style={{
                        animationDelay: `${index * 150 + i * 100}ms`,
                      }}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-base italic relative">
                  <span className="text-primary text-2xl absolute -left-2 -top-1">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-primary text-2xl">&rdquo;</span>
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-secondary text-base">{testimonial.author}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">5.0</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-secondary">Excellent Rating</div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <div className="text-2xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
