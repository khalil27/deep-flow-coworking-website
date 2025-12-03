import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-16 w-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <img src="/logo_grand.png" alt="Deep Flow Logo" className="h-14 w-14 object-contain" />
              </div>
              <span className="font-bold text-lg">Deep Flow</span>
            </div>
            <p className="text-white/70 text-sm">
              Modern coworking spaces for productive professionals and creative teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services/openspace" className="hover:text-white transition-colors">
                  Coworking Space
                </Link>
              </li>
              <li>
                <Link href="/services/meeting-room" className="hover:text-white transition-colors">
                  Meeting Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/training-room" className="hover:text-white transition-colors">
                  Training Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/domiciliation" className="hover:text-white transition-colors">
                  Domiciliation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>deepflowcoworking.tn</li>
              <li>+216 94 317 723</li>
              <li>28 Boukhara Street</li>
              <li>Ariana 2037</li>
              <li>Ennasr 1, Tunisia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Deep Flow Coworking. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
