import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, getPost } from "../posts";

// Explicit content map — registry law: posts.js is the source of truth,
// this maps slugs to their MDX modules.
const content = {
  "the-masons-arithmetic": () => import("../content/the-masons-arithmetic.mdx"),
  "the-lighthouse-brick-by-brick": () =>
    import("../content/the-lighthouse-brick-by-brick.mdx"),
  "ps2-to-photoreal-in-one-day": () =>
    import("../content/ps2-to-photoreal-in-one-day.mdx"),
  "we-measured-a-lighthouse-from-space": () =>
    import("../content/we-measured-a-lighthouse-from-space.mdx"),
};

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} // CRAVEN_OS`,
    description: post.dek,
    alternates: {
      canonical: `https://www.franciscraven.com/journal/${post.slug}`,
    },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: post.title,
      description: post.dek,
      images: [post.hero],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function JournalEntry({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const loader = content[slug];
  if (!post || !loader) notFound();
  const { default: Body } = await loader();

  return (
    <article className="mx-auto max-w-3xl">
      <header className="space-y-3 mb-10">
        <Link
          href="/journal"
          className="text-neon-green text-xs font-mono tracking-widest hover:text-neon-cyan transition-colors"
        >
          &lt; cd ../journal
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-2">
          <span className="text-neon-cyan tracking-widest">
            {post.codename}
          </span>
          <span className="text-text-muted">{post.date}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-text-primary tracking-wide leading-tight">
          {post.title}
        </h1>
        <p className="text-text-muted max-w-prose leading-relaxed">
          {post.dek}
        </p>
      </header>
      <Body />
      <footer className="mt-14 pt-6 border-t border-border">
        <p className="text-text-muted text-sm font-mono">
          &gt; end_of_entry — more in the{" "}
          <Link
            href="/journal"
            className="text-neon-green hover:text-neon-cyan"
          >
            journal
          </Link>
        </p>
      </footer>
    </article>
  );
}
