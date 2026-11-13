import React from 'react';
import Icon from './ui/AppIcon';
import { useLanguage } from './LanguageProvider';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-background">
      <HeroCarousel />

      {/* Warm scrims for text contrast */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[28rem] w-[28rem] blob-primary opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:px-8 md:pb-24">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2 backdrop-blur-md">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            {t?.hero?.badge}
          </span>
        </div>

        <h1 className="max-w-5xl text-hero-xl font-display font-semibold text-foreground">
          {t?.hero?.line1}
          <br />
          <span className="text-accent">{t?.hero?.line2}</span>
          <br />
          {t?.hero?.line3}
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-foreground md:text-lg">
            {t?.hero?.intro}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {t?.hero?.ctaPrimary}
              <Icon
                name="ArrowUpRightIcon"
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <a
              href="/open-role"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-foreground/40 bg-background/30 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:bg-background/60"
            >
              {t?.hero?.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-foreground/20 pt-8 sm:grid-cols-3">
          {[
            { k: t?.hero?.basedInK, v: t?.hero?.basedInV },
            { k: t?.hero?.servingK, v: t?.hero?.servingV },
            { k: t?.hero?.platformsK, v: t?.hero?.platformsV },
          ]?.map((s) => (
            <div key={s?.k}>
              <div className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {s?.k}
              </div>
              <div className="mt-1 font-display text-xl text-foreground md:text-2xl">{s?.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}