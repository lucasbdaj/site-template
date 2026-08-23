import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Client Supabase para Server Components / Route Handlers que precisam do
 * contexto de cookies da requisição (sessão do usuário). Usa a chave anônima
 * — respeita RLS normalmente. Padrão espelhado do repo `bd-crm`
 * (lib/supabase/server.js) para manter o mesmo modelo em todo o ecossistema.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Chamado a partir de um Server Component sem permissão de escrita
            // em cookies — pode ser ignorado se houver middleware atualizando
            // a sessão em paralelo (mesma ressalva do padrão bd-crm).
          }
        },
      },
    }
  );
}

/**
 * Client privilegiado (service role), para uso EXCLUSIVAMENTE server-side,
 * quando é necessário contornar RLS — ex.: gravar o lead de um visitante
 * anônimo na tabela `clientes` do bd-crm (app/api/lead/route.ts) ou gravar
 * logs de erro em app_logs (lib/logger.ts).
 *
 * Diferente do `createClient()` acima: não depende de cookies/sessão do
 * usuário, então nunca deve ser usado para operações que devem respeitar RLS
 * nem exposto ao client-side. Retorna `null` se a service role key não
 * estiver configurada, para que quem chamar decida o fallback (nunca lança).
 */
export function createServiceRoleClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createSupabaseClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
