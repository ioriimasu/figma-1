"use client"

import { HamburgerNav } from '@/components/hamburger-nav'

export function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/bg.mp4" // place bg.mp4 in /public/
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="glitch text-5xl md:text-6xl font-extrabold text-white"
            data-text="SuR3, L3t'$ R3!nv3nt th3 Wh33l. Pr0p3rly Th!$ T!m3.">
          SuR3, L3t&apos;$ R3!nv3nt th3 Wh33l. Pr0p3rly Th!$ T!m3.
        </h1>

        <p className="glitch mt-4 max-w-2xl text-white/80"
           data-text="RF!D, $aa$, !ndu$tr!@l $y$tem$. B3cau$e Sudoku Wa$ Too Ea$y.">
          RF!D, $aa$, !ndu$tr!@l $y$tem$. B3cau$e Sudoku Wa$ Too Ea$y.
        </p>

        {/* CTA */}
        <div className="absolute bottom-10 left-8">
          <a href="#projects" className="cta-btn glitch" data-text="Sh0w M3 Th3 G00d$">
            Sh0w M3 Th3 G00d$
          </a>
        </div>
      </div>

      {/* Nav */}
      <div className="absolute right-4 top-4 z-20">
        <HamburgerNav />
      </div>
    </section>
  )
}