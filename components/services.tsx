'use client'

import { useState } from 'react'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>('coworking')

  const services: Record<string, Service> = {
    coworking: {
      id: 'coworking',
      title: 'Coworking Space',
      description: 'Dedicated or flexible desk space in our modern, collaborative environment.',
      features: ['High-speed WiFi', 'Professional environment', '24/7 access available', 'Community events'],
    },
    meeting: {
      id: 'meeting',
      title: 'Meeting Room',
      description: 'Private meeting rooms perfect for client calls and team discussions.',
      features: ['Video conferencing setup', 'Whiteboard', 'Comfortable seating', 'Flexible hourly rates'],
    },
    training: {
      id: 'training',
      title: 'Training Room',
      description: 'Spacious training facilities for workshops and educational sessions.',
      features: ['Projector & screen', 'Lecture setup', 'Break areas', 'Catering available'],
    },
    extras: {
      id: 'extras',
      title: 'Extras',
      description: 'Additional facilities to enhance your coworking experience.',
      features: ['Chill Room', 'Terrace with views', 'Lounge area', 'Networking space'],
    },
  }

  const serviceList = Object.values(services)

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of workspace options tailored to your needs and budget.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {serviceList.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                selectedService === service.id
                  ? 'ring-2 ring-accent shadow-lg'
                  : 'ring-1 ring-border'
              }`}
            >
              {/* Image placeholder */}
              <div className="h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b border-border">
                <p className="text-muted-foreground text-lg font-medium">Service Photo</p>
              </div>

              {/* Content */}
              <div className="bg-card p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected service details */}
        {selectedService && (
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              {services[selectedService].title} - Features
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services[selectedService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-foreground text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-card-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
