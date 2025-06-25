"use client";

import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Menu, X, Search } from 'lucide-react';

const navigation = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'تصاميمنا', href: '#designs' },
  { name: 'من نحن', href: '#about' },
  { name: 'لماذا نحن', href: '#why-us' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track the current navbar theme ('light' or 'dark')
  const [navTheme, setNavTheme] = useState('dark'); // Start with dark theme for the hero

  // This effect runs on the client and handles the scroll detection
  useLayoutEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-theme]');
      let currentTheme = 'dark'; // Default theme

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // Check if the top of the section is at or above the navbar's vertical center
        if (sectionTop <= 60) { // 60px is a good offset for a typical navbar height
          currentTheme = section.getAttribute('data-theme') || 'dark';
        }
      });      
      setNavTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled down
    handleScroll(); 

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine colors and logo based on the current theme state
  const textColor = navTheme === 'light' ? 'text-gray-900' : 'text-white';
  const hoverColor = navTheme === 'light' ? 'hover:text-gray-600' : 'hover:text-gray-300';
  const logoSrc = navTheme === 'light' ? '/nasma_logo.png' : '/nasma_logo_white.png';

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-300 backdrop-blur-md">
      <nav className="flex items-center justify-between p-4 pt-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Nasma</span>
            <Image
              width={120}
              height={40}
              src={logoSrc}
              alt="Nasma Logo"
              key={logoSrc}
              className='w-[80px] h-[30px] lg:w-30 lg:h-10'  
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${textColor}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`text-sm font-semibold leading-6 ${textColor} ${hoverColor} transition-colors`}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <button type="button" className={`${textColor} ${hoverColor} transition-colors`}>
             <span className="sr-only">Search</span>
             <Search className="h-6 w-6" />
           </button>
        </div>
      </nav>

      {/* Mobile menu remains dark-themed for consistency, but you could adapt it too */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/80 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Nasma</span>
              <Image width={60} height={20} src="/nasma_logo_white.png" alt="Nasma Logo" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="#" className="-mx-3 flex items-center gap-x-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                  <Search className="h-5 w-5" />
                  Search
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
