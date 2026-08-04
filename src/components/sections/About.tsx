import { Check } from "lucide-react";
import aboutImage from "@/assets/about-setup.jpg";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

const capabilities = [
  "Sonorização",
  "Iluminação",
  "DJs",
  "Bandas",
  "Estrutura para eventos",
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
            <img
              src={aboutImage}
              alt="Equipe montando estrutura de som e iluminação em um evento"
              loading="lazy"
              width={1104}
              height={1312}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Sobre nós"
            title="Uma produtora completa para cada detalhe do seu evento"
            description="Somos especialistas em produção técnica de eventos. Cuidamos do projeto, da montagem e da operação para que você se preocupe apenas em aproveitar — com equipamentos de alto padrão e uma equipe que entende o ritmo de cada celebração."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
