import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom duration-700">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Let's discuss how Nuvola can help you achieve your technology goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <Button
              asChild
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 text-lg px-8 h-14 transition-all hover:scale-105 duration-300 group"
            >
              <Link href="/contact">
                Get Started Today{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 h-14 transition-all hover:scale-105 duration-300 bg-transparent"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
