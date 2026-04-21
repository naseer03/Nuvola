import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Let's Connect</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 group">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Mail className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-secondary mb-1">Email</h3>
            <a href="mailto:info@nuvolacg.com" className="text-muted-foreground hover:text-primary transition-colors">
              info@nuvolacg.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Phone className="text-accent" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-secondary mb-1">Phone</h3>
            <a href="tel:+50212345678" className="text-muted-foreground hover:text-accent transition-colors">
              +502 1234-5678
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="text-secondary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-secondary mb-1">Location</h3>
            <p className="text-muted-foreground">Guatemala City, Guatemala</p>
            <p className="text-sm text-muted-foreground mt-1">Serving Central America, USA & Europe</p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Clock className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-secondary mb-1">Business Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden mt-8">
        <Image src="/modern-office-building-technology-company.jpg" alt="Nuvola Office" fill className="object-cover" />
      </div>
    </div>
  )
}
