import { Testimonial, TestimonialCard } from "../common/TestimonalCard";
import picture from "@/assets/gallery-dj.jpg";
import p1 from "@/assets/p1.jpeg";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.jpeg";
import p4 from "@/assets/p4.jpeg";
import p5 from "@/assets/p5.jpeg";
import p6 from "@/assets/p6.jpeg";

export function TestimonialsMarquee() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="group overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials: Testimonial[] = [
  {
    name: "Paulo Couto",
    event: "Casamento",
    image: p1,
    description:
      "Excelente atendimento! A equipe foi extremamente profissional e toda a estrutura de som e iluminação ficou impecável.",
  },
  {
    name: "Julia Mattos",
    event: "Evento Corporativo",
    image: p2,
    description:
      "Pontualidade, organização e equipamentos de alta qualidade. Superou todas as expectativas da nossa empresa.",
  },
  {
    name: "Mateus Mauricio",
    event: "Festa de Aniversário",
    image: p3,
    description:
      "DJ excelente e iluminação incrível. Todos os convidados elogiaram muito a festa. Recomendo muito o pessoal da MhZ!",
  },
  {
    name: "Lucas Martins",
    event: "Show",
    image: p4,
    description:
      "Estrutura impecável e equipe muito preparada. Tudo funcionou perfeitamente durante o evento.",
  },
  {
    name: "Nikole Gouveia",
    event: "Show",
    image: p5,
    description:
      "Profissionalismo e Pontualidade. Nota 10 para a equipe. Sempre contrato quando preciso!",
  },
  {
    name: "Lucas Shafa",
    event: "Festivais",
    image: p6,
    description:
      "Muito bom trabalhar com eles, recomendo muito. Não é a toa que temos uma parceria de longo prazo!",
  },
];
