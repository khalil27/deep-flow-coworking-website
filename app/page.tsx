import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
