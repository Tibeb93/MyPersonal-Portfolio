import { lazy, Suspense } from 'react'

// ── Critical path: load immediately ──────────────────────────────────────────
import Navbar from './sections/Navbar'
import Hero   from './sections/Hero'

// ── Below the fold: lazy load so initial JS bundle is smaller ────────────────
const Services  = lazy(() => import('./sections/Services'))
const Projects  = lazy(() => import('./sections/Projects'))
const TechStack = lazy(() => import('./sections/TechStack'))
const About     = lazy(() => import('./sections/About'))
const Timeline  = lazy(() => import('./sections/Timeline'))
const Contact   = lazy(() => import('./sections/Contact'))
const Footer    = lazy(() => import('./sections/Footer'))

// Minimal skeleton shown while a lazy section loads
function SectionSkeleton() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-4 animate-pulse">
        <div className="h-6 w-32 bg-white/5 rounded-full mx-auto" />
        <div className="h-10 w-64 bg-white/5 rounded-xl mx-auto" />
        <div className="h-px w-48 bg-white/5 rounded mx-auto" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 overflow-x-hidden">

      {/*
        Ambient background glows.
        Reduced blur values so the GPU compositing layer is lighter.
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-600/8  rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar + Hero are always eager — they're above the fold */}
        <Navbar />

        <main>
          <Hero />

          {/* Every section below the fold is lazy + wrapped in Suspense */}
          <Suspense fallback={<SectionSkeleton />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <TechStack />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <Timeline />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}
