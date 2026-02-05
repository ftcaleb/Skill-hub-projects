"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { courses, categories } from "@/lib/courses-data"

export function CoursesContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const showAccreditedOnly = searchParams.get("accredited") === "true"

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [accreditedOnly, setAccreditedOnly] = useState(showAccreditedOnly)

  const filteredCourses = useMemo(() => {
    let result = courses

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((course) => course.categorySlug === selectedCategory)
    }

    // Filter by accreditation
    if (accreditedOnly) {
      result = result.filter((course) => course.isAccredited)
    }

    return result
  }, [searchQuery, selectedCategory, accreditedOnly])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setAccreditedOnly(false)
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || accreditedOnly

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filters */}
        <div className="mb-10 space-y-6">
          {/* Search and Accredited Toggle */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant={accreditedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setAccreditedOnly(!accreditedOnly)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Accredited Only
              </Button>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.slug}
                variant={selectedCategory === category.slug ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredCourses.length}</span>{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
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
        ) : (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">No courses found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <Button onClick={clearFilters} className="mt-6">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
