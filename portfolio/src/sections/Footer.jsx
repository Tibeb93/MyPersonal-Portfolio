import { motion } from 'framer-motion'
import { FaGithub, FaTelegram, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const NAV = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact' },
]

const SOCIALS = [
  { Icon: FaGithub,   href: 'https://github.com/Tibeb93',  label: 'GitHub' },
  { Icon: FaTelegram, href: 'https://t.me/tibeb93',         label: 'Telegram' },
  { Icon: FaLinkedin, href: 'https://linkedin.com',         label: 'LinkedIn' },
]

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-pink-600 to-orange-500
                flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <span className="text-white font-black text-sm">GK</span>
              </div>
              <span className="font-bold text-white text-lg">
                Gebre<span className="gradient-text">meskel</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer crafting modern, performant digital experiences from Ethiopia.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500
                    hover:text-white hover:border-violet-500/30 border border-white/8 transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => go(id)}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200
                      flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Get In Touch</h3>
            <div className="space-y-2.5 text-sm">
              <p className="text-slate-500">
                <span className="text-slate-400">Email: </span>
                <a href="mailto:gkiflemeskel@gmail.com"
                  className="hover:text-violet-400 transition-colors">gkiflemeskel@gmail.com</a>
              </p>
              <p className="text-slate-500"><span className="text-slate-400">Location: </span>Ethiopia 🇪🇹</p>
              <p className="text-slate-500">
                <span className="text-slate-400">Status: </span>
                <span className="text-emerald-400 font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  Available for work
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Gebremeskel Kiflemeskel. Built with
            <FaHeart size={12} className="text-pink-500" /> in Ethiopia.
          </p>
          <p className="text-slate-600 text-xs font-mono">React + Vite + Tailwind + Framer Motion</p>
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500
              hover:text-white hover:border-violet-500/30 border border-white/8 transition-all duration-200"
            whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Back to top">
            <HiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
