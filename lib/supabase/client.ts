import { createBrowserClient } from "@supabase/ssr";

/**
 * Client Supabase para uso em Client Components ("use client"). Usa a chave
 * anônima — respeita RLS normalmente. Padrão espelhado do repo `bd-crm`
 * (lib/supabase/client.js) para manter o mesmo modelo em todo o ecossistema.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
