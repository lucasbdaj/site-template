import { readdirSync } from "fs";
import { join } from "path";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const slugs = readdirSync(join(process.cwd(), "lib/clients"))
    .filter((f) => f.endsWith(".js"))
    .map((f) => f.replace(".js", ""));

  return slugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}