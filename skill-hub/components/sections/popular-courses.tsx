import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { courses } from "@/lib/courses-data"
import { ArrowRight } from "lucide-react"

export function PopularCoursesSection() {
  // Get first 6 courses for display
  const popularCourses = courses.slice(0, 6)

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Courses</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Popular Training Programs
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Discover our most sought-after courses designed to accelerate your professional development.
            </p>
          </div>
          <Button variant="outline" asChild className="group shrink-0 bg-transparent">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              category={course.category}
              image={course.image}
              isAccredited={course.isAccredited}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
