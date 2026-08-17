@AGENTS.md

# Site Template — CLAUDE.md

Dois papéis nesse repositório:

1. **Template multi-tenant** de landing page para clientes da **Basis Datum Services** (sub-empresa focada em presença digital para pequenas empresas locais de Bauru/SP) — cada cliente é um arquivo de config em `lib/clients/*.js`, renderizado em `/[slug]`.
2. **Site de vendas da própria Basis Datum Services**, servido na raiz (`/`) usando `lib/clients/basis-datum.js` como config — é o site institucional que capta os leads que depois viram clientes do item 1.

## Stack

- **Next.js 16** (App Router, JavaScript puro), React 19, Tailwind CSS 4 (pouco usado — a maioria dos componentes usa `style={{}}` inline)
- **Supabase** (`@supabase/supabase-js`) — adicionado em 2026-08-16, projeto compartilhado `basis-datum` do ecossistema. Antes disso o projeto não tinha backend nenhum.
- **Deploy:** Vercel, branch **`master`** (não `main` — atenção, é diferente da convenção usada em outros projetos do ecossistema como bauru-empregos/bauru-servicos)
- **Domínio:** ainda só a URL padrão da Vercel (`site-template-five-phi.vercel.app`) — **sem domínio próprio configurado**. O plano de negócio prevê eventualmente `basisdatum.com.br/services`, mas isso não foi feito ainda.

## Arquitetura

```
app/
  page.js                  # Home = site institucional da Basis Datum Services (usa lib/clients/basis-datum.js)
  [slug]/page.js            # Rota genérica multi-tenant — importa lib/clients/{slug}.js dinamicamente
  orcamento/page.js         # Formulário de briefing (leva o visitante a virar lead)
  api/lead/route.js         # POST — grava o briefing na tabela clientes do bd-crm (não numa tabela própria)
components/
  Navbar, Hero, Servicos, Sobre, Contato, Footer, SiteShell  # genéricos — usados por TODOS os clientes,
                                                              # renderizados a partir do config recebido via prop.
                                                              # Nunca hardcode algo específico da Basis Datum
                                                              # Services aqui — só em componentes dedicados.
  Portfolio.js               # Lista os 5 cases reais (exceto basis-datum) — só usado na home
  CTAOrcamento.js            # Banner "Quero meu orçamento" → /orcamento — só usado na home
  CTABauruServicos.js        # Banner cruzado → bauruservicos.com.br/cadastro — só usado na home
  FormOrcamento.js           # Formulário completo de briefing, usado em /orcamento
lib/
  config.js                 # "Molde" comentado — copiar pra criar um cliente novo
  clients/*.js               # Um arquivo por cliente (basis-datum, funilaria-do-beco, f2-premium,
                              # rs-detail, saldao-dos-moveis, sb-ar-condicionado)
```

**Regra importante:** `Navbar`, `Hero`, `Contato` etc. são compartilhados por todos os clientes do template. Qualquer coisa específica da Basis Datum Services (como os banners de CTA) deve virar um componente próprio usado só em `app/page.js`, nunca alterar os genéricos.

## Formulário de briefing (`/orcamento`)

- Coleta os mesmos campos que `lib/clients/*.js` espera (identidade, contato, redes sociais, horário, serviços, diferenciais, domínio) — o objetivo é que preencher esse formulário gere quase diretamente o `CONFIG.js` de um cliente novo.
- **"Ramo do negócio"** busca as categorias reais do `bauru-servicos` (tabela `categorias`, mesmo Supabase compartilhado) em tempo real via fetch direto na API do Supabase — não hardcoded, então acompanha automaticamente se a lista mudar lá. Tem opção "Outra" com campo de texto livre.
- Grava direto na tabela **`clientes` do bd-crm** (não uma tabela própria do site-template), com `origem: "site-template"`, via `app/api/lead/route.js` usando `SUPABASE_SERVICE_ROLE_KEY` — nunca client-side, porque a política de RLS de `clientes` libera qualquer usuário autenticado do ecossistema (ver nota de segurança no `CLAUDE.md` do bd-crm).
- **Preços foram deixados de fora do formulário de propósito** — o plano de negócio ainda tem uma inconsistência de preço do Produto 01 (R$ 297 vs R$ 397 em seções diferentes) que não foi resolvida.
- Sem upload de foto/logo real — decisão consciente para entregar mais rápido. Os campos `fotos`/`logotipo_url` existem na tabela `clientes` pra uso futuro, mas fotos/logo continuam sendo combinados por WhatsApp/e-mail na produção do site, como já era antes.

