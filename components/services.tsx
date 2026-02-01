'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

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
    <section id="services" className="py-20 sm:py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#334247] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Choose from a variety of workspace options tailored to your needs and budget.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceList.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-smooth transform hover-lift ${
                selectedService === service.id
                  ? 'ring-2 ring-[#4f8fa3] shadow-elevated scale-105 bg-white'
                  : 'ring-1 ring-[#e5e7eb]/60 hover:ring-[#4f8fa3]/60 hover:shadow-elevated bg-white/95'
              }`}
              style={{animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`}}
            >
              {/* Image placeholder with gradient */}
              <div className="h-56 bg-gradient-to-br from-[#b4c7d4]/80 to-[#4f8fa3] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-overlay-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
                <p className="text-white text-lg font-medium relative z-10 group-hover:scale-105 transition-transform">Service Photo</p>
              </div>

              {/* Content */}
              <div className="bg-white/98 p-8 border-t border-[#e5e7eb]/30">
                <h3 className="text-2xl font-bold text-[#334247] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected service details */}
        {selectedService && (
          <div className="bg-white rounded-2xl p-10 border border-[#e5e7eb]/50 shadow-elevated animate-fade-in-up">
            <h3 className="text-3xl font-bold text-[#334247] mb-8">
              {services[selectedService].title} - Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[selectedService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 animate-fade-in-up p-3 rounded-lg hover:bg-[#f5f7f9] transition-smooth" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4f8fa3] to-[#334247] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-card">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                  <span className="text-base text-[#334247] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
