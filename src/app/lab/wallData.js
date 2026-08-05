// Lab wall registry — the public layer of the SeaRaven workshop wall.
// Same registry law as resumeData/posts: the page renders whatever is
// declared here. Update this + /public/lab images to refresh the wall.

export const wallMeta = {
  station: "SeaRaven Foundry · Digital Montauk",
  datum: "41.0709 N · 71.8572 W · NAVD88 ft",
  updated: "2026-08-04",
  registrySubjects: 236,
};

export const onTheBench = [
  {
    tag: "BENCH-0 \u00b7 the fidelity gate \u00b7 indistinguishable-to-a-local",
    image: "/lab/crown_gate_v4.jpg",
    imageAlt:
      "Montauk crown at dusk \u2014 pale ribbed lantern ceiling, braced service catwalk, whitewashed drum",
    secondImage: "/lab/tower_west_calibrated.jpg",
    secondImageAlt:
      "West elevation bench \u2014 render-calibrated daymark band on the fixed instrument",
    note: "The bar: a render a Montauk local cannot tell from a photograph \u2014 nothing ships as product below it. The machinery: ninety-five numbered verdicts from a human eye, each cross-checked against the 1860s drawings before geometry moves; a 24-agent adversarial audit tracing every builder constant to its registry source; paint calibrated in a closed loop against reference photographs to 1.3%; a structural-similarity instrument that localizes every change. The drawings keep winning arguments \u2014 the walkway pattern the eye flagged turned out to be cast into the 1860 segment plan all along.",
  },

  {
    tag: "BENCH-1 \u00b7 the lighthouse itself \u00b7 block by brick",
    image: "/journal/keepers-bracket.jpg",
    imageAlt:
      "Montauk Point Lighthouse crown \u2014 brick frieze, pierced brackets, glass lantern",
    secondImage: "/lab/lighthouse_hero.jpg",
    secondImageAlt:
      "Full tower \u2014 3,874 sandstone blocks in octagonal coursed ashlar",
    note: "Built the way it was built: 3,874 sandstone blocks in coursed ashlar, 3,700 more bricks through the frieze and watch drum, a plumb frieze standing on eighteen counted brick courses with its panels framed in the bond itself, pierced scroll brackets carrying the walkway, a 48-pane lantern confirmed by the National Archives sheets \u2014 and windows placed by an 1853 keeper's survey, alternating with the spiral stair. Rebuilds from a bare clone with one command.",
  },

  {
    tag: "BENCH-2 · AN/FPS-35 radar · two era states",
    image: "/lab/radar_active.jpg",
    imageAlt: "Camp Hero radar prefab, active era — checkerboard mesh sail",
    secondImage: "/lab/radar_now.jpg",
    secondImageAlt: "Camp Hero radar prefab, present day — skeletal truss",
    note: "Documents-grade rebuild from declassified 1945 engineering sheets, archival photography, and a 2014 lidar audit. Doubly-curved reflector, waffle-rib tower, era toggle: in-service vs. as it stands today. Mast tip lands within one foot of the lidar return.",
  },
  {
    tag: "BENCH-3 · hero render pipeline · golden hour",
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
  {
    image: "/lab/crown_gate_v4.jpg",
    label: "V4 · THE GATE",
    caption: "calibrated color, audited geometry — the eye rules",
  },
];

export const phases = [
  {
    name: "0 · Truth registries",
    state: "done",
    note: "236 subjects, every value with source + confidence",
  },
  {
    name: "1 · Prefab workshop",
    state: "now",
    note: "radar at documents grade; lighthouse mid-campaign — 95 verdicts, adversarial audits",
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
