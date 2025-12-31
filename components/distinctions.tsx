import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Trophy, Users2 } from "lucide-react"

export default function Distinctions() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">Distinctions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognized leaders in the technology community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-4">Oracle Press Authors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our consultants have been official Technical Reviewers and Co-authors of official Oracle Press books
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-4">Oracle ACE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Internationally recognized in the technology community with Oracle ACE distinction
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Users2 className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-4">Snowflake Squad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Members of the elite Snowflake Squad community of data cloud experts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
