import Navbar   from './sections/Navbar'
import Hero     from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import About    from './sections/About'
import Timeline from './sections/Timeline'
import Contact  from './sections/Contact'
import Footer   from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <TechStack />
          <About />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
