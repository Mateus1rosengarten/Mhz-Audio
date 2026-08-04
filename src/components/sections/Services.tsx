import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Cake,
  Disc3,
  Guitar,
  Heart,
  Lightbulb,
  Speaker,
  Warehouse,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

type Service = { icon: LucideIcon; name: string; description: string };

const services: Service[] = [
  {
    icon: Speaker,
    name: "Sonorização Profissional",
    description: "Line arrays, mesas digitais e operação técnica para qualquer porte.",
  },
  {
    icon: Lightbulb,
    name: "Iluminação para Eventos",
    description: "Projetos de luz cênica, uplights e efeitos que criam atmosfera.",
  },
  {
    icon: Disc3,
    name: "DJs Profissionais",
    description: "Repertório personalizado e leitura de pista do início ao fim.",
  },
  {
    icon: Guitar,
    name: "Bandas para Eventos",
    description: "Bandas versáteis e músicos solo para cerimônias e recepções.",
  },
  {
    icon: Warehouse,
    name: "Estrutura para Shows",
    description: "Palcos, treliças, praticáveis e rigging com equipe certificada.",
  },
  {
    icon: Building2,
    name: "Eventos Corporativos",
    description: "Convenções, lançamentos e premiações com padrão executivo.",
  },
  {
    icon: Heart,
    name: "Casamentos",
    description: "Da cerimônia à pista, com sonorização discreta e luz elegante.",
  },
  {
    icon: Cake,
    name: "Festas e Aniversários",
    description: "Pacotes completos de som e luz para celebrações memoráveis.",
  },
];

export function Services() {
  return (
    <Section id="servicos" className="bg-surface/30">
      <Reveal>
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que o seu evento precisa em um só lugar"
          description="Soluções modulares que se combinam conforme o formato, o público e o espaço do seu evento."
        />
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.name} delay={index * 60}>
            <article className="surface-card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
