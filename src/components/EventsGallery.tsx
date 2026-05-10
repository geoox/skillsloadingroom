'use client';
import React, { useState, useMemo } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { FadeIn } from './FadeIn';

import corp1 from '../images/Corporate/DSC01684.jpg';
import corp2 from '../images/Corporate/DSC01863-Enhanced-NR.jpg';
import corp3 from '../images/Corporate/DSC02561.jpg';
import corp4 from '../images/Corporate/DSC08000.jpg';
import corp5 from '../images/Corporate/ICP_0350.jpg';
import corp6 from '../images/Corporate/ICP_0373.jpg';
import corp7 from '../images/Corporate/IMG_0763.jpg';

import cc1 from '../images/Coffee Corner/IMG_5727.jpeg';
import cc2 from '../images/Coffee Corner/IMG_5734.jpeg';
import cc3 from '../images/Coffee Corner/IMG_5739.jpeg';

import priv1 from '../images/Private/DSC02571.jpg';
import priv2 from '../images/Private/ICP_0410.jpg';
import priv3 from '../images/Private/ICP_0485.jpg';
import priv4 from '../images/Private/ICP_0487.jpg';
import priv5 from '../images/Private/ICP_0533.jpg';
import priv6 from '../images/Private/ICP_0570.jpg';

import flair1 from '../images/Flair Bartending/DSC01904-Enhanced-NR.jpg';
import flair2 from '../images/Flair Bartending/DSC01907-Enhanced-NR.jpg';
import flair3 from '../images/Flair Bartending/DSC01971.jpg';
import flair4 from '../images/Flair Bartending/DSC02002.jpg';

import log1 from '../images/Inchiriere Logistica/6d70ff50-2c0c-40a0-81fc-6cf3879e414c.jpg';
import log2 from '../images/Inchiriere Logistica/c37638ac-bd5d-4dc0-83e9-9c20a689ff69.jpg';
import log3 from '../images/Inchiriere Logistica/cd148839-8f2b-4d6f-a495-46b6a43a9793.jpg';
import log4 from '../images/Inchiriere Logistica/ce93f5a4-51c8-4f79-99d0-9e5c50150c00.jpg';
import log5 from '../images/Inchiriere Logistica/db3a5ab8-0e14-4660-b761-e6f28ce5bc7b.jpg';
import log6 from '../images/Inchiriere Logistica/DSC02574.jpg';
import log7 from '../images/Inchiriere Logistica/f2d771ac-bb25-4523-aa75-1b4ce2f9a42b.jpg';

import coach1 from '../images/image00035.jpeg';
import coach2 from '../images/fest8.jpg';
import coach3 from '../images/image00034.jpeg';
import coach4 from '../images/image00027.jpeg';
import coach5 from '../images/image00028.jpeg';

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  span: string;
  aspect: string;
};

type Tab = {
  id: string;
  label: string;
  description?: string;
  images: GalleryItem[];
};

const tabs: Tab[] = [
  {
    id: 'open-bar',
    label: 'Open Bar',
    images: [
      // Row 1: 2 × 6 cols
      { src: corp1, alt: 'Corporate open bar', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      { src: corp2, alt: 'Corporate event', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      // Row 2: 3 × 4 cols
      { src: corp3, alt: 'Open bar setup', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: corp4, alt: 'Bar service', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: corp5, alt: 'Bartender serving', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      // Row 3: 2 × 6 cols
      { src: corp6, alt: 'Corporate bar', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
      { src: corp7, alt: 'Event atmosphere', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
    ],
  },
  {
    id: 'coffee-corner',
    label: 'Coffee Corner',
    images: [
      // Row 1: 1 × 12 cols hero
      { src: cc1, alt: 'Coffee corner setup', span: 'col-span-12', aspect: 'aspect-[21/9]' },
      // Row 2: 2 × 6 cols
      { src: cc2, alt: 'Coffee service', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[4/3]' },
      { src: cc3, alt: 'Coffee corner detail', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[4/3]' },
    ],
  },
  {
    id: 'prosecco-wall',
    label: 'Prosecco Wall',
    images: [
      // Row 1: 2 × 6 cols
      { src: priv1, alt: 'Private event', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      { src: priv2, alt: 'Prosecco service', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      // Row 2: 3 × 4 cols
      { src: priv3, alt: 'Prosecco wall', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: priv4, alt: 'Prosecco detail', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: priv5, alt: 'Private party', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      // Row 3: 1 × 12 cols
      { src: priv6, alt: 'Prosecco event', span: 'col-span-12', aspect: 'aspect-[21/9]' },
    ],
  },
  {
    id: 'flair-show',
    label: 'Flair Show',
    images: [
      // Row 1: 2 × 6 cols
      { src: flair1, alt: 'Flair bartending show', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      { src: flair2, alt: 'Flair performance', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      // Row 2: 2 × 6 cols
      { src: flair3, alt: 'Flair action', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
      { src: flair4, alt: 'Flair bartending', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
    ],
  },
  {
    id: 'logistica',
    label: 'Închiriere logistică',
    images: [
      // Row 1: 2 × 6 cols
      { src: log6, alt: 'Logistică eveniment', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      { src: log1, alt: 'Echipament bar', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      // Row 2: 3 × 4 cols
      { src: log2, alt: 'Bar mobil', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: log3, alt: 'Frigidere', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: log4, alt: 'Accesorii bar', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      // Row 3: 2 × 6 cols
      { src: log5, alt: 'Logistică detaliu', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
      { src: log7, alt: 'Setup logistic', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/2]' },
    ],
  },
  {
    id: 'coaching',
    label: 'Coaching',
    description:
      'De la tehnici de bază la show bartending – oferim coaching 1-la-1 și acces la un spațiu de antrenament dedicat pasionaților de mixologie.',
    images: [
      // Row 1: 2 × 6 cols
      { src: coach1, alt: 'Coaching / Flair room space', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      { src: coach2, alt: 'Training room', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/9]' },
      // Row 2: 3 × 4 cols
      { src: coach3, alt: 'Practice session', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: coach4, alt: 'Flair demo', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
      { src: coach5, alt: 'Show rehearsal', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
    ],
  },
];

function GalleryImage({ item }: { item: GalleryItem }) {
  return (
    <div className={item.span}>
      <div
        className={`group relative w-full ${item.aspect} rounded-2xl overflow-hidden shadow-md`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    </div>
  );
}

function Events() {
  const [activeTab, setActiveTab] = useState('open-bar');

  const activeData = useMemo(
    () => tabs.find((t) => t.id === activeTab)!,
    [activeTab],
  );

  return (
    <div id="evenimente" className="bg-gradient-to-b from-white to-gray-200 py-16 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tab bar */}
          <nav className="mb-8">
            <ul
              className="flex flex-wrap gap-2 justify-center"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li key={tab.id} role="presentation">
                  <button
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer
                      ${
                        activeTab === tab.id
                          ? 'bg-neutral-950 text-white shadow-lg shadow-neutral-950/20'
                          : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 shadow-sm'
                      }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Active panel — only the active tab is mounted */}
          <div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            className="animate-fade-in"
          >
            {activeData.description && (
              <p className="mb-8 max-w-3xl text-gray-600 text-lg mx-auto text-center">
                {activeData.description}
              </p>
            )}

            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {activeData.images.map((item, i) => (
                <GalleryImage key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Events;