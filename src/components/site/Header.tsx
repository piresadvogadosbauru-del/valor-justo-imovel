import { MessageCircle, Scale } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsappFab";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-gold">
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-serif text-base font-semibold text-navy">Pires Advogados</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Revisão de ITBI · São Paulo</p>
          </div>
        </a>
        <p className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground md:block">OAB/SP 406.256</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[oklch(0.62_0.18_148)] px-4 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_oklch(0.62_0.18_148/0.6)] transition hover:brightness-105 sm:px-5"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Falar pelo WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}