@AGENTS.md

# Site Template — CLAUDE.md

Dois papéis nesse repositório:

1. **Template multi-tenant** de landing page para clientes da **Basis Datum Services** (sub-empresa focada em presença digital para pequenas empresas locais de Bauru/SP) — cada cliente é um arquivo de config em `lib/clients/*.js`, renderizado em `/[slug]`.
2. **Site de vendas da própria Basis Datum Services**, servido na raiz (`/`) usando `lib/clients/basis-datum.js` como config — é o site institucional que capta os leads que depois viram clientes do item 1.

> **Basis Datum Services é uma sub-empresa nascida dentro do ecossistema Basis Datum, com proposta própria**: presença digital (Perfil da Empresa no Google + site) pro pequeno comércio local. Não confundir com a Basis Datum "mãe" (dona do ecossistema Bauru Empregos/Bauru Serviços/Posto Certo) — ver `documentação/` pra escopo comercial completo.

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
  Navbar, Hero, Servicos, Sobre, Contato, Footer, SiteShell   # genéricos — usados pelos sites de CLIENTE
                                                               # (/[slug]), renderizados a partir do config
                                                               # recebido via prop. Nunca hardcode algo
                                                               # específico da Basis Datum Services aqui.
  HeroBasisDatum, ServicosBasisDatum, SobreBasisDatum,
  ContatoBasisDatum                                           # equivalentes dedicados, só usados em
                                                               # app/page.js (a home institucional) — têm
                                                               # identidade visual própria (ver seção abaixo)
  Portfolio.js               # Lista os 5 cases reais (exceto basis-datum) — só usado na home
  CTAOrcamento.js            # Banner "Quero meu orçamento" → /orcamento — só usado na home
  CTABauruServicos.js        # Banner cruzado → bauruservicos.com.br/cadastro — só usado na home
  FormOrcamento.js           # Formulário completo de briefing, usado em /orcamento
