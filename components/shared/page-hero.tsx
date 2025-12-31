import Image from "next/image"

interface PageHeroProps {
  title: string
  description: string
  backgroundImage?: string
}

export default function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-red-50/70" />
        </div>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight text-balance">{title}</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">{description}</p>
        </div>
      </div>
    </section>
  )
}
