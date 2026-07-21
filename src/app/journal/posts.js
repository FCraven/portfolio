// Journal registry — the journal's analog of resumeData.js.
// Every post is registered here; pages, sitemap, and SEO read from this.
// draft: true => excluded from sitemap + noindex (GSC hygiene).

const posts = [
  {
    slug: "ps2-to-photoreal-in-one-day",
    title: "From PS2 to Photoreal in One Day",
    codename: "OPERATION: HERO LADDER",
    date: "2026-07-21",
    dek: "Our digital twin of Montauk Point looked like an early PS2 game. One day later it did not. The ladder: path tracing, a physical sky, procedural trees, and a living ocean.",
    hero: "/journal/ladder-v3.jpg",
    tags: ["blender", "3d", "cycles", "procedural", "digital-twin"],
    draft: false,
  },
  {
    slug: "we-measured-a-lighthouse-from-space",
    title: "We Measured a Lighthouse From Space",
    codename: "OPERATION: GROUND TRUTH",
    date: "2026-07-21",
    dek: "Survey documents said 110 feet 6 inches. Photogrammetry said 34 meters. A public lidar point cloud settled it to within one percent — and taught us a measurement doctrine.",
    hero: "/journal/radar-now.jpg",
    tags: ["lidar", "photogrammetry", "surveying", "blender", "data"],
    draft: false,
  },
];

export const publishedPosts = posts.filter((p) => !p.draft);
export const allPosts = posts;
export const getPost = (slug) => posts.find((p) => p.slug === slug);