lib/
  config.js                 # "Molde" comentado — copiar pra criar um cliente novo
  clients/*.js               # Um arquivo por cliente (basis-datum, funilaria-do-beco, f2-premium,
                              # rs-detail, saldao-dos-moveis, sb-ar-condicionado)
documentação/
  PLANO DE NEGÓCIO_V2.docx                                    # fonte da verdade do modelo de negócio
  CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE PRESENÇA DIGITAL V2.docx  # contrato padrão usado com clientes
```

**Regra importante:** `Navbar`, `Servicos`, `Sobre`, `Contato` etc. (os genéricos) são compartilhados por todos os clientes do template — servem `/[slug]`. Qualquer coisa específica da Basis Datum Services (visual ou de conteúdo, como os banners de CTA e o hero/serviços/sobre/contato da home) vira um componente próprio (sufixo `BasisDatum` ou dedicado, como `Portfolio.js`/`CTAOrcamento.js`) usado só em `app/page.js`, nunca alterando os genéricos.

## Identidade visual da home (Basis Datum Services)

A partir de 2026-08-17 a home (`app/page.js`) tem um sistema visual próprio, diferente do template genérico usado pelos clientes:

- **Tipografia**: eyebrow em monospace (`ui-monospace, 'Cascadia Code', 'SF Mono', Consolas`) tipo `// serviços`, títulos em serif (`ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia`), corpo em sans padrão. Declarado inline em cada componente `*BasisDatum.js` — não existe um token/CSS var pra isso ainda, então ao criar um novo componente da home é preciso repetir as mesmas font stacks (comparar com um `*BasisDatum.js` existente).
- **Paleta**: `var(--primary)` (cyan `#00aadd`) e `var(--primary-dark)` (navy `#1a2e4a`), as mesmas CSS vars que o template genérico já usa — só a composição (cards mais enxutos, chips de ícone, blobs radiais de destaque no Hero e no Contato) é diferente.
- **Padrão de card**: ícone num chip 44×44 arredondado (cor de fundo tintada), título serif, descrição em cinza-azulado (`#5b6b7c`), sem barra colorida no topo — usado em `ServicosBasisDatum`, `SobreBasisDatum` (painel de números) e `Portfolio`.
- **Footer permanece genérico** (`Footer.js`) — decisão consciente do dono do produto: já se encaixa bem, não precisa de tratamento dedicado só por consistência com o resto.

## Formulário de briefing (`/orcamento`)

- Coleta os mesmos campos que `lib/clients/*.js` espera (identidade, contato, redes sociais, horário, serviços, diferenciais, domínio) — o objetivo é que preencher esse formulário gere quase diretamente o `CONFIG.js` de um cliente novo.
- **"Ramo do negócio"** busca as categorias reais do `bauru-servicos` (tabela `categorias`, mesmo Supabase compartilhado) em tempo real via fetch direto na API do Supabase — não hardcoded, então acompanha automaticamente se a lista mudar lá. Tem opção "Outra" com campo de texto livre.
- Grava direto na tabela **`clientes` do bd-crm** (não uma tabela própria do site-template), com `origem: "site-template"`, via `app/api/lead/route.js` usando `SUPABASE_SERVICE_ROLE_KEY` — nunca client-side, porque a política de RLS de `clientes` libera qualquer usuário autenticado do ecossistema (ver nota de segurança no `CLAUDE.md` do bd-crm).
- **Preços foram deixados de fora do formulário de propósito** — mesmo já estando definidos e consistentes no plano de negócio (ver seção "Documentação de negócio" abaixo), a decisão de não exibir preço publicamente segue de pé por enquanto.
- Sem upload de foto/logo real — decisão consciente para entregar mais rápido. Os campos `fotos`/`logotipo_url` existem na tabela `clientes` pra uso futuro, mas fotos/logo continuam sendo combinados por WhatsApp/e-mail na produção do site, como já era antes.

## Documentação de negócio (`documentação/`)

Dois documentos, adicionados em 2026-08-17, são a fonte da verdade do modelo de negócio da Basis Datum Services — não são só referência, o **modelo de página única do template foi validado contra eles** (ver "Regra importante" e a auditoria que motivou a criação desses arquivos):

- **`PLANO DE NEGÓCIO_V2.docx`** — modelo de negócio completo: proposta de valor, produtos, precificação, processo comercial, roadmap.
- **`CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE PRESENÇA DIGITAL V2.docx`** — contrato padrão usado com clientes reais, incluindo os anexos de escopo/valores/LGPD/entrega.

Ambos são `.docx` — o tool de leitura do Claude Code não abre binário diretamente; pra ler/conferir o conteúdo é preciso extrair o texto primeiro (`word/document.xml` dentro do zip do `.docx`, ver histórico da sessão de 2026-08-17 pra o script).

**Estrutura do "Site Essencial" confirmada nos dois documentos e alinhada ao código atual:**
- Página única com âncoras (`#servicos`, `#sobre`, `#contato`) — não são 5 páginas separadas.
- **Sem galeria** por padrão (Cláusula 4.1 do contrato não lista mais "galeria" — só existe como checkbox opcional no Anexo I, pra casos específicos).
- **"Diferenciais" é coletado no briefing mas não é exibido no site** — nem o plano nem o contrato prometem uma seção dedicada a isso na Página Inicial/Sobre.
- **Sem formulário de contato embutido no site do cliente** — só WhatsApp/telefone/e-mail diretos + mapa, como o `Contato.js` genérico já faz.

**Preços atuais (implantação):**
| Produto | Preço |
|---|---|
| Perfil da Empresa no Google | R$ 297 |
| Site Essencial | R$ 797 |
| Pacote Presença Digital | R$ 997 |

**Manutenção recorrente:**
| Plano | Preço |
|---|---|
| Básico | R$ 49/mês |
| Profissional | R$ 79/mês |
| Presença | R$ 99/mês |

> Esses preços ainda não aparecem em nenhum lugar do site (ver "Preços foram deixados de fora do formulário" acima) — se algum dia forem publicados, usar exatamente esses valores, já que agora estão consistentes entre plano e contrato.

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

### 2026-08-17 — Reformulação visual da home + alinhamento com o plano de negócio
- **Visual**: criados `HeroBasisDatum.js`, `ServicosBasisDatum.js`, `SobreBasisDatum.js`, `ContatoBasisDatum.js` (sistema mono+serif, ver "Identidade visual da home" acima); `Portfolio.js`, `CTAOrcamento.js` e `CTABauruServicos.js` (já dedicados) redesenhados no mesmo padrão. `Footer.js` genérico mantido sem alteração de propósito.
- **CTA do Hero**: trocado de "Falar pelo WhatsApp" (destaque) para "Quero meu orçamento" → `/orcamento` (destaque); WhatsApp virou link discreto ao lado de "Ver serviços" — o objetivo agora é cadastro de lead, não conversa direta.
- **Nomes de produto atualizados** em `lib/clients/basis-datum.js` (seção `servicos.itens`): "Google Meu Negócio" → "Perfil da Empresa no Google", "Site Profissional" → "Site Essencial", "Plataformas Digitais" → "Pacote Presença Digital" (o 3º item era sobre o ecossistema de apps, um conceito diferente — a menção ao ecossistema continua na seção Sobre).
- **Identidade da entidade corrigida**: `CONFIG.nome` "Basis Datum" → "Basis Datum Services"; texto do "Sobre" reescrito pra deixar claro que a Services é uma empresa própria (nasceu dentro do ecossistema Basis Datum, mas com proposta específica de presença digital) — antes o texto conflava as duas entidades, inclusive atribuindo à Services o desenvolvimento do ecossistema de apps, que não é dela.
- **`documentação/` criada** com o Plano de Negócio e o Contrato (V2), e as duas inconsistências neles encontradas durante essa auditoria (Galeria prometida por padrão no contrato mas não no plano/código; preço da manutenção "Profissional" divergente entre os dois) foram corrigidas pelo dono do produto direto nos `.docx`.

## Bugs corrigidos (histórico)

### [BUG-001] `/api/lead` retornava erro genérico de conexão em vez de mensagem clara
- **Arquivo:** `app/api/lead/route.js`
- **Sintoma:** Ao testar o formulário publicado, o navegador mostrava "Não foi possível enviar. Verifique sua conexão e tente novamente." mesmo com a rota supostamente funcionando.
- **Causa:** As variáveis de ambiente do Supabase nunca tinham sido configuradas na Vercel (o projeto nunca teve backend antes). `createClient(undefined, undefined)` lançava exceção não capturada, a Vercel devolvia uma página de erro HTML em vez de JSON, e o `fetch` no navegador falhava ao tentar `res.json()` — resultando na mensagem genérica do bloco `catch`.
- **Fix:** Rota inteira envolvida em `try/catch`, com checagem explícita das env vars antes de usá-las — agora qualquer erro do servidor sempre volta como JSON com mensagem clara.
- **Lição:** Rotas server-side que dependem de env vars devem sempre checar a presença delas explicitamente e nunca deixar o `createClient` (ou equivalente) lançar sem `try/catch` ao redor — o sintoma no cliente (erro de "conexão") não tem nenhuma relação óbvia com a causa real (env var ausente).

## Domínio próprio (`basisdatum.com.br/services`)

Implementado em 2026-08-17, seguindo exatamente o padrão já usado por `bauru-empregos` e `posto-certo`:

- **`lib/basePath.js`** exporta `BASE_PATH = "/services"` — fonte única usada tanto no `next.config.ts` (`basePath`/`assetPrefix`) quanto em toda referência a asset/rota interna que o Next não prefixa sozinho (logo/foto de cada `lib/clients/*.js`, os links pro `/orcamento`, o `href` de cada card do `Portfolio.js`, o `fetch` de `/api/lead` em `FormOrcamento.js`, e as URLs absolutas em `robots.js`/`sitemap.js`).
- **Efeito colateral esperado:** a partir do deploy, a própria URL da Vercel (`site-template-five-phi.vercel.app/`) passa a responder 404 na raiz — só funciona sob `/services` (mesmo comportamento que `bauru-empregos.vercel.app/` e `posto-certo.vercel.app/` já têm hoje). Isso é o padrão do ecossistema, não um bug.
- **Rewrite no `basis-datum`** (`next.config.ts`, seção "Basis Datum Services") proxeia `basisdatum.com.br/services*` pra essa URL da Vercel — sem precisar de nenhuma configuração de domínio na Vercel em si, o apex já está conectado ao projeto `basis-datum` (mesmo mecanismo dos outros dois apps).
- **Testado localmente** com `next build && next start`: raiz 404, `/services`, `/services/rs-detail`, `/services/orcamento`, assets (`/services/logo.png`, `/services/_next/static/...`), `/services/api/lead` (POST, validação retornando 400 — não cheguei a inserir um lead de teste) e `/services/sitemap.xml`/`robots.txt` — todos corretos.
- **Ordem de deploy recomendada:** primeiro `site-template` (pra `/services` passar a existir na URL da Vercel), depois `basis-datum` (cujo rewrite depende disso).

> **Achado à parte, não corrigido ainda:** `robots.js`/`sitemap.js` usam `process.env.NEXT_PUBLIC_BASE_URL`, que **não parece estar configurada na Vercel** (não é uma das 3 env vars documentadas na seção "Variáveis de ambiente"). Sem ela, o sitemap cai no fallback `http://localhost:3000` mesmo em produção — um bug pré-existente, não causado por essa mudança, mas que vale corrigir juntos: configurar `NEXT_PUBLIC_BASE_URL=https://basisdatum.com.br` na Vercel.

## Próximos passos

- **Confirmar `NEXT_PUBLIC_BASE_URL` na Vercel** — ver achado acima, pro sitemap/robots funcionarem de verdade em produção.
- **Upload real de fotos/logo** (Supabase Storage) — adiado deliberadamente, ver seção do formulário acima.
- **Publicar preços no site** — decisão tomada em 2026-08-17: não publicar por enquanto, os valores serão trabalhados individualmente na proposta apresentada a cada cliente.

## Concluído em 2026-08-17 (ajustes pendentes anteriores)

- **`googleMapsEmbed` preenchido em 5 dos 6 clientes** em `lib/clients/*.js` (f2-premium, sb-ar-condicionado, saldao-dos-moveis, rs-detail, funilaria-do-beco) — gerado via URL de embed sem API key (`https://www.google.com/maps?q=<nome + endereço>&output=embed`), a partir do `nome`/`endereco` já cadastrado em cada config. `basis-datum.js` ficou de fora de propósito — a Basis Datum Services não tem endereço físico de loja, só "Bauru, SP", que não renderizaria um pin útil. **Vale conferir visualmente se os pins caíram no lugar certo** — a geração foi por busca textual do Google, não validada com um mapa real.
- **`bd-crm`**: `"pacote-presenca"` adicionado em todos os lugares que precisavam (`ClienteForm.jsx`, `PropostaForm.jsx` + template de itens, e os 3 displays de label: `clientes/[id]/page.jsx`, `propostas/page.jsx`, `p/[slug]/page.jsx`) — ver `CLAUDE.md` do bd-crm.
- **Domínio próprio** (`basisdatum.com.br/services`) — ver seção dedicada acima.
