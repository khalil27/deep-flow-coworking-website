'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const domiciliationOffers = [
  { id: 1, name: 'Monthly Domiciliation', price: 50 }
]

export default function DomiciliationPage() {
  const [offers] = useState(domiciliationOffers)

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="bg-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Link href="/services" className="text-primary hover:text-accent mb-8 inline-block">
            ← Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Domiciliation</h1>
          <p className="text-lg text-muted-foreground mb-12">Professional business address services for your company registration and mail handling</p>

          <div className="relative w-full h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            <img
              src="/domiciliation.jpg"
              alt="Domiciliation Services"
              className="w-full h-full object-cover"
            />
            {/* Fallback placeholder if image not found */}
            <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-xl">Add your Domiciliation image to /public/domiciliation.jpg</p>
              </div>
            </div>
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Domiciliation Features</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Professional business address for company registration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Mail reception and forwarding services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Professional reception and call handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Legal compliance and documentation support</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
