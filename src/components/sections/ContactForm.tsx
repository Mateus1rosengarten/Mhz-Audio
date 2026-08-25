import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { z } from "zod";
import { ActionButton } from "@/components/common/ActionButton";
import { eventTypes } from "@/config/site";
import { buildQuoteMessage, openWhatsApp, type QuoteRequest } from "@/lib/whatsapp";

const brazilianPhoneRegex = /^(?:\+55\s?)?(?:\(?([1-9]{2})\)?\s?)(?:9\d{4}|\d{4})-?\d{4}$/;

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  phone: z
    .string()
    .trim()
    .regex(brazilianPhoneRegex, "Informe um WhatsApp brasileiro válido")
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "WhatsApp inválido"),
  email: z.string().trim().max(255, "Email muito longo").email("Email inválido").or(z.literal("")),
  eventType: z.string().trim().min(1, "Selecione o tipo de evento"),
  eventDate: z
    .string()
    .trim()
    .min(1, "Informe a data do evento")
    .refine((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const eventDate = new Date(`${value}T00:00:00`);

      return eventDate >= today;
    }, "A data do evento não pode ser anterior a hoje")
    .refine((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const maxDate = new Date(today);
      maxDate.setFullYear(maxDate.getFullYear() + 5);

      const eventDate = new Date(`${value}T00:00:00`);

      return eventDate <= maxDate;
    }, "A data do evento não pode ser superior a 5 anos"),
  eventLocation: z.string().trim().max(200, "Local muito longo").optional().default(""),
  message: z.string().trim().max(1000, "Mensagem muito longa"),
});

const initialValues: QuoteRequest = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  eventLocation: "",
  message: "",
};

const fieldClass =
  "h-12 w-full  border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

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

  function formatBrazilianPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) {
      return digits.length ? `(${digits}` : "";
    }

    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="!bg-surface/40 surface-card p-6 sm:p-8 rounded-lg "
    >
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
            placeholder="(41) 99999-9999"
            inputMode="tel"
            maxLength={20}
            value={values.phone}
            onChange={(e) => setField("phone", formatBrazilianPhone(e.target.value))}
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

        <Field label="Data do evento" error={errors.eventDate}>
          <input
            className={fieldClass}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() + 5))
                .toISOString()
                .split("T")[0]
            }
            value={values.eventDate}
            onChange={(e) => setField("eventDate", e.target.value)}
          />
        </Field>

        <Field label="Local do evento" error={errors.eventLocation}>
          <input
            className={fieldClass}
            placeholder="Cidade ou endereço do evento"
            maxLength={200}
            value={values.eventLocation}
            onChange={(e) => setField("eventLocation", e.target.value)}
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

      <ActionButton type="submit" size="lg" className="mt-6 w-full sm:w-1/4">
        <MessageCircle />
        Enviar pelo WhatsApp
      </ActionButton>
      <p className="mt-4 sm:mt-3 text-center text-xs text-muted-foreground">
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
