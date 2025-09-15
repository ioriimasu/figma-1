'use client';
import { useState } from 'react';

interface GlitchTooltipProps {
  children: React.ReactNode;
  text: string;
}

export function GlitchTooltip({ children, text }: GlitchTooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50">
          <span className="relative px-3 py-1 text-xs font-mono text-white bg-black/70 rounded-md border border-green-400/40 whitespace-nowrap animate-glitch">
            {text}
            <span className="glitch-pointer" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  );
}