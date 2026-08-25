import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
  containerClassName?: string | undefined;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-22 sm:py-16", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
  align?: "left" | "center";
  className?: string | undefined;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 sm:text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
