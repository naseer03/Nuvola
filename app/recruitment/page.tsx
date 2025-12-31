import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/shared/page-hero"
import ITRecruitment from "@/components/it-recruitment"
import CTASection from "@/components/home/cta-section"

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        title="IT Recruitment"
        description="Connecting world-class talent with leading organizations"
        backgroundImage="/professional-recruitment-hiring-technology.jpg"
      />
      <ITRecruitment />
      <CTASection />
      <Footer />
    </main>
  )
}
