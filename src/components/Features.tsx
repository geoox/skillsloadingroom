'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import pahar1 from '@/images/pahar1.jpg';
import pahar2 from '@/images/pahar2.jpg';
import pahar3 from '@/images/pahar3.jpg';
import pahar4 from '@/images/pahar4.jpg';
import pahar6 from '@/images/pahar6.jpg';

interface ParallaxOffset {
  y: number;
}

export function Features(): JSX.Element {
  const [parallaxOffset, setParallaxOffset] = useState<ParallaxOffset>({ y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      // Normalized to a range roughly between -1 and 1
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = viewportHeight / 2;
      const distanceFromCenter = (elementCenterY - viewportCenterY) / viewportHeight;
      
      // Only apply effect when element is in view
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        setParallaxOffset({
          y: -distanceFromCenter * 200, // Adjust the multiplier to control intensity
        });
      }
    };

    // Initial calculation
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-gradient-to-b from-white to-gray-300 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-black">Tot ce ai nevoie, oricand</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Serviciile noastre
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 absolute z-50">
                <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">
                  Descriere scurta
                </p>
              </div>
              <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm overflow-hidden">
                <div 
                  className="w-full h-full transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateY(${parallaxOffset.y * 0.3}px) scale(1.1)`,
                  }}
                >
                  <Image 
                    src={pahar2} 
                    alt="drink" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 absolute z-50">
                <p className="mt-2 text-3xl font-bold tracking-tight text-orange-600 max-lg:text-center">
                  Descriere scurta 
                </p>
              </div>
              <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm overflow-hidden">
                <div 
                  className="w-full h-full transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateY(${parallaxOffset.y * 0.5}px) scale(1.1)`,
                  }}
                >
                  <Image 
                    src={pahar6} 
                    alt="drink" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 absolute z-50">
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-800 max-lg:text-center">
                  Descriere scurta
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow overflow-hidden">
                <div 
                  className="w-full h-full transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateY(${parallaxOffset.y * 0.7}px) scale(1.1)`,
                  }}
                >
                  <Image 
                    src={pahar4} 
                    alt="drink" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}