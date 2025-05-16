"use client";

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quem somos
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Com mais de 25 anos de experiência em Tubarão, Santa Catarina, nossa clínica 
              odontológica se destaca pela excelência no atendimento e compromisso com a 
              saúde bucal de nossos pacientes. Nossa equipe altamente qualificada está 
              sempre atualizada com as mais recentes técnicas e tecnologias do mercado 
              odontológico.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#038dff] mb-2">
                  +25 anos
                </h3>
                <p className="text-gray-700">
                  em Tubarão, Santa Catarina
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#038dff] mb-2">
                  +10 Especializações
                </h3>
                <p className="text-gray-700">
                  Profissionais especializados
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Clinic Image */}
          <div className="flex-1">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
                alt="Nossa Clínica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
