import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function Reveal({ children, className, delay = 0, as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", isVisible && "reveal-visible", className)}
    >
      {children}
    </Tag>
  );
}
