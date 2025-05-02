import { FadeIn } from "./FadeIn"

const cards = [
    {
      name: '🍸 Evenimente private',
      description:
        'Transformăm orice ocazie într-un spectacol: open bar personalizat, coffee corner, perete cu Prosecco, flair bartending și o echipă gata de show.',
    },
    {
      name: '🛠️ Închiriere logistică',
      description:
        'Îți punem la dispoziție tot ce ai nevoie pentru un bar complet echipat: baruri mobile, pahare, frigidere, dozatoare de bere și multe altele.',
    },
    {
      name: '🏆 Antrenament',
      description:
        'De la tehnici de bază la show bartending – oferim coaching 1-la-1 și acces la un spațiu de antrenament dedicat pasionaților de mixologie.',
    },
  ]
  

export default function AboutPage() {
    return (
        <FadeIn id="services">
            <div className="relative isolate overflow-hidden bg-gray-900 my-24 sm:py-32">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blur=50&sat=-100"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl">Servicii</h2>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            Fie că organizezi un eveniment privat, ai nevoie de logistică pentru barul tău sau vrei să-ți îmbunătățești abilitățile de bartending, suntem aici cu soluții profesionale, stil și energie.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                <div className="text-base/7">
                                    <h3 className="font-semibold text-white text-2xl">{card.name}</h3>
                                    <p className="mt-2 text-lg text-gray-300">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
