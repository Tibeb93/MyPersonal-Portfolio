import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, highlight, description, center = true, className = '' }) {
  return (
    <motion.div
      className={`${center ? 'text-center' : ''} mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {label && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
          tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {label}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

      <motion.div
        className={`mt-6 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent max-w-xs ${center ? 'mx-auto' : ''}`}
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}
