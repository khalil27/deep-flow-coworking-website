'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const openspaceOffers = [
  { id: 1, name: 'Half Day', price: 10 },
  { id: 2, name: 'Full Day', price: 15 },
  { id: 3, name: 'Weekly', price: 60 },
  { id: 4, name: '2 Weeks', price: 100 },
  { id: 5, name: 'Monthly', price: 170 }
]

export default function OpenspacePage() {
  const [offers, setOffers] = useState(openspaceOffers)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingPrice, setEditingPrice] = useState<number>(0)

  const handleEdit = (id: number, currentPrice: number) => {
    setEditingId(id)
    setEditingPrice(currentPrice)
  }

  const handleSave = (id: number) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, price: editingPrice } : offer
    ))
    setEditingId(null)
  }

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
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            <img
              src="/openspace.jpg"
              alt="Open Space Coworking"
              className="w-full h-full object-cover"
            />
            {/* Fallback placeholder if image not found */}
            <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-xl">Add your Open Space image to /public/openspace.jpg</p>
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
                    
                    {editingId === offer.id ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={editingPrice}
                            onChange={(e) => setEditingPrice(parseFloat(e.target.value) || 0)}
                            className="flex-1 px-3 py-2 border border-border rounded-lg"
                          />
                          <span className="text-foreground font-semibold">Dt</span>
                        </div>
                        <button
                          onClick={() => handleSave(offer.id)}
                          className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-accent transition-colors"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-3xl font-bold text-primary">{offer.price.toFixed(2)} <span className="text-lg">Dt</span></p>
                        <button
                          onClick={() => handleEdit(offer.id, offer.price)}
                          className="w-full text-primary hover:text-accent text-sm font-medium"
                        >
                          Edit Price
                        </button>
                      </div>
                    )}
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
