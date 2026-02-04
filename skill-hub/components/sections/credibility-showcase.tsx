"use client"

import { useState } from "react"

const showcaseCards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    backColor: "bg-emerald-100",
    title: "Corporate Training Excellence",
    description: "Partnering with Fortune 500 companies to deliver world-class professional development programs that transform teams and drive measurable results."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    backColor: "bg-sky-100",
    title: "Innovation in Learning",
    description: "Pioneering AI-integrated training methodologies that blend cutting-edge technology with proven educational frameworks for maximum impact."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    backColor: "bg-amber-100",
    title: "Leadership Development",
    description: "Cultivating the next generation of leaders through immersive programs designed by industry veterans and executive coaches."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    backColor: "bg-lime-100",
    title: "Agricultural Transformation",
    description: "Supporting sustainable farming practices across Southern Africa through specialized agricultural training and certification programs."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    backColor: "bg-teal-100",
    title: "Global Partnerships",
    description: "Building strategic alliances with international accreditation bodies to ensure our certifications are recognized worldwide."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    backColor: "bg-rose-100",
    title: "Community Impact",
    description: "Empowering over 10,000 professionals annually with skills that drive career advancement and organizational success."
  }
]

function FlipCard({ card }: { card: typeof showcaseCards[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-[320px] w-full cursor-pointer [perspective:1000px] md:h-[380px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg [backface-visibility:hidden]">
          <img
            src={card.image || "/placeholder.svg"}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 flex flex-col justify-center rounded-2xl p-8 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] ${card.backColor}`}
        >
          <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function CredibilityShowcaseSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Impact & Partnerships
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover the organizations and initiatives that trust Trajlon Group to deliver exceptional training solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseCards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
