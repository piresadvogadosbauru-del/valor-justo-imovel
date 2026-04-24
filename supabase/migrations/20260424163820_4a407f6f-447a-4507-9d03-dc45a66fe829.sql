create table public.itbi_leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  email text not null,
  valor_compra text,
  valor_prefeitura text,
  ano text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.itbi_leads enable row level security;

-- Anyone can insert a lead (public landing page form)
create policy "Anyone can submit a lead"
  on public.itbi_leads
  for insert
  to anon, authenticated
  with check (true);

-- No public select/update/delete — only service role (which bypasses RLS) can read leads
