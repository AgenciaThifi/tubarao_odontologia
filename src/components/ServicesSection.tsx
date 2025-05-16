"use client";

import Image from 'next/image';

const services = [
  {
    title: "Harmonização facial",
    description: "Procedimentos estéticos para harmonizar suas características faciais e realçar sua beleza natural, combinando diferentes técnicas para um resultado equilibrado e natural.",
    icon: (
      <Image
        src="/Icon_facialHarmonization.png"
        alt="Harmonização Facial"
        width={48}
        height={48}
      />
    ),
    color: "blue"
  },
  {
    title: "Lente de contato",
    description: "Lentes de contato dentais para um sorriso perfeito e natural, corrigindo forma, cor e alinhamento dos dentes com um procedimento minimamente invasivo.",
    icon: (
      <Image
        src="/Icon_contactLens.png"
        alt="Lente de Contato"
        width={48}
        height={48}
      />
    ),
    color: "red"
  },
  {
    title: "Aparelho",
    description: "Tratamento ortodôntico com diferentes tipos de aparelhos para alinhar seus dentes e corrigir problemas de mordida, proporcionando um sorriso harmonioso.",
    icon: (
      <Image
        src="/Icon_braces.png"
        alt="Aparelho"
        width={48}
        height={48}
      />
    ),
    color: "blue"
  },
  {
    title: "Implante",
    description: "Implantes dentários de alta qualidade para substituir dentes perdidos com naturalidade e funcionalidade, devolvendo sua confiança ao sorrir.",
    icon: (
      <Image
        src="/Icon_implant.png"
        alt="Implante"
        width={48}
        height={48}
      />
    ),
    color: "red"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Alguns serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                service.color === "blue" ? "bg-[#038dff] bg-opacity-5" : "bg-[#f40002] bg-opacity-5"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 ${
                  service.color === "blue" ? "text-[#038dff]" : "text-[#f40002]"
                }`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
