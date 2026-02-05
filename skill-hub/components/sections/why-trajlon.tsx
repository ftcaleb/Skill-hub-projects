import { Award, Users, BookOpen, Target, Globe, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Accredited Excellence",
    description: "Our courses are recognized by leading accreditation bodies, ensuring your qualifications have real value.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from industry professionals with decades of real-world experience in their fields.",
  },
  {
    icon: BookOpen,
    title: "Practical Curriculum",
    description: "Our courses blend theory with hands-on exercises, ensuring you can apply what you learn immediately.",
  },
  {
    icon: Target,
    title: "Customized Training",
    description: "We tailor our programs to meet your organization's specific needs and objectives.",
  },
  {
    icon: Globe,
    title: "Flexible Delivery",
    description: "Choose from in-person, virtual, or hybrid training options to suit your schedule.",
  },
  {
    icon: Lightbulb,
    title: "Ongoing Support",
    description: "Our relationship doesn't end at graduation. We provide post-training support and resources.",
  },
]

export function WhyTrajlonSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            SkillHub International: Your Partner in Professional Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            For over 20 years, we've been helping professionals and organizations achieve excellence through
            world-class training programs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent/50"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
