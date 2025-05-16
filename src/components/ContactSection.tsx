"use client";

import Image from 'next/image';

const contactInfo = {
  hours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
  phones: ["(48) 3333-3333", "(48) 99999-9999"],
  address: "Rua Example, 123 - Centro, Tubarão - SC, 88701-000"
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Entre em contato
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Icon_hour.png"
                  alt="Horário"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Horário de Atendimento
                </h3>
                <p className="text-gray-600">
                  {contactInfo.hours}
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Icon_telephone.png"
                  alt="Telefone"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Telefones
                </h3>
                {contactInfo.phones.map((phone, index) => (
                  <p key={index} className="text-gray-600">
                    {phone}
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Icon_location.png"
                  alt="Localização"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Endereço
                </h3>
                <p className="text-gray-600">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.0147058913777!2d-49.0127443!3d-28.4812799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzUyLjYiUyA0OcKwMDAnNDUuOSJX!5e0!3m2!1spt-BR!2sbr!4v1629901234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
