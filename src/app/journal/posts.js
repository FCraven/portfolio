// Journal registry — the journal's analog of resumeData.js.
// Every post is registered here; pages, sitemap, and SEO read from this.
// draft: true => excluded from sitemap + noindex (GSC hygiene).

const posts = [
  {
    slug: "the-masons-arithmetic",
    title: "The Mason's Arithmetic",
    codename: "OPERATION: TRUE COURSE",
    date: "2026-07-23",
    dek: "Our lighthouse's crown looked almost right — the most dangerous kind of wrong. An 1860 wash-profile scan, one section cut, and eighteen counted brick courses later, the frieze stands plumb.",
    hero: "/journal/crown-plumb.jpg",
    tags: ["blender", "digital-twin", "archives", "masonry", "procedural"],
    draft: false,
  },
  {
    slug: "the-lighthouse-brick-by-brick",
    title: "The Lighthouse, Brick by Brick",
    codename: "OPERATION: CROWN JEWEL",
    date: "2026-07-22",
    dek: "3,874 blocks, 3,700 bricks, a 48-pane lantern counted from photographs — then the National Archives' 1860 drawings arrived and the tower had to answer to its own paper trail.",
    hero: "/journal/crown-closeup.jpg",
    tags: ["blender", "digital-twin", "archives", "surveying", "procedural"],
    draft: false,
  },
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
