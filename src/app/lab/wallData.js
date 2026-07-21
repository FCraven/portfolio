// Lab wall registry — the public layer of the SeaRaven workshop wall.
// Same registry law as resumeData/posts: the page renders whatever is
// declared here. Update this + /public/lab images to refresh the wall.

export const wallMeta = {
  station: "SeaRaven Foundry · Digital Montauk",
  datum: "41.0709 N · 71.8572 W · NAVD88 ft",
  updated: "2026-07-21",
  registrySubjects: 27,
};

export const onTheBench = [
  {
    tag: "BENCH-0 \u00b7 the lighthouse itself \u00b7 block by block",
    image: "/lab/lighthouse_hero.jpg",
    imageAlt: "Montauk Point Lighthouse prefab \u2014 4,192 individual masonry blocks",
    note: "The crown jewel, built the way it was built: 4,192 individual sandstone blocks laid in octagonal coursed ashlar to the 1860 specification, true window openings through eight-foot walls, 137 iron steps spiraling inside, and the lantern ironwork seated on a lidar-verified datum.",
  },

  {
    tag: "BENCH-1 · AN/FPS-35 radar · two era states",
    image: "/lab/radar_active.jpg",
    imageAlt: "Camp Hero radar prefab, active era — checkerboard mesh sail",
    secondImage: "/lab/radar_now.jpg",
    secondImageAlt: "Camp Hero radar prefab, present day — skeletal truss",
    note: "Documents-grade rebuild from declassified 1945 engineering sheets, archival photography, and a 2014 lidar audit. Doubly-curved reflector, waffle-rib tower, era toggle: in-service vs. as it stands today. Mast tip lands within one foot of the lidar return.",
  },
  {
    tag: "BENCH-2 · hero render pipeline · golden hour",
    image: "/journal/ladder-v3.jpg",
    imageAlt: "Path-traced golden hour render of the Montauk Point Lighthouse",
    note: "The finals chain: path tracing, spectral atmosphere, procedural vegetation, textured ocean. Next rungs on the ladder: cloud systems, breaking surf at the revetment toe, film grade.",
  },
];

export const ladder = [
  {
    image: "/journal/ladder-v1.jpg",
    label: "V1 · CYCLES BASELINE",
    caption: "path-traced light replaces real-time flatness",
  },
  {
    image: "/journal/ladder-v2.jpg",
    label: "V2 · SKY + TREES",
    caption: "spectral atmosphere; procedural pines on the skyline",
  },
  {
    image: "/journal/ladder-v3.jpg",
    label: "V3 · LIVING OCEAN",
    caption: "the mirror broken — textured evening water",
  },
];

export const phases = [
  {
    name: "0 · Truth registries",
    state: "done",
    note: "27 subjects, every value with source + confidence",
  },
  {
    name: "1 · Prefab workshop",
    state: "now",
    note: "radar rebuilt to documents grade; lighthouse next",
  },
  {
    name: "2 · Assembler",
    state: "next",
    note: "one command rebuilds the world from source",
  },
  {
    name: "3 · Quality gates",
    state: "now",
    note: "render galleries, measurement checks",
  },
  {
    name: "4 · Full lidar",
    state: "next",
    note: "1 m bare-earth terrain + canopy heights",
  },
  {
    name: "5 · Simulation layer",
    state: "done",
    note: "tides · waves · 180 years of storms · eras 1842–2023",
  },
];

export const laws = [
  "MEASUREMENT — lidar beats photogrammetry beats drawings beats photos beats press. Every number lives in a registry with its source.",
  "SCOPE — hero, survey, backdrop. No hand-built geometry without a shot that needs it.",
  "ERAS — history is gated: the coastal guns and the radar never share a frame.",
];
