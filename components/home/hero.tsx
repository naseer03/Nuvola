"use client"

import {
  ArrowRight,
  Cloud,
  Database,
  BarChart,
  Users,
  Sparkles,
  TrendingUp,
  Zap,
  Shield,
  Award,
  Server,
  HardDrive,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && !isMobile) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/banner-custom-3.png')",
        }}
        aria-hidden="true"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0  from-black/60 via-black/50 to-black/60" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-accent/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                {/* <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-accent animate-pulse" aria-hidden="true" /> */}
                <div
                  className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Trusted by 100+ Global Enterprises
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-balance">
              <span className="text-secondary block animate-slide-in-left">Reliable IT Consulting  </span>
              {/* <span className="text-secondary block animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                Business With
              </span> */}
              <span
                className="block mt-2 bg-gradient-to-r from-primary via-red-600 to-primary bg-clip-text text-transparent animate-slide-in-left bg-[length:200%_100%] animate-gradient-x"
                style={{ animationDelay: "0.2s" }}
              >
               & Support
              </span>
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed text-pretty max-w-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Expert solutions in <span className="font-semibold text-secondary">Oracle</span>,{" "}
              <span className="font-semibold text-secondary">Cloud Architecture</span>,{" "}
              <span className="font-semibold text-secondary">Business Analytics</span> &{" "}
              <span className="font-semibold text-secondary">IT Recruitment</span>. Delivering excellence across three
              continents.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 duration-300 group relative overflow-hidden touch-manipulation"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    Get Started
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                      size={20}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl duration-300 font-semibold touch-manipulation"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { number: "9+", label: "Years", icon: TrendingUp },
                { number: "100+", label: "Projects", icon: Award },
                { number: "3", label: "Continents", icon: Users },
                { number: "100%", label: "Satisfaction", icon: Shield },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group animate-fade-in-up cursor-default"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 border-2 border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 touch-manipulation">
                    <stat.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-primary to-red-600 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} hidden lg:block`}
            aria-hidden="true"
          >
            <div className="relative h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[450px] h-[450px] rounded-[4rem] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl animate-spin-slow" />
                <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-accent/30 animate-spin-reverse" />
              </div>

              <div
                className="absolute inset-x-8 inset-y-12 group"
                style={{
                  transform: `
                    perspective(1200px) 
                    rotateY(${mousePosition.x * 12}deg) 
                    rotateX(${-mousePosition.y * 12}deg)
                    translateY(${scrollY * 0.15}px)
                    translateZ(50px)
                  `,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80">
                  <Image
                    src="/custom-images/hero.jpg"
                    alt="Nuvola Technology Consulting"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-transparent to-primary/40 mix-blend-overlay" />

                  {/* Glass shine effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: `translateX(${mousePosition.x * 50}px)` }}
                  />
                </div>
              </div>

              {/* Top right card - Layer 1 - Moving Oracle ACE to top position */}
              <div
                className="absolute -top-6 -right-6 z-20 animate-float"
                style={{
                  transform: `translateY(${scrollY * 0.08}px) translateZ(100px)`,
                  animationDelay: "0s",
                }}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border-2 border-primary/20 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-default group">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Database className="text-white" size={32} />
                      <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-md animate-pulse" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">Oracle ACE</div>
                      <div className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                        <Award className="w-3 h-3 text-primary" />
                        Certified Expert
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom left card - Layer 2 - Changed to Cloud Expert */}
              <div
                className="absolute -bottom-6 -left-6 z-30 animate-float"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px) translateZ(120px)`,
                  animationDelay: "1s",
                }}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border-2 border-accent/20 hover:scale-110 hover:-rotate-3 transition-all duration-500 cursor-default group">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cloud className="text-white" size={32} />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-75" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">Cloud Expert</div>
                      <div className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                        <Zap className="w-3 h-3 text-accent" />
                        99.9% Uptime
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side card - Layer 3 */}
              <div
                className="absolute top-1/3 -right-4 z-20 animate-float"
                style={{
                  transform: `translateX(${scrollY * 0.05}px) translateZ(80px)`,
                  animationDelay: "1.5s",
                }}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border-2 border-yellow-500/30 hover:scale-110 transition-all duration-500 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg p-2">
                      <Image
                        src="/snowflake-logo.png"
                        alt="Snowflake"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <div className="absolute inset-0 border-2 border-yellow-300/50 rounded-2xl animate-ping" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">Snowflake</div>
                      <div className="text-sm text-muted-foreground font-medium">Cloud Data Platform</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icon badges - Layer 4 - Changed Users to Server icon and Sparkles to HardDrive icon */}
              <div
                className="absolute top-1/4 -left-8 z-10 w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2 border-accent/30 hover:scale-125 transition-transform duration-300 animate-float"
                style={{
                  animationDelay: "0.5s",
                  transform: `translateY(${Math.sin(scrollY * 0.02) * 15}px) translateZ(60px)`,
                }}
              >
                <Server className="w-10 h-10 text-accent" />
              </div>

              <div
                className="absolute bottom-1/4 right-0 z-10 w-16 h-16 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border-2 border-secondary/30 hover:scale-125 hover:rotate-12 transition-all duration-300 animate-float"
                style={{
                  animationDelay: "2s",
                  transform: `translateY(${Math.cos(scrollY * 0.02) * 15}px) translateZ(70px)`,
                }}
              >
                <HardDrive className="w-8 h-8 text-secondary" />
              </div>

              {/* Decorative rings - Layer 0 (background) */}
              <div className="absolute top-0 right-0 w-32 h-32 border-4 border-accent/20 rounded-full animate-ping-slow" />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 border-4 border-primary/20 rounded-full animate-ping-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

        {/* <div
          className="mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-12 border-t-2 border-gray-200 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-12 text-balance transition-all duration-1000 opacity-100 translate-y-0 text-center">
            Certified Partners & Recognitions
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {[
              { icon: Database, label: "Oracle ACE", color: "secondary" },
              { icon: Cloud, label: "Snowflake Squad", color: "accent" },
              { icon: TrendingUp, label: "Cloud Certified", color: "primary" },
            ].map((partner, index) => (
              <div
                key={partner.label}
                className="flex items-center gap-3 group hover:scale-110 transition-transform duration-300 cursor-default animate-fade-in-up touch-manipulation"
                style={{ animationDelay: `${1.1 + index * 0.1}s` }}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-${partner.color} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}
                >
                  <partner.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden="true" />
                </div>
                <span className="font-bold text-base sm:text-lg text-secondary">{partner.label}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
