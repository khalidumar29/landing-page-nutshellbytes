"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Work", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Minimal Logo */}
          <div className='flex items-center'>
            <a
              href='#home'
              className='text-xl font-medium text-black hover:opacity-70 transition-opacity duration-300'
            >
              Nutshell Bytes
            </a>
          </div>

          {/* Minimal Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-10'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-black/60 hover:text-black font-medium transition-colors duration-300 text-sm tracking-tight'
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Clean CTA Button */}
          <div className='hidden md:flex items-center'>
            <a
              href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-black text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-black/90 transition-all duration-300'
            >
              Book Call
            </a>
          </div>

          {/* Minimal Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 text-black/60 hover:text-black transition-colors duration-300'
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>

        {/* Clean Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-black/10 bg-white/95 backdrop-blur-xl'>
            <div className='px-6 py-6 space-y-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block text-black/60 hover:text-black font-medium transition-colors duration-300'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className='pt-4 border-t border-black/10'>
                <a
                  href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-black/90 transition-all duration-300 inline-block'
                >
                  Book Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
