"use client";
import { useState, useEffect } from "react";
import { BASE_PATH } from "../../lib/basePath";

interface HorarioLinha {
  dia: string;
  horario: string;
}

interface FormState {
  razao_social: string;
  nome_fantasia: string;
  cnpj_cpf: string;
  descricao: string;
  responsavel: string;
  telefone: string;
  whatsapp: string;
  email: string;
  endereco: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
  site_atual: string;
  dominio: string;
  plano: string;
  informacoes_adicionais: string;
  website: string; // honeypot
}

const HORARIO_PADRAO: HorarioLinha[] = [
  { dia: "Segunda a Sexta", horario: "" },
  { dia: "Sábado", horario: "" },
  { dia: "Domingo", horario: "" },
];

const PRODUTOS = [
  { valor: "avulso-gmn", label: "Perfil da Empresa no Google" },
  { valor: "avulso-lp", label: "Site Essencial (site institucional)" },
  { valor: "pacote-presenca", label: "Pacote Presença Digital (Google + Site)" },
  { valor: "", label: "Ainda não sei, quero uma recomendação" },
];

const estiloLabel = { display: "block", fontSize: 13, fontWeight: 500, color: "#1a2e4a", marginBottom: 6 } as const;
const estiloInput = {
  width: "100%", padding: "10px 14px", borderRadius: 8,
  border: "1px solid #e5e7eb", fontSize: 14, fontFamily: "inherit",
} as const;
const estiloCard = { background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 32, marginBottom: 20 } as const;
const estiloTituloSecao = { fontSize: 17, fontWeight: 700, color: "#1a2e4a", marginBottom: 20 } as const;

