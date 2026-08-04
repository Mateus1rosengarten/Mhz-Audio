import { MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ActionButton } from "@/components/common/ActionButton";
import { Reveal } from "@/components/common/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function CallToAction() {
  return (
    <section className="py-8">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
              Vamos tornar seu evento inesquecível?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Conte o formato, a data e o local. Em poucos minutos preparamos uma proposta
              completa de som, iluminação e entretenimento.
            </p>
            <ActionButton
              size="lg"
              variant="light"
              className="mt-9"
              onClick={() => openWhatsApp()}
            >
              <MessageCircle />
              Solicitar orçamento via WhatsApp
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
