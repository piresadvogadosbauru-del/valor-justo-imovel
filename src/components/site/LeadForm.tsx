import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(160),
  valorCompra: z.string().trim().max(40).optional(),
  valorPrefeitura: z.string().trim().max(40).optional(),
  ano: z.string().trim().max(10).optional(),
});

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gold/40 bg-card p-8 text-center shadow-elegant">
        <CheckCircle2 className="mb-3 h-10 w-10 text-gold" />
        <h3 className="font-serif text-xl font-semibold text-navy">Recebemos seus dados</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Em breve um advogado especialista entrará em contato para análise inicial e gratuita do seu caso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-elegant sm:p-7">
      {!compact && (
        <div className="mb-2 border-l-2 border-gold pl-3">
          <p className="font-serif text-lg font-semibold text-navy">Análise gratuita do seu caso</p>
          <p className="text-xs text-muted-foreground">Resposta em até 1 dia útil. Sigilo profissional.</p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="nome" className="text-xs font-medium text-navy">Nome completo</Label>
          <Input id="nome" name="nome" placeholder="Seu nome" className="mt-1.5 h-11" />
          {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
        </div>
        <div>
          <Label htmlFor="whatsapp" className="text-xs font-medium text-navy">WhatsApp</Label>
          <Input id="whatsapp" name="whatsapp" placeholder="(11) 99999-9999" className="mt-1.5 h-11" />
          {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-xs font-medium text-navy">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="voce@email.com" className="mt-1.5 h-11" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="valorCompra" className="text-xs font-medium text-navy">Valor declarado da compra</Label>
          <Input id="valorCompra" name="valorCompra" placeholder="R$ 500.000,00" className="mt-1.5 h-11" />
        </div>
        <div>
          <Label htmlFor="valorPrefeitura" className="text-xs font-medium text-navy">Valor usado pela Prefeitura</Label>
          <Input id="valorPrefeitura" name="valorPrefeitura" placeholder="R$ 650.000,00" className="mt-1.5 h-11" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="ano" className="text-xs font-medium text-navy">Ano da compra</Label>
          <Input id="ano" name="ano" placeholder="Ex: 2022" className="mt-1.5 h-11" />
        </div>
      </div>
      <Button type="submit" variant="gold" size="xl" className="w-full" disabled={submitting}>
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Analisar meu caso"}
      </Button>
      <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
        Ao enviar, você concorda com a análise inicial dos dados pelo escritório. Seus dados não serão compartilhados.
      </p>
    </form>
  );
}