import { publishedPosts } from "./journal/posts";

const BASE = "https://www.franciscraven.com";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/projects", "/contact", "/journal"].map(
    (route) => ({
      url: `${BASE}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/journal" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    }),
  );
  const journalRoutes = publishedPosts.map((post) => ({
    url: `${BASE}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...journalRoutes];
}
