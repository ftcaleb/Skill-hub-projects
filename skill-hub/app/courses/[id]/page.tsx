import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getCourseById, courses } from "@/lib/courses-data"
import { Clock, Award, CheckCircle, ArrowLeft, Calendar, Users } from "lucide-react"

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)
  
  if (!course) {
    return {
      title: "Course Not Found | Trajlon Group",
    }
  }

  return {
    title: `${course.title} | Trajlon Group`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)

  if (!course) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Courses
            </Link>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{course.category}</Badge>
                  {course.isAccredited && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Award className="mr-1 h-3 w-3" />
                      Accredited
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
                  {course.title}
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                  {course.fullDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-6 text-primary-foreground/70">
                  <span className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Max 20 participants
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Flexible scheduling
                  </span>
                </div>
              </div>
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary-foreground/5">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {course.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Modules */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Course Modules</h2>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div
                        key={module}
                        className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">
                          {index + 1}
                        </div>
                        <span className="font-medium text-card-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">Course Fee</span>
                    <p className="text-3xl font-bold text-card-foreground">{course.price}</p>
                    <span className="text-sm text-muted-foreground">per participant</span>
                  </div>
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full bg-transparent" size="lg">
                      <Link href="/contact">Request Group Quote</Link>
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-card-foreground mb-4">This course includes:</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Course materials included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Certificate of completion
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Refreshments & lunch
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Post-course support
                      </li>
                      {course.isAccredited && (
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          Accredited qualification
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
