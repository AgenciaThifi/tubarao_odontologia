"use client";

const testimonials = [
  {
    name: "Angela Pacheco",
    initial: "A",
    text: "Profissionais e Atendimento excelentes!",
    bgColor: "#b734c2"
  },
  {
    name: "Kelly Silva",
    initial: "K",
    text: "Ótima clínica :)",
    bgColor: "#ff6f00"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#038dff] mb-3">
            Avaliações
          </h2>
          <p className="text-base md:text-lg text-[#333333] font-normal">
            Veja o que eles falam sobre nós!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative w-[380px] h-[220px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-shadow duration-300 p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* User Initial Circle */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <span className="text-white text-xl font-bold">
                    {testimonial.initial}
                  </span>
                </div>

                <div>
                  {/* User Name */}
                  <h3 className="text-lg font-bold text-black mb-2">
                    {testimonial.name}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-black font-normal text-base pl-16">
                {testimonial.text}
              </p>

              {/* Source Badge - Half outside the card */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="inline-block bg-[#038dff] text-white text-sm font-normal px-6 py-2 rounded-full shadow-lg">
                  Fonte: Avaliação no Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
