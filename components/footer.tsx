import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 sm:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logoDeepFlow.png" alt="Deep Flow Logo" className="h-16 w-16 object-contain" />
              <span className="font-bold text-lg text-primary">Deep Flow Coworking</span>
            </div>
            <p className="text-gray-600 text-sm">
              Modern coworking spaces for productive professionals and creative teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services/openspace" className="hover:text-primary transition-colors">
                  Coworking Space
                </Link>
              </li>
              <li>
                <Link href="/services/meeting-room" className="hover:text-primary transition-colors">
                  Meeting Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/training-room" className="hover:text-primary transition-colors">
                  Training Rooms
                </Link>
              </li>
              <li>
                <Link href="/services/domiciliation" className="hover:text-primary transition-colors">
                  Domiciliation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>contact@deepflowcoworking.tn</li>
              <li>+216 94 317 723</li>
              <li>28, Rue Boukhara , Ennaser 1</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2025 Deep Flow Coworking. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
