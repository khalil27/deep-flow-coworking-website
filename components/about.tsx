export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative h-96 sm:h-[500px] bg-card rounded-2xl border border-border flex items-center justify-center shadow-md">
            <p className="text-muted-foreground text-lg">About Image</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                About Deep Flow
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep Flow Coworking was founded with a mission to create inspiring work environments where professionals can thrive. We believe that the right workspace can unlock creativity, foster collaboration, and drive productivity.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Community First</h3>
                  <p className="text-muted-foreground">We foster a vibrant community of like-minded professionals and entrepreneurs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Modern Facilities</h3>
                  <p className="text-muted-foreground">Equipped with the latest technology and amenities for optimal work experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Flexible Solutions</h3>
                  <p className="text-muted-foreground">From hourly access to monthly memberships, we have plans that fit your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
