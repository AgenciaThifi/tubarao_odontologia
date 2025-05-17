"use client";

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#038dff] pt-20 overflow-hidden">
      {/* Background Overlay with Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#038dff]/80 to-[#038dff]/60 backdrop-blur-sm"
        style={{
          backgroundImage: `url('/Image_background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-white max-w-xl mb-8 md:mb-0 font-poppins">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Seu sorriso merece o melhor cuidado!
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 font-normal">
              Agende uma avaliação agora mesmo!
            </p>
            
            {/* CTA Button */}
            <Link 
              href="#agendar"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all group"
            >
              Agendar Avaliação
              <svg 
                className="w-6 h-6 ml-2 text-[#f40002] transform group-hover:translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
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
                  className="w-5 h-5 object-contain"
                />
              </Link>
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
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[600px] flex items-end">
            <Image
              src="/Image_doctor.png"
              alt="Doctor"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
