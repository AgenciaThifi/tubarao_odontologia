"use client";

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Icon_avaliation_1.png"
                alt="Nossa Clínica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Content - Text and Badges */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quem somos
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold">Na Tubarão Assistência Odontológica</span>, acreditamos que um sorriso saudável vai além da estética — é sinônimo de bem-estar, confiança e qualidade de vida. Desde 1999, temos o compromisso de oferecer atendimento odontológico humanizado, acessível e de excelência para toda a comunidade de Tubarão e região.
              </p>
              <p className="font-normal">
                Nossa equipe é formada por profissionais dedicados e atualizados, prontos para atender você com o que há de mais moderno. A cada paciente, um cuidado personalizado. Aqui, cada detalhe é pensado com carinho: da recepção aos procedimentos técnicos, tudo é realizado com atenção e resultados visíveis.
              </p>
              <p className="font-normal">
                Nossos atendimentos incluem as mais modernas técnicas e tecnologias, garantindo o melhor para você. Estamos prontos para receber você com conforto e segurança.
              </p>
              <p>
                <span className="font-bold">Cuide do seu sorriso, cuidando da sua saúde!</span> Afinal, a saúde bucal é parte essencial de uma vida plena e feliz.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#038dff]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#038dff] mb-2">
                  +25 anos
                </h3>
                <p className="text-gray-700 font-normal">
                  em Tubarão, Santa Catarina
                </p>
              </div>
              <div className="bg-[#f40002]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f40002] mb-2">
                  +10 Especializações
                </h3>
                <p className="text-gray-700 font-normal">
                  Profissionais especializados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