## Variáveis de ambiente

```
NEXT_PUBLIC_SUPABASE_URL=          # obrigatório — mesmo projeto do ecossistema
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # obrigatório — usado só para ler `categorias` no formulário
SUPABASE_SERVICE_ROLE_KEY=         # obrigatório — só server-side, usado em app/api/lead/route.js
```

> **Atenção:** essas variáveis precisam ser configuradas manualmente no painel da Vercel (Settings →
> Environment Variables) e exigem um **redeploy** depois de criadas/editadas — deployments já feitos
> não recebem env vars novas retroativamente. Isso já causou confusão uma vez (ver Bugs corrigidos).

## Histórico de implementações

### 2026-08-16 — Backend + formulário de briefing (primeira vez que o projeto tem backend)
- `@supabase/supabase-js` adicionado, `.env.local` criado
- `app/api/lead/route.js` + `components/FormOrcamento.js` + `app/orcamento/page.js`
- `CTAOrcamento.js` inserido na home, entre Portfolio e Contato
- Campo "Ramo do negócio" trocado de texto livre pra select alinhado às categorias do bauru-servicos
- `CTABauruServicos.js`: banner cruzado linkando pro cadastro do bauru-servicos, entre Serviços e Sobre na home

## Bugs corrigidos (histórico)

### [BUG-001] `/api/lead` retornava erro genérico de conexão em vez de mensagem clara
- **Arquivo:** `app/api/lead/route.js`
- **Sintoma:** Ao testar o formulário publicado, o navegador mostrava "Não foi possível enviar. Verifique sua conexão e tente novamente." mesmo com a rota supostamente funcionando.
- **Causa:** As variáveis de ambiente do Supabase nunca tinham sido configuradas na Vercel (o projeto nunca teve backend antes). `createClient(undefined, undefined)` lançava exceção não capturada, a Vercel devolvia uma página de erro HTML em vez de JSON, e o `fetch` no navegador falhava ao tentar `res.json()` — resultando na mensagem genérica do bloco `catch`.
- **Fix:** Rota inteira envolvida em `try/catch`, com checagem explícita das env vars antes de usá-las — agora qualquer erro do servidor sempre volta como JSON com mensagem clara.
- **Lição:** Rotas server-side que dependem de env vars devem sempre checar a presença delas explicitamente e nunca deixar o `createClient` (ou equivalente) lançar sem `try/catch` ao redor — o sintoma no cliente (erro de "conexão") não tem nenhuma relação óbvia com a causa real (env var ausente).

## Próximos passos

- **Reformulação visual da home** (Basis Datum Services) — identidade mais profissional, ainda não feita.
- **`googleMapsEmbed` vazio nos 6 clientes** em `lib/clients/*.js` — gap identificado numa auditoria anterior, nunca preenchido.
- **Domínio próprio** — hoje só a URL da Vercel; o plano de negócio prevê `basisdatum.com.br/services` eventualmente (precisaria de rewrite no `next.config.ts` do `basis-datum`, como já existe pra bauru-empregos e posto-certo).
- **Upload real de fotos/logo** (Supabase Storage) — adiado deliberadamente, ver seção do formulário acima.
- **Resolver a inconsistência de preço** do Produto 01 no plano de negócio antes de publicar qualquer preço no site.
- **`bd-crm`**: o campo `plano` do formulário usa o valor `"pacote-presenca"`, que **não existe** na lista oficial de planos do bd-crm (`avulso-lp | avulso-gmn | basico | avancado | personalizado`) — precisa ser adicionado lá pro dropdown do admin reconhecer esse valor corretamente.
