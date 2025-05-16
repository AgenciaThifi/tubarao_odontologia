"use client";

import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-[#f40002] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agende uma Avaliação
          </h2>

          {/* WhatsApp Button */}
          <Link 
            href="https://wa.me/your-number"
            className="inline-flex items-center justify-center bg-white text-[#f40002] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all mb-6"
          >
            Entre em contato via WhatsApp
            <Image
              src="/Icon_whatsapp_red_bigger.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="ml-3"
            />
          </Link>

          {/* Instruction Text */}
          <p className="text-lg max-w-2xl mx-auto">
            Clique no botão do WhatsApp e informe o dia e horário que deseja comparecer para sua Avaliação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
