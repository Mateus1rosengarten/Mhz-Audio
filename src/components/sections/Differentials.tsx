import type { LucideIcon } from "lucide-react";
import { Award, Boxes, Headphones, Layers, Users, Wrench } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

type Differential = { icon: LucideIcon; title: string; description: string };

const differentials: Differential[] = [
  {
    icon: Award,
    title: "Mais de 10 anos de experiência",
    description: "Centenas de eventos entregues com pontualidade e consistência técnica.",
  },
  {
    icon: Boxes,
    title: "Equipamentos profissionais",
    description: "Marcas de referência mundial, revisadas antes de cada montagem.",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Técnicos de áudio, luz e rigging dedicados ao seu evento.",
  },
  {
    icon: Headphones,
    title: "Atendimento personalizado",
    description: "Um consultor acompanha seu projeto do briefing ao encerramento.",
  },
  {
    icon: Wrench,
    title: "Montagem e suporte completo",
    description: "Instalação, testes e operação assistida durante todo o evento.",
  },
  {
    icon: Layers,
    title: "Solução completa",
    description: "Som, luz, palco e entretenimento com um único fornecedor.",
  },
];

export function Differentials() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que produtores e noivos confiam na nossa estrutura"
        />
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <article className="h-full rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-surface">
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
