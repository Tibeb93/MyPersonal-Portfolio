import { useState, useEffect } from 'react'

export default function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= pos) { setActive(ids[i]); return }
      }
      setActive(ids[0] || '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}
