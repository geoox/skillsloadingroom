import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <div id='contact'>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl" id='contact'>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div>
                <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
                  👋 Spune-ne cum te putem ajuta
                </h2>
                <div className="mt-6 flex">
                  <Button href="/contact" invert>
                    📞 +40 756 830 605
                  </Button>
                </div>
                <div className="mt-10 border-t border-white/10 pt-10">
                  <h3 className="font-display text-base font-semibold text-white">
                    Locatia noastra
                  </h3>
                  <Offices
                    invert
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                  />
                </div>
              </div>

              <div className="relative w-full h-0 pb-[75%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.6082097403364!2d26.082521157105734!3d44.45138699557704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2019b46a4cca3%3A0x66132566314d6580!2sSkills%20Loading%20Room!5e0!3m2!1sen!2sdk!4v1741549434578!5m2!1sen!2sdk"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

            </div>

          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
