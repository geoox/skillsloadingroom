'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/Button'

type Review = {
  author_name: string
  rating: number
  text: string
  relative_time_description?: string
  profile_photo_url?: string
}

import { CACHED_REVIEWS } from '@/lib/cachedReviews'

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>(CACHED_REVIEWS)
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // static-only: use cached reviews only (no network calls)
  useEffect(() => {
    setReviews(CACHED_REVIEWS)
    setIndex(0)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!reviews || reviews.length <= 1) return
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 5000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [reviews])

  useEffect(() => {
    if (!containerRef.current || !reviews || reviews.length === 0) return
    const el = containerRef.current
    // translate relative to the container's own width so it lines up correctly
    const percent = (index * 100) / reviews.length
    el.style.transform = `translateX(-${percent}%)`
  }, [index, reviews])

  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }
  function next() {
    setIndex((i) => (i + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="bg-white/80 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl">Ce spun clienții noștri</h2>
          <p className="mt-3 text-gray-600">Recenzii preluate din Google Maps — cele mai recente opinii.</p>
        </div>

        <div className="relative mt-10">
          {isLoading ? (
            <div className="py-20 text-center text-gray-500">Se încarcă recenziile…</div>
          ) : reviews.length === 0 ? (
            <div className="py-20 text-center text-gray-500">Nu există recenzii disponibile.</div>
          ) : (
            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex transition-transform duration-600 ease-[cubic-bezier(.2,.8,.2,1)]"
                style={{ width: `${reviews.length * 100}%` }}
              >
                {reviews.map((r, i) => (
                  <article
                    key={i}
                    className="w-full px-6 md:px-8 lg:px-12 flex-shrink-0"
                    style={{ width: `${100 / reviews.length}%` }}
                  >
                    <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 shadow">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 flex-none overflow-hidden rounded-full bg-gray-100">
                          {r.profile_photo_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={r.profile_photo_url} alt={r.author_name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">{r.author_name?.[0] ?? 'U'}</div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <strong className="text-sm text-neutral-900">{r.author_name}</strong>
                            <div className="flex items-center gap-1 text-yellow-500">
                              {Array.from({ length: 5 }).map((_, si) => (
                                <svg key={si} className={`h-4 w-4 ${si < Math.round(r.rating) ? 'fill-current' : 'stroke-current'}`} viewBox="0 0 24 24" fill={si < Math.round(r.rating) ? 'currentColor' : 'none'} stroke="currentColor"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L18.8 24 12 19.897 5.2 24l1.1-8.694L.6 9.75l7.732-1.732L12 .587z"/></svg>
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">{r.relative_time_description}</span>
                          </div>
                          <p className="mt-4 text-gray-700">{r.text}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* controls */}
          {reviews.length > 1 && (
            <div className="absolute left-1/2 top-full mt-6 flex -translate-x-1/2 items-center gap-3">
              <button onClick={prev} className="rounded-full bg-neutral-950 px-3 py-2 text-white shadow hover:scale-105 transition-transform">Prev</button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 w-8 rounded-full ${i === index ? 'bg-neutral-950' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="rounded-full bg-neutral-950 px-3 py-2 text-white shadow hover:scale-105 transition-transform">Next</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
