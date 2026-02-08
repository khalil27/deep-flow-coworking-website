import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

const meetingRoomOffers = [
  { id: 1, name: '2 Hours', price: 40 },
  { id: 2, name: '4 Hours', price: 50 },
  { id: 3, name: 'Full Day', price: 90 }
]

export default function MeetingRoomPage() {
  const offers = meetingRoomOffers

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="bg-gradient-to-br from-[#334247] to-[#4f8fa3] pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Link href="/services" className="text-[#b4c7d4] hover:text-white mb-8 inline-block transition-colors">
            ← Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meeting Rooms</h1>
          <p className="text-lg text-[#b4c7d4] mb-12">Professional meeting spaces equipped with everything you need for productive discussions</p>

          <div className="relative w-full h-96 bg-gray-200 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            <Image
              src="/meeting-room.png"
              alt="Meeting Rooms"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Our Offers</h2>

            {/* Scrollable Pricing Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <div className="inline-flex gap-4 p-6 min-w-full">
                {offers.map((offer) => (
                  <div key={offer.id} className="flex-shrink-0 w-56 bg-white rounded-lg border border-[#b4c7d4]/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-[#334247] mb-4">{offer.name}</h3>

                    <div className="space-y-3">
                      <p className="text-3xl font-bold text-[#334247]">{offer.price} <span className="text-lg">Dt</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-md border border-[#b4c7d4]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Meeting Room Features</h3>
            <ul className="space-y-3 text-[#b4c7d4]">
              <li className="flex items-start gap-3">
                <span className="text-[#b4c7d4] font-bold">✓</span>
                <span>Professional ambiance with comfortable seating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>High-speed internet and video conferencing equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Whiteboard and presentation tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Flexible booking and cancellation policies</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
