import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contato">
      <Reveal>
        <SectionHeading
          eyebrow="Contato"
          title="Solicite seu orçamento"
          description="Preencha os dados abaixo e receba uma proposta personalizada em poucos minutos."
        />
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Localização da empresa no mapa"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 grayscale-[0.4]"
            />
          </div>

          <div className="surface-card grid gap-4 p-6 sm:grid-cols-2">
            <InfoItem icon={<Phone className="size-4 text-primary" />} label="WhatsApp">
              {siteConfig.whatsappDisplay}
            </InfoItem>
            <InfoItem icon={<Mail className="size-4 text-primary" />} label="Email">
              {siteConfig.email}
            </InfoItem>
            <InfoItem icon={<Instagram className="size-4 text-primary" />} label="Instagram">
              {siteConfig.instagramHandle}
            </InfoItem>
            <InfoItem icon={<MapPin className="size-4 text-primary" />} label="Endereço">
              {siteConfig.address}
            </InfoItem>
          </div>
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
