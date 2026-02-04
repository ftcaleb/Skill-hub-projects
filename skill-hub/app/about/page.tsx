import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Award, Users, BookOpen, Globe, Target, Heart } from "lucide-react"

export const metadata = {
  title: "About Us | Trajlon Group",
  description: "Learn about Trajlon Group's 20+ years of excellence in professional training and development. Our mission, values, and commitment to transforming careers.",
}

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "10,000+", label: "Professionals Trained" },
  { value: "500+", label: "Courses Delivered" },
  { value: "98%", label: "Client Satisfaction" },
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality training that exceeds expectations and sets industry standards.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of partnership, working closely with clients to understand their unique needs and goals.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Every program we deliver is designed to create measurable change in individuals and organizations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in everything we do.",
  },
]

const team = [
  {
    name: "Dr. Thabo Mokoena",
    role: "Chief Executive Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 25 years in corporate training and leadership development.",
  },
  {
    name: "Priya Naidoo",
    role: "Head of Training",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in curriculum design with a passion for adult learning.",
  },
  {
    name: "James van Wyk",
    role: "Director of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensuring seamless delivery of all training programs across Africa.",
  },
  {
    name: "Nomvula Dlamini",
    role: "Client Relations Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dedicated to building lasting partnerships with our clients.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
                Empowering Professionals for Over Two Decades
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Trajlon Group has been at the forefront of professional development in Africa, 
                helping individuals and organizations achieve their full potential through world-class training.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Story</span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  A Legacy of Learning Excellence
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2003, Trajlon Group began with a simple vision: to make world-class professional 
                    training accessible to organizations across Africa. What started as a small team of passionate 
                    trainers has grown into one of the region's most respected training institutions.
                  </p>
                  <p>
                    Over the years, we've evolved our offerings to meet the changing needs of the modern workplace. 
                    From traditional leadership and management courses to cutting-edge programs in AI and digital 
                    transformation, we've stayed ahead of the curve to ensure our clients remain competitive.
                  </p>
                  <p>
                    Today, we're proud to have trained over 10,000 professionals from leading organizations in 
                    South Africa and beyond. Our commitment to excellence, practical learning, and measurable 
                    results continues to drive everything we do.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Trajlon Group training session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-xl bg-card p-8 border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform lives and organizations through innovative, practical, and results-driven 
                  professional development programs that equip individuals with the skills, knowledge, and 
                  confidence to excel in their careers.
                </p>
              </div>
              <div className="rounded-xl bg-card p-8 border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading provider of professional development solutions, recognized for our 
                  commitment to excellence, innovation, and the measurable impact we create for individuals 
                  and organizations across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Values</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                What Drives Us
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Team</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                Meet the Leadership
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our experienced leadership team brings decades of combined expertise in training and development.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
