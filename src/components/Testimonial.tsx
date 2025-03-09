import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import imgCatalin from '@/images/catalin.jpeg';

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl grid md:grid-cols-4 grid-cols-1">

            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 col-span-2">
              <Image
                alt=""
                src={imgCatalin}
                className="h-100 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                  {'Catalin Mocanu'}
                </p>
                <p className="mt-2 text-sm text-white">
                  {'Creator'}
                </p>
              </div>
            </div>

            <div className='col-span-2 m-auto ml-12'>
              <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                  {children}
                </p>
              </blockquote>
            </div>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
