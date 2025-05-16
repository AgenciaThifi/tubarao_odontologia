"use client";

import Image from 'next/image';

const insuranceLogos = [
  {
    src: "/Icon_agreement_1.png",
    alt: "Insurance Partner 1"
  },
  {
    src: "/Icon_agreement_2.png",
    alt: "Insurance Partner 2"
  },
  {
    src: "/Icon_agreement_3.png",
    alt: "Insurance Partner 3"
  },
  {
    src: "/Icon_agreement_4.png",
    alt: "Insurance Partner 4"
  }
];

const placeholders = Array(4).fill({
  src: "/Icon_agreement_mockup.png",
  alt: "Future Partner"
});

const InsuranceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Convênios Credenciados
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {/* Insurance Partner Logos */}
          {insuranceLogos.map((logo, index) => (
            <div 
              key={`partner-${index}`}
              className="relative w-[150px] h-[50px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          ))}

          {/* Placeholder Logos */}
          {placeholders.map((placeholder, index) => (
            <div 
              key={`placeholder-${index}`}
              className="relative w-[150px] h-[50px] opacity-50"
            >
              <Image
                src={placeholder.src}
                alt={placeholder.alt}
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
