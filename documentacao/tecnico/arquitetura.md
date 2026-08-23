# Arquitetura técnica — site-template

> Referência técnica de como o projeto está organizado. Para o modelo de negócio (produtos, preços, contrato), ver `documentacao/plano-de-negocio/`. Para o histórico de decisões e bugs corrigidos, ver `CLAUDE.md` na raiz do repo.

## Visão geral

Este repositório tem dois papéis:

1. **Template multi-tenant** de landing page para clientes da Basis Datum Services — cada cliente é um arquivo de config em `lib/clients/*.ts`, renderizado dinamicamente em `/[slug]`.
2. **Site institucional da própria Basis Datum Services**, servido na raiz (`/`), usando `lib/clients/basis-datum.ts` como config.

Stack: Next.js 16 (App Router, TypeScript), React 19, Tailwind CSS 4 (pouco usado — a maioria dos componentes usa `style={{}}` inline), Supabase (`@supabase/supabase-js` + `@supabase/ssr`).

## Estrutura de pastas

```
app/
  layout.tsx                 # Layout raiz (html/body, metadataBase)
  page.tsx                   # Home = site institucional da Basis Datum Services
  [slug]/
    page.tsx                 # Rota genérica multi-tenant — importa lib/clients/{slug} dinamicamente
    opengraph-image.tsx       # OG image gerada por cliente
  orcamento/
    page.tsx                 # Formulário de briefing (leva o visitante a virar lead)
  api/
    lead/route.ts             # POST — grava o briefing na tabela `clientes` do bd-crm
  robots.ts
  sitemap.ts
  globals.css
  components/                 # TODOS os componentes React do projeto (movidos da
                               # raiz `components/` para dentro de `app/` nesta
                               # reorganização — colocation com as rotas que os usam)
    Navbar.tsx, Hero.tsx, Servicos.tsx, Sobre.tsx, Contato.tsx, Footer.tsx,
    SiteShell.tsx, ImagemLightbox.tsx   # genéricos — usados pelos sites de
                                         # CLIENTE (/[slug]), recebem o config
                                         # via prop `config: ClientConfig`.
                                         # Nunca hardcode algo específico da
                                         # Basis Datum Services aqui.
    HeroBasisDatum.tsx, ServicosBasisDatum.tsx, SobreBasisDatum.tsx,
    ContatoBasisDatum.tsx      # equivalentes dedicados, só usados em app/page.tsx
                                # (a home institucional) — identidade visual própria.
    Portfolio.tsx               # Lista os 5 cases reais (exceto basis-datum) — só na home
    CTAOrcamento.tsx            # Banner "Quero meu orçamento" → /orcamento — só na home
    CTABauruServicos.tsx        # Banner cruzado → bauruservicos.com.br/cadastro — só na home
    FormOrcamento.tsx           # Formulário completo de briefing, usado em /orcamento
lib/
  types.ts                   # ClientConfig e tipos relacionados (Horario, Servico, Numero)
  config.ts                  # "Molde" comentado — copiar pra criar um cliente novo
  basePath.ts                 # BASE_PATH = "/services" (ver seção "Domínio próprio" no CLAUDE.md)
  clients/*.ts                 # Um arquivo por cliente (basis-datum, funilaria-do-beco,
                               # f2-premium, rs-detail, saldao-dos-moveis, sb-ar-condicionado)
  supabase/
    client.ts                 # Client Supabase para Client Components ("use client")
    server.ts                  # Client Supabase para Server Components/Route Handlers
                                # + client privilegiado (service role) — ver seção abaixo
  logger.ts                   # logError() — grava em app_logs via client privilegiado
supabase/
  migrations/
    001_create_app_logs.sql    # Tabela de log de erros da aplicação
documentacao/
  plano-de-negocio/            # PLANO DE NEGÓCIO_V2.docx, CONTRATO ...V2.docx
  tecnico/
    arquitetura.md              # este arquivo
__tests__/unit/                # Testes Jest (infraestrutura pronta, sem testes ainda)
e2e/                            # Testes Playwright (infraestrutura pronta, sem testes ainda)
```

**Regra importante** (herdada do `CLAUDE.md`): componentes genéricos (`Navbar`, `Servicos`, `Sobre`, `Contato`, `Hero`, `Footer`, `SiteShell`) são compartilhados por todos os clientes do template — servem `/[slug]`. Qualquer coisa específica da Basis Datum Services vira um componente próprio (sufixo `BasisDatum` ou dedicado, como `Portfolio.tsx`/`CTAOrcamento.tsx`) usado só em `app/page.tsx`, nunca alterando os genéricos.

## Tipos (`lib/types.ts`)

`ClientConfig` é o contrato de dados que toda config de cliente (`lib/clients/*.ts`) precisa satisfazer, e que os componentes genéricos recebem via prop `config`. Cobre identidade, marca (cores), contato, `hero`, `servicos` e `sobre`. O campo `horario` aceita tanto `string[]` (formato livre, usado no "molde" `lib/config.ts`) quanto `{ dia, horario }[]` (formato estruturado, usado por todos os clientes reais) — os componentes fazem essa distinção em runtime com `typeof horario[0] === "object"`.

A conversão para TypeScript foi pragmática: o objetivo foi eliminar a inconsistência de ter `tsconfig.json` com código `.js`, não produzir tipagem exaustiva. Onde a forma exata de um valor não importava para a segurança do build (ex.: `context` de log, corpo de `LeadPayload`), preferiu-se tipos permissivos (`Record<string, unknown>`, `unknown`) a `any` solto.

