export function DeveloperCredit() {
  const message = encodeURIComponent(
    "Olá! Vi um site desenvolvido por você e gostaria de saber mais sobre seus serviços.",
  );

  const whatsAppDeveloper = "5547999933969";

  return (
    <a
      href={`https://wa.me/${whatsAppDeveloper}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      Desenvolvido por
      <span className="font-medium text-foreground">MR</span>
    </a>
  );
}
