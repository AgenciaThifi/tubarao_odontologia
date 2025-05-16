"use client";

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-12">
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#inicio" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Início
            </Link>
            <Link 
              href="#agendar" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Agendar
            </Link>
            <Link 
              href="#sobre" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link 
              href="#convenios" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Convênios
            </Link>
            <Link 
              href="#contato" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Contato
            </Link>
            <Link 
              href="#localizacao" 
              className="text-gray-700 hover:text-[#038dff] transition-colors font-medium"
            >
              Localização
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg 
              className="w-6 h-6 text-gray-700" 
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
      </div>
    </header>
  );
};

export default Header;
