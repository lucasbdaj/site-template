import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { BASE_PATH } from "../lib/basePath";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://basisdatum.com.br";

  // Páginas institucionais principais
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}${BASE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}${BASE_PATH}/orcamento`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Páginas dinâmicas de clientes/serviços
  try {
    const clientsDir = join(process.cwd(), "lib/clients");
    const slugs = readdirSync(clientsDir)
      .filter((f) => f.endsWith(".ts"))
      .map((f) => f.replace(".ts", ""));

    const dynamicRoutes = slugs.map((slug) => ({
      url: `${base}${BASE_PATH}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch {
    return staticRoutes;
  }
}