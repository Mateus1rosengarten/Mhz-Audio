import type { LucideIcon } from "lucide-react";
import { Award, Boxes, Headphones, Layers, Users, Wrench } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { TestimonialsMarquee } from "./TestimonalMarquee";
import { CallToAction } from "./CallToAction";

type Differential = { icon: LucideIcon; title: string; description: string };

const differentials: Differential[] = [
  {
    icon: Award,
    title: "+ 10 anos no mercado",
    description:
      "Experiência na realização de casamentos, eventos corporativos, festas e shows de todos os portes.",
  },
  {
    icon: Boxes,
    title: "Equipamentos Profissionais",
    description:
      "Estrutura moderna com equipamentos de som e iluminação para entregar máxima qualidade em cada evento.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais qualificados para realizar a montagem, operação e suporte técnico durante todo o evento.",
  },
];

export function Differentials() {
  return (
    <Section id="sobre">
      <Reveal>
        <SectionHeading title="Por que nossos clientes confiam na nossa estrutura" />
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {differentials.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-card">
                <item.icon className="size-6 text-primary" />
              </div>

              <h3 className="mt-5 text-xl font-semibold ">{item.title}</h3>

              <p className="mt-3 text-muted-foreground  text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <TestimonialsMarquee />
      <CallToAction />
    </Section>
  );
}
