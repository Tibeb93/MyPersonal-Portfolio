import { lazy, Suspense } from 'react'
import useTheme from './hooks/useTheme'

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
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300
      ${isLight ? 'bg-slate-100 text-slate-800' : 'bg-[#0B0F19] text-slate-200'}`}>

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[80px]
          ${isLight ? 'bg-violet-400/10' : 'bg-violet-600/10'}`} />
        <div className={`absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[80px]
          ${isLight ? 'bg-pink-400/8' : 'bg-pink-600/8'}`} />
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-[80px]
          ${isLight ? 'bg-orange-400/8' : 'bg-orange-600/8'}`} />
      </div>

      <div className="relative z-10">
        {/* Pass theme props to Navbar so it can render the toggle */}
        <Navbar theme={theme} toggleTheme={toggle} />

        <main>
          <Hero />

          <Suspense fallback={<SectionSkeleton />}><Services /></Suspense>
          <Suspense fallback={<SectionSkeleton />}><Projects /></Suspense>
          <Suspense fallback={<SectionSkeleton />}><TechStack /></Suspense>
          <Suspense fallback={<SectionSkeleton />}><About /></Suspense>
          <Suspense fallback={<SectionSkeleton />}><Timeline /></Suspense>
          <Suspense fallback={<SectionSkeleton />}><Contact /></Suspense>
        </main>

        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </div>
  )
}
