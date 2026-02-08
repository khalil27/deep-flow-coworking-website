'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-[#334247] to-[#4f8fa3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact info */}
          <div className="space-y-10 animate-slide-in-left text-white">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Get in Touch
              </h2>
              <p className="text-lg text-[#b4c7d4]">
                Have questions about our spaces? We're here to help and would love to discuss your workspace needs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { Icon: MapPin, title: 'Location', content: ['28, Rue Boukhara', 'Ennaser 1, Tunisia'] },
                { Icon: Phone, title: 'Phone', content: ['+216 94 317 723'] },
                { Icon: Mail, title: 'Email', content: ['contact@deepflowcoworking.tn'] }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 animate-fade-in-up p-4 rounded-xl hover:bg-white/10 transition-smooth" style={{animationDelay: `${idx * 0.15}s`}}>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#b4c7d4] to-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-card">
                    <item.Icon className="w-7 h-7 text-[#334247]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">{item.title}</h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-[#b4c7d4]">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-elevated border border-[#b4c7d4]/30 hover-lift">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-3 border border-[#b4c7d4]/30 rounded-lg text-white bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b4c7d4] transition-smooth backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-[#b4c7d4]/30 rounded-lg text-white bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b4c7d4] transition-smooth backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-[#b4c7d4]/30 rounded-lg text-white bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b4c7d4] transition-smooth backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="I'm interested in..."
                    className="w-full px-4 py-3 border border-[#b4c7d4]/30 rounded-lg text-white bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b4c7d4] transition-smooth backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 border border-[#b4c7d4]/30 rounded-lg text-white bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b4c7d4] transition-smooth resize-none backdrop-blur-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#b4c7d4] to-white text-[#334247] py-4 rounded-lg hover:shadow-elevated transition-smooth font-semibold flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-500/20 border border-green-400/50 rounded-lg p-4 text-green-200 text-center animate-fade-in backdrop-blur-sm">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Find Us Here
          </h3>
          <p className="text-[#b4c7d4] text-lg">
            Visit our coworking space in the heart of Ennasr
          </p>
        </div>
        
        <div className="relative w-full h-96 md:h-screen-1/2 rounded-2xl overflow-hidden shadow-elevated border-2 border-[#b4c7d4]/60 animate-fade-in-up hover-lift">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.043630310354!2d10.169208575648339!3d36.86537447222861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbc4bc5049e1%3A0xb89373deaa681751!2sDeep%20Flow%20Coworking!5e0!3m2!1sfr!2stn!4v1764762187563!5m2!1sfr!2stn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deep Flow Coworking Location"
          />
        </div>
      </div>
    </section>
  )
}
