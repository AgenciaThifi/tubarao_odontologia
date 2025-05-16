"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "É permitido ter acompanhante?",
    answer: "Sim, é permitido ter um acompanhante durante a consulta. Entendemos que alguns pacientes se sentem mais confortáveis com alguém de confiança presente durante o atendimento."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar uma consulta através do nosso WhatsApp, telefone ou preenchendo o formulário de contato em nosso site. Nossa equipe retornará o contato para confirmar o horário mais conveniente para você."
  },
  {
    question: "Atendem convênios odontológicos?",
    answer: "Sim, trabalhamos com diversos convênios odontológicos. Você pode conferir a lista completa na seção 'Convênios Credenciados' ou entrar em contato conosco para verificar se atendemos o seu plano específico."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:text-[#038dff] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
