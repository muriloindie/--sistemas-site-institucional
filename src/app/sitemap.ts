import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { PRODUCTS } from "@/content/products";
import { CASES } from "@/content/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ["", "/sobre", "/solucoes", "/produtos", "/contato", "/privacidade"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));

  const products = PRODUCTS.map((product) => ({
    url: `${SITE.url}/produtos/${product.slug}`,
    lastModified: new Date(),
  }));

  const cases = CASES.map((item) => ({
    url: `${SITE.url}/cases/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...statics, ...products, ...cases];
}
