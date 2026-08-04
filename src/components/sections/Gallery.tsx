import djImage from "@/assets/gallery-dj.jpg";
import weddingImage from "@/assets/gallery-wedding.jpg";
import corporateImage from "@/assets/gallery-corporate.jpg";
import audioImage from "@/assets/gallery-audio.jpg";
import bandImage from "@/assets/gallery-band.jpg";
import lightingImage from "@/assets/gallery-lighting.jpg";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

type GalleryItem = { src: string; alt: string; className?: string };

const galleryItems: GalleryItem[] = [
  { src: djImage, alt: "DJ profissional em festa", className: "sm:col-span-2" },
  { src: weddingImage, alt: "Recepção de casamento iluminada" },
  { src: corporateImage, alt: "Palco de evento corporativo" },
  { src: bandImage, alt: "Banda tocando ao vivo no palco" },
  { src: lightingImage, alt: "Sistema de iluminação cênica" },
  { src: audioImage, alt: "Mesa de som profissional", className: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <Section className="bg-surface/30">
      <Reveal>
        <SectionHeading
          eyebrow="Galeria"
          title="Eventos que ganharam vida com a nossa estrutura"
        />
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Reveal
            key={item.alt}
            delay={index * 60}
            className={cn(
              "group overflow-hidden rounded-2xl border border-border",
              item.className,
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={900}
              height={900}
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
