'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

// Import all images
import image6 from '../images/image00006.jpeg';
import image7 from '../images/fest1.jpg';
import image8 from '../images/fest2.jpg';
import image9 from '../images/fest3.jpg';
import image10 from '../images/image00010.jpeg';
import image11 from '../images/image00011.jpeg';
import image12 from '../images/image00012.jpeg';
import image13 from '../images/image00013.jpeg';
import image14 from '../images/image00014.jpeg';
import coffee1 from '../images/ING_0-23.jpg';
import image5 from '../images/fest6.jpg';
import image17 from '../images/IMG_-27.jpg';
import image19 from '../images/image00019.jpeg';
import image20 from '../images/image00020.jpeg';
import image21 from '../images/image00021.jpeg';
import image22 from '../images/image00022.jpeg';
import image23 from '../images/image00023.jpeg';
import image24 from '../images/image00024.jpeg';
import image25 from '../images/image00025.jpeg';
import image26 from '../images/image00026.jpeg';
import image27 from '../images/image00027.jpeg';
import image28 from '../images/image00028.jpeg';
import image29 from '../images/image00029.jpeg';
import image4 from '../images/fest7.jpg';
import image3 from '../images/fest8.jpg';
import image34 from '../images/image00034.jpeg';
import image35 from '../images/image00035.jpeg';

function Events() {
    // State to keep track of active tab
    const [activeTab, setActiveTab] = useState('open-bar');

    // Function to handle tab switching
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div id="evenimente" className='bg-gradient-to-b from-white to-gray-300'>
            <FadeIn>
                <div className="max-w-7xl m-auto">
                    <div className="relative right-0">
                        <div className="w-full">
                            <div className="relative right-0">
                                <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="list">
                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'open-bar'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('open-bar')}
                                            role="tab"
                                            aria-selected={activeTab === 'open-bar'}
                                            aria-controls="open-bar"
                                        >
                                            <span className="ml-1">Open Bar</span>
                                        </a>
                                    </li>

                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'coffee-corner'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('coffee-corner')}
                                            role="tab"
                                            aria-selected={activeTab === 'coffee-corner'}
                                            aria-controls="coffee-corner"
                                        >
                                            <span className="ml-1">Coffee Corner</span>
                                        </a>
                                    </li>

                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'prosecco-wall'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('prosecco-wall')}
                                            role="tab"
                                            aria-selected={activeTab === 'prosecco-wall'}
                                            aria-controls="prosecco-wall"
                                        >
                                            <span className="ml-1">Ring for Prosecco Wall</span>
                                        </a>
                                    </li>

                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'flair-show'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('flair-show')}
                                            role="tab"
                                            aria-selected={activeTab === 'flair-show'}
                                            aria-controls="flair-show"
                                        >
                                            <span className="ml-1">Flair Bartending Show</span>
                                        </a>
                                    </li>

                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'logistica'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('logistica')}
                                            role="tab"
                                            aria-selected={activeTab === 'logistica'}
                                            aria-controls="logistica"
                                        >
                                            <span className="ml-1">Închiriere logistică</span>
                                        </a>
                                    </li>

                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'coaching'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('coaching')}
                                            role="tab"
                                            aria-selected={activeTab === 'coaching'}
                                            aria-controls="coaching"
                                        >
                                            <span className="ml-1">Coaching</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-5">

                            {/* Open Bar */}
                            <div
                                className={`${activeTab === 'open-bar' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="open-bar"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image6}
                                                alt="Bar - Open Bar"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image26}
                                                alt="Open bar detail"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image22}
                                                alt="Bar tools"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image11}
                                                alt="Cocktail shaker"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-5">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image10}
                                                alt="Pouring cocktail"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image5}
                                                alt="Bar counter"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coffee Corner */}
                            <div
                                className={`${activeTab === 'coffee-corner' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="coffee-corner"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={coffee1} alt="Coffee corner" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image17} alt="Coffee service" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image28} alt="Coffee setup" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image20} alt="Bar equipment" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image21} alt="Service" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prosecco Wall */}
                            <div
                                className={`${activeTab === 'prosecco-wall' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="prosecco-wall"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image14} alt="Prosecco wall" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image13} alt="Champagne service" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image11} alt="Glasses" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image10} alt="Pour" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image5} alt="Prosecco event" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Flair Show */}
                            <div
                                className={`${activeTab === 'flair-show' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="flair-show"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-5">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image22} alt="Flair show" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="grid grid-cols-12 gap-4 h-full">
                                            <div className="col-span-12">
                                                <div className="relative w-full h-32 rounded-lg shadow-md overflow-hidden">
                                                    <Image src={image3} alt="Performance" fill style={{ objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="relative w-full h-28 rounded-lg shadow-md overflow-hidden">
                                                    <Image src={image23} alt="Flair action" fill style={{ objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="relative w-full h-28 rounded-lg shadow-md overflow-hidden">
                                                    <Image src={image27} alt="Flair juggling" fill style={{ objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image28} alt="Show close-up" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image29} alt="Flair movement" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image13} alt="Crowd enjoying show" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Închiriere logistică */}
                            <div
                                className={`${activeTab === 'logistica' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="logistica"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image20} alt="Logistică - mobile bar" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image25} alt="Equipment" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image24} alt="Frigidere și accesorii" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image26} alt="Logistică - detaliu" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image21} alt="Bar setup" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coaching */}
                            <div
                                className={`${activeTab === 'coaching' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="coaching"
                                role="tabpanel"
                            >
                                <div className="p-4">
                                  <p className="mb-6 text-gray-700 max-w-3xl">De la tehnici de bază la show bartending – oferim coaching 1-la-1 și acces la un spațiu de antrenament dedicat pasionaților de mixologie.</p>
                                </div>
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image35} alt="Coaching / Flair room space" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image3} alt="Training room" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image34} alt="Practice session" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image27} alt="Flair demo" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image src={image28} alt="Show rehearsal" fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default Events;