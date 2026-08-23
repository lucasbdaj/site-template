import { NextResponse } from "next/server";
import { createServiceRoleClient } from "../../../lib/supabase/server";
import { logError } from "../../../lib/logger";

interface LeadPayload {
  razao_social?: string;
  nome_fantasia?: string;
  cnpj_cpf?: string;
  segmento?: string;
  descricao?: string;
  responsavel?: string;
  telefone?: string;
  whatsapp?: string;
  email?: string;
  endereco?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  site_atual?: string;
  horario?: unknown;
  servicos_oferecidos?: unknown;
  diferenciais?: unknown;
  possui_dominio?: boolean;
  dominio?: string;
  tem_interesse_dominio?: boolean;
  plano?: string;
  informacoes_adicionais?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    // Honeypot: campo invisível para humanos, bots costumam preencher.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const razaoSocial = body.razao_social?.trim();
    const email = body.email?.trim();
    const telefone = body.telefone?.trim();
    const whatsapp = body.whatsapp?.trim();

    if (!razaoSocial || !email || !(telefone || whatsapp)) {
      return NextResponse.json(
        { error: "Preencha o nome do negócio, e-mail e ao menos um telefone/WhatsApp para contato." },
        { status: 400 }
      );
    }

    const supabase = createServiceRoleClient();

    if (!supabase) {
      await logError({
        source: "api/lead",
        message: "Variáveis de ambiente do Supabase ausentes no deploy",
        level: "error",
      });
      return NextResponse.json(
        { error: "Não foi possível enviar seu briefing agora. Tente novamente em instantes." },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("clientes").insert({
      razao_social: razaoSocial,
      nome_fantasia: body.nome_fantasia?.trim() || null,
      cnpj_cpf: body.cnpj_cpf?.trim() || null,
      segmento: body.segmento?.trim() || null,
      descricao: body.descricao?.trim() || null,
      responsavel: body.responsavel?.trim() || null,
      telefone: telefone || null,
      whatsapp: whatsapp || null,
      email,
      endereco: body.endereco?.trim() || null,
      instagram: body.instagram?.trim() || null,
      facebook: body.facebook?.trim() || null,
      linkedin: body.linkedin?.trim() || null,
      tiktok: body.tiktok?.trim() || null,
      youtube: body.youtube?.trim() || null,
      site_atual: body.site_atual?.trim() || null,
      horario: Array.isArray(body.horario) ? body.horario : [],
      servicos_oferecidos: Array.isArray(body.servicos_oferecidos) ? body.servicos_oferecidos : [],
      diferenciais: Array.isArray(body.diferenciais) ? body.diferenciais : [],
      possui_dominio: typeof body.possui_dominio === "boolean" ? body.possui_dominio : null,
      dominio: body.dominio?.trim() || null,
      tem_interesse_dominio: typeof body.tem_interesse_dominio === "boolean" ? body.tem_interesse_dominio : null,
      plano: body.plano || null,
      informacoes_adicionais: body.informacoes_adicionais?.trim() || null,
      origem: "site-template",
    });

    if (error) {
      await logError({
        source: "api/lead",
        message: `Erro ao inserir em clientes: ${error.message}`,
        context: { email, razaoSocial },
        level: "error",
      });
      return NextResponse.json(
        { error: "Não foi possível enviar seu briefing agora. Tente novamente em instantes." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    await logError({
      source: "api/lead",
      message: `Erro inesperado: ${err instanceof Error ? err.message : String(err)}`,
      level: "error",
    });
    return NextResponse.json(
      { error: "Não foi possível enviar seu briefing agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
