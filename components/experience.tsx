import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users2 } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Experience & Expertise</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Proven track record in delivering excellence across continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Since 2016</h3>
              <p className="text-white/80 leading-relaxed">
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
