"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const courseCategories = [
  { name: "Administrative & Executive", href: "/courses?category=administrative" },
  { name: "AI in Business", href: "/courses?category=ai" },
  { name: "Farms & Agriculture", href: "/courses?category=agriculture" },
  { name: "Leadership & Management", href: "/courses?category=leadership" },
  { name: "Human Resources", href: "/courses?category=hr" },
  { name: "Finance & Accounting", href: "/courses?category=finance" },
  { name: "Marketing & Sales", href: "/courses?category=marketing" },
  { name: "Project Management", href: "/courses?category=project-management" },
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Courses", href: "/courses", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <span className="text-lg font-bold text-accent-foreground">SH</span>
          </div>
          <span className="text-xl font-bold text-accent">SkillHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/courses" className="w-full">
                      View All Courses
                    </Link>
                  </DropdownMenuItem>
                  <div className="my-1 h-px bg-border" />
                  {courseCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link href={category.href} className="w-full">
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1">
                    {courseCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
