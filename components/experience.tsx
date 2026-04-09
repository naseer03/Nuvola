import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users2 } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src="/professional-technology-team-office.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/88 to-secondary/95" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Experience & Expertise</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Proven track record in delivering excellence across continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="relative overflow-hidden border-white/20 bg-transparent shadow-lg">
            <div className="absolute inset-0 z-0" aria-hidden>
              <Image
                src="/contact-communication-technology-global.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/92 via-secondary/85 to-secondary/95 backdrop-blur-[1px]" />
            </div>
            <CardContent className="relative z-10 p-8 text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">Since 2016</h3>
              <p className="text-white/90 leading-relaxed drop-shadow-sm">
                Providing services for Central America, USA & Europe Companies
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Master Certified</h3>
              <p className="text-white/80 leading-relaxed">
                The only company in Guatemala holding Oracle "Master" level certifications
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Users2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Certified Team</h3>
              <p className="text-white/80 leading-relaxed">
                Successfully implemented BI & Analytics projects with fully certified teams
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/20 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-center">Technology Pipeline</h3>
          <p className="text-lg text-white/80 mb-6 text-center text-pretty max-w-3xl mx-auto">
            We have successfully implemented Business Intelligence & Analytics projects with a team certified in all the
            technologies we use:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Oracle",
              "Snowflake",
              "AWS",
              "Azure",
              "Google Cloud",
              "Python",
              "Java",
              "PL/SQL",
              "APEX",
              "Tableau",
              "Power BI",
            ].map((tech) => (
              <span key={tech} className="bg-primary text-white px-4 py-2 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
