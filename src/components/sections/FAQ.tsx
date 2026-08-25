import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../common/Section";
import { ActionButton } from "../common/ActionButton";
import { defaultContactMessage, openWhatsApp } from "@/lib/whatsapp";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="w-full bg-[#0f0f10] px-6 py-24 md:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          title="Tudo o que você precisa saber antes do seu evento"
          align="left"
          description="Tire suas principais dúvidas sobre nossos serviços, estrutura e como funciona a contratação para o seu evento."
          className="order-1 text-center sm:text-left"
        />

        <div className="pt-4 sm:pt-0 order-2 w-full space-y-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-button/60 bg-[#15171c]"
                    : "border-white/[0.08] bg-[#121212] hover:border-white/[0.15]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-4 py-3 text-left"
                >
                  <span
                    className={`text-base font-medium transition-colors md:text-lg ${
                      isOpen ? "text-white" : "text-zinc-200"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-button/60 text-white" : "bg-[#1a1d24] text-[#2563eb]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-sm leading-7 text-zinc-400 md:px-7 md:pb-7 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 sm:pt-0 order-3 flex flex-col gap-8 sm:gap-4 lg:col-start-1 lg:row-start-2 text-center sm:text-left">
          <h3 className="max-w-2xl text-xl sm:text-2xl sm:text-white/80">
            Não encontrou a resposta que procurava?
          </h3>

          <ActionButton
            size="lg"
            onClick={() => openWhatsApp(defaultContactMessage)}
            className="w-fit px-4 sm:px-6 mx-auto sm:mx-0"
          >
            {" "}
            <ArrowUpRight />
            Pergunte algo para nossa equipe
          </ActionButton>
        </div>
      </div>
    </section>
  );
}

const faqItems: FAQItem[] = [
  {
    question: "Quais tipos de eventos e onde atendemos?",
    answer:
      "Atendemos casamentos, eventos corporativos, festas, aniversários, formaturas, shows e diversos outros formatos de eventos em toda a Região Metropolitana de Curitiba e cidades próximas.",
  },
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Oferecemos sonorização, iluminação e painéis de LED, além de assessoria musical completa, com DJs, bandas e músicos para a recepção.",
  },
  {
    question: "Posso contratar apenas um dos serviços?",
    answer:
      "Sim. Nossos serviços são modulares e podem ser contratados separadamente ou combinados de acordo com as necessidades do seu evento.",
  },
  {
    question: "Vocês fazem a montagem dos equipamentos?",
    answer:
      "Sim. Nossa equipe cuida da montagem, configuração, operação e suporte técnico durante todo o evento.",
  },
  {
    question: "Com quanto tempo de antecedência devo contratar?",
    answer:
      "Recomendamos entrar em contato o quanto antes, principalmente para eventos em datas concorridas. Assim conseguimos garantir a disponibilidade da estrutura e da equipe.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Você nos informa a data, local, formato e detalhes do evento. A partir dessas informações, montamos uma proposta personalizada para suas necessidades.",
  },
];
