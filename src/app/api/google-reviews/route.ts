import { NextResponse } from 'next/server'

type GoogleReview = {
  author_name: string
  rating: number
  text: string
  relative_time_description?: string
  profile_photo_url?: string
}

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: 'Andreea M.',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'Echipă profesională, băuturi excelente și atmosferă pe măsură. Recomand cu încredere!',
  },
  {
    author_name: 'Mihai P.',
    rating: 5,
    relative_time_description: '6 months ago',
    text: 'Am avut parte de un serviciu impecabil la evenimentul nostru corporate. Foarte organizat și prietenos.',
  },
  {
    author_name: 'Ioana R.',
    rating: 4,
    relative_time_description: '1 year ago',
    text: 'Barmanii au fost punctuali și foarte pricepuți. Locul arata profesional.',
  },
]

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY
  const PLACE_ID = process.env.GOOGLE_PLACE_ID

  if (!API_KEY || !PLACE_ID) {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      PLACE_ID,
    )}&fields=name,reviews&key=${encodeURIComponent(API_KEY)}`

    const res = await fetch(url)
    if (!res.ok) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS }, { status: 502 })
    }

    const data = await res.json()
    const reviews: GoogleReview[] = (data.result?.reviews || []).map((r: any) => ({
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      relative_time_description: r.relative_time_description,
      profile_photo_url: r.profile_photo_url,
    }))

    return NextResponse.json({ reviews })
  } catch (err) {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS }, { status: 500 })
  }
}
