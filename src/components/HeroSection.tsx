"use client";

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] bg-[#038dff] pt-16 md:pt-20 pb-20 md:pb-40 overflow-hidden">
      {/* Background Overlay with Gradient and blurred background image */}
      <div 
        className="absolute inset-0 bg-[#038dff] bg-opacity-80 backdrop-blur-sm"
        style={{
          backgroundImage: `url('/Image_background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Left Content */}
          <div className="text-white max-w-xl font-poppins text-center md:text-left flex flex-col justify-center min-h-[400px] md:h-[600px] px-4 md:px-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
              Seu sorriso merece o melhor cuidado!
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 font-normal">
              Agende uma avaliação agora mesmo!
            </p>
            
            {/* CTA Button */}
            <Link 
  href="http://wa.me/48999584399"
  target="_blank"
  className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all group mb-4 w-fit"
>
  Agendar Avaliação
  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white w-6 h-6">
    <Image
      src="/Icon_share_red.png"
      alt="Ícone de compartilhamento"
      width={18}
      height={18}
    />
  </span>
</Link>

            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <Link 
                href="https://www.instagram.com/odontotubarao"
                target="_blank"
                className="bg-white p-2 rounded-full hover:opacity-90 transition-opacity border border-[#f40002]"
                aria-label="Instagram"
              >
                <Image
                  src="/Icon_instagram_red.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
              <Link 
                href="http://wa.me/48999584399" 
                target="_blank"
                className="bg-white p-2 rounded-full hover:opacity-90 transition-opacity border border-[#f40002]"
                aria-label="WhatsApp"
              >
                <Image
                  src="/Icon_whatsapp_red.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
