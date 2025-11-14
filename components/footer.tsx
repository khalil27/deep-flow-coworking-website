import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">DF</span>
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
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#services" className="hover:text-white transition-colors">Coworking Space</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Meeting Rooms</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Training Rooms</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Extras</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>hello@deepflowcoworking.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Street</li>
              <li>Downtown District</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Deep Flow Coworking. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
