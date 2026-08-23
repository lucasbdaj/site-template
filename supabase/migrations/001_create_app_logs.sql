-- Tabela de log de erros/eventos da aplicação (site-template).
-- Nenhum projeto do ecossistema tinha isso ainda — criada do zero em 2026-08-22
-- junto com lib/logger.ts (ver documentacao/tecnico/arquitetura.md).

create table if not exists app_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  level text not null check (level in ('error','warn','info')),
  source text not null,
  message text not null,
  context jsonb,
  environment text not null default 'production'
);

alter table app_logs enable row level security;
-- Apenas o service role (server-side) pode inserir ou ler; nenhuma policy para anon/authenticated.
