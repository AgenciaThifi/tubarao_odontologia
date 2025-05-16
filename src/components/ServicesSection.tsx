"use client";

import Image from 'next/image';

const services = [
  {
    icon: "/Icon_service_1.png",
    title: "Harmonização facial",
    description: "Realce sua beleza natural com procedimentos personalizados",
    bgColor: "bg-[#038DFF]"
  },
  {
    icon: "/Icon_service_2.png",
    title: "Lente de contato",
    description: "Transforme seu sorriso com lentes de contato dental",
    bgColor: "bg-[#FF0000]"
  },
  {
    icon: "/Icon_service_3.png",
    title: "Aparelho",
    description: "Alinhe seus dentes com tecnologia e conforto",
    bgColor: "bg-[#038DFF]"
  },
  {
    icon: "/Icon_service_4.png",
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
  <div className={`${bgColor} rounded-3xl w-[280px] h-[280px] flex flex-col items-center justify-center text-center p-8`}>
    <div className="relative w-20 h-20 mb-6">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
        sizes="80px"
        priority
      />
    </div>
    <h3 className="text-white text-xl font-bold mb-3 font-poppins">
      {title}
    </h3>
    <p className="text-white text-sm font-poppins leading-relaxed">
      {description}
    </p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Alguns serviços
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Conheça alguns de nossos serviços!
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8">
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