export default function FormOrcamento() {
  const [form, setForm] = useState<FormState>({
    razao_social: "", nome_fantasia: "", cnpj_cpf: "", descricao: "",
    responsavel: "", telefone: "", whatsapp: "", email: "", endereco: "",
    instagram: "", facebook: "", linkedin: "", tiktok: "", youtube: "",
    site_atual: "", dominio: "", plano: "", informacoes_adicionais: "", website: "",
  });
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [segmentoOutro, setSegmentoOutro] = useState("");
  const [possuiDominio, setPossuiDominio] = useState<boolean | null>(null);
  const [temInteresseDominio, setTemInteresseDominio] = useState<boolean | null>(null);
  const [horario, setHorario] = useState<HorarioLinha[]>(HORARIO_PADRAO);
  const [servicos, setServicos] = useState<string[]>([]);
  const [novoServico, setNovoServico] = useState("");
  const [diferenciais, setDiferenciais] = useState<string[]>([]);
  const [novoDiferencial, setNovoDiferencial] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categorias?select=nome&order=nome`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""}`,
        },
      }
    )
      .then(r => (r.ok ? r.json() : []))
      .then((data: { nome: string }[]) => setCategorias(data.map(c => c.nome)))
      .catch(() => setCategorias([]));
  }, []);

  function atualizar(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function atualizarHorario(i: number, campo: keyof HorarioLinha, valor: string) {
    setHorario(h => h.map((row, idx) => (idx === i ? { ...row, [campo]: valor } : row)));
  }
  function removerLinhaHorario(i: number) {
    setHorario(h => h.filter((_, idx) => idx !== i));
  }

  function adicionarServico() {
    if (!novoServico.trim()) return;
    setServicos(s => [...s, novoServico.trim()]);
    setNovoServico("");
  }
  function removerServico(i: number) {
    setServicos(s => s.filter((_, idx) => idx !== i));
  }

  function adicionarDiferencial() {
    if (!novoDiferencial.trim()) return;
    setDiferenciais(d => [...d, novoDiferencial.trim()]);
    setNovoDiferencial("");
  }
  function removerDiferencial(i: number) {
    setDiferenciais(d => d.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    if (!form.razao_social.trim() || !form.email.trim() || !(form.telefone.trim() || form.whatsapp.trim())) {
      setErro("Preencha o nome do negócio, e-mail e ao menos um telefone/WhatsApp para contato.");
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          segmento: categoriaSelecionada === "outra" ? segmentoOutro.trim() : categoriaSelecionada,
          horario: horario.filter(h => h.dia.trim() && h.horario.trim()),
          servicos_oferecidos: servicos,
          diferenciais,
          possui_dominio: possuiDominio,
          tem_interesse_dominio: possuiDominio === false ? temInteresseDominio : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErro(data.error || "Não foi possível enviar. Tente novamente.");
        setEnviando(false);
        return;
      }
      setEnviado(true);
    } catch {
      setErro("Não foi possível enviar. Verifique sua conexão e tente novamente.");
      setEnviando(false);
    }
  }

  const input = (
    label: string,
    name: keyof FormState,
    tipo = "text",
    obrigatorio = false,
    placeholder = ""
  ) => (
    <div>
      <label style={estiloLabel}>
        {label} {obrigatorio && <span style={{ color: "#e24b4a" }}>*</span>}
      </label>
      <input
        type={tipo}
        name={name}
        value={form[name]}
        onChange={atualizar}
        required={obrigatorio}
        placeholder={placeholder}
        style={estiloInput}
      />
    </div>
  );

  if (enviado) {
    return (
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1a2e4a", marginBottom: 12 }}>
          Briefing recebido!
        </h1>
        <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
          Obrigado por preencher. Vamos analisar as informações do seu negócio e entrar em contato
          em breve com uma proposta.
        </p>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 96px" }}>
      <p style={{ fontSize: 11, color: "var(--primary)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
        Vamos começar
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e4a", marginBottom: 8 }}>
        Conte sobre o seu negócio
      </h1>
      <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 40 }}>
        Preencha o quanto conseguir — quanto mais detalhes, mais rápido conseguimos montar sua
        proposta e já deixar seu site pronto para produção.
      </p>

      <form onSubmit={handleSubmit}>
        {/* honeypot, invisível para humanos */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={atualizar}
          autoComplete="off"
          tabIndex={-1}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          aria-hidden="true"
        />

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Sobre o negócio</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {input("Razão social / nome do negócio", "razao_social", "text", true, "Ex: Auto Peças Bauru Ltda")}
            {input("Nome comercial (fantasia)", "nome_fantasia", "text", false, "Ex: Auto Peças Bauru")}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
              {input("CNPJ ou CPF", "cnpj_cpf")}
              <div>
                <label style={estiloLabel}>Ramo do negócio</label>
                <select
                  value={categoriaSelecionada}
                  onChange={e => setCategoriaSelecionada(e.target.value)}
                  style={{ ...estiloInput, background: "white" }}
                >
                  <option value="">Selecione...</option>
                  {categorias.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                  <option value="outra">Outra</option>
                </select>
              </div>
            </div>
            {categoriaSelecionada === "outra" && (
              <div>
                <label style={estiloLabel}>Qual ramo?</label>
                <input
                  type="text"
                  value={segmentoOutro}
                  onChange={e => setSegmentoOutro(e.target.value)}
                  placeholder="Descreva o ramo do seu negócio"
                  style={estiloInput}
                />
              </div>
            )}
            <div>
              <label style={estiloLabel}>Descrição do negócio</label>
              <textarea
                name="descricao" value={form.descricao} onChange={atualizar} rows={4}
                placeholder="O que o negócio faz, há quanto tempo existe, etc."
                style={{ ...estiloInput, resize: "vertical" }}
              />
            </div>
          </div>
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Contato</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {input("Nome do responsável", "responsavel")}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
              {input("Telefone", "telefone", "text", false, "(14) 3333-3333")}
              {input("WhatsApp", "whatsapp", "text", false, "(14) 99999-9999")}
            </div>
            {input("E-mail", "email", "email", true, "contato@seunegocio.com.br")}
            {input("Endereço", "endereco")}
          </div>
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Redes sociais</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
            {input("Instagram", "instagram", "url", false, "https://instagram.com/...")}
            {input("Facebook", "facebook", "url", false, "https://facebook.com/...")}
            {input("LinkedIn", "linkedin", "url", false, "https://linkedin.com/...")}
            {input("TikTok", "tiktok", "url", false, "https://tiktok.com/@...")}
            {input("YouTube", "youtube", "url", false, "https://youtube.com/@...")}
            {input("Site atual (se tiver)", "site_atual", "url", false, "https://seusite.com.br")}
          </div>
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Horário de funcionamento</h2>
          {horario.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 10, marginBottom: 10, alignItems: "center" }}>
              <input
                type="text" value={row.dia} placeholder="Ex: Segunda a Sexta"
                onChange={e => atualizarHorario(i, "dia", e.target.value)}
                style={estiloInput}
              />
              <input
                type="text" value={row.horario} placeholder="Ex: 9h às 18h ou Fechado"
                onChange={e => atualizarHorario(i, "horario", e.target.value)}
                style={estiloInput}
              />
              <button type="button" onClick={() => removerLinhaHorario(i)}
                style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 18, padding: 4 }}
                aria-label="Remover linha">×</button>
            </div>
          ))}
          <button type="button" onClick={() => setHorario(h => [...h, { dia: "", horario: "" }])}
            style={{ background: "none", border: "1px dashed #d1d5db", color: "var(--primary)", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>
            + Adicionar linha
          </button>
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Serviços oferecidos</h2>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <input
              type="text" value={novoServico} onChange={e => setNovoServico(e.target.value)}
              placeholder="Ex: Troca de óleo"
              onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); adicionarServico(); } }}
              style={estiloInput}
            />
            <button type="button" onClick={adicionarServico}
              style={{ background: "var(--primary)", color: "white", border: "none", borderRadius: 8, padding: "0 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
              Adicionar
            </button>
          </div>
          {servicos.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {servicos.map((s, i) => (
                <li key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f5f7fa", borderRadius: 8, padding: "8px 14px", fontSize: 14, color: "#1a2e4a" }}>
                  {s}
                  <button type="button" onClick={() => removerServico(i)}
                    style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 16 }}
                    aria-label="Remover">×</button>
                </li>
              ))}
            </ul>
          )}

          <h2 style={{ ...estiloTituloSecao, marginTop: 28 }}>Diferenciais</h2>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <input
              type="text" value={novoDiferencial} onChange={e => setNovoDiferencial(e.target.value)}
              placeholder="Ex: Atendimento em domicílio"
              onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); adicionarDiferencial(); } }}
              style={estiloInput}
            />
            <button type="button" onClick={adicionarDiferencial}
              style={{ background: "var(--primary)", color: "white", border: "none", borderRadius: 8, padding: "0 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
              Adicionar
            </button>
          </div>
          {diferenciais.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {diferenciais.map((d, i) => (
                <li key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f5f7fa", borderRadius: 8, padding: "8px 14px", fontSize: 14, color: "#1a2e4a" }}>
                  {d}
                  <button type="button" onClick={() => removerDiferencial(i)}
                    style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 16 }}
                    aria-label="Remover">×</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Domínio</h2>
          <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 14 }}>Sua empresa já tem um domínio próprio (ex: seusite.com.br)?</p>
          <div style={{ display: "flex", gap: 10, marginBottom: possuiDominio === null ? 0 : 16 }}>
            <button type="button" onClick={() => { setPossuiDominio(true); setTemInteresseDominio(null); }}
              style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${possuiDominio === true ? "var(--primary)" : "#e5e7eb"}`, background: possuiDominio === true ? "var(--primary)" : "white", color: possuiDominio === true ? "white" : "#1a2e4a", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Sim
            </button>
            <button type="button" onClick={() => setPossuiDominio(false)}
              style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${possuiDominio === false ? "var(--primary)" : "#e5e7eb"}`, background: possuiDominio === false ? "var(--primary)" : "white", color: possuiDominio === false ? "white" : "#1a2e4a", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Não
            </button>
          </div>

          {possuiDominio === true && input("Qual domínio?", "dominio", "text", false, "seusite.com.br")}

          {possuiDominio === false && (
            <div style={{ marginTop: 16 }}>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 10 }}>Tem interesse em registrar um domínio próprio?</p>
              <div style={{ display: "flex", gap: 10 }}>
                <button type="button" onClick={() => setTemInteresseDominio(true)}
                  style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${temInteresseDominio === true ? "var(--primary)" : "#e5e7eb"}`, background: temInteresseDominio === true ? "var(--primary)" : "white", color: temInteresseDominio === true ? "white" : "#1a2e4a", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Sim
                </button>
                <button type="button" onClick={() => setTemInteresseDominio(false)}
                  style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${temInteresseDominio === false ? "var(--primary)" : "#e5e7eb"}`, background: temInteresseDominio === false ? "var(--primary)" : "white", color: temInteresseDominio === false ? "white" : "#1a2e4a", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Não
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Qual produto te interessa?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PRODUTOS.map(p => (
              <label key={p.label} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", padding: "10px 14px", borderRadius: 8, border: `1px solid ${form.plano === p.valor ? "var(--primary)" : "#e5e7eb"}` }}>
                <input
                  type="radio" name="plano" value={p.valor}
                  checked={form.plano === p.valor}
                  onChange={atualizar}
                />
                <span style={{ fontSize: 14, color: "#1a2e4a" }}>{p.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={estiloCard}>
          <h2 style={estiloTituloSecao}>Informações adicionais</h2>
          <textarea
            name="informacoes_adicionais" value={form.informacoes_adicionais} onChange={atualizar} rows={4}
            placeholder="Qualquer outra coisa que ache importante contar"
            style={{ ...estiloInput, resize: "vertical" }}
          />
        </div>

        {erro && <p style={{ color: "#e24b4a", fontSize: 13, marginBottom: 16 }}>{erro}</p>}

        <button type="submit" disabled={enviando}
          style={{
            width: "100%", background: "var(--primary)", color: "#ffffff",
            border: "none", padding: "14px", borderRadius: 8,
            fontSize: 16, cursor: "pointer", fontWeight: 700,
            opacity: enviando ? 0.7 : 1,
          }}>
          {enviando ? "Enviando..." : "Enviar briefing"}
        </button>
      </form>

      <style>{`
        @media (max-width: 640px) {
          .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
