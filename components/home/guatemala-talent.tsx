// "use client"

// import { GraduationCap, Clock, FileText, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react"
// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// export default function GuatemalaTalent() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const listItemRefs = useRef<(HTMLButtonElement | null)[]>([])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Handle scroll-based image switching using Intersection Observer
//   useEffect(() => {
//     const observers: IntersectionObserver[] = []

//     listItemRefs.current.forEach((ref, index) => {
//       if (!ref) return

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveIndex(index)
//           }
//         },
//         {
//           threshold: 0.5,
//           rootMargin: "-20% 0px -20% 0px", // Trigger when item is in center 60% of viewport
//         },
//       )

//       observer.observe(ref)
//       observers.push(observer)
//     })

//     return () => {
//       observers.forEach((observer) => observer.disconnect())
//     }
//   }, [])

//   const benefits = [
//     {
//       icon: GraduationCap,
//       title: "Highly Skilled Talent from Guatemala",
//       description:
//         "Guatemala boasts a growing pool of well-educated IT professionals with expertise in cloud, infrastructure and software development.",
//       image: "/diverse-technology-professionals-team.jpg",
//       color: "primary",
//     },
//     {
//       icon: Clock,
//       title: "Nearshore Advantage with Favorable Time Zone",
//       description:
//         "Guatemala operates in Central Standard Time (CST), aligning closely with US business hours. This facilitates real-time collaboration, agile project delivery, and continuous support across multiple time zones.",
//       image: "/professional-technology-team-office.jpg",
//       color: "accent",
//     },
//     {
//       icon: FileText,
//       title: "Favorable Tax Incentives and Legal Framework",
//       description:
//         "The Guatemalan government offers attractive tax incentives and streamlined regulatory frameworks for foreign companies.",
//       image: "/modern-technology-consulting-office-with-team-coll.jpg",
//       color: "secondary",
//     },
//     {
//       icon: DollarSign,
//       title: "Competitive Total Cost of Ownership (TCO)",
//       description:
//         "Guatemala offers a significant reduction in overall TCO for IT operations. Companies can achieve savings of 30-50% on salaries, overhead, and infrastructure costs compared to onshore teams, directly impacting profitability and scalability.",
//       image: "/professional-business-team-technology-consulting.jpg",
//       color: "primary",
//     },
//     {
//       icon: TrendingUp,
//       title: "Strong Economic Growth and Stability",
//       description:
//         "Guatemala has maintained steady GDP growth and a resilient economy in Central America. This stability supports long-term investments, providing a secure environment for expanding nearshore IT operations and minimizing risks related to volatility.",
//       image: "/modern-technology-cloud-computing-data-center.jpg",
//       color: "accent",
//     },
//   ]

//   // Get the current benefit to display
//   const currentBenefit = benefits[activeIndex]

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 lg:py-32 bg-white relative overflow-hidden"
//       aria-labelledby="guatemala-talent-heading"
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Heading Section - Above both columns */}
//         <div className="mb-12 lg:mb-16 text-center">
//           <h2
//             id="guatemala-talent-heading"
//             className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-6 text-balance leading-tight transition-all duration-1000 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             Why Hire Talent from{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
//               Guatemala?
//             </span>
//           </h2>
          
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left Column - Service List */}
//           <div
//             className={`transition-all duration-1000 delay-200 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <p
//             className={`text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-100 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             Discover the strategic advantages of partnering with Guatemala's thriving IT talent pool for your technology
//             needs. Guatemala offers a unique combination of skilled professionals, favorable business conditions, and
//             cost-effective solutions.
//           </p>
//             {/* Service List - Two Columns */}
//             <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
//               {benefits.map((benefit, index) => (
//                 <div key={benefit.title} className="relative">
//                   <button
//                     ref={(el) => {
//                       listItemRefs.current[index] = el
//                     }}
//                     onClick={() => setActiveIndex(index)}
//                     className={`w-full group text-left py-5 px-6 transition-all duration-300 relative ${
//                       activeIndex === index
//                         ? "text-primary bg-primary/5"
//                         : "text-secondary hover:text-primary hover:bg-gray-50"
//                     }`}
//                   >
//                     {/* Active indicator */}
//                     {activeIndex === index && (
//                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-red-600" />
//                     )}
//                     <div className="flex items-center justify-between gap-2">
//                       <span className="text-base font-medium transition-colors duration-300 line-clamp-2">
//                         {benefit.title}
//                       </span>
//                       <ArrowUpRight
//                         className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
//                           activeIndex === index
//                             ? "text-primary translate-x-1 -translate-y-1"
//                             : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                   {/* Dividers */}
//                   {index % 2 === 0 && index < benefits.length - 1 && (
//                     <div
//                       className={`absolute right-0 top-0 bottom-0 w-px transition-all duration-300 ${
//                         activeIndex === index || activeIndex === index + 1 ? "bg-primary/20" : "bg-gray-200"
//                       }`}
//                     />
//                   )}
//                   {index < benefits.length - 2 && (
//                     <div
//                       className={`absolute left-0 right-0 bottom-0 h-px transition-all duration-300 ${
//                         activeIndex === index || activeIndex === index + 1 ? "bg-primary/20" : "bg-gray-200"
//                       }`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Image Card */}
//           <div
//             className={`sticky top-24 transition-all duration-1000 delay-200 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
//               <div className="relative h-[500px] lg:h-[500px]">
//                 <Image
//                   key={activeIndex}
//                   src={currentBenefit.image || "/placeholder.svg"}
//                   alt={currentBenefit.title}
//                   fill
//                   className="object-cover transition-opacity duration-700"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />

//                 {/* Dark overlay at bottom with gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />

//                 {/* Content overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
//                   <div className="flex items-start gap-4 mb-4">
//                     <div
//                       className={`w-12 h-12 rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
//                         currentBenefit.color === "primary"
//                           ? "from-primary to-red-600"
//                           : currentBenefit.color === "accent"
//                             ? "from-accent to-blue-600"
//                             : "from-secondary to-blue-700"
//                       } flex items-center justify-center shadow-lg`}
//                     >
//                       <currentBenefit.icon className="text-white" size={24} />
//                     </div>
//                     <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight flex-1">
//                       {currentBenefit.title}
//                     </h3>
//                   </div>
//                   <p className="text-white/90 text-base lg:text-lg leading-relaxed">
//                     {currentBenefit.description}
//                   </p>
//                 </div>

//                 {/* Hover shine effect */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
