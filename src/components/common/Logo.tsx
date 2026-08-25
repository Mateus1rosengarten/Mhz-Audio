import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("flex items-center", className)}>
      <img src={logo} alt="Logo" className="h-30" />
    </a>
  );
}
