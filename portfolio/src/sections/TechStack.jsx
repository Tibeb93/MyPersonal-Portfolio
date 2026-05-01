import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython } from 'react-icons/fa'
import {
  SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss,
  SiExpress, SiRedis, SiFirebase, SiLinux,
  SiTypescript, SiFigma, SiNextdotjs, SiGraphql,
} from 'react-icons/si'
import SectionTitle from '../components/SectionTitle'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

const CATEGORIES = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',       Icon: FaReact,       color: '#61DAFB', pct: 95 },
      { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E', pct: 92 },
      { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6', pct: 78 },
      { name: 'Tailwind',    Icon: SiTailwindcss, color: '#38BDF8', pct: 90 },
      { name: 'Next.js',     Icon: SiNextdotjs,   color: '#FFFFFF', pct: 80 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',  Icon: FaNodeJs,   color: '#68A063', pct: 88 },
      { name: 'Express',  Icon: SiExpress,  color: '#FFFFFF', pct: 85 },
      { name: 'Python',   Icon: FaPython,   color: '#3776AB', pct: 75 },
      { name: 'GraphQL',  Icon: SiGraphql,  color: '#E10098', pct: 70 },
    ],
  },
  {
    label: 'Database & Cloud',
    items: [
      { name: 'MongoDB',    Icon: SiMongodb,    color: '#47A248', pct: 85 },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', pct: 78 },
      { name: 'Redis',      Icon: SiRedis,      color: '#DC382D', pct: 70 },
      { name: 'Firebase',   Icon: SiFirebase,   color: '#FFCA28', pct: 80 },
    ],
  },
  {
    label: 'Tools & DevOps',
    items: [
      { name: 'Git',    Icon: FaGitAlt,  color: '#F05032', pct: 90 },
      { name: 'Docker', Icon: FaDocker,  color: '#2496ED', pct: 72 },
      { name: 'Linux',  Icon: SiLinux,   color: '#FCC624', pct: 75 },
      { name: 'Figma',  Icon: SiFigma,   color: '#F24E1E', pct: 68 },
    ],
  },
]

function TechItem({ name, Icon, color, pct }) {
  return (
    <motion.div variants={staggerItem}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl glass border border-white/[0.06]
        hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 cursor-default"
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={`${name} – ${pct}%`}>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `radial-gradient(circle, ${color}25, transparent 70%)` }} />
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        <Icon size={32} color={color} />
      </div>
      <span className="relative z-10 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors text-center">
        {name}
      </span>
      <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}70, ${color})` }}
          initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} />
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="techstack" className="section-padding">
      <div className="container-custom">
        <SectionTitle label="My Arsenal" title="Tech" highlight="Stack"
          description="Technologies and tools I use to bring ideas to life — from pixel-perfect frontends to robust backend systems." />

        <div className="space-y-10">
          {CATEGORIES.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.5, delay: ci * 0.1 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{cat.label}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
                {cat.items.map(item => <TechItem key={item.name} {...item} />)}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport} transition={{ duration: 0.6, delay: 0.2 }}>
          {[
            { val: '15+', label: 'Technologies',   color: 'text-violet-400' },
            { val: '20+', label: 'Projects Built',  color: 'text-pink-400' },
            { val: '2+',  label: 'Years Exp.',      color: 'text-orange-400' },
            { val: '100%',label: 'Dedication',      color: 'text-emerald-400' },
          ].map(({ val, label, color }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center border border-white/[0.06]
              hover:border-white/[0.12] transition-all duration-300">
              <div className={`text-3xl font-black ${color} mb-1`}>{val}</div>
              <div className="text-slate-500 text-sm font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
