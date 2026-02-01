import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#334247] to-[#1f2d31] text-white py-16 sm:py-20 border-t border-[#b4c7d4]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <img src="/android-chrome-192x192.png" alt="Deep Flow Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-bold text-lg">Deep Flow</h3>
                <p className="text-[#b4c7d4] text-xs">Coworking</p>
              </div>
            </div>
            <p className="text-[#b4c7d4] text-sm leading-relaxed">
              Modern coworking spaces for productive professionals and creative teams.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-[#b4c7d4] hover:text-white transition-smooth p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#4f8fa3] hover:to-[#334247] shadow-card">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-[#b4c7d4] hover:text-white transition-smooth p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#4f8fa3] hover:to-[#334247] shadow-card">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-[#b4c7d4] hover:text-white transition-smooth p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#4f8fa3] hover:to-[#334247] shadow-card">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-semibold text-lg text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/openspace" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Coworking Space
                </Link>
              </li>
              <li>
                <Link href="/services/meeting-room" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Meeting Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/training-room" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Training Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/domiciliation" className="text-[#b4c7d4] hover:text-[#4f8fa3] transition-colors text-sm">
                  Domiciliation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="font-semibold text-lg text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#4f8fa3] flex-shrink-0 mt-0.5" />
                <span className="text-[#b4c7d4] text-sm">contact@deepflowcoworking.tn</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#4f8fa3] flex-shrink-0 mt-0.5" />
                <span className="text-[#b4c7d4] text-sm">+216 94 317 723</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4f8fa3] flex-shrink-0 mt-0.5" />
                <span className="text-[#b4c7d4] text-sm">28, Rue Boukhara, Ennaser 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#b4c7d4]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#b4c7d4]">
            <p>&copy; 2025 Deep Flow Coworking. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#4f8fa3] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#4f8fa3] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#4f8fa3] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
