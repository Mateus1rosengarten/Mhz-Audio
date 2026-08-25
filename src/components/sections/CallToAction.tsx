import { MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ActionButton } from "@/components/common/ActionButton";
import { Reveal } from "@/components/common/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function CallToAction() {
  return (
    <section>
      <Container className="!px-0 ">
        <Reveal>
          <div className="overflow-hidden flex flex-col rounded-xl bg-linear-to-r from-primary/60 via-[#4F7FF5] to-button/60 px-8 py-16 text-center sm:px-16 sm:py-20">
            {" "}
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-balance text-primary-foreground sm:text-4xl ">
              Vamos tornar seu evento{" "}
              <span className="text-background font-extrabold underline"> inesquecível?</span>
            </h2>
            <div className="flex flex-col gap-8 mx-auto mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              <p className="text-center sm:text-left">
                {" "}
                Conte o formato, a data e o local. Em poucos minutos preparamos uma proposta
                completa.
              </p>

              <p className="text-center font-bold text-base sm:text-xl">
                {" "}
                Cuide do que realmente importa para você e deixe tudo isso por nossa conta.
              </p>
            </div>
            <div className="mt-9 flex justify-center">
              <ActionButton
                size="lg"
                variant="light"
                className="w-fit px-5 text-sm sm:w-1/2 sm:px-6 sm:text-base"
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <MessageCircle />
                Solicitar orçamento via WhatsApp
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
