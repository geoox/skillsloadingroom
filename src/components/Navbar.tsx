'use client'

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import Image from 'next/image';
import logoImg from '@/images/logo.jpg';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
    
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
      className={`inline-block rounded-lg px-8 py-1 text-md font-semibold transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${className}`}
    >
      {children}
    </a>
  );
};

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border bg-black/80 md:py-1 shadow-lg backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <NavLink href="#home" className="flex items-center">
              <Image alt='logo' src={logoImg} height={40} className='rounded-md'/>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <NavLink href="#services" className='text-white'>Servicii</NavLink>
            <NavLink href="#despre-noi" className='text-white'>Despre noi</NavLink>
            <NavLink href="#evenimente" className='text-white'>Evenimente</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="hidden md:block">
            <NavLink href="#contact" className="rounded-full px-2 py-1.5 text-md font-semibold transition bg-white text-black hover:bg-black">
              Contact
            </NavLink>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 bg-black/80 rounded-lg">
            <div className="flex flex-col items-center space-y-3">
              <NavLink href="#services" className='text-white w-full text-center' onClick={closeMenu}>Servicii</NavLink>
              <NavLink href="#despre-noi" className='text-white w-full text-center' onClick={closeMenu}>Despre noi</NavLink>
              <NavLink href="#evenimente" className='text-white w-full text-center' onClick={closeMenu}>Evenimente</NavLink>
              <NavLink 
                href="#contact" 
                className="rounded-full text-md font-semibold transition bg-white text-black hover:bg-black"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}