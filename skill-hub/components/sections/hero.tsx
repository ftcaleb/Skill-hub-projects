"use client"

import React from "react"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

// Slide data array for easy customization
const slides = [
  {
    id: 1,
    title: "Tailored Learning for Individuals & Companies",
    description:
      "Trajlon Group delivers accredited professional courses that empower individuals and organizations to reach their full potential. From leadership to AI, we have the training you need.",
    image: "/images/bgimg2.jpeg",
  },
  {
    id: 2,
    title: "Transform Your Team With Expert Training",
    description:
      "Over 20 years of training excellence. Our certified instructors bring real-world experience to every session, ensuring practical skills your team can apply immediately.",
    image: "/images/bgimg3.jpeg",
  },
  {
    id: 3,
    title: "Accredited Programs for Career Growth",
    description:
      "Internationally recognized certifications that open doors. Join 10,000+ professionals who have advanced their careers through our comprehensive training programs.",
    image: "/images/bgimg1.jpeg",
  },
]

// Framer Motion variants for slide animation
// Direction: positive = next (slide left), negative = previous (slide right)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Navigate to next slide (direction: 1 = animate left)
  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  // Navigate to previous slide (direction: -1 = animate right)
  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, action: "next" | "prev") => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        action === "next" ? nextSlide() : prevSlide()
      }
    },
    [nextSlide, prevSlide]
  )

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-primary">
      {/* Animated Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={prefersReducedMotion ? undefined : slideVariants}
          initial={prefersReducedMotion ? "center" : "enter"}
          animate="center"
          exit={prefersReducedMotion ? "center" : "exit"}
          transition={{
            x: { type: "tween", duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={currentSlideData.image || "/placeholder.svg"}
            alt={currentSlideData.title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Fixed Content Container - stays in place while slides change */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
              >
                {currentSlideData.title}
              </motion.h1>
            </AnimatePresence>

            {/* Supporting Paragraph */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="mt-6 text-lg leading-relaxed text-white/80 text-pretty"
              >
                {currentSlideData.description}
              </motion.p>
            </AnimatePresence>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="mt-10"
            >
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="font-semibold hover:bg-accent/90"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="mt-12 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1)
                    setCurrentSlide(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? "w-8 bg-white"
                    : "w-4 bg-white/40 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Vertically stacked on the right */}
      <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 lg:right-12">
        {/* Previous Slide Button */}
        <motion.button
          type="button"
          onClick={prevSlide}
          onKeyDown={(e) => handleKeyDown(e, "prev")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex h-12 w-12 items-center justify-center rotate-45 bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Previous slide"
        >
          <ChevronUp className="-rotate-45 h-5 w-5" />
        </motion.button>

        {/* Next Slide Button */}
        <motion.button
          type="button"
          onClick={nextSlide}
          onKeyDown={(e) => handleKeyDown(e, "next")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex h-12 w-12 items-center justify-center rotate-45 bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Next slide"
        >
          <ChevronDown className="-rotate-45 h-5 w-5" />
        </motion.button>
      </div>
    </section>
  )
}
