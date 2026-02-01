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
    <nav className="bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]/50 sticky top-0 z-50 shadow-card transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group transition-smooth">
              <img src="/android-chrome-192x192.png" alt="Deep Flow Logo" className="w-10 h-10 object-contain rounded-lg" />
              <span className="font-bold text-lg bg-gradient-to-r from-[#334247] to-[#4f8fa3] bg-clip-text text-transparent hidden sm:inline group-hover:to-[#334247] transition-all">Deep Flow Coworking</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6b7280] hover:text-[#334247] transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-2 text-[#6b7280] hover:text-[#334247] transition-colors duration-200 font-medium text-sm"
              >
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-0 w-56 bg-white/95 backdrop-blur-md border border-[#e5e7eb]/50 rounded-xl shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-[#6b7280] hover:bg-gradient-to-r hover:from-[#f5f7f9] hover:to-[#f0f2f4] hover:text-[#4f8fa3] transition-all duration-200 first:rounded-t-lg last:rounded-b-lg text-sm border-l-3 border-transparent hover:border-[#4f8fa3]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#334247] to-[#4f8fa3] text-white px-6 py-2 rounded-lg hover:shadow-elevated transition-smooth font-medium text-sm shadow-card hover:scale-105 transform">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#334247] hover:bg-[#f5f7f9] focus:outline-none transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-[#6b7280] hover:bg-[#f5f7f9] hover:text-[#334247] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="flex-1 px-3 py-2 rounded-lg text-[#6b7280] hover:bg-[#f5f7f9] hover:text-[#334247] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="px-3 py-2 rounded-lg text-[#6b7280] hover:bg-[#f5f7f9] transition-colors duration-200"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1 animate-fade-in-up">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 rounded-lg text-[#6b7280] hover:bg-[#f5f7f9] hover:text-[#4f8fa3] transition-colors duration-200 text-sm"
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

            <button className="w-full mt-4 bg-[#334247] text-white px-4 py-2 rounded-lg hover:bg-[#4f8fa3] transition-smooth font-medium text-sm">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
