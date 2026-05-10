'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

const eventTypes = ['Nuntă', 'Botez', 'Corporate', 'Bar Show', 'Workshop', 'Alt tip']
const serviceOptions = ['Doar service', 'Spectacol de bar', 'Coffee Corner', 'Ring for Prosecco']

const inputClasses =
  'block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none'

export default function OfferForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())

  function toggleService(s: string) {
    setSelectedServices((prev) => {
      const next = new Set(prev)
      next.has(s) ? next.delete(s) : next.add(s)
      return next
    })
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const f = new FormData(e.currentTarget)
    const name = (f.get('name') || '').toString()
    const email = (f.get('email') || '').toString()
    const phone = (f.get('phone') || '').toString()
    const eventType = (f.get('eventType') || '').toString()
    const date = (f.get('date') || '').toString()
    const guests = (f.get('guests') || '').toString()
    const address = (f.get('address') || '').toString()
    const services = [...selectedServices].join(', ')
    const alcohol = (f.get('alcohol') || '').toString()
    const softDrinks = (f.get('softDrinks') || '').toString()
    const message = (f.get('message') || '').toString()

    const subject = `Cerere ofertă — ${name}${eventType ? ` (${eventType})` : ''}`
    const body = [
      `Nume: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      `Tip eveniment: ${eventType}`,
      `Data evenimentului: ${date}`,
      `Număr persoane: ${guests}`,
      `Adresa locației: ${address}`,
      `Servicii dorite: ${services || '—'}`,
      `Furnizare băuturi alcoolice: ${alcohol}`,
      `Furnizare soft drinks: ${softDrinks}`,
      '',
      `Mesaj:`,
      message,
    ].join('\n')

    const mailto = `mailto:contact@skillsloadingroom.ro?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailto, '_blank', 'noopener,noreferrer')

    setStatus('sent')
    setSelectedServices(new Set())
    e.currentTarget.reset()
  }

  return (
    <div id="ask-offer" className="bg-gray-300">
      <Container className="py-12 sm:py-16">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-100 px-6 py-10 sm:mx-0 sm:py-12 md:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                Solicită o ofertă
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Cere o ofertă personalizată pentru evenimentul tău
              </h2>
              <p className="mt-4 text-base text-neutral-500">
                Completează formularul și te vom contacta în maximum 24h.
              </p>
            </div>

            <form className="space-y-8" aria-label="Ask for an offer form" onSubmit={onSubmit}>
              <input name="hp" tabIndex={-1} aria-hidden defaultValue="" style={{ display: 'none' }} />

              {/* Contact info */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Informații de contact
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <input name="name" required placeholder="Nume *" className={inputClasses} />
                  <input type="email" name="email" required placeholder="Email *" className={inputClasses} />
                  <input name="phone" placeholder="Telefon" className={inputClasses} />
                </div>
              </div>

              <div className="border-t border-neutral-200" />

              {/* Event details */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Detalii eveniment
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <select name="eventType" required className={inputClasses + ' appearance-none'}>
                    <option value="">Tipul evenimentului *</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <input type="datetime-local" name="date" className={inputClasses} />
                  <input type="number" name="guests" min="1" placeholder="Număr persoane" className={inputClasses} />
                  <input name="address" placeholder="Adresa locației" className={inputClasses} />
                </div>
              </div>

              <div className="border-t border-neutral-200" />

              {/* Services */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Ce servicii doriți să includem?
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => {
                    const active = selectedServices.has(s)
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                          active
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Drinks */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <fieldset>
                  <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Furnizăm noi băuturile alcoolice?
                  </legend>
                  <div className="flex gap-2">
                    {['Da', 'Nu'].map((v) => (
                      <label key={v} className="flex-1">
                        <input type="radio" name="alcohol" value={v} defaultChecked={v === 'Nu'} className="peer sr-only" />
                        <span className="block cursor-pointer rounded-xl border border-neutral-300 bg-white py-2.5 text-center text-sm font-medium text-neutral-500 transition-all duration-200 peer-checked:border-neutral-950 peer-checked:bg-neutral-950 peer-checked:text-white peer-checked:shadow-md hover:border-neutral-400 hover:text-neutral-900">
                          {v}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Furnizăm noi și soft drinks?
                  </legend>
                  <div className="flex gap-2">
                    {['Da', 'Nu'].map((v) => (
                      <label key={v} className="flex-1">
                        <input type="radio" name="softDrinks" value={v} defaultChecked={v === 'Nu'} className="peer sr-only" />
                        <span className="block cursor-pointer rounded-xl border border-neutral-300 bg-white py-2.5 text-center text-sm font-medium text-neutral-500 transition-all duration-200 peer-checked:border-neutral-950 peer-checked:bg-neutral-950 peer-checked:text-white peer-checked:shadow-md hover:border-neutral-400 hover:text-neutral-900">
                          {v}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="border-t border-neutral-200" />

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="Mesaj sau detalii suplimentare..."
                className={inputClasses + ' resize-none'}
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full cursor-pointer rounded-full bg-neutral-950 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg disabled:opacity-50"
              >
                {status === 'sending' ? 'Se trimite…' : 'Trimite cererea'}
              </button>

              <div aria-live="polite" className="text-center">
                {status === 'sent' && (
                  <p className="text-sm text-green-600">✓ Cererea a fost trimisă — îți mulțumim!</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600">Eroare — te rugăm să încerci din nou.</p>
                )}
              </div>
            </form>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
