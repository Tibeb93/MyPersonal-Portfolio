import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiBriefcase, HiStar, HiLightBulb } from 'react-icons/hi'
import SectionTitle from '../components/SectionTitle'
import { viewport } from '../utils/animations'

const ITEMS = [
  {
    year: '2024', title: 'Advanced Full Stack Projects', sub: 'Self-Directed Learning',
    desc: 'Built multiple production-ready applications including e-commerce platforms, real-time chat apps, and AI-integrated tools. Deepened expertise in React, Node.js, and cloud deployment.',
    Icon: HiCode, color: 'violet',
    tags: ['React','Node.js','AWS','Docker'],
  },
  {
    year: '2023', title: 'Full Stack Development Journey', sub: 'Intensive Learning Phase',
    desc: 'Transitioned from frontend to full stack. Mastered backend technologies including Express, MongoDB, and RESTful API design. Started building complete web applications.',
    Icon: HiLightBulb, color: 'pink',
    tags: ['Express','MongoDB','REST APIs','JWT'],
  },
  {
    year: '2022', title: 'Computer Science Studies Begin', sub: 'University Enrollment',
    desc: 'Enrolled in Computer Science program. Began formal education in algorithms, data structures, and software engineering principles. Started learning web development fundamentals.',
    Icon: HiAcademicCap, color: 'orange',
    tags: ['C++','Python','Algorithms','Data Structures'],
  },
  {
    year: '2022', title: 'First Web Projects', sub: 'Frontend Development',
    desc: 'Built first real-world web projects using HTML, CSS, and JavaScript. Discovered React and fell in love with component-based architecture.',
    Icon: HiStar, color: 'emerald',
    tags: ['HTML','CSS','JavaScript','React'],
  },
  {
    year: '2021', title: 'Coding Journey Begins', sub: 'First Lines of Code',
    desc: 'Wrote my first lines of code and discovered a passion for programming. Started with Python basics, then moved to web technologies.',
    Icon: HiBriefcase, color: 'cyan',
    tags: ['Python','HTML','CSS','Problem Solving'],
  },
]

const C = {
  violet:  { dot:'bg-violet-500',  ring:'ring-violet-500/30',  icon:'text-violet-400',  bg:'bg-violet-500/15 border-violet-500/20',  tag:'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  pink:    { dot:'bg-pink-500',    ring:'ring-pink-500/30',    icon:'text-pink-400',    bg:'bg-pink-500/15 border-pink-500/20',      tag:'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  orange:  { dot:'bg-orange-500',  ring:'ring-orange-500/30',  icon:'text-orange-400',  bg:'bg-orange-500/15 border-orange-500/20',  tag:'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  emerald: { dot:'bg-emerald-500', ring:'ring-emerald-500/30', icon:'text-emerald-400', bg:'bg-emerald-500/15 border-emerald-500/20',tag:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  cyan:    { dot:'bg-cyan-500',    ring:'ring-cyan-500/30',    icon:'text-cyan-400',    bg:'bg-cyan-500/15 border-cyan-500/20',      tag:'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
}

function Card({ item, align = 'left' }) {
  const c = C[item.color]
  return (
    <div className={`glass rounded-2xl border border-white/[0.06] p-5 max-w-sm
      hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300
      ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <span className={`text-xs font-bold tracking-widest uppercase ${c.icon} font-mono`}>{item.year}</span>
      <h3 className="text-base font-bold text-white mt-1 mb-0.5">{item.title}</h3>
      <p className="text-xs text-slate-500 font-medium mb-3">{item.sub}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
      <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {item.tags.map(t => (
          <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-medium border ${c.tag}`}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-custom">
        <SectionTitle label="My Journey" title="Development" highlight="Timeline"
          description="The milestones and experiences that shaped me as a developer." />

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px
            bg-gradient-to-b from-violet-500/30 via-pink-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-6 md:space-y-0">
            {ITEMS.map((item, i) => {
              const c = C[item.color]
              const isLeft = i % 2 === 0
              return (
                <motion.div key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport} transition={{ duration: 0.6, delay: i * 0.1 }}>

                  {/* Desktop alternating */}
                  <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-start mb-8">
                    <div className="flex justify-end">
                      {isLeft && <Card item={item} align="right" />}
                    </div>
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-2xl border ${c.bg} flex items-center justify-center
                        ring-4 ${c.ring} z-10 relative`}>
                        <item.Icon size={20} className={c.icon} />
                      </div>
                      {i < ITEMS.length - 1 && (
                        <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-white/10 to-transparent mt-2" />
                      )}
                    </div>
                    <div>
                      {!isLeft && <Card item={item} align="left" />}
                    </div>
                  </div>

                  {/* Mobile single column */}
                  <div className="flex md:hidden gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-xl border ${c.bg} flex items-center justify-center
                        ring-2 ${c.ring} z-10 flex-shrink-0`}>
                        <item.Icon size={16} className={c.icon} />
                      </div>
                      {i < ITEMS.length - 1 && (
                        <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-white/10 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <Card item={item} align="left" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
