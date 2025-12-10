"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  const services = [
    { href: "/services/openspace", label: "Open Space" },
    { href: "/services/meeting-room", label: "Meeting Room" },
    { href: "/services/training-room", label: "Training Room" },
    { href: "/services/domiciliation", label: "Domiciliation" },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logoDeepFlow.png" alt="Deep Flow Logo" className="w-16 h-16 object-contain" />
              <span className="font-bold text-lg text-primary hidden sm:inline">Deep Flow Coworking</span>
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Services
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-accent transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="flex-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
