'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function OfferForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

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
    const services = f.getAll('services').join(', ')
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

    // open user's email client with prefilled message in a new tab/window (do not navigate away)
    window.open(mailto, '_blank', 'noopener,noreferrer')

    // reflect UI state briefly
    setStatus('sent')
    e.currentTarget.reset()
  }

  return (
    <div id="ask-offer" className="bg-gradient-to-b from-white to-gray-300">
      <Container className="pt-24 sm:py-16 lg:py-20">
        <FadeIn className="mx-auto max-w-4xl rounded-4xl bg-white px-6 py-12 shadow-sm">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-neutral-950 sm:text-4xl">
              Cere o ofertă personalizată pentru evenimentul tău
            </h2>
            <p className="mt-4 text-gray-600">
              Completează formularul și te vom contacta.
            </p>
          </div>

            <form className="space-y-4" aria-label="Ask for an offer form" onSubmit={onSubmit}>
              {/* honeypot - leave hidden for users */}
              <input name="hp" tabIndex={-1} aria-hidden defaultValue="" style={{display: 'none'}} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Nume</span>
                  <input
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Telefon</span>
                  <input
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Tipul evenimentului</span>
                  <select name="eventType" required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2">
                    <option value="">Selectează...</option>
                    <option value="Nuntă">Nuntă</option>
                    <option value="Botez">Botez</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Bar Show">Bar Show</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Alt tip">Alt tip</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Data evenimentului</span>
                  <input type="datetime-local" name="date" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2" />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Număr persoane</span>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    placeholder="ex. 100"
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Adresa locației</span>
                <input
                  name="address"
                  placeholder="Strada, oraș"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2"
                />
              </label>

              <fieldset>
                <legend className="text-sm font-medium text-gray-700">Ce servicii doriți să includem?</legend>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {['Doar service', 'Spectacol de bar', 'Coffee Corner', 'Ring for Prosecco'].map((s) => (
                    <label key={s} className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="services" value={s} className="rounded border-gray-300 text-neutral-900 focus:ring-neutral-900" />
                      {s}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Doriți să furnizăm noi băuturile alcoolice?</legend>
                  <div className="mt-2 flex gap-6">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="alcohol" value="Da" className="border-gray-300 text-neutral-900 focus:ring-neutral-900" />
                      Da
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="alcohol" value="Nu" defaultChecked className="border-gray-300 text-neutral-900 focus:ring-neutral-900" />
                      Nu
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Doriți să furnizăm noi și soft drinks?</legend>
                  <div className="mt-2 flex gap-6">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="softDrinks" value="Da" className="border-gray-300 text-neutral-900 focus:ring-neutral-900" />
                      Da
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="softDrinks" value="Nu" defaultChecked className="border-gray-300 text-neutral-900 focus:ring-neutral-900" />
                      Nu
                    </label>
                  </div>
                </fieldset>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Mesaj</span>
                <textarea name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2"></textarea>
              </label>

              <div className="flex items-center gap-4">
                <Button type="submit" className="px-5 py-2 text-base" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Se trimite…' : 'Trimite cererea'}
                </Button>
                <span className="text-sm text-gray-500">Răspundem în maximum 24h</span>
              </div>

              <div aria-live="polite" className="mt-3">
                {status === 'sent' && <p className="text-sm text-green-600">Cererea a fost trimisă — îți mulțumim!</p>}
                {status === 'error' && <p className="text-sm text-red-600">Eroare: {errorMsg}</p>}
              </div>
            </form>
        </FadeIn>
      </Container>
    </div>
  )
}
