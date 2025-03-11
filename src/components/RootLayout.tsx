'use client'

import { createContext, useContext, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logomark } from '@/components/Logo'
import { Navbar } from '@/components/Navbar'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function Header({ invert = false }: { invert?: boolean }) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
        </Link>

        
      </div>
    </Container>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* <header>
        <div className="absolute top-2 right-0 left-0 z-40 pt-14">
          <Header />
        </div>
      </header> */}
      <Navbar />

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col md:pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}