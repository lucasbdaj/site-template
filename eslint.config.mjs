import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Configs de ferramentas do ecossistema Node (CommonJS puro, exigem
    // require()/module.exports — não fazem parte do código do app/lib).
    "jest.config.js",
    "jest.setup.js",
    "playwright.config.js",
  ]),
]);

export default eslintConfig;
