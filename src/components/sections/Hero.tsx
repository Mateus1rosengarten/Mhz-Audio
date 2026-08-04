import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-stage.jpg";
import { Container } from "@/components/common/Container";
import { ActionButton } from "@/components/common/ActionButton";
import { Reveal } from "@/components/common/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

const floatingCards = [
  { label: "+10 anos", detail: "de experiência" },
  { label: "Eventos", detail: "corporativos" },
  { label: "Casamentos", detail: "sob medida" },
  { label: "DJs", detail: "profissionais" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                Estrutura completa para eventos
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
                Som, iluminação e entretenimento que transformam eventos em{" "}
                <span className="text-primary">experiências inesquecíveis</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Oferecemos soluções completas em sonorização, iluminação, DJs e bandas para
                eventos corporativos, casamentos, festas, shows e apresentações — do projeto
                à montagem e operação no dia.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionButton size="lg" onClick={() => openWhatsApp()}>
                  <MessageCircle />
                  Solicitar orçamento
                </ActionButton>
                <ActionButton size="lg" variant="outline" asChild>
                  <a href="#servicos">
                    Conhecer serviços
                    <ArrowRight />
                  </a>
                </ActionButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elevated">
              <img
                src={heroImage}
                alt="Palco de evento com iluminação profissional e público"
                width={1200}
                height={1408}
                className="aspect-4/5 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:w-64 sm:grid-cols-1 sm:gap-3">
              {floatingCards.slice(0, 2).map((card) => (
                <div key={card.label} className="surface-card px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-sm font-semibold">{card.label}</p>
                  <p className="text-xs text-muted-foreground">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:absolute sm:-top-6 sm:-right-6 sm:mt-0 sm:w-56 sm:grid-cols-1">
              {floatingCards.slice(2).map((card) => (
                <div key={card.label} className="surface-card px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-sm font-semibold">{card.label}</p>
                  <p className="text-xs text-muted-foreground">{card.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
