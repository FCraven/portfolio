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
    code: (props) => (
      <code
        className="bg-black/50 border border-white/10 rounded px-1.5 py-0.5 text-neon-green text-[0.85em]"
        {...props}
      />
    ),
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
