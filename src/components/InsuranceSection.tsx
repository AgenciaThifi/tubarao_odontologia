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
    alt: "Insurance Partner 4"
  }
];

const InsuranceSection = () => {
  return (
    <section className="py-8 bg-white" id="convenios">
      <div className="container mx-auto px-4">
        <div className="bg-[#038dff] rounded-3xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row lg:items-start">
            {/* Title */}
            <div className="lg:w-[200px] mb-8 lg:mb-0 lg:mr-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Convênios<br />Credenciados
              </h2>
            </div>

            {/* Logos Grid */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Top Row - 3 Logos */}
                <div className="grid grid-cols-3 gap-6">
                  {topRowLogos.map((logo, index) => (
                    <div 
                      key={`top-${index}`}
                      className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative w-[100px] h-[60px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="100px"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row - 5 Logos */}
                <div className="grid grid-cols-5 gap-6">
                  {bottomRowLogos.map((logo, index) => (
                    <div 
                      key={`bottom-${index}`}
                      className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative w-[100px] h-[60px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="100px"
                          priority
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
