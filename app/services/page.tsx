'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const services = [
  {
    id: 'openspace',
    title: 'Open Space',
    description: 'Flexible coworking spaces for professionals',
    href: '/services/openspace',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'meeting-room',
    title: 'Meeting Rooms',
    description: 'Professional meeting spaces for your business',
    href: '/services/meeting-room',
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: 'training-room',
    title: 'Training Rooms',
    description: 'Dedicated spaces for training and workshops',
    href: '/services/training-room',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'domiciliation',
    title: 'Domiciliation',
    description: 'Professional business address services',
    href: '/services/domiciliation',
    color: 'from-purple-400 to-purple-600'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="bg-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the perfect service for your business needs</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group">
                  {/* Service Card */}
                  <div className={`bg-gradient-to-br ${service.color} h-48 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <p className="text-6xl mb-2">📍</p>
                      <p className="text-sm opacity-90">Click to explore</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="mt-4">
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
