import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Skills Loading Room',
    default: 'Open bar services, catering, training room',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <link rel="canonical" href="https://skillsloadingroom.ro/" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Skills Loading Room" />
      <meta property="og:description" content="Servicii profesionale de bartender pentru evenimente private, corporate și petreceri, oriunde în Romania" />
      <meta property="og:url" content="https://skillsloadingroom.ro/" />
      <meta property="og:type" content="website" />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
