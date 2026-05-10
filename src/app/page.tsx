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
          title="Servicii"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="#gallery-open-bar" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Open Bar</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Open bar complet echipat, cu băuturi premium și barmani profesioniști, pentru o experiență fără griji la orice eveniment.</p>
                </a>

                <a href="#gallery-coffee-corner" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Coffee Corner</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Coffee corner elegant, cu cafea de specialitate și servire rafinată, ideal pentru pauze energizante la evenimente corporate sau private.</p>
                </a>

                <a href="#gallery-prosecco-wall" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Ring for Prosecco Wall</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Ring for Prosecco Wall adaugă un element spectaculos și interactiv, oferind invitaților prosecco într-un mod memorabil și stylish.</p>
                </a>

                <a href="#gallery-flair-show" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Flair Bartending Show</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Flair Bartending Show transformă servirea băuturilor într-un adevărat spectacol vizual, plin de energie și divertisment.</p>
                </a>

                <a href="#gallery-logistica" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Închiriere logistică</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Oferim închiriere logistică completă pentru evenimente, de la baruri mobile la echipamente profesionale, adaptate oricărui concept.</p>
                </a>

                <a href="#gallery-coaching" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-lg hover:bg-neutral-950 hover:border-neutral-950 transition-all cursor-pointer block group">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">Flair Room</h4>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-300 transition-colors">Flair room este spațiul dedicat antrenamentelor și demonstrațiilor de bartending, creat pentru performanță și creativitate.</p>
                </a>
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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 right-8 transform -translate-y-1/2 text-black text-xl z-10 font-display font-medium tracking-tight [text-wrap:balance] sm:text-7xl hidden md:block">
          Skills Loading Room
        </div>
      </div>

      <div className="fixed left-6 bottom-6 z-50 flex flex-col items-start gap-4">
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
