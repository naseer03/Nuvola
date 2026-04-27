"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-primary/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
            Partnerships and Community Distinctions 
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance leading-tight mb-4">
            Technology <span className="text-primary">Partnerships</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            We work with leading platforms so your data and cloud initiatives are built on trusted, enterprise-grade
            foundations.
          </p>
        </div>

        <div
          className={`flex justify-center transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-full max-w-5xl bg-gradient-to-r from-white via-slate-50 to-white p-4 sm:p-6 md:p-8 shadow-2xl shadow-primary/10 ring-1 ring-slate-200/80 transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/patners-logo.png"
              alt="Snowflake AI Data Cloud Services Partner — Select tier badge"
              width={1400}
              height={520}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
