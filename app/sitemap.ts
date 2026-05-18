import type { MetadataRoute } from "next";

import { allRoutes, blogPosts, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map(blogPosts.map((post) => [post.href, post.publishedAt]));

  return allRoutes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date(postDates.get(route) ?? "2026-05-17"),
    changeFrequency: route === "/" || route === "/blog/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/blog/" ? 0.85 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
