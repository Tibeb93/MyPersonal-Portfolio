import { motion } from 'framer-motion'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  href,
  onClick,
  type = 'button',
  disabled = false,
}) {
  const base = `inline-flex items-center gap-2 font-semibold rounded-xl cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-violet-500/50
    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
    ${sizes[size]} ${className}`

  const styles = {
    primary: `relative overflow-hidden bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500
      text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]`,
    secondary: `bg-transparent text-white border border-violet-500/50
      hover:border-violet-400 hover:bg-violet-500/10`,
    ghost: `bg-transparent text-slate-300 hover:text-white hover:bg-white/5`,
  }

  const motion_props = {
    whileHover: disabled ? {} : { scale: 1.03, y: -1 },
    whileTap:   disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  const inner = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a href={href} className={`${base} ${styles[variant]}`} {...motion_props}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled}
      className={`${base} ${styles[variant]}`} {...motion_props}>
      {inner}
    </motion.button>
  )
}
