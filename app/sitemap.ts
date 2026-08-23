import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { BASE_PATH } from "../lib/basePath";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const slugs = readdirSync(join(process.cwd(), "lib/clients"))
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(".ts", ""));

  return slugs.map((slug) => ({
    url: `${base}${BASE_PATH}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}
