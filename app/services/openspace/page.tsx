'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const openspaceOffers = [
  { id: 1, name: 'Half Day', price: 10 },
  { id: 2, name: 'Full Day', price: 14 },
  { id: 3, name: 'Weekly', price: 60 },
  { id: 4, name: 'Monthly', price: 160 },
  { id: 5, name: '3 Months', price: 300 },
  { id: 6, name: '6 Months', price: 500 },
  { id: 7, name: '12 Months', price: 900 }
]

export default function OpenspacePage() {
  const [offers] = useState(openspaceOffers)

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="bg-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Link href="/services" className="text-primary hover:text-accent mb-8 inline-block">
            ← Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Open Space</h1>
          <p className="text-lg text-muted-foreground mb-12">Flexible coworking spaces designed for professionals who want flexibility and community</p>

          {/* Photo Placeholder */}
          <div className="relative w-full h-96 bg-gray-200 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            <img
              src="/openspace.png"
              alt="Open Space Coworking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Offers</h2>

            {/* Scrollable Pricing Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <div className="inline-flex gap-4 p-6 min-w-full">
                {offers.map((offer) => (
                  <div key={offer.id} className="flex-shrink-0 w-56 bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{offer.name}</h3>

                    <div className="space-y-3">
                      <p className="text-3xl font-bold text-primary">{offer.price} <span className="text-lg">Dt</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Open Space?</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Flexible membership options tailored to your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>High-speed internet and modern facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Networking opportunities with other professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Access to coffee bar and relaxation areas</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
