"use client";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#008CFF] rounded-3xl w-full aspect-[4/3] shadow-lg"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#008CFF] text-5xl font-bold mb-10 font-poppins">
              Quem somos
            </h2>
            <div className="space-y-8 text-gray-700 font-poppins text-lg leading-relaxed">
              <p>
                Na <strong>Tubarão Assistência Odontológica</strong>, acreditamos que um sorriso saudável vai além da estética — é sinônimo de bem-estar, confiança e qualidade de vida. Desde 1999, temos o compromisso de oferecer atendimento odontológico humanizado, acessível e de excelência para a comunidade de Tubarão e região.
              </p>
              <p>
                Nossa equipe é formada por profissionais dedicados e atualizados, prontos para atender você com empatia e profissionalismo. Aqui, cada paciente é único, e cada tratamento é conduzido com atenção aos detalhes, respeito às necessidades individuais e foco em resultados duradouros. Estamos localizados no coração de Tubarão, em um espaço moderno e acolhedor, preparado para receber você com conforto e segurança.
              </p>
              <p>
                Mais do que cuidar de sorrisos, cuidamos de pessoas. Porque para nós, saúde bucal é parte essencial de uma vida plena e feliz.
              </p>
            </div>
          </div>
        </div>

        {/* Info Metrics */}
        <div className="flex justify-center items-start gap-24">
          {/* Years Card */}
          <div className="text-center">
            <div className="text-[#008CFF] mb-3">
              <span className="text-6xl font-bold">+25</span>
              <span className="text-2xl ml-2 font-light">anos</span>
            </div>
            <p className="text-gray-600 font-poppins text-lg">
              Tubarão, Santa Catarina
            </p>
          </div>

          {/* Specializations Card */}
          <div className="text-center">
            <div className="text-[#FF0000] mb-3">
              <span className="text-6xl font-bold">+10</span>
              <span className="text-2xl ml-2 font-light">Especializações</span>
            </div>
            <p className="text-gray-600 font-poppins text-lg">
              Profissionais especializados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
