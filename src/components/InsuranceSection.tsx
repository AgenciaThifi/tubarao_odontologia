"use client";

import Image from 'next/image';

const insuranceLogos = {
  row1: [
    { src: "/Icon_agreement_1.png", alt: "Insurance Partner 1" },
    { src: "/Icon_agreement_2.png", alt: "Insurance Partner 2" },
    { src: "/Icon_agreement_3.png", alt: "Insurance Partner 3" }
  ],
  row2: [
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner" },
    { src: "/Icon_agreement_4.png", alt: "Insurance Partner 4" }
  ]
};

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm">
    <div className="relative w-[100px] h-[60px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="100px"
        priority
      />
    </div>
  </div>
);

const InsuranceSection = () => {
  return (
    <section className="py-8 bg-white" id="convenios">
      <div className="container mx-auto px-4">
        <div className="bg-[#038dff] rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-4 gap-6">
            {/* Title */}
            <div className="col-span-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Convênios<br />Credenciados
              </h2>
            </div>

            {/* First Row - 3 Logos */}
            <div className="col-span-3 grid grid-cols-3 gap-6">
              {insuranceLogos.row1.map((logo, index) => (
                <LogoCard key={`row1-${index}`} {...logo} />
              ))}
            </div>

            {/* Second Row - 5 Logos */}
            <div className="col-span-4 grid grid-cols-4 gap-6">
              {insuranceLogos.row2.map((logo, index) => (
                <LogoCard key={`row2-${index}`} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
