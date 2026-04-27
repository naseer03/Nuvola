"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Loader2, RotateCcw } from "lucide-react"

type Captcha = {
  question: string
  answer: number
}

function generateCaptcha(): Captcha {
  const first = Math.floor(Math.random() * 8) + 2
  const second = Math.floor(Math.random() * 8) + 2
  return {
    question: `${first} + ${second}`,
    answer: first + second,
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captcha, setCaptcha] = useState<Captcha>(() => generateCaptcha())
  const [captchaInput, setCaptchaInput] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (Number.parseInt(captchaInput, 10) !== captcha.answer) {
      toast({
        title: "Captcha verification failed",
        description: "Please solve the captcha correctly and try again.",
        variant: "destructive",
      })
      setCaptcha(generateCaptcha())
      setCaptchaInput("")
      setIsSubmitting(false)
      return
    }

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
          description: "Thanks for reaching us we will get back soon.",
        })
        e.currentTarget.reset()
        setCaptcha(generateCaptcha())
        setCaptchaInput("")
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
          {/* <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4 text-balance"
          >
            Get in Touch
          </h2> */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to transform your technology infrastructure? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 max-w-4xl mx-auto py-4 pb-4">
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

                  <div>
                    <label htmlFor="captcha" className="block text-sm font-medium text-secondary mb-2">
                      Security Check{" "}
                      <span className="text-primary" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="h-11 sm:h-12 px-4 border-2 border-slate-200 bg-slate-50 flex items-center justify-center text-secondary font-semibold min-w-[140px]">
                        {captcha.question} = ?
                      </div>
                      <Input
                        id="captcha"
                        name="captcha"
                        required
                        inputMode="numeric"
                        placeholder="Enter answer"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        className="border-2 focus:border-accent h-11 sm:h-12 text-base"
                        aria-required="true"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 sm:h-12 px-4"
                        onClick={() => {
                          setCaptcha(generateCaptcha())
                          setCaptchaInput("")
                        }}
                        aria-label="Refresh captcha"
                      >
                        <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    </div>
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
            <Card className="border-0 shadow-lg bg-secondary text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-white flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:info@nuvolacg.com"
                        className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-all"
                      >
                        info@nuvolacg.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-white flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a
                        href="tel:+502 2213-8772"
                        className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-all"
                      >
                        +502 2213-8772
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

          </div>
        </div>
      </div>
    </section>
  )
}
