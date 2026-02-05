import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "All Courses", href: "/courses" },
  { name: "Accredited Courses", href: "/courses?accredited=true" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

const courseCategories = [
  { name: "Administrative & Executive", href: "/courses?category=administrative" },
  { name: "AI in Business", href: "/courses?category=ai" },
  { name: "Leadership & Management", href: "/courses?category=leadership" },
  { name: "Human Resources", href: "/courses?category=hr" },
  { name: "Finance & Accounting", href: "/courses?category=finance" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary">TG</span>
              </div>
              <span className="text-xl font-bold">Trajlon Group</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering professionals and organizations with world-class training solutions for over 20 years.
              We deliver accredited courses that transform careers and businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-accent">Popular Courses</h3>
            <ul className="space-y-3">
              {courseCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">
                  123 Training Boulevard, Business District, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">+27 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">info@trajlongroup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/80" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/60">
              {new Date().getFullYear()} Trajlon Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
