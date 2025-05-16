"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

const CTASection = () => {
  return (
    <section className="bg-[#008CFF] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3 text-white">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">
                Agende uma Avaliação
              </h2>
              <p className="text-lg md:text-xl font-poppins">
                Clique no botão de WhatsApp e agende sua consulta agora mesmo!
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-[#f40002] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:brightness-105 font-poppins"
            aria-label="Agendar via WhatsApp"
          >
            <WhatsappLogo size={24} weight="fill" className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
