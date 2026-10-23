export function useMDXComponents(components) {
  return {
    h2: (props) => (
      <h2
        className="font-display text-xl sm:text-2xl text-neon-green tracking-wide mt-10 mb-4"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-text-secondary leading-relaxed mb-5 max-w-prose"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="list-disc list-inside text-text-secondary space-y-2 mb-5 max-w-prose"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    strong: (props) => (
      <strong className="text-text-primary font-semibold" {...props} />
    ),
    em: (props) => <em className="text-neon-cyan not-italic" {...props} />,
    a: (props) => (
      <a
        className="text-neon-green hover:text-neon-cyan underline underline-offset-4 decoration-neon-green/40 hover:decoration-neon-cyan transition-colors"
        {...props}
      />
    ),
    // Fenced blocks arrive from the MDX compiler as <pre><code class="language-*">.
    // The <pre> owns the scroll container so a long line never scrolls the page
    // body on mobile; the inner <code> drops the inline chip styling below.
    pre: (props) => (
      <pre
        className="bg-black/50 border border-white/10 rounded-lg p-4 my-6 overflow-x-auto text-[0.8rem] leading-relaxed text-text-primary"
        {...props}
      />
    ),
    code: ({ className, ...props }) => {
      const isBlock =
        typeof className === "string" && className.includes("language-");
      return isBlock ? (
        <code className={className} {...props} />
      ) : (
        <code
          className="bg-black/50 border border-white/10 rounded px-1.5 py-0.5 text-neon-green text-[0.85em]"
          {...props}
        />
      );
    },
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-neon-green/60 pl-4 my-6 text-text-primary/90 italic max-w-prose"
        {...props}
      />
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="rounded border border-white/10 my-6 w-full max-w-3xl"
        loading="lazy"
        {...props}
      />
    ),
    ...components,
  };
}
