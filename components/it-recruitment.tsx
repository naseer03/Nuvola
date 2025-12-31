import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Clock, TrendingUp, Shield, DollarSign } from "lucide-react"

export default function ITRecruitment() {
  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Highly Skilled Talent",
      description:
        "Guatemala boasts a growing pool of well-educated IT professionals with expertise in cloud, infrastructure and software development.",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Nearshore Advantage",
      description:
        "Guatemala operates in Central Standard Time (CST), facilitating real-time collaboration and continuous support.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "Competitive TCO",
      description:
        "Achieve savings of 30-50% on salaries, overhead, and infrastructure costs compared to onshore teams.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Economic Stability",
      description:
        "Guatemala has maintained steady GDP growth and a resilient economy, providing a secure environment.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Legal Framework",
      description: "Attractive tax incentives and streamlined regulatory frameworks for foreign companies.",
    },
  ]

  const roles = [
    "Developer",
    "Database Administrator",
    "Data Engineer",
    "DevOps",
    "Project Manager",
    "Architect",
    "Cloud Expert",
    "Security Expert",
  ]

  return (
    <section id="recruitment" className="py-20 lg:py-32 bg-gradient-to-br from-red-50/30 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">
            IT Recruitment from Guatemala
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We help you recruit top-tier IT talent from Guatemala
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Available Roles</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {roles.map((role) => (
              <div
                key={role}
                className="bg-white border-2 border-secondary px-6 py-3 rounded-lg font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Why Hire Talent from Guatemala?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
