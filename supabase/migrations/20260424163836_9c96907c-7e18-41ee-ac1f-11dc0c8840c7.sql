drop policy if exists "Anyone can submit a lead" on public.itbi_leads;
-- No insert policy for anon/authenticated; only service role (bypasses RLS) can insert via server function.
