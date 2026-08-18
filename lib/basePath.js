// Path sob o qual o site-template é servido quando proxeado pelo domínio principal
// (basisdatum.com.br/services → rewrite no next.config.ts do repo `basis-datum`).
// Usado em next.config.ts (basePath/assetPrefix) e em toda referência a asset ou
// rota interna que não passa pelo roteamento automático do Next (img src cru,
// href de âncora crua, fetch de API route) — essas não são prefixadas sozinhas.
export const BASE_PATH = "/services";
