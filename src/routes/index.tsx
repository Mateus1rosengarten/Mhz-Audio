import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Gallery } from "@/components/sections/Gallery";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

const title = "Lumen Áudio & Luz | Som, Iluminação, DJs e Bandas para Eventos";
const description =
  "Locação de som, iluminação, DJs e bandas para eventos corporativos, casamentos, festas e shows. Estrutura completa e orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
