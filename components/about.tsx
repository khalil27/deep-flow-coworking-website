import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-[#334247] to-[#4f8fa3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl border-2 border-[#b4c7d4]/60 shadow-elevated overflow-hidden group animate-slide-in-left hover-lift">
            <Image
              src="/deepflowabout.png"
              alt="Deep Flow Coworking About"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-10 animate-slide-in-right text-white">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                About Deep Flow
              </h2>
              <p className="text-lg text-[#b4c7d4] leading-relaxed">
                Deep Flow Coworking was founded with a mission to create inspiring work environments where professionals can thrive. We believe that the right workspace can unlock creativity, foster collaboration, and drive productivity.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: 1,
                  title: 'Community First',
                  description: 'We foster a vibrant community of like-minded professionals and entrepreneurs.'
                },
                {
                  number: 2,
                  title: 'Modern Facilities',
                  description: 'Equipped with the latest technology and amenities for optimal work experience.'
                },
                {
                  number: 3,
                  title: 'Flexible Solutions',
                  description: 'From hourly access to monthly memberships, we have plans that fit your needs.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 animate-fade-in-up p-4 rounded-xl hover:bg-white/10 transition-smooth" style={{animationDelay: `${idx * 0.15}s`}}>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#b4c7d4] to-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-card">
                    <span className="text-[#334247] font-bold text-xl">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-[#b4c7d4] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
