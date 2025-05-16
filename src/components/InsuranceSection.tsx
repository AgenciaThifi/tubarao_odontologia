"use client";

import Image from 'next/image';

const topRowLogos = [
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
  }
];

const bottomRowLogos = [
  {
    src: "/Icon_agreement_mockup.png",
    alt: "Future Partner"
  },
  {
    src: "/Icon_agreement_mockup.png",
    alt: "Future Partner"
  },
  {
    src: "/Icon_agreement_mockup.png",
    alt: "Future Partner"
  },
  {
    src: "/Icon_agreement_mockup.png",
    alt: "Future Partner"
  },
  {
    src: "/Icon_agreement_4.png",
    alt: "VIDA COTIDIANA"
  }
];

const InsuranceSection = () => {
  return (
    <section className="py-8 bg-white" id="convenios">
      <div className="container mx-auto px-4">
        <div className="bg-[#038dff] rounded-3xl shadow-lg p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Title */}
              <div className="lg:w-1/4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Convênios<br />Credenciados
                </h2>
              </div>

              {/* Logos Grid Container */}
              <div className="lg:w-3/4 space-y-4">
                {/* Top Row - 3 Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {topRowLogos.map((logo, index) => (
                    <div 
                      key={`top-${index}`}
                      className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative w-[120px] h-[80px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="120px"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row - 5 Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {bottomRowLogos.map((logo, index) => (
                    <div 
                      key={`bottom-${index}`}
                      className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative w-[120px] h-[80px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="120px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
