"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const alumni = [
  {
    name: "Sarah Molefe",
    role: "Operations Director",
    company: "Goldfields Mining Corp",
    image: "/images/Listen.jpeg",
  },
  {
    name: "David Nkosi",
    role: "HR Business Partner",
    company: "Standard Bank",
    image: "/images/review1.jpeg",
  },
  {
    name: "Michelle van der Berg",
    role: "Chief Technology Officer",
    company: "TechStart Solutions",
    image: "/images/review2.jpeg",
  },
  {
    name: "Thabo Mbeki",
    role: "Senior Project Manager",
    company: "Sasol Energy",
    image: "/images/review3.jpeg",
  },
  {
    name: "Priya Naidoo",
    role: "Finance Director",
    company: "Discovery Limited",
    image: "/images/review4.jpeg",
  },
  {
    name: "James Okonkwo",
    role: "Supply Chain Lead",
    company: "Shoprite Holdings",
    image: "/images/review5.jpeg",
  },
  {
    name: "Amahle Dlamini",
    role: "Learning & Development Head",
    company: "MTN Group",
    image: "/images/review7.jpeg",
  },
  {
    name: "Johan Pretorius",
    role: "Managing Director",
    company: "Woolworths SA",
    image: "/images/review8.jpeg",
  },
]

// Duplicate array for seamless infinite loop
const duplicatedAlumni = [...alumni, ...alumni]

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Reviews
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our programs.
          </p>
        </div>
      </div>

      {/* Infinite Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedAlumni.map((person, index) => (
            <motion.div
              key={`${person.name}-${index}`}
              className="group relative flex-shrink-0 w-64 cursor-default"
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              <div className="rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur-sm border border-primary-foreground/10 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary-foreground/5">
                {/* Portrait */}
                <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-2 ring-primary-foreground/20 group-hover:ring-primary-foreground/40 transition-all duration-300">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-primary-foreground text-lg">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/50">
                    {person.role}
                  </p>
                  <p className="text-sm text-primary-foreground/40">
                    {person.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
