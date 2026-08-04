import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-brand hover:bg-primary-hover hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary hover:bg-surface",
        ghost: "text-muted-foreground hover:text-foreground",
        light:
          "bg-background text-foreground hover:bg-surface-elevated hover:-translate-y-0.5 shadow-elevated",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof actionButtonVariants> & { asChild?: boolean };

export function ActionButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ActionButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(actionButtonVariants({ variant, size }), className)} {...props} />
  );
}

export { actionButtonVariants };
