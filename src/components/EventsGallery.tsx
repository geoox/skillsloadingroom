'use client';
import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

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
                                        <img className="w-full h-64 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender mixing cocktail" />
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <img className="w-full h-64 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Whiskey pouring" />
                                    </div>
                                    <div className="col-span-6 md:col-span-4">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender tools" />
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Cocktail shaker" />
                                    </div>
                                    <div className="col-span-12 md:col-span-5">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender pouring wine" />
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <img className="w-full h-48 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Elegant bar counter" />
                                    </div>
                                    <div className="col-span-12 md:col-span-5">
                                        <img className="w-full h-48 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Cocktail preparation" />
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
                                        <img className="w-full h-56 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Corporate bartending event" />
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <img className="w-full h-56 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender serving champagne" />
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <img className="w-full h-56 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Professional bartender" />
                                    </div>
                                    <div className="col-span-6 md:col-span-4">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Mobile bar setup" />
                                    </div>
                                    <div className="col-span-6 md:col-span-8">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Corporate cocktail service" />
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <img className="w-full h-32 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender pouring cocktail" />
                                    </div>
                                    <div className="col-span-8 md:col-span-5">
                                        <img className="w-full h-32 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Professional wine service" />
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <img className="w-full h-32 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Corporate bar setup" />
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
                                        <img className="w-full h-64 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Festival bar setup" />
                                    </div>
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="grid grid-cols-12 gap-4 h-full">
                                            <div className="col-span-12">
                                                <img className="w-full h-32 object-cover rounded-lg shadow-md"
                                                    src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Festival crowd at bar" />
                                            </div>
                                            <div className="col-span-6">
                                                <img className="w-full h-28 object-cover rounded-lg shadow-md"
                                                    src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartender at festival" />
                                            </div>
                                            <div className="col-span-6">
                                                <img className="w-full h-28 object-cover rounded-lg shadow-md"
                                                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Festival drinks" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Outdoor bar" />
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1509807995916-c332365e2d9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Festival bartender in action" />
                                    </div>
                                    <div className="col-span-4 md:col-span-3">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Colorful festival cocktails" />
                                    </div>
                                    <div className="col-span-12 md:col-span-3">
                                        <img className="w-full h-40 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Night bar at festival" />
                                    </div>
                                    <div className="col-span-6 md:col-span-6">
                                        <img className="w-full h-48 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Festival outdoor bar panorama" />
                                    </div>
                                    <div className="col-span-6 md:col-span-6">
                                        <img className="w-full h-48 object-cover rounded-lg shadow-md"
                                            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Bartenders serving crowd" />
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