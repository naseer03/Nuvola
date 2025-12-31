"use client"

import { Award, Globe, HeartHandshake, Rocket, CheckCircle, Star, Trophy, Target } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const primary = "primary"
  const secondary = "secondary"
  const accent = "accent"

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const counters = [
        { key: "years", target: 9 },
        { key: "projects", target: 100 },
        { key: "clients", target: 3 }, // 3 continents
        { key: "satisfaction", target: 100 },
      ]

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounts({
          years: Math.floor(counters[0].target * progress),
          projects: Math.floor(counters[1].target * progress),
          clients: Math.floor(counters[2].target * progress),
          satisfaction: Math.floor(counters[3].target * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts({
            years: counters[0].target,
            projects: counters[1].target,
            clients: counters[2].target,
            satisfaction: counters[3].target,
          })
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      icon: Trophy,
      value: counts.years,
      suffix: "+",
      label: "Years of Excellence",
      color: "from-primary via-red-500 to-red-600",
      bgColor: "from-primary/10 to-red-50",
      description: "Industry experience",
    },
    {
      icon: Target,
      value: counts.projects,
      suffix: "+",
      label: "Successful Projects",
      color: "from-secondary via-blue-600 to-blue-700",
      bgColor: "from-secondary/10 to-blue-50",
      description: "Delivered with excellence",
    },
    {
      icon: Globe,
      value: counts.clients,
      suffix: "",
      label: "Continents",
      color: "from-accent via-blue-500 to-cyan-600",
      bgColor: "from-accent/10 to-blue-50",
      description: "Global presence",
    },
    {
      icon: Star,
      value: counts.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-primary via-red-500 to-pink-600",
      bgColor: "from-primary/10 to-red-50",
      description: "Customer success rate",
    },
  ]

  const reasons = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Oracle ACE status and multiple Oracle certifications demonstrate our technical mastery.",
      color: "from-primary to-red-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across Central America, USA, and Europe with local expertise.",
      color: "from-accent to-blue-600",
    },
    {
      icon: HeartHandshake,
      title: "Client-Focused",
      description: "100% client satisfaction through personalized solutions and dedicated support.",
      color: "from-secondary to-blue-900",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Staying ahead with cutting-edge technologies and industry best practices.",
      color: "from-primary to-red-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                Our Track Record
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 text-balance">
              Numbers That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-accent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proven excellence across years of delivering innovative technology solutions worldwide
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative h-full">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105`}
                />

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                      />
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                      >
                        <stat.icon className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="mb-4 flex-grow">
                    <div
                      className={`text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${stat.color} mb-2`}
                    >
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`h-1 bg-gradient-to-r ${stat.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Image with floating stats */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative lg:pr-8">
              {/* Main image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-2xl transform scale-105" />
                <div className="aspect-[3/4] lg:aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/professional-business-team-technology-consulting.jpg"
                    alt="Nuvola Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-primary/30 mix-blend-overlay" />
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 lg:px-8 py-3 lg:py-4 animate-float border-2 border-primary/20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="flex -space-x-2">
                    {[primary, secondary, accent].map((color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gradient-to-br from-${color}/80 to-${color} flex items-center justify-center`}
                      >
                        <CheckCircle className="text-white" size={16} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-lg lg:text-2xl font-bold text-secondary whitespace-nowrap">
                      Trusted Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Reasons */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="lg:pl-8 h-full flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                    Why Partner With Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance leading-tight mb-4">
                  Why Choose <span className="text-primary">Nuvola?</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <div className="space-y-5">
                {reasons.map((reason, index) => (
                  <div
                    key={reason.title}
                    className={`group transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="relative flex gap-4 lg:gap-5 items-start p-5 lg:p-6 rounded-2xl bg-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
                      <div className="relative flex-shrink-0">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                        />
                        <div
                          className={`relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        >
                          <reason.icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
