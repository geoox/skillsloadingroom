import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-950">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-neutral-950">+40 756 830 605</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Bucuresti, Calea Victoriei 155A</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                  <path clip-rule="evenodd" d="M6 3C7.10457 3 8 2.10457 8 1H15V3L9 9V13H12V15H4V13H7V9L1 3V1H4C4 2.10457 4.89543 3 6 3ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6Z" fill="#030708" fill-rule="evenodd" /></svg>
                  <span>Catalin Mocanu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:justify-end">
            <div>
              <h3 className="text-sm font-semibold text-neutral-950">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><Link href="/about" className="hover:text-neutral-950">About Us</Link></li>
                <li><Link href="/services" className="hover:text-neutral-950">Services</Link></li>
                <li><Link href="/projects" className="hover:text-neutral-950">Projects</Link></li>
                <li><Link href="/careers" className="hover:text-neutral-950">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-950">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><Link href="/privacy" className="hover:text-neutral-950">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-neutral-950">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="hover:text-neutral-950">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center">
          <h3 className="text-sm font-semibold text-neutral-950 mr-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100063708511549" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-950" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/skillsloadingroom/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-950" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/VRqM7iXucXH3qz6h7" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-950" aria-label="Google Maps">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-sm text-neutral-700">
              © Studio Agency Inc. {new Date().getFullYear()}
            </p>
            <p className="text-sm text-neutral-700">
              All rights reserved.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}