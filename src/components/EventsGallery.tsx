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
    const [activeTab, setActiveTab] = useState('app');

    // Function to handle tab switching
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div id="evenimente">
            <FadeIn>
                <div className="max-w-7xl m-auto">
                    <div className="relative right-0">
                        <div className="w-full">
                            <div className="relative right-0">
                                <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="list">
                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'app'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('app')}
                                            role="tab"
                                            aria-selected={activeTab === 'app'}
                                            aria-controls="app"
                                        >
                                            <span className="ml-1">Private</span>
                                        </a>
                                    </li>
                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'message'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('message')}
                                            role="tab"
                                            aria-selected={activeTab === 'message'}
                                            aria-controls="message"
                                        >
                                            <span className="ml-1">Corporate</span>
                                        </a>
                                    </li>
                                    <li className="z-30 flex-auto text-center">
                                        <a
                                            className={`z-30 flex items-center justify-center w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === 'settings'
                                                    ? 'font-bold shadow-md text-white bg-black'
                                                    : 'text-slate-700 bg-inherit'
                                                }`}
                                            onClick={() => handleTabChange('settings')}
                                            role="tab"
                                            aria-selected={activeTab === 'settings'}
                                            aria-controls="settings"
                                        >
                                            <span className="ml-1">Festivaluri</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-5">
                            <div
                                className={`${activeTab === 'app' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="app"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image6}
                                                alt="Bartender mixing cocktail"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image26}
                                                alt="Whiskey pouring"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image22}
                                                alt="Bartender tools"
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
                                                alt="Bartender pouring wine"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image5}
                                                alt="Elegant bar counter"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-5">
                                        <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image34}
                                                alt="Bartender pouring cocktail"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${activeTab === 'message' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="message"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image13}
                                                alt="Corporate bartending event"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image14}
                                                alt="Bartender serving champagne"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image19}
                                                alt="Professional bartender"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-4">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image20}
                                                alt="Mobile bar setup"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-8">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image21}
                                                alt="Corporate cocktail service"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-44 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image17}
                                                alt="Bartender pouring cocktail"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-8 md:col-span-5">
                                        <div className="relative w-full h-44 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image28}
                                                alt="Professional wine service"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="relative w-full h-44 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={coffee1}
                                                alt="Corporate bar setup"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${activeTab === 'settings' ? 'block' : 'hidden'} transition-opacity duration-150 ease-linear`}
                                id="settings"
                                role="tabpanel"
                            >
                                <div className="grid grid-cols-12 gap-4 p-4">
                                    <div className="col-span-12 md:col-span-5">
                                        <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image21}
                                                alt="Festival bar setup"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="grid grid-cols-12 gap-4 h-full">
                                            <div className="col-span-12">
                                                <div className="relative w-full h-32 rounded-lg shadow-md overflow-hidden">
                                                    <Image 
                                                        src={image22}
                                                        alt="Festival crowd at bar"
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="relative w-full h-28 rounded-lg shadow-md overflow-hidden">
                                                    <Image 
                                                        src={image23}
                                                        alt="Bartender at festival"
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="relative w-full h-28 rounded-lg shadow-md overflow-hidden">
                                                    <Image 
                                                        src={image24}
                                                        alt="Festival drinks"
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image25}
                                                alt="Outdoor bar"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image26}
                                                alt="Festival bartender in action"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image13}
                                                alt="Colorful festival cocktails"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-3">
                                        <div className="relative w-full h-40 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image7}
                                                alt="Night bar at festival"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-6">
                                        <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image35}
                                                alt="Festival outdoor bar panorama"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-6">
                                        <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
                                            <Image 
                                                src={image3}
                                                alt="Bartenders serving crowd"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
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