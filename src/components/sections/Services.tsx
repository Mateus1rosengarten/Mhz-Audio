import type { LucideIcon } from "lucide-react";
import { Building2, Cake, Disc3, Guitar, Heart, Lightbulb, Speaker, Warehouse } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

type Service = { icon: LucideIcon; name: string; description: string };

const services: Service[] = [
  {
    icon: Speaker,
    name: "Sonorização Profissional",
    description:
      "Sistema completo de sonorização para eventos de todos os portes, com aluguel de equipamentos, montagem e operação técnica especializada.",
  },
  {
    icon: Lightbulb,
    name: "Iluminação para Eventos",
    description:
      "Soluções completas em iluminação para eventos, com aluguel de equipamentos, montagem e suporte técnico.",
  },
  {
    icon: Disc3,
    name: "DJs Profissionais",
    description:
      "Contratação de DJs experientes que atendem eventos de todos os portes, oferecendo música de qualidade e estrutura profissional.",
  },
  {
    icon: Guitar,
    name: "Bandas para Eventos",
    description:
      "Contratação de bandas, músicos e atrações ao vivo para cerimônias, recepções e eventos e casamentos.",
  },
];

export function Services() {
  return (
    <Section id="servicos" className="bg-surface/30" containerClassName="px-4">
      <Reveal>
        <SectionHeading
          title="Uma produtora completa para cada detalhe do seu evento"
          description="Soluções modulares que se combinam conforme o formato, o público e o espaço do seu evento."
        />
      </Reveal>

      <div className="mt-16 grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.name} delay={index * 60}>
            <article className="surface-card group h-full px-3 py-6 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-button/40 hover:shadow-elevated">
              <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-button group-hover:text-primary-foreground">
                <service.icon className="size-5" />
              </span>
              <h3 className="mt-3 sm:mt-5 text-base sm:text-lg font-semibold text-center">
                {service.name}
              </h3>
              <p className="mt-3 sm:mt-5 text-sm leading-relaxed text-muted-foreground text-center">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
