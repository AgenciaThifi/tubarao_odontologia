"use client";

import Image from "next/image";

const insuranceLogos = {
  top: [
    { src: "/Icon_agreement_1.png", alt: "Insurance Partner 1" },
    { src: "/Icon_agreement_2.png", alt: "Insurance Partner 2" },
    { src: "/Icon_agreement_3.png", alt: "Insurance Partner 3" },
    { src: "/Icon_agreement_4.png", alt: "Insurance Partner 4" },
  ],
  bottom: [
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner 1" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner 2" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner 3" },
    { src: "/Icon_agreement_mockup.png", alt: "Future Partner 4" },
  ],
};

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm h-[80px]">
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
    <section className="py-10 bg-white" id="convenios">
      <div className="container mx-auto px-4">
        <div className="bg-[#038dff] rounded-3xl shadow-lg px-6 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-6">
            {/* Linha 1 */}
            <div className="col-span-2 flex items-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Convênios<br />Credenciados
              </h2>
            </div>
            {insuranceLogos.top.slice(0, 3).map((logo, index) => (
              <LogoCard key={`top-${index}`} {...logo} />
            ))}
            <LogoCard key="top-3" {...insuranceLogos.top[3]} />

            {/* Linha 2 */}
            {insuranceLogos.bottom.map((logo, index) => (
              <LogoCard key={`bottom-${index}`} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
