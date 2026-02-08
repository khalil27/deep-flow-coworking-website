import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-48 sm:pt-48 sm:pb-64">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#334247] to-[#4f8fa3] opacity-100"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#b4c7d4]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4f8fa3]/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-white animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Your Workspace,<br />Your Way
              </h1>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed text-pretty max-w-lg">
                Deep Flow Coworking offers flexible, modern workspaces designed for professionals, teams, and creative minds. Work in an environment that inspires productivity and collaboration.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-[#334247] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f7f9] transition-smooth shadow-lg hover:shadow-2xl transform hover:scale-105 hover:shadow-white/30">
                Book Now
              </button>
              <button className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 hover:border-white transition-smooth backdrop-blur-sm hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-96 sm:h-[500px] lg:h-[550px] animate-slide-in-right">
            <div className="absolute inset-0 bg-white/10 rounded-2xl border border-white/30 flex items-center justify-center backdrop-blur-md shadow-2xl overflow-hidden group hover:shadow-3xl transition-smooth">
              <Image
                src="/deepflowhomepage.png"
                alt="Deep Flow Coworking Hero"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
