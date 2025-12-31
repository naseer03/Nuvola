import { Card, CardContent } from "@/components/ui/card"
import { Database, TrendingUp, Cloud, Code, Settings, Users, Zap, Network } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: "Support",
      description: "Proactive & Reactive Support to maintain the continuity of your projects with guaranteed SLAs.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Performance",
      description: "Increase the performance of systems and databases with expert optimization techniques.",
    },
    {
      icon: <Network className="w-10 h-10 text-primary" />,
      title: "Consulting",
      description: "Architecture and Technological Innovation guidance for your business transformation.",
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Databases",
      description: "Database upgrades, migrations, and administration with Oracle Master certification.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Business Analytics",
      description: "Design and implementation of architectures for Business Intelligence and Analytics.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud",
      description: "Business optimization through cloud solutions (AWS, Azure, Google, Oracle).",
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Development",
      description: "Custom development in PL/SQL, APEX, Python, Java, and Streamlit.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "SOA & BPM",
      description: "Applications Integration and Enterprise architectures for seamless operations.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
