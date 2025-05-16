"use client";

import Image from 'next/image';

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
          <div className="grid grid-cols-5 gap-6">
            {/* Title + Empty Spaces */}
            <div className="col-span-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Convênios<br />Credenciados
              </h2>
            </div>

            {/* First Row - 3 Logos */}
            <LogoCard src="/Icon_agreement_1.png" alt="Insurance Partner 1" />
            <LogoCard src="/Icon_agreement_2.png" alt="Insurance Partner 2" />
            <LogoCard src="/Icon_agreement_3.png" alt="Insurance Partner 3" />

            {/* Second Row - 5 Logos */}
            <LogoCard src="/Icon_agreement_mockup.png" alt="Future Partner" />
            <LogoCard src="/Icon_agreement_mockup.png" alt="Future Partner" />
            <LogoCard src="/Icon_agreement_mockup.png" alt="Future Partner" />
            <LogoCard src="/Icon_agreement_mockup.png" alt="Future Partner" />
            <LogoCard src="/Icon_agreement_4.png" alt="Insurance Partner 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
