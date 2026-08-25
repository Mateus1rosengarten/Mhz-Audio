import { siteConfig } from "@/config/site";

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  message: string;
};

const formatEventDate = (isoDate: string) => {
  if (!isoDate) return "A definir";
  const [year, month, day] = isoDate.split("-");
  return day && month && year ? `${day}/${month}/${year}` : isoDate;
};

export const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const defaultQuoteMessage = "Olá! Gostaria de solicitar um orçamento para o meu evento.";
export const defaultContactMessage =
  "Olá, tudo bem? Tenho uma dúvida e gostaria de falar com alguém da equipe.";

export function buildQuoteMessage(data: QuoteRequest) {
  return `*Olá! Gostaria de solicitar um orçamento.*

*Nome:* ${data.name}
*WhatsApp:* ${data.phone}${data.email ? `\n*Email:* ${data.email}` : ""}

*Tipo de evento:* ${data.eventType}${data.eventDate ? `\n*Data:* ${formatEventDate(data.eventDate)}` : ""}${data.eventLocation ? `\n*Local:* ${data.eventLocation}` : ""}

*Mensagem:*

${data.message}`;
}
export const openWhatsApp = (text = defaultQuoteMessage) => {
  window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
};
