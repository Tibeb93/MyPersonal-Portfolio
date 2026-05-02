import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

/**
 * Animated sun/moon toggle button.
 * Receives `theme` ('dark'|'light') and `toggle` fn from useTheme hook.
 */
export default function ThemeToggle({ theme, toggle }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`
        relative w-10 h-10 rounded-xl flex items-center justify-center
        border transition-all duration-300 overflow-hidden
        ${isDark
          ? 'glass border-white/10 text-slate-300 hover:text-yellow-300 hover:border-yellow-400/30 hover:shadow-[0_0_16px_rgba(250,204,21,0.25)]'
          : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-300 hover:shadow-[0_0_16px_rgba(139,92,246,0.2)]'
        }
      `}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate:  90,  scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <HiSun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90,  scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate: -90,  scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <HiMoon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
