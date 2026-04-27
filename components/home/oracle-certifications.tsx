"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const certificationImages = [
  "Picture18.png",
  "Picture19.png",
  "Picture20.png",
  "Picture21.png",
  "Picture22.png",
  "Picture23.png",
  "Picture24.png",
  "Picture25.png",
  "Picture26.png",
  "Picture27.png",
  "Picture28.png",
  "Picture29.png",
  "Picture30.png",
  "Picture31.png",
]

export default function OracleCertifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.12 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="oracle-certifications"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-white"
      aria-label="Oracle Certifications"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
              Expertise & Credentials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance leading-tight mb-4">
            Oracle <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            Recognized certifications across Oracle Database, RAC, Exadata, Linux, and performance tuning specialties.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {certificationImages.map((imageName, index) => (
              <div
                key={imageName}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${Math.min(index * 20, 220)}ms` }}
              >
                <Image
                  src={`/${imageName}`}
                  alt={`Oracle Certification ${index + 18}`}
                  width={320}
                  height={220}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
