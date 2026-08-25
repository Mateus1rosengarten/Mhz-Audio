import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";
import { ActionButton } from "@/components/common/ActionButton";
import { Reveal } from "@/components/common/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function HeroMobile() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden pt-24 pb-12">
      {/* Imagem */}
      <div className="absolute inset-x-0 top-0 h-[430px]">
        <img
          src={heroImage}
          alt="Palco de evento com iluminação profissional e público"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/20 to-background" />
      </div>

      {/* Glow */}
      <div className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-[400px]" />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-[700px] flex-col justify-end px-6 mt-12">
        <div className="w-full">
          <Reveal delay={80}>
            <h1 className="max-w-xl text-3xl leading-[1.08] font-semibold tracking-tight text-balance text-center">
              Você sabia que <span className="text-primary font-bold">som</span>,{" "}
              <span className="text-primary font-bold">iluminação</span> e{" "}
              <span className="text-primary font-bold">música</span> são alguns dos elementos mais
              marcantes de todo evento?
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-center">
              Oferecemos soluções completas em sonorização, iluminação, DJs e bandas para eventos
              corporativos, casamentos, festas e shows.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3">
              <ActionButton
                size="lg"
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="w-full"
              >
                <MessageCircle />
                Solicitar orçamento
              </ActionButton>

              <ActionButton size="lg" variant="outline" asChild className="w-full">
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
