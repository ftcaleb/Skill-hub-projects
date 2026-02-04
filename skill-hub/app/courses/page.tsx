import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CoursesContent } from "@/components/courses-content"

export const metadata = {
  title: "All Courses | Trajlon Group",
  description: "Browse our comprehensive catalog of professional training courses. From leadership to AI, find the perfect course to advance your career.",
}

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
                Our Training Courses
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Discover professional development programs designed to transform your career and organization.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Content */}
        <Suspense fallback={<CoursesLoadingSkeleton />}>
          <CoursesContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function CoursesLoadingSkeleton() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 w-64 bg-muted rounded mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="aspect-[16/10] rounded-lg bg-muted mb-4" />
                <div className="h-4 w-20 bg-muted rounded mb-3" />
                <div className="h-6 w-full bg-muted rounded mb-2" />
                <div className="h-4 w-3/4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
