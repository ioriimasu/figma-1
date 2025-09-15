'use client';
import { useState, useRef, useEffect } from 'react';
import { Home, User, Folder, Mail } from 'lucide-react';
import { GlitchTooltip } from './glitch-tooltip';

export function HamburgerNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="Open navigation"
        onClick={() => setOpen(v => !v)}
        className="group inline-flex items-center justify-center h-11 w-11 rounded-md bg-black/50 ring-1 ring-white/10 hover:ring-white/30 backdrop-blur"
      >
        <span className="burger" />
      </button>

      {open && (
        <nav className="nav-pop absolute right-0 mt-3 w-[230px] rounded-lg bg-black/55 ring-1 ring-white/15 backdrop-blur-lg p-2">
          <span className="pointer" aria-hidden />

          <ul className="grid grid-cols-4 gap-2">
            <GlitchTooltip text="The page you're already on, but sure, click again.">
              <a href="#hero" className="glitch nav-link" data-text="H0m3? R3@lly?">
                <Home className="h-6 w-6 text-white nav-icon" />
              </a>
            </GlitchTooltip>

            <GlitchTooltip text="Where I pretend to be humble and you pretend to care.">
              <a href="#about" className="glitch nav-link" data-text="Ab0ut: Th3 P@rt Y0u Sk!p">
                <User className="h-6 w-6 text-white nav-icon" />
              </a>
            </GlitchTooltip>

            <GlitchTooltip text="Actual things that shipped, not just screenshots.">
              <a href="#projects" className="glitch nav-link" data-text="Pr0j3ct$: N0t Jµ$t Id3@$">
                <Folder className="h-6 w-6 text-white nav-icon" />
              </a>
            </GlitchTooltip>

            <GlitchTooltip text="Your inbox will thank you. Eventually.">
              <a href="#contact" className="glitch nav-link" data-text="C0nt@ct: $umm0n Th3 C0d3 Gr3ml!n">
                <Mail className="h-6 w-6 text-white nav-icon" />
              </a>
            </GlitchTooltip>
          </ul>
        </nav>
      )}
    </div>
  );
}