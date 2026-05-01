import { motion } from 'framer-motion'

const glows = {
  purple: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.22)] hover:border-violet-500/30',
  pink:   'hover:shadow-[0_0_40px_rgba(236,72,153,0.22)]  hover:border-pink-500/30',
  orange: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.22)]  hover:border-orange-500/30',
}

export default function Card({ children, className = '', glowColor = 'purple', hover = true, padding = true }) {
  return (
    <motion.div
      className={`glass rounded-2xl border border-white/[0.06] transition-all duration-500
        ${hover ? glows[glowColor] : ''} ${padding ? 'p-6' : ''} ${className}`}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
