import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section id="contato" className="bg-[surface/30]">
      <Reveal>
        <SectionHeading
          title="Solicite seu orçamento"
          description="Preencha os dados abaixo e receba uma proposta personalizada em poucos minutos."
        />
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {icon}
        {label}
      </span>
      <p className="mt-1.5 text-sm">{children}</p>
    </div>
  );
}
