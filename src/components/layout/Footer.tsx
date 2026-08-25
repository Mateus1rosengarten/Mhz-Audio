import { Instagram, Mail, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { navLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="grid justify-items-center gap-12 text-center md:grid-cols-3 md:justify-items-start md:text-left">
          {/* Sobre */}
          <div className="max-w-xs">
            <Logo />

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Som, iluminação, DJs e bandas com estrutura completa para eventos em Curitiba e
              arredores
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Links rápidos</h3>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Contato</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 transition-colors hover:text-foreground md:justify-start"
                >
                  <Phone className="size-4 text-primary" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 transition-colors hover:text-foreground md:justify-start"
                >
                  <Instagram className="size-4 text-primary" />
                  {siteConfig.instagramHandle}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center gap-2 transition-colors hover:text-foreground md:justify-start"
                >
                  <Mail className="size-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
