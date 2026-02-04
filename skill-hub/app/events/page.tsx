import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Events | Trajlon Group",
  description: "Join our conferences, workshops, and networking events. Stay updated on upcoming professional development events from Trajlon Group.",
}

const events = [
  {
    id: "1",
    title: "Leadership Summit 2026",
    date: "March 15-16, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "Sandton Convention Centre, Johannesburg",
    description: "Join industry leaders for two days of insights on modern leadership challenges, strategic thinking, and organizational transformation. Featuring keynote speakers from Fortune 500 companies.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Conference",
    capacity: "500 attendees",
    price: "R 5,500",
  },
  {
    id: "2",
    title: "AI in Business Workshop",
    date: "April 5, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Cape Town International Conference Centre",
    description: "A hands-on workshop exploring practical AI applications for business transformation. Learn to implement AI solutions in your organization with real-world exercises.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Workshop",
    capacity: "50 attendees",
    price: "R 3,200",
  },
  {
    id: "3",
    title: "HR Innovation Forum",
    date: "April 22, 2026",
    time: "8:30 AM - 4:30 PM",
    location: "Durban ICC",
    description: "Discover the latest trends in HR technology, employee experience, and talent management. Network with HR professionals from across South Africa.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Forum",
    capacity: "200 attendees",
    price: "R 2,800",
  },
  {
    id: "4",
    title: "Project Management Bootcamp",
    date: "May 10-12, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Pretoria Conference Centre",
    description: "An intensive three-day bootcamp covering agile methodologies, risk management, and stakeholder communication. Perfect for aspiring project managers.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Bootcamp",
    capacity: "40 attendees",
    price: "R 8,500",
  },
  {
    id: "5",
    title: "Women in Leadership Summit",
    date: "June 8, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "The Maslow Hotel, Sandton",
    description: "Empowering women leaders with strategies for career advancement, executive presence, and work-life integration. Featuring successful female executives from diverse industries.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Summit",
    capacity: "300 attendees",
    price: "R 4,200",
  },
  {
    id: "6",
    title: "Digital Transformation Conference",
    date: "July 20-21, 2026",
    time: "8:30 AM - 5:00 PM",
    location: "Cape Town International Conference Centre",
    description: "Explore how digital technologies are reshaping business operations. Learn from case studies of successful digital transformation initiatives across various industries.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Conference",
    capacity: "400 attendees",
    price: "R 6,000",
  },
]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
                Upcoming Events
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join our conferences, workshops, and networking events to learn, connect, and grow with fellow professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-accent/50"
                >
                  <div className="grid md:grid-cols-3">
                    {/* Image */}
                    <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {event.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:col-span-2 flex flex-col">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors">
                          {event.title}
                        </h2>
                        <p className="mt-3 text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        
                        {/* Event Details */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 shrink-0" />
                            <span>{event.capacity}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-border">
                        <div>
                          <span className="text-sm text-muted-foreground">Registration Fee</span>
                          <p className="text-2xl font-bold text-card-foreground">{event.price}</p>
                        </div>
                        <Button asChild className="group/btn">
                          <Link href={`/contact?event=${event.id}`}>
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
                Want to Host a Corporate Event?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We can organize customized training events, workshops, and conferences for your organization. 
                Contact us to discuss your requirements.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
