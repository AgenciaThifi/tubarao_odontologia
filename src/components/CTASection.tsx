"use client";

import Image from "next/image";

const CTASection = () => {
  return (
    <section id="cta" className="bg-[#f40002] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-center max-w-6xl mx-auto gap-6 md:gap-16">
          
          {/* Textos centralizados */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white text-4xl md:text-[36px] font-bold font-poppins leading-tight mb-2">
              Agende uma Avaliação
            </h2>
            <p className="text-white text-base md:text-lg font-poppins leading-snug max-w-md">
              <strong>Clique no botão de WhatsApp</strong> e informe o dia e<br />
              horário que deseja comparecer para sua Avaliação.
            </p>
          </div>

          {/* Botão WhatsApp centralizado */}
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white rounded-full px-8 py-4 gap-4 hover:brightness-95 transition-all"
            aria-label="Agendar via WhatsApp"
          >
            <Image
              src="/Icon_whatsapp_red_bigger.png"
              alt="WhatsApp"
              width={38}
              height={38}
              priority
            />
            <span className="text-[#f40002] font-bold font-poppins text-2xl">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
