import Link from "next/link";
import Image from "next/image";
import { publishedPosts } from "./posts";

export const metadata = {
  title: "JOURNAL // CRAVEN_OS",
  description:
    "Build logs from SeaRaven Studios: digital twins, survey-grade 3D, procedural systems, and the methodology behind them.",
  alternates: { canonical: "https://www.franciscraven.com/journal" },
};

export default function JournalPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <div className="space-y-3">
        <p className="text-neon-green text-xs tracking-[0.3em] uppercase font-mono">
          &gt; cat /var/log/build.log
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-text-primary tracking-wide">
          JOURNAL
        </h1>
        <p className="text-text-muted max-w-prose">
          Build logs from the workshop — digital twins, survey-grade 3D,
          procedural systems, and the mistakes that taught us the methodology.
        </p>
      </div>

      <div className="space-y-8">
        {publishedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="terminal-panel block group overflow-hidden rounded-lg border border-border hover:border-neon-green/50 transition-colors"
          >
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src={post.hero}
                alt={post.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="text-neon-cyan tracking-widest">
                  {post.codename}
                </span>
                <span className="text-text-muted">{post.date}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl text-text-primary group-hover:text-neon-green transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                {post.dek}
              </p>
              <p className="text-neon-green text-xs font-mono pt-1">
                &gt; read_entry --full ▮
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
