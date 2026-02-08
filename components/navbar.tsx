"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className={`bg-gradient-to-b from-[#334247] to-[#1f2d31] border-b border-[#b4c7d4]/10 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-2xl backdrop-blur-md' : 'shadow-elevated'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group transition-smooth">
              <Image
                src="/android-chrome-192x192.png"
                alt="Deep Flow Logo"
                width={40}
                height={40}
                sizes="40px"
                className="object-contain rounded-lg"
              />
              <span className="font-bold text-lg text-white hidden sm:inline group-hover:text-[#b4c7d4] transition-colors">Deep Flow Coworking</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 font-medium text-sm ${
                  isActive(link.href)
                    ? 'text-[#4f8fa3] border-b-2 border-[#4f8fa3] pb-1'
                    : 'text-white hover:text-[#b4c7d4]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/services"
                className={`flex items-center gap-2 transition-colors duration-200 font-medium text-sm ${
                  isActive("/services")
                    ? 'text-[#4f8fa3]'
                    : 'text-white hover:text-[#b4c7d4]'
                }`}
              >
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-0 w-56 bg-gradient-to-b from-[#2a3a3f] to-[#1f2d31] border border-[#4f8fa3]/30 rounded-xl shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-white hover:bg-[#4f8fa3]/20 hover:text-[#b4c7d4] transition-all duration-200 first:rounded-t-lg last:rounded-b-lg text-sm border-l-3 border-transparent hover:border-[#4f8fa3]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#4f8fa3] text-white px-6 py-2 rounded-lg hover:bg-[#b4c7d4] hover:text-[#334247] transition-smooth font-medium text-sm shadow-elevated hover:shadow-2xl transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-[#4f8fa3]/30 focus:outline-none transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up border-t border-[#4f8fa3]/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-[#4f8fa3]/20 text-[#4f8fa3]'
                    : 'text-white hover:bg-[#4f8fa3]/10 hover:text-[#b4c7d4]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className={`flex-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive("/services")
                      ? 'bg-[#4f8fa3]/20 text-[#4f8fa3]'
                      : 'text-white hover:bg-[#4f8fa3]/10 hover:text-[#b4c7d4]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="px-3 py-2 rounded-lg text-white hover:bg-[#4f8fa3]/10 transition-colors duration-200"
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
                      className="block px-3 py-2 rounded-lg text-white hover:bg-[#4f8fa3]/20 hover:text-[#b4c7d4] transition-colors duration-200 text-sm"
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

            <button className="w-full mt-4 bg-[#4f8fa3] text-white px-4 py-2 rounded-lg hover:bg-[#b4c7d4] hover:text-[#334247] transition-smooth font-medium text-sm shadow-elevated">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