## Sistema multi-tenant de configs (`lib/clients/*.ts`)

Cada arquivo em `lib/clients/` exporta uma constante `CONFIG: ClientConfig` com os dados de um cliente (nome, cores, contato, textos de hero/serviços/sobre). A rota `app/[slug]/page.tsx` importa esse arquivo **dinamicamente**, pelo nome do slug da URL:

```ts
const { CONFIG } = await import(`../../lib/clients/${slug}`) as { CONFIG: ClientConfig };
```

Não se coloca extensão no caminho — o Next/webpack resolve `.ts` automaticamente. Se o import falhar (slug sem arquivo correspondente), a rota chama `notFound()` (404). O mesmo padrão é usado em `generateMetadata` (mesma rota) e em `[slug]/opengraph-image.tsx`.

`app/sitemap.ts` lista todos os slugs disponíveis lendo os arquivos de `lib/clients/` no filesystem (`readdirSync`, filtrando `.ts`) — então todo cliente novo aparece automaticamente no sitemap, sem precisar editar nada além de criar o arquivo de config.

Para criar um cliente novo: copiar `lib/config.ts` (o "molde" comentado) para `lib/clients/<slug>.ts`, preencher os campos, e pronto — a rota `/<slug>` já funciona.

## Padrão de cliente Supabase (`lib/supabase/{client,server}.ts`)

Adotado nesta reorganização, espelhando o padrão já usado pelo repo irmão `bd-crm` (`@supabase/ssr`), para manter consistência no ecossistema:

- **`lib/supabase/client.ts`** — `createClient()` com `createBrowserClient` (chave anônima). Para uso em Client Components (`"use client"`). Ainda não há nenhum client component que precise de acesso direto ao Supabase no site-template (o único fetch existente, em `FormOrcamento.tsx`, usa a API REST do Supabase diretamente via `fetch`, não este client) — está disponível para uso futuro.
- **`lib/supabase/server.ts`** — dois exports:
  - `createClient()` — `createServerClient` com `@supabase/ssr`, ligado aos cookies da requisição (`next/headers`). Chave anônima, respeita RLS normalmente. Para Server Components/Route Handlers que precisam de contexto de sessão do usuário.
  - `createServiceRoleClient()` — client privilegiado, usa `createClient` do `@supabase/supabase-js` puro (sem `@supabase/ssr`, sem cookies) com `SUPABASE_SERVICE_ROLE_KEY`. **Não é o mesmo padrão do `bd-crm`** — foi adicionado especificamente porque `app/api/lead/route.ts` precisa gravar leads de visitantes anônimos (não autenticados) na tabela `clientes` do bd-crm, cuja RLS exige um usuário autenticado do ecossistema. Usar o client anônimo/cookie-based quebraria esse fluxo. Retorna `null` (em vez de lançar) se a service role key não estiver configurada, para que quem chamar decida o fallback.

`app/api/lead/route.ts` usa `createServiceRoleClient()` (não instancia `createClient` do `@supabase/supabase-js` diretamente como antes). `lib/logger.ts` usa o mesmo client privilegiado para gravar em `app_logs`.

## Log de erros (`app_logs` + `lib/logger.ts`)

Novo nesta reorganização — nenhum projeto do ecossistema tinha isso ainda:

- **Migration**: `supabase/migrations/001_create_app_logs.sql` cria a tabela `app_logs` (`level`, `source`, `message`, `context` jsonb, `environment`), com RLS habilitada e **nenhuma policy** para `anon`/`authenticated` — só o service role grava/lê.
- **`lib/logger.ts`**: `logError({ source, message, context?, level? })` insere na tabela via `createServiceRoleClient()`. Se a service role key não estiver configurada (`createServiceRoleClient()` retorna `null`), ou se o insert falhar por qualquer motivo, cai para `console.error` como fallback — **nunca lança exceção**, para não quebrar o fluxo que chamou o logger.
- Integrado no `catch`/tratamento de erro de `app/api/lead/route.ts`: falha de env vars ausentes, falha de insert em `clientes`, e exceção inesperada agora são registradas via `logError` antes de responder ao cliente.

## Testes (infraestrutura, sem testes escritos ainda)

Copiado do padrão já usado em `bauru-servicos`/`bauru-empregos`:

- **Jest** (`jest.config.js`, `jest.setup.js`) — usa `next/jest` para configuração automática do Next.js. Roda apenas `__tests__/unit/**/*.test.{js,jsx,ts,tsx}` (ambiente `jsdom`, `@testing-library/jest-dom`). Ignora a pasta `e2e/`.
- **Playwright** (`playwright.config.js`) — `testDir: './e2e'`, sobe `npm run dev` automaticamente (`webServer`) contra `http://localhost:3000`.
- Scripts em `package.json`: `test` (jest), `test:watch`, `test:e2e` (playwright), `test:all` (os dois).

`jest.config.js`, `jest.setup.js` e `playwright.config.js` continuam em CommonJS (`.js`, `require`/`module.exports`) por serem configs de ferramentas do ecossistema Node que não passam pelo compilador do Next — mesma categoria de exceção do `next-env.d.ts`. Estão excluídos do lint TypeScript-aware em `eslint.config.mjs`.
