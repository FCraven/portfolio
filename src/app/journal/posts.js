// Journal registry — the journal's analog of resumeData.js.
// Every post is registered here; pages, sitemap, and SEO read from this.
// draft: true => excluded from sitemap + noindex (GSC hygiene).

const posts = [
  {
    slug: "correct-about-the-wrong-thing",
    title: "Correct, About the Wrong Thing",
    codename: "OPERATION: MEASURE THE HARM",
    date: "2026-09-24",
    dek: "Five measurement instruments in a fine-art print-mastering pipeline were caught giving wrong answers in one day: a memory-pressure proxy that read 0 pages per second through a real thrash, an occupancy gauge that read 94% on a healthy bench, a swapouts trigger that fired at 278/s while every tile landed on time, an invention ratio whose own accepted master reads 5.2% against a 5% gate, and an event-driven watch for which a 98-minute hang emitted nothing to match. Each was replaced by a direct measurement of the harm — and then a human eye rejected a frame that had passed all five.",
    hero: null,
    tags: ["measurement", "comfyui", "print", "instruments", "debugging"],
    draft: false,
  },
  {
    slug: "the-road-film",
    title: "The Road Film",
    codename: "OPERATION: VANISHING POINT",
    date: "2026-08-20",
    dek: "A client site now opens as a four act film you scroll: 133 pre-rendered plates fall toward a city, 41 more stand the camera up out of the fall, and a live three.js corridor carries the last 55% of the page to a horizon. The hard cut between the two plate sequences is 1.72 of 255 wide, which is why it is allowed to be a cut.",
    hero: "/journal/road-film-corridor.jpg",
    tags: [
      "three-js",
      "react-three-fiber",
      "scroll-choreography",
      "blender",
      "client-work",
    ],
    draft: false,
  },
  {
    slug: "the-crown",
    title: "The Crown",
    codename: "OPERATION: EIGHTFOLD",
    date: "2026-07-25",
    dek: "The black glass-and-iron cap is a quarter of the tower and most of its identity. The 1860 sheet that governs it is torn exactly where it needed to be precise — so the lantern was re-solved from its base up, its lost faces recovered by the octagon's eightfold symmetry, every dimension logged to the sheet it came from.",
    hero: "/journal/crown-lantern-hero.jpg",
    tags: ["blender", "digital-twin", "archives", "ironwork", "procedural"],
    draft: false,
  },
  {
    slug: "the-keepers-hand",
    title: "The Keeper's Hand",
    codename: "OPERATION: SACRED S",
    date: "2026-07-23",
    dek: "The archives drew the bracket too small and the photographs shot it too oblique — so the final curve was drawn by hand in a live viewport, faired to compass arcs, and cast eight times in iron.",
    hero: "/journal/keepers-bracket.jpg",
    tags: ["blender", "digital-twin", "procedural", "mcp", "ironwork"],
    draft: false,
  },
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
