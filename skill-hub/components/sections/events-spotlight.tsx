import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    id: "1",
    title: "Leadership Summit 2026",
    date: "March 15-16, 2026",
    location: "Sandton Convention Centre, Johannesburg",
    description: "Join industry leaders for two days of insights on modern leadership challenges and strategies.",
    type: "Conference",
  },
  {
    id: "2",
    title: "AI in Business Workshop",
    date: "April 5, 2026",
    location: "Cape Town International Conference Centre",
    description: "A hands-on workshop exploring practical AI applications for business transformation.",
    type: "Workshop",
  },
  {
    id: "3",
    title: "HR Innovation Forum",
    date: "April 22, 2026",
    location: "Durban ICC",
    description: "Discover the latest trends in HR technology, employee experience, and talent management.",
    type: "Forum",
  },
]

export function EventsSpotlightSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Upcoming Events</span>
            <h2 className="mt-3 text-3xl font-bold text-accent sm:text-4xl text-balance">
              Learn, Connect, Grow
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Join our conferences, workshops, and networking events designed for continuous learning.
            </p>
          </div>
          <Button variant="outline" asChild className="group shrink-0 bg-transparent">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
                  {event.type}
                </span>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href={`/events/${event.id}`}>Register Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
