"use client";

import Image from 'next/image';
import { useMobile } from '../hooks/use-mobile';

const services = [
  {
    icon: "/Icon_facialHarmonization.png",
    title: "Harmonização facial",
    description: "A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que realçam a beleza natural e promovem equilíbrio entre os traços do rosto. Utilizamos técnicas seguras e produtos de alta qualidade para melhorar contornos, suavizar linhas de expressão e valorizar a autoestima do paciente. Tudo com acompanhamento profissional e resultado natural.",
    bgColor: "bg-[#038DFF]",
    isBlue: true
  },
  {
    icon: "/Icon_contactLens.png",
    title: "Lente de contato",
    description: "As lentes de contato dental são lâminas ultrafinas de porcelana aplicadas sobre os dentes para corrigir forma, cor, tamanho e pequenas imperfeições. É uma solução rápida, duradoura e minimamente invasiva para quem deseja conquistar um sorriso mais branco, alinhado e harmônico. Tudo com planejamento digital e precisão nos detalhes para um resultado natural e encantador.",
    bgColor: "bg-[#FF0000]",
    isBlue: false
  },
  {
    icon: "/Icon_braces.png",
    title: "Aparelho",
    description: "O uso do aparelho ortodôntico corrige o alinhamento dos dentes e a mordida, melhorando não só a estética do sorriso, mas também a saúde bucal como um todo. Trabalhamos com diferentes tipos de aparelhos — do tradicional ao estético — para atender às necessidades de cada paciente com conforto, eficiência e acompanhamento especializado em todas as etapas do tratamento.",
    bgColor: "bg-[#038DFF]",
    isBlue: true
  },
  {
    icon: "/Icon_implant.png",
    title: "Implante",
    description: "O implante dentário é a solução ideal para quem perdeu um ou mais dentes e deseja recuperar o sorriso com segurança, estética e funcionalidade. Trata-se de uma estrutura de titânio fixada ao osso, que substitui a raiz do dente perdido e serve de base para próteses definitivas. Um procedimento moderno, eficaz e com resultados que devolvem a confiança ao sorrir.",
    bgColor: "bg-[#FF0000]",
    isBlue: false
  }
];

const DesktopServiceCard = ({ icon, title, description, bgColor, isBlue }: {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  isBlue: boolean;
}) => (
  <div className={`${bgColor} shadow-lg w-full md:w-[300px] min-h-[400px] flex flex-col items-center text-center p-8 transform ${isBlue ? '-translate-y-3' : 'translate-y-3'} transition-transform`}>
    <div className="relative w-24 h-24 mb-6">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
        sizes="96px"
        priority
      />
    </div>
    <h3 className="text-white text-2xl font-bold mb-4 font-poppins">
      {title}
    </h3>
    <p className="text-white text-sm font-poppins leading-relaxed">
      {description}
    </p>
  </div>
);

const MobileServiceCard = ({ icon, title, description, bgColor }: {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} shadow-lg w-full min-h-[400px] flex flex-col items-center text-center p-6 transform hover:scale-105 transition-transform duration-300`}>
    <div className="relative w-24 h-24 mb-6">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
        sizes="96px"
        priority
      />
    </div>
    <h3 className="text-white text-2xl font-bold mb-4 font-poppins">
      {title}
    </h3>
    <p className="text-white text-sm font-poppins leading-relaxed">
      {description}
    </p>
  </div>
);

const ServicesSection = () => {
  const isMobile = useMobile();

  return (
    <section className="py-24 bg-white" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[#038DFF] text-4xl font-bold mb-4 font-poppins">
            Alguns serviços
          </h2>
          <p className="text-xl text-gray-600 font-poppins font-normal">
            Conheça alguns de nossos serviços!
          </p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <MobileServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <DesktopServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
