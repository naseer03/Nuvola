import Image from "next/image"

interface PageHeroProps {
  title: string
  description: string
  backgroundImage?: string
  /** Lighter scrim so the photo reads clearly (default is balanced for text + image) */
  imageOverlayOpacity?: "light" | "medium" | "strong"
  /**
   * Use a dark translucent scrim + light text so the photograph stays visible
   * (white scrims tend to hide the image).
   */
  variant?: "default" | "photo"
}

export default function PageHero({
  title,
  description,
  backgroundImage,
  imageOverlayOpacity = "medium",
  variant = "default",
}: PageHeroProps) {
  const isPhoto = variant === "photo"

  const overlayClass = isPhoto
    ? "bg-black/45"
    : imageOverlayOpacity === "light"
      ? "bg-white/45"
      : imageOverlayOpacity === "strong"
        ? "bg-white/88"
        : "bg-white/65"

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
        </div>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1
            className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance ${
              isPhoto ? "text-white drop-shadow-md" : "text-secondary"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl lg:text-2xl leading-relaxed text-pretty ${
              isPhoto ? "text-white/90 drop-shadow-sm" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
