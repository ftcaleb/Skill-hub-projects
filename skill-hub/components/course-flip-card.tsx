"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Clock, Award } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseFlipCardProps {
    course: Course
}

export function CourseFlipCard({ course }: CourseFlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <Link
            href={`/courses/${course.id}`}
            className="group h-[320px] w-full cursor-pointer [perspective:1000px] md:h-[380px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onTouchStart={(e) => {
                e.preventDefault()
                setIsFlipped(!isFlipped)
            }}
        >
            <div
                className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                }}
            >
                {/* Front of card */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg [backface-visibility:hidden]">
                    <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white md:text-2xl">
                            {course.title}
                        </h3>
                    </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-card p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-8">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                                {course.category}
                            </Badge>
                            {course.isAccredited && (
                                <Badge variant="default" className="gap-1 text-xs">
                                    <Award className="h-3 w-3" />
                                    Accredited
                                </Badge>
                            )}
                        </div>
                        <h3 className="mb-3 text-lg font-bold text-foreground md:text-xl">
                            {course.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4 md:text-base">
                            {course.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
