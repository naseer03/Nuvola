import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/shared/page-hero"
import Experience from "@/components/experience"
import Distinctions from "@/components/distinctions"
import TeamSection from "@/components/about/team-section"
import CTASection from "@/components/home/cta-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        title="About Nuvola"
        description="Nine years of excellence in technology consulting across three continents"
        backgroundImage="/professional-technology-team-office.jpg"
      />
      <Experience />
      <Distinctions />
      {/* <TeamSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
