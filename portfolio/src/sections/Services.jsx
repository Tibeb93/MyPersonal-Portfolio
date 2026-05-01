import { motion } from 'framer-motion'
import { HiCode, HiColorSwatch, HiServer, HiArrowRight } from 'react-icons/hi'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

const SERVICES = [
  {
    Icon: HiCode,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications built with React, Node.js, and modern databases. From concept to deployment — clean, maintainable, production-ready code.',
    features: ['React & Vite', 'Node.js & Express', 'Database Design', 'REST APIs'],
    glow: 'purple',
    iconBg: 'bg-violet-500/15 border-violet-500/20',
    iconColor: 'text-violet-400',
    bar: 'from-violet-600 to-purple-700',
  },
  {
    Icon: HiColorSwatch,
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces that balance aesthetics with usability. Responsive, accessible designs with modern glassmorphism and gradient aesthetics.',
    features: ['Responsive Design', 'Glassmorphism UI', 'Figma Prototyping', 'Accessibility'],
    glow: 'pink',
    iconBg: 'bg-pink-500/15 border-pink-500/20',
    iconColor: 'text-pink-400',
    bar: 'from-pink-600 to-rose-700',
  },
  {
    Icon: HiServer,
    title: 'API & Backend Integration',
    desc: 'Robust backend systems and seamless third-party integrations. Secure, scalable APIs with proper auth, rate limiting, and comprehensive documentation.',
    features: ['RESTful APIs', 'Auth & JWT', 'Third-party Integrations', 'Performance Tuning'],
    glow: 'orange',
    iconBg: 'bg-orange-500/15 border-orange-500/20',
    iconColor: 'text-orange-400',
    bar: 'from-orange-500 to-amber-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionTitle label="What I Do" title="Services I" highlight="Offer"
          description="Delivering high-quality solutions across the full development spectrum — from beautiful frontends to powerful backends." />

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {SERVICES.map(({ Icon, title, desc, features, glow, iconBg, iconColor, bar }) => (
            <motion.div key={title} variants={staggerItem}>
              <Card glowColor={glow} padding={false} className="h-full flex flex-col group">
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl border ${iconBg} flex items-center justify-center mb-5
                    transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={26} className={iconColor} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${iconColor.replace('text-','bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`flex items-center gap-2 text-sm font-semibold ${iconColor}
                    hover:gap-3 transition-all duration-200 group/btn`}>
                    Learn more
                    <HiArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${bar} opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 rounded-b-2xl`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
