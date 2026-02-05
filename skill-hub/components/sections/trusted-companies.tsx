"use client"

import { motion } from "framer-motion"

// Company logos array - easily editable
// Using placeholder SVG logos representing various industries
const companies = [
  { name: "TechCorp", logo: <TechCorpLogo /> },
  { name: "GlobalBank", logo: <GlobalBankLogo /> },
  { name: "InnovateCo", logo: <InnovateCoLogo /> },
  { name: "FutureWorks", logo: <FutureWorksLogo /> },
  { name: "DataFlow", logo: <DataFlowLogo /> },
  { name: "CloudSync", logo: <CloudSyncLogo /> },
  { name: "NexGen", logo: <NexGenLogo /> },
  { name: "PrimeEdge", logo: <PrimeEdgeLogo /> },
]

export function TrustedCompaniesSection() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="w-full py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-lg md:text-xl font-medium text-accent mb-12 tracking-wide">
          Our Accreditations and Affiliations
        </h2>
      </div>

      {/* Logo Carousel Container */}
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-gray-700 to-transparent z-10 pointer-events-none" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-gray-700 to-transparent z-10 pointer-events-none" />

        {/* Animated carousel wrapper */}
        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{
            x: [0, -50 * companies.length * 10], // Move by half since we duplicated
          }}
          transition={{
            x: {
              duration: 80, // Very slow, premium movement
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedCompanies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-28 h-10 md:w-36 md:h-12 flex items-center justify-center text-primary-foreground">
                {company.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Monochrome SVG Logo Components
function TechCorpLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
      <rect x="5" y="10" width="20" height="20" rx="2" opacity="0.9" />
      <rect x="10" y="15" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">TechCorp</text>
    </svg>
  )
}

function GlobalBankLogo() {
  return (
    <svg viewBox="0 0 130 40" fill="currentColor" className="w-full h-full">
      <circle cx="15" cy="20" r="12" opacity="0.9" />
      <path d="M9 20 L15 14 L21 20 L15 26 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">GlobalBank</text>
    </svg>
  )
}

function InnovateCoLogo() {
  return (
    <svg viewBox="0 0 130 40" fill="currentColor" className="w-full h-full">
      <polygon points="15,8 25,20 15,32 5,20" opacity="0.9" />
      <circle cx="15" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">InnovateCo</text>
    </svg>
  )
}

function FutureWorksLogo() {
  return (
    <svg viewBox="0 0 140 40" fill="currentColor" className="w-full h-full">
      <path d="M5 28 L15 12 L25 28 Z" opacity="0.9" />
      <path d="M10 28 L15 18 L20 28" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">FutureWorks</text>
    </svg>
  )
}

function DataFlowLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
      <rect x="5" y="12" width="6" height="16" rx="1" opacity="0.7" />
      <rect x="13" y="8" width="6" height="24" rx="1" opacity="0.85" />
      <rect x="21" y="14" width="6" height="12" rx="1" opacity="0.9" />
      <text x="34" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">DataFlow</text>
    </svg>
  )
}

function CloudSyncLogo() {
  return (
    <svg viewBox="0 0 130 40" fill="currentColor" className="w-full h-full">
      <path d="M8 24 Q8 16 16 16 Q18 10 26 12 Q32 12 32 18 Q36 18 36 24 Q36 30 28 30 L12 30 Q8 30 8 24 Z" opacity="0.9" />
      <text x="42" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">CloudSync</text>
    </svg>
  )
}

function NexGenLogo() {
  return (
    <svg viewBox="0 0 110 40" fill="currentColor" className="w-full h-full">
      <path d="M5 30 L5 10 L15 20 L25 10 L25 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">NexGen</text>
    </svg>
  )
}

function PrimeEdgeLogo() {
  return (
    <svg viewBox="0 0 130 40" fill="currentColor" className="w-full h-full">
      <path d="M5 30 L15 10 L25 30 M10 22 L20 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <text x="32" y="26" fontSize="14" fontWeight="600" letterSpacing="0.5">PrimeEdge</text>
    </svg>
  )
}
