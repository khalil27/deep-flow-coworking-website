'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const trainingRoomOffers = [
  { id: 1, name: 'Training Room (5h)', price: 130 }
]

export default function TrainingRoomPage() {
  const [offers, setOffers] = useState(trainingRoomOffers)
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Training Rooms</h1>
          <p className="text-lg text-muted-foreground mb-12">Fully equipped training spaces perfect for workshops, seminars, and educational events</p>

          <div className="relative w-full h-96 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            <img 
              src="/training-room.jpg" 
              alt="Training Rooms" 
              className="w-full h-full object-cover"
            />
            {/* Fallback placeholder if image not found */}
            <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-xl">Add your Training Room image to /public/training-room.jpg</p>
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Training Room Features</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Spacious room with flexible layout options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Projector, screen, and audio system included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Capacity for up to 30 participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Optional catering and break room services</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
