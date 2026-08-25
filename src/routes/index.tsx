import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

const title = "Mhz Audio| Som, Iluminação, DJs e Bandas para Eventos em Curitiba e região";
const description =
  "Locação de equipamento de som, iluminação, DJs e bandas para eventos , casamentos, festas e shows. Curitiba e Reigão";

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
        <Services />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
