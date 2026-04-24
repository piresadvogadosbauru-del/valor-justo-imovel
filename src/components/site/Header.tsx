import { Scale } from "lucide-react";

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
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#problema" className="transition-colors hover:text-navy">O Problema</a>
          <a href="#stj" className="transition-colors hover:text-navy">Tema 1.113/STJ</a>
          <a href="#calculo" className="transition-colors hover:text-navy">Cálculo</a>
          <a href="#faq" className="transition-colors hover:text-navy">FAQ</a>
        </nav>
        <a
          href="#analise"
          className="hidden h-10 items-center justify-center rounded-md bg-gold px-5 text-sm font-semibold text-gold-foreground shadow-gold-glow transition hover:brightness-105 sm:inline-flex"
        >
          Analisar meu caso
        </a>
      </div>
    </header>
  );
}