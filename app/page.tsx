import Hero from "@/components/home/hero"
import FeaturedServices from "@/components/home/featured-services"
import AboutUs from "@/components/home/about-us"
import WhyChooseUs from "@/components/home/why-choose-us"
import Philosophy from "@/components/home/philosophy"
//import GuatemalaTalent from "@/components/home/guatemala-talent"
//import Clients from "@/components/home/clients"
//import Testimonials from "@/components/home/testimonials"
import CTASection from "@/components/home/cta-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedServices />
      <AboutUs />
      <WhyChooseUs />
      <Philosophy />
      {/* <GuatemalaTalent />
      <Clients />
      <Testimonials /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
