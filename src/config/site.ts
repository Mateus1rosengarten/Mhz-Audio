export const siteConfig = {
  name: "MHZ Soluções de áudio",
  shortName: "MHZ",
  tagline: "Estrutura completa para eventos",
  description:
    "Locação de som, iluminação, DJs e bandas para eventos corporativos, casamentos, festas e shows.",
  whatsappNumber: "554198277760",
  whatsappDisplay: "(41) 9827-7760",
  email: "contatomhzaudio@gmail.com",
  instagram: "https://instagram.com/mhz.solucoes",
  instagramHandle: "@mhz.solucoes",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
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
