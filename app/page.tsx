import Hero from "@/components/home/hero"
import FeaturedServices from "@/components/home/featured-services"
import WhyChooseUs from "@/components/home/why-choose-us"
import Clients from "@/components/home/clients"
import Testimonials from "@/components/home/testimonials"
import CTASection from "@/components/home/cta-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
