"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMobile } from "../hooks/use-mobile";

const Header = () => {
  const [active, setActive] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const cta = document.getElementById("cta");
      const sobre = document.getElementById("sobre");
      const convenios = document.getElementById("convenios");
      const contato = document.getElementById("contato");

      const scrollPos = window.scrollY + 100;

      if (contato && scrollPos >= contato.offsetTop) {
        setActive("contato");
      } else if (convenios && scrollPos >= convenios.offsetTop) {
        setActive("convenios");
      } else if (sobre && scrollPos >= sobre.offsetTop) {
        setActive("sobre");
      } else if (cta && scrollPos >= cta.offsetTop) {
        setActive("cta");
      } else if (hero && scrollPos >= hero.offsetTop) {
        setActive("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (id === "sobre" && isMobile) {
      const aboutSection = document.getElementById("sobre");
      const imageBlock = aboutSection?.querySelector("div > div:first-child > div");
      if (aboutSection && imageBlock) {
        const scrollTo = aboutSection.offsetTop + imageBlock.clientHeight + 150; // Increased offset to ensure it's below image
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
        setActive(id);
        return;
      }
    }
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.offsetTop;
      const viewportHeight = window.innerHeight;
      const headerOffset = isMobile ? 140 : 100; // Larger offset for mobile
      const scrollTo = elementTop - headerOffset - (viewportHeight / 4);
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white rounded-3xl shadow-md px-6 py-4 flex items-center justify-start max-w-[1100px] gap-10">
        {/* Logo + Navigation */}
        <div className="flex items-center gap-10">
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

          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <a
              href="#hero"
              onClick={handleClick("hero")}
              className={`cursor-pointer transition-colors ${
                active === "hero" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Início
            </a>
            <a
              href="#cta"
              onClick={handleClick("cta")}
              className={`cursor-pointer transition-colors ${
                active === "cta" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Agendar
            </a>
            <a
              href="#sobre"
              onClick={handleClick("sobre")}
              className={`cursor-pointer transition-colors ${
                active === "sobre" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Sobre
            </a>
            <a
              href="#convenios"
              onClick={handleClick("convenios")}
              className={`cursor-pointer transition-colors ${
                active === "convenios" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Convênios
            </a>
            <a
              href="#contato"
              onClick={handleClick("contato")}
              className={`cursor-pointer transition-colors ${
                active === "contato" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Contato
            </a>
            <a
              href="#contato"
              onClick={handleClick("contato")}
              className={`cursor-pointer transition-colors ${
                active === "contato" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
              }`}
            >
              Localização
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-3xl mt-2 py-4 px-6 md:hidden">
            <nav className="flex flex-col gap-4 font-semibold text-lg">
              <a
                href="#hero"
                onClick={(e) => {
                  handleClick("hero")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "hero" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Início
              </a>
              <a
                href="#cta"
                onClick={(e) => {
                  handleClick("cta")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "cta" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Agendar
              </a>
              <a
                href="#sobre"
                onClick={(e) => {
                  handleClick("sobre")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "sobre" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Sobre
              </a>
              <a
                href="#convenios"
                onClick={(e) => {
                  handleClick("convenios")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "convenios" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Convênios
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  handleClick("contato")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "contato" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Contato
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  handleClick("contato")(e);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors ${
                  active === "contato" ? "text-[#038dff]" : "text-black hover:text-[#038dff]"
                }`}
              >
                Localização
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
