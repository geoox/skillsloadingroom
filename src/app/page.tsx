import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import landingImg from '@/images/landing.jpg';
import Events from '@/components/EventsGallery'
import { Features } from '@/components/Features'
import Team from '@/components/Team'
import logistica1 from '@/images/logistica1.jpeg';
import AboutPage from '@/components/About'
import { StylizedImage } from '@/components/StylizedImage'

function Services() {
  return (
    <div id='servicii'>
      <SectionIntro
        eyebrow="Servicii"
        title="Suntem aici sa te ajutam!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
                src={logistica1}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">

            <ListItem title="">
              <div className='grid md:grid-cols-2'>
                <div className='col-span-1 font-display text-4xl font-semibold text-black'>Evenimente private</div>
                <div className='col-span-1 border-1 border-black bg-gray-900 text-white rounded-md p-4 font-display tracking-tight [text-wrap:balance]'>
                  <div>🍸 Open bar/Catering </div>
                  <div>🍸 Coffee corner</div>
                  <div>🍸 Ring for Prosecco wall</div>
                  <div>🍸 Show flair bartending</div>
                  <div>🍸 Echipa barmani</div>
                </div>
              </div>
            </ListItem>

            <ListItem title="">
              <div className='grid md:grid-cols-2'>
                <div className='col-span-1 font-display text-4xl font-semibold text-black'>Inchiriere logistica</div>
                <div className='col-span-1 border-1 p-4 border-gray-900 bg-black text-white  rounded-md font-display tracking-tight [text-wrap:balance]'>
                  <div>🧊 Baruri </div>
                  <div>🧊 Rafturi backbar</div>
                  <div>🧊 Pahare</div>
                  <div>🧊 Mese cocktail</div>
                  <div>🧊 Frigidere</div>
                  <div>🧊 ⁠Lăzi gheață </div>
                  <div>🧊 ⁠Dozator bere</div>
                  <div>🧊 ⁠Aparatura bar </div>
                </div>
              </div>
            </ListItem>

            <ListItem title="">
              <div className='grid md:grid-cols-2'>
                <div className='col-span-1 font-display text-4xl font-semibold text-black'>Antrenament</div>
                <div className='col-span-1 border-1 p-4 border-black bg-gray-900 text-white  rounded-md font-display tracking-tight [text-wrap:balance]'>
                  <div>🍹 Coaching </div>
                  <div>🍹 Spatiu antrenament </div>
                </div>
              </div>
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {

  return (
    <div id="home">
      <Container className="h-[80vh] mt-8 rounded-md relative overflow-hidden">
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
              Skills Loading Room
            </h1>
          </FadeIn>
        </div>
      </Container>

      <Services />

      <AboutPage/>

      <Features/>

      <Team/>

      <Events />

      <ContactSection />
    </div>
  )
}
