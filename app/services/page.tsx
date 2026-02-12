import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/shared/page-hero"
import Services from "@/components/services"
import CTASection from "@/components/home/cta-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs"
        backgroundImage="/technology-cloud-computing-servers.jpg"
      />
      <Services />
      <CTASection />
      <Footer />
    </main>
  )
}
