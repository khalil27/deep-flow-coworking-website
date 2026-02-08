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
    <section id="services" className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-[#334247] to-[#4f8fa3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg text-[#b4c7d4] max-w-2xl mx-auto leading-relaxed">
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
                  ? 'ring-2 ring-[#b4c7d4] shadow-elevated scale-105 bg-white/10 backdrop-blur-md'
                  : 'ring-1 ring-[#b4c7d4]/40 hover:ring-[#b4c7d4]/80 hover:shadow-elevated bg-white/5 backdrop-blur-sm'
              }`}
              style={{animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`}}
            >
              {/* Image placeholder with gradient */}
              <div className="h-56 bg-gradient-to-br from-[#b4c7d4]/80 to-[#4f8fa3] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-overlay-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
                <p className="text-white text-lg font-medium relative z-10 group-hover:scale-105 transition-transform">Service Photo</p>
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-md p-8 border-t border-[#b4c7d4]/20">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#b4c7d4] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected service details */}
        {selectedService && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-[#b4c7d4]/30 shadow-elevated animate-fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-8">
              {services[selectedService].title} - Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[selectedService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 animate-fade-in-up p-3 rounded-lg hover:bg-white/10 transition-smooth" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#b4c7d4] to-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-card">
                    <CheckCircle2 size={20} className="text-[#334247]" />
                  </div>
                  <span className="text-base text-white font-medium">{feature}</span>
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
