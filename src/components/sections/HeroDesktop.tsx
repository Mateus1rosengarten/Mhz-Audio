import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";
import { ActionButton } from "@/components/common/ActionButton";
import { Reveal } from "@/components/common/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function HeroDesktop() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden pt-32 pb-12 sm:pt-40">
      <div className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <div className="absolute left-0 bottom-0 z-0 h-[620px] w-[48%] overflow-hidden rounded-r-[40px]">
        <img
          src={heroImage}
          alt="Palco de evento com iluminação profissional e público"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 ml-auto w-[62%] pr-2 sm:pr-10 lg:pr-16">
        <div className="max-w-[1100px]">
          <Reveal delay={80}>
            <h1 className="ml-auto max-w-[650px] text-left text-4xl leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl">
              Você sabia que <span className="text-primary">som</span>,{" "}
              <span className="text-primary">iluminação</span> e{" "}
              <span className="text-primary">música</span> são alguns dos elementos mais marcantes
              de todo evento?
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="ml-auto mt-7 max-w-[650px] text-base leading-relaxed text-muted-foreground sm:text-xl">
              Oferecemos soluções completas em sonorização, iluminação, DJs e bandas para eventos
              corporativos, casamentos, festas e shows.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-6 sm:gap-3">
              <ActionButton
                size="lg"
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
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
      </div>
    </section>
  );
}
