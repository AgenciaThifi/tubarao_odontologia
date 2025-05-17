"use client";

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
  return (
    <section className="py-20 bg-[#038dff]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-normal">
            Veja o que costumam perguntar para nós
          </p>
        </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
