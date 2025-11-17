export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-48">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-95"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Your Workspace,<br />Your Way
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-pretty">
              Deep Flow Coworking offers flexible, modern workspaces designed for professionals, teams, and creative minds. Work in an environment that inspires productivity and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors duration-200">
                Book Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
            <img 
              src="/logo_avec_font_darck.png" 
              alt="Deep Flow Coworking Hero" 
              className="w-full h-full object-cover"
            />
            {/* Fallback placeholder if image not found */}
            <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
