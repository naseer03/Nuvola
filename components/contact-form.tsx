"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-white" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4 text-balance"
          >
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to transform your technology infrastructure? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-secondary">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Full Name{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="border-2 focus:border-accent h-11 sm:h-12 text-base"
                      autoComplete="name"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email Address{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="border-2 focus:border-accent h-11 sm:h-12 text-base"
                      autoComplete="email"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Phone Number{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      className="border-2 focus:border-accent h-11 sm:h-12 text-base"
                      autoComplete="tel"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
                      Company Name{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Your Company"
                      className="border-2 focus:border-accent h-11 sm:h-12 text-base"
                      autoComplete="organization"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Message{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="border-2 focus:border-accent text-base resize-none"
                      aria-required="true"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 sm:h-14 text-base sm:text-lg touch-manipulation"
                    aria-live="polite"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary to-secondary/90 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-white flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:contact@nuvolaconsulting.com"
                        className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-all"
                      >
                        contact@nuvolaconsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-white flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a
                        href="tel:+50212345678"
                        className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-all"
                      >
                        +502 1234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-white/90">
                        Guatemala City, Guatemala
                        <br />
                        Serving Central America, USA & Europe
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <span className="font-semibold text-secondary">Monday - Friday:</span> 8:00 AM - 6:00 PM CST
                  </p>
                  <p>
                    <span className="font-semibold text-secondary">Saturday:</span> 9:00 AM - 1:00 PM CST
                  </p>
                  <p>
                    <span className="font-semibold text-secondary">Sunday:</span> Closed
                  </p>
                  <p className="text-xs sm:text-sm mt-4 text-secondary font-medium">
                    * Emergency support available 24/7 for contracted clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
