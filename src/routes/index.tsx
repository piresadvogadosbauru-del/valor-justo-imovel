import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Gavel,
  Landmark,
  MessageCircle,
  Receipt,
  Scale,
  ShieldCheck,
  Sparkles,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { LeadForm } from "@/components/site/LeadForm";
import { WhatsappFab, WHATSAPP_URL } from "@/components/site/WhatsappFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restituição de ITBI em São Paulo | Revisão e Repetição de Indébito" },
      {
        name: "description",
        content:
          "Pagou ITBI a maior na compra de imóvel em São Paulo? Análise jurídica especializada em revisão e restituição de ITBI com base no Tema 1.113 do STJ.",
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
          "Verifique se você tem direito à restituição do ITBI cobrado a maior pela Prefeitura de São Paulo. Análise inicial gratuita.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Problema />
      <Juridica />
      <QuemTemDireito />
      <Calculo />
      <Documentos />
      <Prazo />
      <Escritorio />
      <Beneficios />
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
    <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="bg-radial-gold absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-24">
        <div className="reveal lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Tema 1.113 — STJ
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
            Você pagou ITBI a maior na compra de imóvel em <span className="text-gradient-gold">São Paulo</span>?
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            A Prefeitura não pode exigir ITBI com base em valor arbitrado unilateralmente, sem respeitar o valor real
            da transação e sem instaurar procedimento administrativo próprio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href="#analise">Verificar meu direito à restituição</a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-navy"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Falar pelo WhatsApp
              </a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left">
            {[
              { k: "STJ", v: "Tema 1.113" },
              { k: "Atuação", v: "São Paulo/SP" },
              { k: "Análise", v: "Gratuita" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-gold/80">{s.k}</dt>
                <dd className="mt-1 font-serif text-base text-white">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div id="analise" className="reveal lg:col-span-5">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Scale, label: "Tema 1.113/STJ" },
    { icon: ShieldCheck, label: "Sigilo profissional" },
    { icon: FileText, label: "Petição fundamentada" },
    { icon: Landmark, label: "Município de São Paulo" },
  ];
  return (
    <div className="border-b border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
            <Icon className="h-4 w-4 text-gold" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ eyebrow, title, description, center = false }: { eyebrow: string; title: React.ReactNode; description?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  const cards = [
    { icon: Receipt, title: "ITBI sobre valor maior que o da escritura", desc: "Cobrança calculada acima do preço efetivamente pago e declarado pelo contribuinte." },
    { icon: Building2, title: "Valor venal de referência ou avaliação unilateral", desc: "Município utiliza tabela própria sem considerar a operação concreta." },
    { icon: Gavel, title: "Sem procedimento administrativo individualizado", desc: "Ausência de contraditório, ampla defesa e fundamentação técnica adequada." },
    { icon: Sparkles, title: "Possibilidade de restituição da diferença", desc: "Direito de pedir de volta o valor pago a maior, com atualização monetária." },
  ];
  return (
    <section id="problema" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="O Problema"
          title="Muitos contribuintes pagaram ITBI sobre uma base maior do que deveriam"
          description="Em diversas operações imobiliárias, o Município de São Paulo exigiu ITBI com base em valor superior ao efetivo valor da compra e venda, utilizando critérios próprios de avaliação que podem ter aumentado indevidamente o imposto pago."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-border bg-card p-6 shadow-elegant transition hover:-translate-y-1 hover:border-gold/40">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
    <section id="stj" className="relative overflow-hidden bg-gradient-navy py-20 text-navy-foreground sm:py-28">
      <div className="bg-radial-gold absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">STJ — Tema 1.113</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            O entendimento do STJ <span className="text-gradient-gold">protege o contribuinte</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            O Superior Tribunal de Justiça, no Tema 1.113, consolidou o entendimento de que a base de cálculo do ITBI
            deve partir do valor da transação declarada pelo contribuinte, que possui presunção de boa-fé. O Município
            somente pode afastar esse valor se instaurar procedimento administrativo próprio, com contraditório, ampla
            defesa e fundamentação técnica.
          </p>
          <a
            href="#analise"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            Quero analisar meu caso <span aria-hidden>→</span>
          </a>
        </div>
        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm leading-relaxed text-white/90 sm:text-base">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- QUEM TEM DIREITO ---------- */
function QuemTemDireito() {
  const items = [
    "Comprou imóvel na cidade de São Paulo",
    "Pagou ITBI nos últimos anos",
    "O imposto foi calculado sobre valor superior ao preço da escritura ou contrato",
    "A Prefeitura utilizou valor venal de referência ou base própria",
    "Não houve processo administrativo antes da cobrança maior",
    "Possui guia de ITBI, escritura, contrato ou matrícula",
  ];
  return (
    <section className="border-b border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Elegibilidade" title="Quem pode ter direito à revisão?" center />
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-elegant">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold bg-gold/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
              </div>
              <span className="text-sm leading-relaxed text-navy">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CÁLCULO ---------- */
function Calculo() {
  const rows = [
    { k: "Valor da compra", v: "R$ 500.000,00" },
    { k: "Valor usado pela Prefeitura", v: "R$ 650.000,00" },
    { k: "Diferença de base", v: "R$ 150.000,00" },
    { k: "Alíquota aproximada do ITBI", v: "3%" },
  ];
  return (
    <section id="calculo" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Simulação"
            title="Como saber se houve pagamento a maior?"
            description="Compare o valor declarado da operação com o valor efetivamente utilizado pela Prefeitura para calcular o imposto."
          />
          <Button asChild variant="navy" size="xl" className="mt-8">
            <a href="#analise">Quero calcular minha restituição</a>
          </Button>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="flex items-center gap-3 border-b border-border bg-navy px-6 py-4 text-navy-foreground">
              <Calculator className="h-5 w-5 text-gold" />
              <p className="font-serif text-lg">Exemplo demonstrativo</p>
            </div>
            <div className="divide-y divide-border">
              {rows.map((r) => (
                <div key={r.k} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm text-muted-foreground">{r.k}</span>
                  <span className="font-mono text-sm font-medium text-navy sm:text-base">{r.v}</span>
                </div>
              ))}
              <div className="flex items-center justify-between bg-gold/10 px-6 py-5">
                <span className="font-serif text-base text-navy">Possível valor pago a maior</span>
                <span className="font-mono text-xl font-semibold text-navy">R$ 4.500,00</span>
              </div>
            </div>
            <p className="border-t border-border bg-secondary/60 px-6 py-3 text-xs italic text-muted-foreground">
              O valor final depende da análise dos documentos e da atualização monetária aplicável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCUMENTOS ---------- */
function Documentos() {
  const docs = [
    "Guia de recolhimento do ITBI",
    "Comprovante de pagamento",
    "Escritura pública ou contrato de compra e venda",
    "Matrícula do imóvel, se houver",
    "Dados do comprador",
    "Eventual comunicação ou avaliação da Prefeitura",
  ];
  return (
    <section className="border-b border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Próximos passos" title="Documentos necessários para análise" center />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, i) => (
            <div key={d} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-elegant">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy font-serif text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-navy">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRAZO ---------- */
function Prazo() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-card p-8 shadow-elegant sm:p-12">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gold" />
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Prescrição</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                Atenção ao prazo para pedir a restituição
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                O direito de pedir restituição tributária possui prazo prescricional, em regra contado do pagamento
                indevido. Por isso, é importante analisar a data do pagamento do ITBI para verificar se ainda há
                possibilidade de ajuizamento da ação.
              </p>
              <Button asChild variant="navy" className="mt-6">
                <a href="#analise">Verificar o prazo do meu caso</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ESCRITÓRIO ---------- */
function Escritorio() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-navy-foreground sm:py-28">
      <div className="bg-radial-gold absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Atendimento</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Atendimento jurídico especializado em revisão e restituição de ITBI
          </h2>
          <p className="mt-5 leading-relaxed text-white/75">
            Atuamos na análise documental, cálculo da diferença paga a maior, elaboração da ação judicial e
            acompanhamento completo do processo, com foco técnico e linguagem clara para o cliente.
          </p>
        </div>
        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:grid-cols-2">
          {[
            { k: "Escritório", v: "Pires Advogados" },
            { k: "Advogado responsável", v: "Thiago Alves Pires" },
            { k: "OAB/SP", v: "406.256" },
            { k: "Atuação", v: "São Paulo/SP e atendimento online" },
          ].map((i) => (
            <div key={i.k} className="rounded-lg border border-white/10 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80">{i.k}</p>
              <p className="mt-2 font-serif text-base text-white">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */
function Beneficios() {
  const items = [
    { icon: FileText, title: "Análise individualizada do caso" },
    { icon: Calculator, title: "Cálculo estimado da restituição" },
    { icon: Gavel, title: "Petição fundamentada no Tema 1.113/STJ" },
    { icon: MessageCircle, title: "Atendimento online" },
    { icon: ShieldCheck, title: "Acompanhamento do processo" },
    { icon: Sparkles, title: "Linguagem clara e objetiva para o cliente" },
  ];
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Benefícios" title="Por que contar com atuação especializada" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-elegant transition hover:border-gold/40">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-serif text-base text-navy">{title}</p>
            </div>
          ))}
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
      a: "A data do pagamento é importante para análise do prazo prescricional. Cada caso deve ser avaliado individualmente.",
    },
    {
      q: "Posso pedir restituição mesmo já tendo registrado o imóvel?",
      a: "Sim, o registro do imóvel não impede a discussão sobre eventual pagamento indevido do ITBI.",
    },
    {
      q: "A ação é contra quem?",
      a: "Em regra, contra o Município de São Paulo, quando a cobrança do ITBI tiver sido feita de forma indevida.",
    },
    {
      q: "Quanto posso receber de volta?",
      a: "Depende da diferença entre a base utilizada pela Prefeitura e a base correta, além da atualização monetária aplicável.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas e respostas" center />
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-secondary/60">
                <span className="font-serif text-base font-medium text-navy sm:text-lg">{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{f.a}</div>
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
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 text-center text-navy-foreground shadow-elegant sm:p-16">
          <div className="bg-radial-gold absolute inset-0 opacity-60" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Análise gratuita</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Descubra se você tem direito à <span className="text-gradient-gold">restituição do ITBI</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-white/75">
              Envie seus dados e documentos para uma análise inicial do seu caso.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#analise">Solicitar análise agora</a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold">Pires Advogados</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gold/80">Direito Tributário</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Atuação especializada em revisão e restituição de ITBI no Município de São Paulo.
            </p>
            <p className="mt-4 text-xs text-white/50">Thiago Alves Pires · OAB/SP 406.256</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Contato</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-gold" /> São Paulo/SP</li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+5514998040911" className="hover:text-gold">(14) 99804-0911</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:thiagopires@adv.oabsp.org.br" className="hover:text-gold break-all">thiagopires@adv.oabsp.org.br</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-gold" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp (14) 99804-0911</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Navegação</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><a href="#problema" className="hover:text-gold">O Problema</a></li>
              <li><a href="#stj" className="hover:text-gold">Tema 1.113/STJ</a></li>
              <li><a href="#calculo" className="hover:text-gold">Cálculo</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
              <li><a href="#analise" className="hover:text-gold">Análise gratuita</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Aviso legal</p>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              As informações desta página têm caráter informativo e não garantem resultado judicial. Cada caso depende
              da análise documental e jurídica específica.
            </p>
            <a href="#" className="mt-3 inline-block text-xs text-gold hover:underline">Política de privacidade</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Pires Advogados. Todos os direitos reservados.</p>
          <p>Conteúdo informativo · Conforme Provimento 205/2021 OAB</p>
        </div>
      </div>
    </footer>
  );
}
