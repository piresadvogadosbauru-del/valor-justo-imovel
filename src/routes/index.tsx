import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  MessageCircle,
  Scale,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { WhatsappFab, WHATSAPP_URL } from "@/components/site/WhatsappFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restituição de ITBI em São Paulo | Pires Advogados" },
      {
        name: "description",
        content:
          "Pagou ITBI a maior na compra de imóvel em São Paulo? Análise via WhatsApp com base no Tema 1.113 do STJ.",
      },
      {
        name: "keywords",
        content:
          "restituição de ITBI São Paulo, revisão de ITBI, ITBI pago a maior, valor venal de referência, ação de repetição de indébito ITBI, advogado tributário ITBI São Paulo, Tema 1113 STJ ITBI",
      },
      { property: "og:title", content: "Restituição de ITBI em São Paulo | Tema 1.113/STJ" },
      {
        property: "og:description",
        content:
          "Verifique pelo WhatsApp se você tem direito à restituição do ITBI cobrado a maior pela Prefeitura de São Paulo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ---------- WHATSAPP CTA ---------- */
function WhatsAppCTA({
  label = "Falar com Dr. Thiago no WhatsApp",
  size = "md",
}: {
  label?: string;
  size?: "md" | "lg";
}) {
  const sizeClasses =
    size === "lg"
      ? "px-10 py-5 text-base"
      : "px-8 py-4 text-sm sm:text-base";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-sm bg-[oklch(0.62_0.18_148)] font-semibold text-white shadow-[0_10px_30px_-12px_oklch(0.62_0.18_148/0.6)] transition hover:brightness-105 ${sizeClasses}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Problema />
      <Juridica />
      <Prazo />
      <Escritorio />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsappFab />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-8">
        <div className="space-y-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Tema 1.113 — STJ
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl">
            Recupere o excesso pago no ITBI sobre seu imóvel em São Paulo.
          </h1>
          <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            A base de cálculo do ITBI não pode ser vinculada ao valor venal
            de referência da Prefeitura. O STJ já decidiu: você pode ter
            direito à restituição do que foi pago a maior.
          </p>
          <div className="pt-2">
            <WhatsAppCTA />
          </div>
          <p className="text-xs text-muted-foreground">
            Análise inicial sem custo · Resposta direta pelo WhatsApp
          </p>
        </div>
        <div className="bg-secondary/40 p-3">
          <div className="flex h-full flex-col items-center justify-center bg-gradient-navy p-10 text-center text-navy-foreground">
            <p className="font-serif text-7xl text-gold">5</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-gold/90">
              Anos para ingressar
            </p>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-white/80">
              O prazo prescricional para buscar a restituição do ITBI pago
              a maior é de até 5 anos a contar do pagamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  const items = [
    {
      title: "Base de cálculo",
      desc: "A Justiça reconhece que o uso isolado do valor venal de referência pela Prefeitura de São Paulo é questionável.",
    },
    {
      title: "Tema 1.113 do STJ",
      desc: "A tese do Superior Tribunal de Justiça é vinculante e oferece segurança jurídica para discutir a cobrança.",
    },
    {
      title: "Restituição do indébito",
      desc: "É possível pedir a devolução da diferença paga a maior, com correção monetária desde o recolhimento.",
    },
  ];
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-3 lg:px-8">
        {items.map((it) => (
          <div key={it.title} className="border-t border-navy pt-6">
            <h3 className="font-serif text-lg font-semibold text-navy">
              {it.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- JURÍDICA ---------- */
function Juridica() {
  const points = [
    "O valor declarado pelo contribuinte presume-se verdadeiro",
    "O Município não pode arbitrar automaticamente outro valor",
    "A cobrança maior pode ser questionada judicialmente",
    "O contribuinte pode pedir a restituição do valor pago indevidamente",
  ];
  return (
    <section className="border-b border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Fundamentação
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            O entendimento do STJ protege o contribuinte
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            No Tema 1.113, o STJ consolidou que a base de cálculo do ITBI
            deve partir do valor da transação declarada pelo contribuinte,
            que tem presunção de boa-fé. O Município só pode afastá-lo
            mediante procedimento administrativo próprio, com contraditório
            e fundamentação técnica.
          </p>
        </div>
        <ul className="space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 border-t border-navy/20 pt-4 text-sm leading-relaxed text-navy sm:text-base"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- PRAZO ---------- */
function Prazo() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Clock className="mx-auto h-8 w-8 text-gold" />
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Atenção ao prazo
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
          O prazo para pedir a restituição é curto
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          O direito de pedir restituição tributária possui prazo
          prescricional, em regra contado do pagamento. Se o seu ITBI foi
          pago há menos de 5 anos, fale com um advogado especialista hoje
          mesmo para verificar a viabilidade do seu caso.
        </p>
        <div className="mt-8">
          <WhatsAppCTA label="Verificar o prazo do meu caso" />
        </div>
      </div>
    </section>
  );
}

/* ---------- ESCRITÓRIO ---------- */
function Escritorio() {
  return (
    <section className="bg-gradient-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Quem atende
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Análise técnica especializada
        </h2>
        <p className="mx-auto mt-5 max-w-[55ch] leading-relaxed text-white/75">
          Conduzido pelo Dr. Thiago Alves Pires, o escritório Pires
          Advogados combina a precisão técnica necessária para questões
          tributárias imobiliárias com a celeridade que o seu patrimônio
          exige.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y border-white/10 py-6 text-sm">
          <span className="font-serif text-base">Thiago Alves Pires</span>
          <span className="text-white/40">·</span>
          <span className="text-gold">OAB/SP 406.256</span>
          <span className="text-white/40">·</span>
          <span className="text-white/75">São Paulo/SP</span>
        </div>
        <div className="mt-10">
          <WhatsAppCTA label="Consultar meu caso agora" size="lg" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Todo pagamento de ITBI gera direito à restituição?",
      a: "Não. É necessário verificar se o imposto foi calculado sobre base superior à devida e se houve cobrança sem procedimento administrativo adequado.",
    },
    {
      q: "Preciso ter comprado imóvel recentemente?",
      a: "A data do pagamento é importante para análise do prazo prescricional, em regra de até 5 anos. Cada caso deve ser avaliado individualmente.",
    },
    {
      q: "Posso pedir restituição mesmo já tendo registrado o imóvel?",
      a: "Sim, o registro do imóvel não impede a discussão sobre eventual pagamento indevido do ITBI.",
    },
    {
      q: "A ação é contra quem?",
      a: "Em regra, contra o Município de São Paulo, quando a cobrança do ITBI tiver sido feita de forma indevida.",
    },
  ];
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Perguntas e respostas
          </h2>
        </div>
        <div className="mt-10 divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left">
                <span className="font-serif text-base font-medium text-navy sm:text-lg">
                  {f.q}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */
function CTAFinal() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
          Não perca a chance de reaver o que foi pago a maior.
        </h2>
        <p className="mx-auto mt-5 max-w-[50ch] text-base leading-relaxed text-muted-foreground">
          Envie uma mensagem direta pelo WhatsApp. Em até 1 dia útil você
          recebe uma análise inicial do seu caso, sem compromisso.
        </p>
        <div className="mt-10">
          <WhatsAppCTA label="Falar com um especialista agora" size="lg" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-gold">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif text-base font-semibold">Pires Advogados</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-gold/80">
                Thiago Alves Pires · OAB/SP 406.256
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            WhatsApp (14) 99804-0911
          </a>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/50">
          <p>
            Conteúdo informativo conforme Provimento 205/2021 OAB. As
            informações desta página não garantem resultado judicial; cada
            caso depende de análise documental e jurídica específica.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Pires Advogados · São Paulo/SP
          </p>
        </div>
      </div>
    </footer>
  );
}