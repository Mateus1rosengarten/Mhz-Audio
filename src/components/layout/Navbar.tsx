import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { ActionButton } from "@/components/common/ActionButton";
import { navLinks } from "@/config/site";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "glass-nav" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ActionButton onClick={() => openWhatsApp()}>
            <MessageCircle />
            Solicitar Orçamento
          </ActionButton>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {isMenuOpen ? (
        <Container className="pb-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <ActionButton className="mt-3 w-full" onClick={() => openWhatsApp()}>
              <MessageCircle />
              Solicitar Orçamento
            </ActionButton>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
