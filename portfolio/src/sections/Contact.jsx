import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { fadeInLeft, fadeInRight, viewport } from '../utils/animations'

const INFO = [
  { Icon: HiMail,           label: 'Email',    value: 'gebremeskel@example.com', href: 'mailto:gebremeskel@example.com', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  { Icon: HiLocationMarker, label: 'Location', value: 'Ethiopia, East Africa',   href: null,                             color: 'text-pink-400',   bg: 'bg-pink-500/10 border-pink-500/20' },
  { Icon: HiPhone,          label: 'Telegram', value: '@gebremeskel',            href: 'https://t.me/gebremeskel',       color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
]

const SOCIALS = [
  { Icon: FaGithub,   href: 'https://github.com',  label: 'GitHub',   cls: 'hover:text-white hover:border-white/30' },
  { Icon: FaTelegram, href: 'https://t.me',         label: 'Telegram', cls: 'hover:text-sky-400 hover:border-sky-400/30' },
  { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', cls: 'hover:text-blue-400 hover:border-blue-400/30' },
]

const inputCls = `w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white
  placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06]
  focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-sm`

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }, 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionTitle label="Get In Touch" title="Let's" highlight="Connect"
          description="Have a project in mind or just want to say hello? I'd love to hear from you." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Info */}
          <motion.div className="lg:col-span-2 space-y-6"
            variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to build something <span className="gradient-text">amazing?</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                I'm currently open to freelance projects, full-time opportunities, and interesting
                collaborations. Whether you have a question or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="space-y-3">
              {INFO.map(({ Icon, label, value, href, color, bg }) => (
                <motion.div key={label}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${bg} transition-all duration-200`}
                  whileHover={{ x: 4 }}>
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                          {value}
                        </a>
                      : <span className="text-sm font-semibold text-white">{value}</span>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ Icon, href, label, cls }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-400
                      border border-white/8 transition-all duration-300 ${cls}`}
                    whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3"
            variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="glass rounded-3xl border border-white/[0.06] p-6 sm:p-8">
              {sent ? (
                <motion.div className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30
                    flex items-center justify-center mb-4">
                    <HiPaperAirplane size={32} className="text-emerald-400 -rotate-45" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                      <input id="name" name="name" type="text" required placeholder="Gebremeskel K."
                        value={form.name} onChange={onChange} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com"
                        value={form.email} onChange={onChange} className={inputCls} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
                    <input id="subject" name="subject" type="text" required placeholder="Project Inquiry / Collaboration / Hello"
                      value={form.subject} onChange={onChange} className={inputCls} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      value={form.message} onChange={onChange} className={`${inputCls} resize-none`} />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center"
                    icon={<HiPaperAirplane size={16} className="-rotate-45" />}>
                    Send Message
                  </Button>
                  <p className="text-center text-xs text-slate-600 mt-4">I typically respond within 24 hours.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
