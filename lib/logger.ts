import { createServiceRoleClient } from "./supabase/server";

export type LogLevel = "error" | "warn" | "info";

export interface LogParams {
  source: string;
  message: string;
  context?: Record<string, unknown>;
  level?: LogLevel;
}

/**
 * Registra um evento na tabela `app_logs` (ver supabase/migrations) usando o
 * client privilegiado (service role), já que a tabela não tem policy de
 * insert para anon/authenticated — só o service role grava.
 *
 * Funciona mesmo sem SUPABASE_SERVICE_ROLE_KEY configurada: nesse caso cai
 * para console.error, sem lançar exceção — nunca deve quebrar o fluxo que
 * chamou o logger (ex.: app/api/lead/route.ts).
 */
export async function logError({ source, message, context, level = "error" }: LogParams): Promise<void> {
  const supabase = createServiceRoleClient();

  if (!supabase) {
    console.error(`[${level}] [${source}]`, message, context ?? "");
    return;
  }

  try {
    const { error } = await supabase.from("app_logs").insert({
      level,
      source,
      message,
      context: context ?? null,
      environment: process.env.NODE_ENV ?? "production",
    });

    if (error) {
      console.error("[logger] falha ao gravar log em app_logs:", error.message);
      console.error(`[${level}] [${source}]`, message, context ?? "");
    }
  } catch (err) {
    console.error("[logger] erro inesperado ao gravar log:", err);
    console.error(`[${level}] [${source}]`, message, context ?? "");
  }
}
