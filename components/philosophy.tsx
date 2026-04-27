import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Calendar, Gauge, Cpu, Users, Clock } from "lucide-react"

export default function Philosophy() {
  const principles = [
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Creativity",
      description:
        "We create innovative solutions that efficiently solve your problems, not just relying on documentation for implementation.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Planning",
      description: "Achieving specific objectives through strategic planning is, and will always be, our top priority.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-accent" />,
      title: "Flexibility",
      description: "Flexibility to handle urgent projects, regardless of overnight schedules. Get resources on demand.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "Technology",
      description: "A multidisciplinary team with high technical capabilities in various technological areas.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Immersion",
      description:
        "We enjoy being a key part in creating value for our clients' projects, working closely with your organization.",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Availability",
      description: "We guarantee timely support through Service Level Agreements (SLAs).",
    },
  ]

  return (
    <section id="philosophy" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">Our Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The principles that guide our approach to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <Card
              key={principle.title}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-4">{principle.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
