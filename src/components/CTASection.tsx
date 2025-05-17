"use client";

<<<<<<< HEAD
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
=======
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="bg-[#f40002] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-[2.75rem] font-bold font-poppins text-white">
            Agende uma Avaliação
          </h2>
          
          {/* Subtitle with Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-5">
            <p className="text-white text-lg sm:text-xl leading-tight max-w-xl mt-1">
              <span className="font-bold font-poppins">
                Clique no botão de WhatsApp
              </span>{" "}
              <span className="font-normal font-poppins">
                e informe o dia e horário que deseja comparecer para sua Avaliação.
              </span>
            </p>

            {/* WhatsApp Button - Larger size and adjusted vertical position */}
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-white rounded-[100px] hover:brightness-95 transition-all -mt-1 sm:mt-0"
              aria-label="Agendar via WhatsApp"
            >
              <Image
                src="/Icon_whatsapp_red_bigger.png"
                alt="WhatsApp"
                width={38}
                height={38}
                className="mr-3"
                priority
              />
              <span className="text-[#f40002] font-bold font-poppins text-2xl">WhatsApp</span>
            </a>
          </div>
>>>>>>> 72081e7 (feat: Update CTASection component with improved layout and styling)
        </div>
      </div>
    </section>
  );
};

export default CTASection;
