"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const agendar = document.getElementById('agendar');
      const sobre = document.getElementById('sobre');
      const convenios = document.getElementById('convenios');
      const contato = document.getElementById('contato');

      const scrollPos = window.scrollY + 100;

      if (contato && scrollPos >= contato.offsetTop) {
        setActive('contato');
      } else if (convenios && scrollPos >= convenios.offsetTop) {
        setActive('convenios');
      } else if (sobre && scrollPos >= sobre.offsetTop) {
        setActive('sobre');
      } else if (agendar && scrollPos >= agendar.offsetTop) {
        setActive('agendar');
      } else if (hero && scrollPos >= hero.offsetTop) {
        setActive('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white rounded-3xl shadow-md px-8 py-4 flex items-center space-x-12 max-w-6xl w-full mx-4">
        {/* Logo */}
        <Link href="/" className="relative w-40 h-12 flex-shrink-0">
          <Image
            src="/Icon_logotype.png"
            alt="Tubarão Odontologia Logo"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-lg">
          <a
            href="#hero"
            onClick={handleClick('hero')}
            className={`cursor-pointer transition-colors ${
              active === 'hero' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Início
          </a>
          <a
            href="#agendar"
            onClick={handleClick('agendar')}
            className={`cursor-pointer transition-colors ${
              active === 'agendar' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Agendar
          </a>
          <a
            href="#sobre"
            onClick={handleClick('sobre')}
            className={`cursor-pointer transition-colors ${
              active === 'sobre' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Sobre
          </a>
          <a
            href="#convenios"
            onClick={handleClick('convenios')}
            className={`cursor-pointer transition-colors ${
              active === 'convenios' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Convênios
          </a>
          <a
            href="#contato"
            onClick={handleClick('contato')}
            className={`cursor-pointer transition-colors ${
              active === 'contato' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Contato
          </a>
          <a
            href="#contato"
            onClick={handleClick('contato')}
            className={`cursor-pointer transition-colors ${
              active === 'contato' ? 'text-[#038dff]' : 'text-black hover:text-[#038dff]'
            }`}
          >
            Localização
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg 
            className="w-6 h-6 text-black" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
