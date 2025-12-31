import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/shared/page-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        title="Get In Touch"
        description="Let's discuss how we can help transform your business"
        backgroundImage="/contact-communication-technology-global.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
