"use client";

import Image from 'next/image';

const services = [
  {
    icon: "/icon_harmonizacao.png",
    title: "Harmonização facial",
    description: "Realce sua beleza natural com procedimentos personalizados",
    bgColor: "bg-[#038DFF]"
  },
  {
    icon: "/icon_lente.png",
    title: "Lente de contato",
    description: "Transforme seu sorriso com lentes de contato dental",
    bgColor: "bg-[#FF0000]"
  },
  {
    icon: "/icon_aparelho.png",
    title: "Aparelho",
    description: "Alinhe seus dentes com tecnologia e conforto",
    bgColor: "bg-[#038DFF]"
  },
  {
    icon: "/icon_implante.png",
    title: "Implante",
    description: "Recupere sua confiança com implantes naturais",
    bgColor: "bg-[#FF0000]"
  }
];

const ServiceCard = ({ icon, title, description, bgColor }: {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} rounded-3xl p-8 flex flex-col items-center text-center h-full`}>
    <div className="relative w-16 h-16 mb-6">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
        sizes="64px"
      />
    </div>
    <h3 className="text-white text-xl font-bold mb-4 font-poppins">
      {title}
    </h3>
    <p className="text-white font-poppins">
      {description}
    </p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Alguns serviços
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Conheça alguns de nossos serviços!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
