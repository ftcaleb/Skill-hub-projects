import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl text-balance">
            Ready to Transform Your Team?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            Get in touch with our team to discuss your training needs. We'll create a customized
            program that delivers real results for your organization.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="tel:+27111234567">
                <Phone className="mr-2 h-4 w-4" />
                +27 11 123 4567
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
