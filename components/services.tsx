"use client"

import { Database, TrendingUp, Cloud, Code, Settings, Users, Zap, Network } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Services() {
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

  const services = [
    {
      icon: Settings,
      title: "Support",
      description: "Proactive & Reactive Support to maintain the continuity of your projects with guaranteed SLAs.",
      features: ["24/7 Availability", "SLA Guaranteed", "Proactive Monitoring"],
      image: "/contact-communication-technology-global.jpg",
      accentColor: "primary",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Increase the performance of systems and databases with expert optimization techniques.",
      features: ["Query Optimization", "System Tuning", "Capacity Planning"],
      image: "/high-performance-computing-speed.jpg",
      accentColor: "accent",
    },
    {
      icon: Network,
      title: "Consulting",
      description: "Architecture and Technological Innovation guidance for your business transformation.",
      features: ["Architecture Design", "Technology Strategy", "Innovation Guidance"],
      image: "/modern-technology-consulting-office-with-team-coll.jpg",
      accentColor: "secondary",
    },
    {
      icon: Database,
      title: "Databases",
      description: "Database upgrades, migrations, and administration with Oracle Master certification.",
      features: ["Oracle Master", "Migrations", "Administration"],
      image: "/modern-database-servers-technology.jpg",
      accentColor: "primary",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Design and implementation of architectures for Business Intelligence and Analytics.",
      features: ["BI Solutions", "Data Warehousing", "Advanced Analytics"],
      image: "/business-analytics-dashboard-charts.jpg",
      accentColor: "accent",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Business optimization through cloud solutions (AWS, Azure, Google, Oracle).",
      features: ["Multi-Cloud", "Migration", "Optimization"],
      image: "/cloud-computing-infrastructure-technology.jpg",
      accentColor: "secondary",
    },
    {
      icon: Code,
      title: "Development",
      description: "Custom development in PL/SQL, APEX, Python, Java, and Streamlit.",
      features: ["PL/SQL", "APEX", "Python", "Java", "Streamlit"],
      image: "/professional-technology-team-office.jpg",
      accentColor: "primary",
    },
    {
      icon: Users,
      title: "SOA & BPM",
      description: "Applications Integration and Enterprise architectures for seamless operations.",
      features: ["Enterprise Integration", "SOA Architecture", "BPM Solutions"],
      image: "/professional-business-team-technology-consulting.jpg",
      accentColor: "accent",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const IconComponent = service.icon

            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content Column */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl ${
                        service.accentColor === "primary"
                          ? "bg-primary/10"
                          : service.accentColor === "accent"
                            ? "bg-accent/10"
                            : "bg-secondary/10"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${
                          service.accentColor === "primary"
                            ? "text-primary"
                            : service.accentColor === "accent"
                              ? "text-accent"
                              : "text-secondary"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-3xl lg:text-4xl font-bold ${
                        service.accentColor === "primary"
                          ? "text-primary"
                          : service.accentColor === "accent"
                            ? "text-accent"
                            : "text-secondary"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Column */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        service.accentColor === "primary"
                          ? "from-primary/20 via-transparent to-transparent"
                          : service.accentColor === "accent"
                            ? "from-accent/20 via-transparent to-transparent"
                            : "from-secondary/20 via-transparent to-transparent"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
