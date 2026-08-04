import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { z } from "zod";
import { ActionButton } from "@/components/common/ActionButton";
import { eventTypes } from "@/config/site";
import { buildQuoteMessage, openWhatsApp, type QuoteRequest } from "@/lib/whatsapp";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "WhatsApp inválido"),
  email: z
    .string()
    .trim()
    .max(255, "Email muito longo")
    .email("Email inválido")
    .or(z.literal("")),
  eventType: z.string().trim().min(1, "Selecione o tipo de evento"),
  eventDate: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().max(1000, "Mensagem muito longa"),
});

const initialValues: QuoteRequest = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  message: "",
};

const fieldClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function ContactForm() {
  const [values, setValues] = useState<QuoteRequest>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequest, string>>>({});

  const setField = (field: keyof QuoteRequest, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = quoteSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof QuoteRequest, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof QuoteRequest;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    openWhatsApp(buildQuoteMessage({ ...values, ...result.data }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" error={errors.name}>
          <input
            className={fieldClass}
            placeholder="Seu nome completo"
            maxLength={100}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
          />
        </Field>

        <Field label="WhatsApp" error={errors.phone}>
          <input
            className={fieldClass}
            placeholder="(11) 99999-9999"
            inputMode="tel"
            maxLength={20}
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            className={fieldClass}
            placeholder="voce@email.com"
            type="email"
            maxLength={255}
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
          />
        </Field>

        <Field label="Tipo de evento" error={errors.eventType}>
          <select
            className={fieldClass}
            value={values.eventType}
            onChange={(e) => setField("eventType", e.target.value)}
          >
            <option value="">Selecione</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Data do evento" error={errors.eventDate} className="sm:col-span-2">
          <input
            className={fieldClass}
            type="date"
            value={values.eventDate}
            onChange={(e) => setField("eventDate", e.target.value)}
          />
        </Field>

        <Field label="Mensagem" error={errors.message} className="sm:col-span-2">
          <textarea
            className={`${fieldClass} h-32 resize-none py-3`}
            placeholder="Conte um pouco sobre o seu evento, local e número de convidados."
            maxLength={1000}
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
          />
        </Field>
      </div>

      <ActionButton type="submit" size="lg" className="mt-6 w-full">
        <MessageCircle />
        Enviar pelo WhatsApp
      </ActionButton>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Ao enviar, abriremos o WhatsApp com a sua mensagem já preenchida.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
