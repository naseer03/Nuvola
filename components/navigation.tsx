"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "IT Recruitment", href: "/recruitment" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105 duration-300"
            aria-label="Nuvola Consulting Group Home"
          >
            <Image
              src="/images/nuvolalogo.png"
              alt="Nuvola Consulting Group"
              width={160}
              height={53}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm xl:text-base text-secondary hover:text-primary transition-all duration-300 font-medium relative group ${
                  isActive(item.href) ? "text-primary" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-105 duration-300"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-secondary p-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white shadow-2xl animate-in slide-in-from-top duration-300 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 text-lg rounded-lg transition-all touch-manipulation ${
                    isActive(item.href)
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg mt-4 touch-manipulation"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
