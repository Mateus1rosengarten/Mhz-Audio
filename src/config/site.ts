/**
 * Single source of truth for company data, navigation and contact channels.
 */

export const siteConfig = {
  name: "Lumen Áudio & Luz",
  shortName: "Lumen",
  tagline: "Estrutura completa para eventos",
  description:
    "Locação de som, iluminação, DJs e bandas para eventos corporativos, casamentos, festas e shows.",
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  email: "contato@lumeneventos.com.br",
  instagram: "https://instagram.com/lumeneventos",
  instagramHandle: "@lumeneventos",
  address: "Av. Paulista, 1000 — Bela Vista, São Paulo — SP",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av.+Paulista+1000,+S%C3%A3o+Paulo&output=embed",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const eventTypes = [
  "Evento corporativo",
  "Casamento",
  "Festa / Aniversário",
  "Show / Apresentação",
  "Formatura",
  "Outro",
] as const;
