"use client";

<<<<<<< HEAD
=======
import { useState } from 'react';

>>>>>>> 72081e7 (feat: Update CTASection component with improved layout and styling)
const faqs = [
  {
    question: "É permitido ter acompanhante na consulta?",
    answer: "Os pacientes podem entrar e ter um acompanhante durante o atendimento."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar diretamente pelo WhatsApp, no botão fixo ou presente nas seções do site."
  },
  {
    question: "Atendem convênios odontológicos?",
    answer: "Sim! Atendemos diversos convênios. Consulte nossa equipe para verificar se o seu plano é aceito."
  }
];

const FAQSection = () => {
<<<<<<< HEAD
  return (
    <section className="py-20 bg-[#038dff]">
=======
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#2563EB]">
>>>>>>> 72081e7 (feat: Update CTASection component with improved layout and styling)
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-normal">
            Veja o que costumam perguntar para nós
          </p>
        </div>

<<<<<<< HEAD
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${index !== faqs.length - 1 ? 'border-b border-[#f40002]' : ''} pb-8`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {faq.question}
              </h3>
              <p className="text-white/90 text-lg font-normal leading-relaxed">
                {faq.answer}
              </p>
=======
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b-2 ${index === faqs.length - 1 && openIndex === index ? '' : 'border-[#f40002]'} pb-6`}
            >
              <button
                className="w-full text-left flex justify-between items-start group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl md:text-2xl font-bold text-white pr-8">
                  {faq.question}
                </span>
                <span className="text-white mt-2 transform transition-transform duration-300">
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'mt-4 max-h-40' : 'max-h-0'
                }`}
              >
                <p className="text-white/90 text-lg font-normal leading-relaxed">
                  {faq.answer}
                </p>
              </div>
>>>>>>> 72081e7 (feat: Update CTASection component with improved layout and styling)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
