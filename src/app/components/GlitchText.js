'use client';

import { useState, useCallback } from 'react';

export default function GlitchText({ children, className = '' }) {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 400);
  }, []);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerGlitch}
    >
      <span className={isGlitching ? 'glitch-active' : ''}>{children}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-neon-cyan opacity-70"
            style={{
              animation: 'glitch-1 0.4s steps(2) forwards',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="absolute inset-0 text-neon-magenta opacity-70"
            style={{
              animation: 'glitch-2 0.4s steps(2) forwards',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}

      <style jsx>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, -1px); }
          40% { transform: translate(3px, 1px); }
          60% { transform: translate(-1px, -2px); }
          80% { transform: translate(2px, 1px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(3px, 1px); }
          40% { transform: translate(-3px, -1px); }
          60% { transform: translate(1px, 2px); }
          80% { transform: translate(-2px, -1px); }
          100% { transform: translate(0); }
        }
        .glitch-active {
          animation: glitch-base 0.4s steps(3) forwards;
        }
        @keyframes glitch-base {
          0% { transform: translate(0); }
          25% { transform: translate(-1px, 1px); }
          50% { transform: translate(1px, -1px); }
          75% { transform: translate(-1px, 0); }
          100% { transform: translate(0); }
        }
      `}</style>
    </span>
  );
}
