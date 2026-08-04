import { AudioLines } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("group flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary-hover">
        <AudioLines className="size-4.5" />
      </span>
      <span className="font-display text-base leading-none font-semibold tracking-tight">
        {siteConfig.shortName}
        <span className="block text-[0.625rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Áudio &amp; Luz
        </span>
      </span>
    </a>
  );
}
