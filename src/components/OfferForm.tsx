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
    const message = (f.get('message') || '').toString()

    const subject = `Cerere ofertă — ${name}${eventType ? ` (${eventType})` : ''}`
    const body = `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone}\nTip eveniment: ${eventType}\nData: ${date}\n\nMesaj:\n${message}`

    const mailto = `mailto:contact@skillsloadingroom.ro?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // open user's email client with prefilled message in a new tab/window (do not navigate away)
    window.open(mailto, '_blank', 'noopener,noreferrer')

    // reflect UI state briefly
    setStatus('sent')
    e.currentTarget.reset()
  }

  return (
    <div id="ask-offer" className="bg-white">
      <Container className="pt-24 sm:py-16 lg:py-20">
        <FadeIn className="mx-auto max-w-4xl rounded-4xl bg-white px-6 py-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
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
                  <span className="text-sm font-medium text-gray-700">Tip eveniment</span>
                  <select name="eventType" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2">
                    <option>Eveniment privat</option>
                    <option>Corporate</option>
                    <option>Petrecere</option>
                    <option>Altul</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Date eveniment (opțional)</span>
                <input type="date" name="date" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2" />
              </label>

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
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
