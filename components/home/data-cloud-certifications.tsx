"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const certificationImages = [
  "Picture1.png",
  "Picture2.png",
  "Picture3.png",
  "Picture4.png",
  "Picture5.png",
  "Picture6.png",
  "Picture7.png",
  "Picture8.png",
  "Picture9.png",
  "Picture10.png",
  "Picture11.png",
  "Picture12.png",
  "Picture13.png",
  "Picture14.png",
]

export default function DataCloudCertifications() {
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
      id="data-cloud-certifications"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-slate-50/60"
      aria-label="Data and Cloud Certifications"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
            Professional Certifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance leading-tight mb-4">
            Data & Cloud <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            Industry-recognized cloud and data credentials that support secure, scalable, and high-performance
            solutions.
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
                  alt={`Data and Cloud Certification ${index + 1}`}
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
