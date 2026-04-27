import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/images/nuvolalogo.png"
              alt="Nuvola Consulting Group"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed max-w-md text-pretty">
              Expert technology consulting in Oracle, Databases, Cloud Architecture, Business Analytics & IT
              Recruitment. Serving businesses worldwide since 2016.
            </p>
          </div>

          <div className="md:justify-self-start">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-white/80 hover:text-primary transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-white/80 hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#recruitment" className="text-white/80 hover:text-primary transition-colors">
                  IT Recruitment
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Nuvola Consulting Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
