"use client";

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#038dff]">
            Entre em contato
          </h2>
          <p className="text-base text-black font-normal">
            Utilize os canais disponíveis ou faça-nos uma visita!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            {/* Business Hours */}
            <div className="contact-block">
              <h3 className="text-xl font-bold text-[#038dff] mb-4">
                Horários
              </h3>
              <div className="flex items-start gap-3">
                <Image
                  src="/Icon_hour.png"
                  alt="Horário"
                  width={20}
                  height={20}
                  className="object-contain mt-1"
                />
                <div>
                  <p className="text-black font-normal">Segunda à Sexta</p>
                  <p className="text-black font-normal">08h às 20:30h</p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="contact-block">
              <h3 className="text-xl font-bold text-[#038dff] mb-4">
                Telefone
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/Icon_telephone.png"
                    alt="Telefone"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <p className="text-black font-normal">
                    (48) 3626-8183
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/Icon_whatsapp_black.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <p className="text-black font-normal">
                    (48) 99958-4399
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="contact-block">
              <h3 className="text-xl font-bold text-[#038dff] mb-4">
                Endereço
              </h3>
              <div className="flex items-start gap-3">
                <Image
                  src="/Icon_location.png"
                  alt="Localização"
                  width={20}
                  height={20}
                  className="object-contain mt-1"
                />
                <div className="space-y-1">
                  <p className="text-black font-normal">
                    Av. Marcolino Martins Cabral,
                  </p>
                  <p className="text-black font-normal">
                    Centro Comercial EJB, 926.
                  </p>
                  <p className="text-black font-normal">
                    7º Andar – Sala 713
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.747432486905!2d-48.63346792374444!3d-28.481751575002925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521504e5a91a895%3A0x4b77cd78f6fced0c!2sAv.%20Marcolino%20Martins%20Cabral%2C%20926%20-%20Centro%2C%20Tubar%C3%A3o%20-%20SC%2C%2088701-001!5e0!3m2!1spt-BR!2sbr!4v1705161547372!5m2!1spt-BR!2sbr"
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
