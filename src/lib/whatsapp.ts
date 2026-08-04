import { siteConfig } from "@/config/site";

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
};

const formatDate = (isoDate: string) => {
  if (!isoDate) return "A definir";
  const [year, month, day] = isoDate.split("-");
  return day && month && year ? `${day}/${month}/${year}` : isoDate;
};

export const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const defaultQuoteMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu evento.";

export const buildQuoteMessage = (data: QuoteRequest) =>
  [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `Email: ${data.email || "Não informado"}`,
    `Tipo de evento: ${data.eventType}`,
    `Data: ${formatDate(data.eventDate)}`,
    `Mensagem: ${data.message || "—"}`,
  ].join("\n");

export const openWhatsApp = (text: string = defaultQuoteMessage) => {
  window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
};
