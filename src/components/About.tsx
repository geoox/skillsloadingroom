import Image from 'next/image'
import { FadeIn } from './FadeIn'
import { Container } from './Container'
import aboutImg from '@/images/image00033.jpeg'

const stats = [
  { label: 'Evenimente organizate', value: '500+' },
  { label: 'Ani de experiență', value: '8+' },
  { label: 'Clienți mulțumiți', value: '350+' },
]

export default function AboutPage() {
  return (
    <div id="despre-noi" className="bg-gradient-to-b from-gray-300 to-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Despre noi
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Pasiune pentru arta bartending-ului
            </h2>
            <div className="mt-8 space-y-6 text-base text-gray-600 leading-relaxed">
              <p>
                Skills Loading Room s-a născut din dorința de a aduce artă și spectacol în fiecare pahar. 
                Suntem o echipă de barmani profesioniști care transformă evenimentele în experiențe de neuitat.
              </p>
              <p>
                De la nunți elegante la petreceri corporate pline de energie, fiecare eveniment beneficiază de 
                atenția noastră la detalii, echipamente premium și un show care captivează.
              </p>
              <p>
                Credem că un cocktail bun nu este doar despre ingrediente — este despre poveste, prezentare 
                și conexiunea cu oamenii.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-gray-500">{stat.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImg}
                alt="Skills Loading Room — echipa în acțiune"
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}
