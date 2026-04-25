import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Clock,
  HandCoins,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Scale,
  ExternalLink,
  FileSearch,
  UserCheck,
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
      <Beneficios />
      <Problema />
      <Juridica />
      <ComoFunciona />
      <AreaCliente />
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
    <section className="relative overflow-hidden bg-gradient-hero text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(oklch(1_0_0/0.3)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.3)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-16 md:py-28 lg:px-8">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Tema 1.113 — STJ
          </span>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Recupere o excesso pago no <span className="text-gradient-gold">ITBI</span> sobre seu imóvel em São Paulo.
          </h1>
          <p className="max-w-[52ch] text-base leading-relaxed text-white/75 sm:text-lg">
            A base de cálculo do ITBI não pode ser vinculada ao valor venal
            de referência da Prefeitura. O STJ já decidiu: você tem direito
            à restituição do que foi pago a maior.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <WhatsAppCTA size="lg" />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Análise do caso 100% gratuita
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Honorários somente no êxito
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Resposta pelo WhatsApp
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.6)] backdrop-blur">
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-gradient-navy p-10 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                <Clock className="h-5 w-5 text-gold" />
              </span>
              <p className="mt-5 font-serif text-[88px] font-semibold leading-none tracking-tight text-gold">
                5
              </p>
              <p className="mt-5 max-w-[32ch] font-serif text-[20px] leading-snug text-white">
                Comprou imóvel nos últimos 5 anos?
              </p>
              <p className="mt-3 max-w-[32ch] font-sans text-[13px] leading-relaxed text-white/70">
                O prazo para buscar a restituição do ITBI pago a maior é de
                até 5 anos a contar do pagamento.
              </p>
              <div className="mt-8 grid w-full grid-cols-2 gap-4 border-t border-white/10 pt-6 text-left">
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-gold/80">
                    Duração média
                  </p>
                  <p className="mt-1.5 font-sans text-xl font-semibold tracking-tight text-white">
                    ~10 meses
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-gold/80">
                    Honorários
                  </p>
                  <p className="mt-1.5 font-sans text-xl font-semibold tracking-tight text-white">
                    Somente no êxito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */
function Beneficios() {
  const items = [
    {
      icon: BadgeCheck,
      title: "Análise gratuita",
      desc: "A avaliação inicial do seu caso é feita sem qualquer custo ou compromisso.",
    },
    {
      icon: CalendarClock,
      title: "Cerca de 10 meses",
      desc: "Tempo médio estimado de tramitação do processo judicial até a sentença.",
    },
    {
      icon: HandCoins,
      title: "Honorários de êxito",
      desc: "Você só paga honorários se o processo for ganho — sem risco financeiro inicial.",
    },
  ];
  return (
    <section className="relative -mt-10 px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-4 rounded-2xl border border-border bg-card p-6 shadow-elegant sm:grid-cols-3 sm:p-8">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4 sm:flex-col sm:gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy ring-1 ring-navy/10">
              <Icon className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-navy">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
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
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Entenda</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Por que tantos contribuintes pagaram a mais
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-elegant transition hover:-translate-y-0.5 hover:shadow-gold-glow"
            >
              <div className="absolute right-0 top-0 h-16 w-16 bg-radial-gold opacity-60" />
              <div className="relative">
                <div className="h-px w-10 bg-gold" />
                <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
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
    <section className="border-b border-border bg-gradient-soft py-20 sm:py-24">
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
          <div className="mt-7 flex items-center gap-3 rounded-lg border border-gold-soft bg-gold/10 px-4 py-3 text-sm text-navy">
            <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
            <span>Tese vinculante consolidada pelo Superior Tribunal de Justiça.</span>
          </div>
        </div>
        <ul className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-elegant">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 border-b border-border pb-4 text-sm leading-relaxed text-navy last:border-b-0 last:pb-0 sm:text-base"
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

/* ---------- COMO FUNCIONA ---------- */
function ComoFunciona() {
  const steps = [
    {
      n: "01",
      title: "Análise documental",
      desc: "Avaliamos a guia de ITBI, escritura e valor real da transação para apurar o valor exato a recuperar.",
    },
    {
      n: "02",
      title: "Ação judicial",
      desc: "Ingressamos com a ação de repetição de indébito. Tramitação média de cerca de 10 meses.",
    },
    {
      n: "03",
      title: "Honorários somente no êxito",
      desc: "Você não paga honorários iniciais — eles incidem apenas em caso de êxito no processo.",
    },
  ];
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Como funciona</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Um processo simples, transparente e sem risco financeiro
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-xl border border-border bg-card p-6 shadow-elegant"
            >
              <p className="font-serif text-3xl text-gold/80">{s.n}</p>
              <h3 className="mt-3 font-serif text-base font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-secondary/50 px-5 py-4 text-center text-xs leading-relaxed text-muted-foreground">
          O tempo de tramitação é uma estimativa baseada na média de processos
          similares e pode variar conforme o caso concreto e o trâmite judicial.
        </p>
      </div>
    </section>
  );
}

/* ---------- TRANSPARÊNCIA ---------- */
function AreaCliente() {
  const cards = [
    {
      icon: FileSearch,
      eyebrow: "Mais de 50 processos ativos na capital",
      title: "Veja nossos processos de ITBI no TJSP",
      desc: "Acesse a consulta pública do Tribunal de Justiça de São Paulo e visualize, neste exato momento, todos os processos de restituição de ITBI conduzidos pelo escritório na capital — vinculados diretamente à OAB nº 406.256.",
      cta: "Ver processos no e-SAJ TJSP",
      href: "https://esaj.tjsp.jus.br/cpopg/search.do?conversationId=&cbPesquisa=NUMOAB&dadosConsulta.valorConsulta=406256&cdForo=53",
    },
    {
      icon: UserCheck,
      eyebrow: "Registro profissional",
      title: "Verifique a inscrição na OAB/SP",
      desc: "Confirme a regularidade da inscrição do Dr. Thiago Alves Pires diretamente no site oficial da Ordem dos Advogados do Brasil — Seção São Paulo, sob o nº 406.256.",
      cta: "Consultar OAB nº 406.256",
      href: "https://www2.oabsp.org.br/asp/consultainscritos/consulta01.asp",
    },
  ];
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Transparência
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Confira nossa atuação real em canais oficiais
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Consulte a idoneidade do nosso escritório. Atualmente conduzimos
            mais de 50 processos ativos de restituição de ITBI na capital
            paulista, todos públicos no TJSP. Verifique também o registro
            profissional do advogado responsável diretamente no site da
            OAB/SP.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map(({ icon: Icon, eyebrow, title, desc, cta, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 shadow-elegant transition hover:-translate-y-0.5 hover:shadow-gold-glow"
            >
              <div className="absolute right-0 top-0 h-20 w-20 bg-radial-gold opacity-60" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 ring-1 ring-navy/10">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <p className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {eyebrow}
              </p>
              <h3 className="relative mt-2 font-serif text-xl font-semibold text-navy">
                {title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-gold">
                {cta}
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Links direcionam aos portais oficiais do Tribunal de Justiça de São
          Paulo e da Ordem dos Advogados do Brasil — Seção São Paulo.
        </p>
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