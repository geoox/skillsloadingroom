import Image from "next/image"
import imgCatalin from "@/images/catalin.jpeg";

const people = [
    {
      name: 'Catalin Mocanu',
      role: 'Creator',
      imageUrl: '../images/catalin.jpeg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Catalin Mocanu',
        role: 'Creator',
        imageUrl: '../images/catalin.jpeg',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Catalin Mocanu',
        role: 'Creator',
        imageUrl: '../images/catalin.jpeg',
        xUrl: '#',
        linkedinUrl: '#',
      },
  ]
  
  export default function Team() {
    return (
      <div className="bg-gradient-to-b from-gray-300 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">Echipa noastra</h2>
            <p className="mt-6 text-lg/8 text-gray-800">
              Suntem un grup de oameni energici, pregatiti sa va facem evenimentul cu totul special
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <Image src={imgCatalin} alt="catalin" className="rounded-4xl"/>
                {/* <img alt="" src={person.imageUrl} className="mx-auto size-48 rounded-full md:size-56" /> */}
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                <p className="text-sm/6 text-gray-400">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  