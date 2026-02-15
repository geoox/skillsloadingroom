'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { socialMediaProfiles } from './SocialMedia'

export default function FloatingSocials() {
  let [open, setOpen] = useState(false)
  let ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onDocumentClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={ref} className="relative flex items-end">
      {/* menu - appears below the toggle button */}
      <ul
        role="menu"
        aria-label="Social links"
        className={clsx(
          'absolute right-0 top-full mt-3 flex flex-col items-end gap-3 transition-all duration-200 ease-[cubic-bezier(.2,.8,.2,1)]',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        {socialMediaProfiles.map((p) => (
          <li key={p.title} role="none">
            <a
              role="menuitem"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={p.title}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white border border-transparent shadow-lg hover:bg-neutral-800 hover:scale-105 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <p.icon className="h-6 w-6 fill-current" aria-hidden="true" />
              <span className="sr-only">{p.title}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* toggle button */}
      <button
        aria-expanded={open}
        aria-label={open ? 'Close social links' : 'Open social links'}
        title="Urmărește‑ne"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full bg-white/95 px-4 py-3 text-base font-semibold text-neutral-900 shadow-lg hover:bg-white hover:scale-105 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true" 
      className='w-4 h-4 inline-block'
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
        <span className="ml-2 hidden sm:inline">Urmărește‑ne</span>
      </button>
    </div>
  )
}
