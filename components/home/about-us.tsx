"use client"

import { CheckCircle, Shield, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function AboutUs() {
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

  const highlights = [
    {
      icon: Shield,
      text: "Secure Solutions",
      color: "bg-primary",
    },
    {
      icon: Zap,
      text: "Proactive Support",
      color: "bg-accent",
    },
    {
      icon: Globe,
      text: "Trusted Worldwide",
      color: "bg-secondary",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="lg:pr-8 h-full flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                    About Nuvola
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance leading-tight mb-4">
                  Keeping Your Technology Running.{" "}
                  <span className="text-primary">
                    Powering Business Growth.
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full" />
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
                Expert consulting and proactive IT support delivering secure, scalable solutions trusted worldwide since 2016.
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                We help businesses keep their technology running and their teams moving forward. Through expert consulting and proactive IT support, Nuvola delivers secure, scalable solutions trusted by company.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.text}
                    className={`group transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30">
                      <div className={`relative w-10 h-10 ${highlight.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                        <highlight.icon className="text-white" size={20} />
                      </div>
                      <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                        {highlight.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative lg:pl-8">
              {/* Main image */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform scale-105" />
                <div className="aspect-[4/5] lg:aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/modern-technology-consulting-office-with-team-coll.jpg"
                    alt="Nuvola Technology Consulting Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 bg-white rounded-2xl shadow-2xl px-6 lg:px-8 py-3 lg:py-4 animate-float border-2 border-primary/20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center"
                      >
                        <CheckCircle className="text-white" size={16} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-lg lg:text-2xl font-bold text-secondary whitespace-nowrap">
                      Since 2016
                    </div>
                    <div className="text-xs text-muted-foreground">Trusted Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
