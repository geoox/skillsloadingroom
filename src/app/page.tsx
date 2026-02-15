import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import landingImg from '@/images/landing.jpg';
import Events from '@/components/EventsGallery'
import { Features } from '@/components/Features'
import Team from '@/components/Team'
import logistica1 from '@/images/logistica1.jpeg';
import AboutPage from '@/components/About'
import { StylizedImage } from '@/components/StylizedImage'
import OfferForm from '@/components/OfferForm' 
import FloatingSocials from '@/components/FloatingSocials'
import GoogleReviews from '@/components/GoogleReviews'
function Services() {
  return (
    <div id="servicii">
      <FadeIn>
        <SectionIntro
          eyebrow=""
          title="Suntem aici să te ajutăm!"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim servicii personalizate pentru evenimente, logistică și antrenamente — cu echipamente moderne și o echipă pasionată.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end gap-12">
            {/* Left Image */}
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  src={logistica1}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>

            {/* Right Services List */}
            <div className="mt-16 lg:mt-0 lg:w-1/2 space-y-8 hidden md:block">

              {/* Card: Evenimente private */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 hover:bg-red-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300">
                    Evenimente private
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Open bar / Catering</li>
                    <li>Coffee corner</li>
                    <li>Ring for Prosecco wall</li>
                    <li>Show flair bartending</li>
                    <li>Echipă barmani</li>
                  </ul>
                </div>
              </div>

              {/* Card: Închiriere logistică */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 hover:bg-blue-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300">
                    Închiriere logistică
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                    <li>Baruri</li>
                    <li>Rafturi backbar</li>
                    <li>Pahare</li>
                    <li>Mese cocktail</li>
                    <li>Frigidere</li>
                    <li>Lăzi gheață</li>
                    <li>Dozator bere</li>
                    <li>Aparatură bar</li>
                  </ul>
                </div>
              </div>

              {/* Card: Antrenament */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 hover:bg-green-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300">
                    Antrenament
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Coaching</li>
                    <li>Spațiu antrenament</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </FadeIn>
    </div>
  );
}


export const metadata: Metadata = {
  description:
    'Servicii profesionale de bartender pentru evenimente private, corporate și petreceri, oriunde în România.',
}

export default async function Home() {

  return (
    <div id="home">
      <div className="relative h-screen w-screen overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/_GzmbWt6Lmw?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&playsinline=1&rel=0&modestbranding=0&enablejsapi=1&playlist=_GzmbWt6Lmw"
          title="SkillsLoadingRoom"
          allowFullScreen
          style={{
            width: '300%',
            height: '100%',
            marginLeft: '-100%',
            pointerEvents: 'none',
          }}
        />

        <div className="absolute bottom-0 right-8 transform -translate-y-1/2 text-white text-xl z-10 font-display font-medium tracking-tight [text-wrap:balance] sm:text-7xl hidden md:block">
          Skills Loading Room
        </div>
      </div>

      <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2 transform flex flex-col items-end gap-4">
        <a
          href="#ask-offer"
          className="rounded-full bg-neutral-950 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-neutral-800 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
          aria-label="Ask for an offer"
          title="Cere o ofertă"
        >
          <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true" 
      className='w-4 h-4 inline-block mx-2'
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
          Cere o ofertă
        </a>

        <FloatingSocials />
      </div>

      <Services />

      <AboutPage />

      <Features />

      {/* <Team /> */}

      <div className=" bg-gradient-to-b from-gray-300 to-white h-[80vh] rounded-md relative overflow-hidden">
        <Image
          src={landingImg}
          alt="Skills Loading Room background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="rounded-md"
        />
        <div className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-white sm:text-7xl">
              Evenimente
            </h1>
          </FadeIn>
        </div>
      </div>

      <Events />

      <GoogleReviews />

      <OfferForm />

      <ContactSection />
    </div>
  )
}
