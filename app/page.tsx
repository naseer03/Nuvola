import Hero from "@/components/home/hero"
import FeaturedServices from "@/components/home/featured-services"
import AboutUs from "@/components/home/about-us"
import WhyChooseUs from "@/components/home/why-choose-us"
import Partners from "@/components/home/partners"
import DataCloudCertifications from "@/components/home/data-cloud-certifications"
import OracleCertifications from "@/components/home/oracle-certifications"
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
      <Partners />
      <DataCloudCertifications />
      <OracleCertifications />
      <Philosophy />
      {/* <GuatemalaTalent />
      <Clients />
      <Testimonials /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
