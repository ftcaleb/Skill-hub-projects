import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustedCompaniesSection } from "@/components/sections/trusted-companies"
import { WhyTrajlonSection } from "@/components/sections/why-trajlon"
import { PopularCoursesSection } from "@/components/sections/popular-courses"
import { BenefitsSection } from "@/components/sections/benefits"
import { CredibilityShowcaseSection } from "@/components/sections/credibility-showcase"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyTrajlonSection />
        <PopularCoursesSection />
        <BenefitsSection />
        <TrustedCompaniesSection />
        <CredibilityShowcaseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
