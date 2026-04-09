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
              Partners
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
          <div className="relative rounded-full shadow-xl shadow-primary/10 ring-1 ring-slate-200/80 bg-white p-2">
            <Image
              src="/snowflake-partner-badge.png"
              alt="Snowflake AI Data Cloud Services Partner — Select tier badge"
              width={280}
              height={280}
              className="rounded-full w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px]"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
