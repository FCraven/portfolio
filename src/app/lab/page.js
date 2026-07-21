import Image from "next/image";
import Link from "next/link";
import { wallMeta, onTheBench, ladder, phases, laws } from "./wallData";

export const metadata = {
  title: "LAB // CRAVEN_OS",
  description:
    "The live workshop wall: a survey-accurate digital twin of Montauk Point being built in public — current bench work, the render ladder, and build status.",
  alternates: { canonical: "https://www.franciscraven.com/lab" },
};

const stateStyles = {
  done: "text-neon-green border-neon-green/40",
  now: "text-yellow-400 border-yellow-400/40",
  next: "text-text-muted border-border",
};
const stateLabels = { done: "SHIPPED", now: "ACTIVE", next: "QUEUED" };

export default function LabPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-12">
      <div className="space-y-3">
        <p className="text-neon-green text-xs tracking-[0.3em] uppercase font-mono">
          &gt; tail -f /foundry/wall.log
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-text-primary tracking-wide">
          THE LAB
        </h1>
        <p className="text-text-muted max-w-prose">
          {wallMeta.station} — a survey-accurate digital twin of Montauk Point,
          built in public. This wall shows what is on the bench right now.
        </p>
        <p className="text-xs font-mono text-text-muted tabular-nums">
          {wallMeta.datum} · registry {wallMeta.registrySubjects} subjects ·
          updated {wallMeta.updated}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-sm tracking-[0.25em] text-text-muted uppercase">
          <span className="text-neon-green">▶</span> On the bench
        </h2>
        {onTheBench.map((item) => (
          <div
            key={item.tag}
            className="terminal-panel rounded-lg border border-border p-5 sm:p-6 flex flex-col sm:flex-row gap-5"
          >
            <div className="sm:w-[340px] shrink-0 space-y-3">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={680}
                height={680}
                className="rounded border border-border w-full h-auto"
              />
              {item.secondImage && (
                <Image
                  src={item.secondImage}
                  alt={item.secondImageAlt}
                  width={680}
                  height={680}
                  className="rounded border border-border w-full h-auto"
                />
              )}
            </div>
            <div className="space-y-2">
              <p className="text-yellow-400 text-xs font-mono tracking-widest uppercase">
                {item.tag}
              </p>
              <p className="text-text-secondary leading-relaxed text-sm">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-sm tracking-[0.25em] text-text-muted uppercase">
          The ladder — same shot, one day
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {ladder.map((rung) => (
            <div
              key={rung.label}
              className="terminal-panel rounded-lg border border-border overflow-hidden"
            >
              <Image
                src={rung.image}
                alt={rung.label}
                width={560}
                height={380}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="text-neon-green text-xs font-mono tracking-widest">
                  {rung.label}
                </p>
                <p className="text-text-muted text-xs mt-1">{rung.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm">
          The full story is in the{" "}
          <Link
            href="/journal/ps2-to-photoreal-in-one-day"
            className="text-neon-green hover:text-neon-cyan"
          >
            journal
          </Link>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-sm tracking-[0.25em] text-text-muted uppercase">
          Build status
        </h2>
        <div className="terminal-panel rounded-lg border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {phases.map((p) => (
                <tr
                  key={p.name}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="px-4 py-3 text-text-primary whitespace-nowrap">
                    {p.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[11px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border ${stateStyles[p.state]}`}
                    >
                      {stateLabels[p.state]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-muted">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t border-border pt-6 space-y-2">
        {laws.map((law) => (
          <p
            key={law}
            className="text-xs font-mono text-text-muted max-w-3xl leading-relaxed"
          >
            <span className="text-neon-green">§</span> {law}
          </p>
        ))}
      </div>
    </section>
  );
}
