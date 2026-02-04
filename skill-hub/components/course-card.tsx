import Link from "next/link"
import Image from "next/image"
import { Clock, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  id: string
  title: string
  description: string
  duration: string
  category: string
  image: string
  isAccredited?: boolean
}

export function CourseCard({
  id,
  title,
  description,
  duration,
  category,
  image,
  isAccredited = false,
}: CourseCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-accent/50">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isAccredited && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            <Award className="mr-1 h-3 w-3" />
            Accredited
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <Badge variant="secondary" className="mb-3 w-fit text-xs">
          {category}
        </Badge>
        <h3 className="mb-2 text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <Button variant="ghost" size="sm" asChild className="group/btn">
            <Link href={`/courses/${id}`}>
              View Details
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
