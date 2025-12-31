"use client"

import { Database, Cloud, LineChart, Users, Shield, Zap, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function FeaturedServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const services = [
    {
      icon: Database,
      title: "Database Solutions",
      description: "Oracle, PostgreSQL, and cloud-native database management with optimization and migration services.",
      features: ["24/7 Support", "Migration Services", "Performance Tuning"],
      link: "/services#database",
      gradient: "from-primary/20 via-red-500/10 to-transparent",
      iconBg: "bg-primary/10",
      accentColor: "primary",
      image: "/modern-database-servers-technology.jpg",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS, Azure, and OCI cloud infrastructure design, migration, and management for scalable solutions.",
      features: ["Multi-Cloud", "Scalable Design", "Cost Optimization"],
      link: "/services#cloud",
      gradient: "from-accent/20 via-blue-500/10 to-transparent",
      iconBg: "bg-accent/10",
      accentColor: "accent",
      image: "/cloud-computing-infrastructure-technology.jpg",
    },
    {
      icon: LineChart,
      title: "Business Analytics",
      description: "Data warehousing, BI solutions, and advanced analytics to drive data-informed decisions.",
      features: ["Real-time Insights", "Data Visualization", "Predictive Analytics"],
      link: "/services#analytics",
      gradient: "from-secondary/20 via-blue-700/10 to-transparent",
      iconBg: "bg-secondary/10",
      accentColor: "secondary",
      image: "/business-analytics-dashboard-charts.jpg",
    },
    {
      icon: Users,
      title: "IT Recruitment",
      description: "Connect with top-tier technology talent from Guatemala and Central America.",
      features: ["Top Talent", "Fast Hiring", "Quality Assurance"],
      link: "/recruitment",
      gradient: "from-primary/20 via-red-500/10 to-transparent",
      iconBg: "bg-primary/10",
      accentColor: "primary",
      image: "/diverse-technology-professionals-team.jpg",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions and regulatory compliance consulting.",
      features: ["Risk Assessment", "Compliance Audits", "Security Hardening"],
      link: "/services#security",
      gradient: "from-accent/20 via-blue-500/10 to-transparent",
      iconBg: "bg-accent/10",
      accentColor: "accent",
      image: "/cybersecurity-protection-shield.png",
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description: "Database and application optimization for maximum efficiency and speed.",
      features: ["Query Optimization", "Load Balancing", "Capacity Planning"],
      link: "/services#performance",
      gradient: "from-secondary/20 via-blue-700/10 to-transparent",
      iconBg: "bg-secondary/10",
      accentColor: "secondary",
      image: "/high-performance-computing-speed.jpg",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Expert Solutions
          </div>

          <h2
            id="services-heading"
            className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Cutting-Edge Technology
            </span>
          </h2>

          <p
            className={`text-lg text-muted-foreground text-pretty leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Comprehensive solutions designed to accelerate your digital transformation journey and drive measurable
            results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-border/50 overflow-hidden relative bg-white ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} group-hover:opacity-80 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                <div className="absolute top-4 right-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div
                    className={`${service.iconBg} backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/20`}
                  >
                    <service.icon className={`text-${service.accentColor} w-6 h-6`} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-${service.accentColor} group-hover:gap-3 transition-all duration-300 touch-manipulation`}
                  aria-label={`Explore ${service.title} service`}
                >
                  Explore service
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  aria-hidden="true"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-red-600 text-white hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 duration-300 px-12 h-14 text-lg rounded-full group relative overflow-hidden touch-manipulation w-full sm:w-auto"
          >
            <Link href="/services">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore All Services
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                  aria-hidden="true"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
