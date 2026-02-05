import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Internationally recognized certifications",
  "Expert trainers with industry experience",
  "Practical, hands-on learning approach",
  "Customized corporate training solutions",
  "Flexible scheduling options",
  "Post-training support and resources",
  "Competitive pricing with group discounts",
  "Modern training facilities",
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/Listen.jpeg"
                alt="Professional training session"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 shadow-xl text-accent-foreground">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">The SkillHub International Advantage</span>
            <h2 className="mt-3 text-3xl font-bold text-accent sm:text-4xl text-balance">
              SkillHub International – Your Stage for Business Excellence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              SkillHub International provides high-impact, practical training and certifications for professionals and organisations worldwide across diverse business functions. Their programmes, delivered online or in-person, are tailored to boost skills, drive growth, and create measurable real-world impact.
            </p>

            {/* Benefits List */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
