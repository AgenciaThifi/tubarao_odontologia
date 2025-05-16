"use client";

import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-[#f40002] py-12" id="agendar">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Agende uma Avaliação
          </h2>
          <p className="text-white text-lg mb-8 font-normal">
            Clique no botão do WhatsApp e informe o dia e horário que deseja comparecer para sua Avaliação.
          </p>
          <Link 
            href="http://wa.me/48999584399"
            target="_blank"
            className="inline-flex items-center bg-white text-[#f40002] px-8 py-4 rounded-full font-bold text-lg hover:bg-transparent hover:text-white border-2 border-white transition-all"
          >
            WhatsApp
            <Image
              src="/Icon_whatsapp_red_bigger.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="ml-3 object-contain group-hover:brightness-0 group-hover:invert"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
