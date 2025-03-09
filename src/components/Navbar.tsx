'use client'

import React from 'react';
import { Button } from '@/components/Button';
import Image from 'next/image';
import logoImg from '@/images/logo.jpg';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "" }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Calculate position accounting for the fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 100; // Adjust offset based on header height
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`inline-block rounded-lg px-8 py-1 text-lg font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${className}`}
    >
      {children}
    </a>
  );
};

export function Navbar(): JSX.Element {
  return (
    <header
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border bg-black/80 py-3 shadow-lg backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <NavLink href="#home" className="flex items-center">
              <Image alt='logo' src={logoImg} height={50} className='rounded-md'/>
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <NavLink href="#servicii" className='text-white'>Servicii</NavLink>
            <NavLink href="#despre" className='text-white'>Despre noi</NavLink>
            <NavLink href="#evenimente" className='text-white'>Evenimente</NavLink>
          </div>
          <NavLink href="#contact" className="rounded-full px-2 py-1.5 text-md font-semibold transition bg-white text-black hover:bg-neutral-400">
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  )
}