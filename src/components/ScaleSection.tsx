import React from 'react';
import Icon from './ui/AppIcon';
import { useLanguage } from './LanguageProvider';
import Reveal from './Reveal';

const cardIcons = ['UserIcon', 'BuildingStorefrontIcon', 'BuildingOffice2Icon'] as const;

export default function ScaleSection() {
  const { t } = useLanguage();
  const cards = t.scale.cards;

  return (
    <section id="what-we-do" className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-5 md:items-end">
            <div className="md:col-span-3">
              <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {t.scale.eyebrow}
              </span>
              <h2 className="mt-3 text-section-xl font-display font-semibold text-foreground">
                {t.scale.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
              {t.scale.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-accent">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/30 text-accent">
                    <Icon name={cardIcons[i] ?? 'UserIcon'} size={24} />
                  </div>
                  <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <ul className="mt-6 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                      <Icon name="CheckIcon" size={18} className="mt-0.5 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-primary bg-secondary p-8 md:p-10">
            <div className="blob-primary absolute -right-16 -top-16 h-64 w-64 opacity-50" aria-hidden="true" />
            <div className="relative flex flex-wrap lg:flex-nowrap gap-9 justify-start items-center">
              <div className="flex h-14 w-14 items-center justify-center ">
                <Icon name="ShopifyBag" size={64} />
              </div>
              <div className="flex-shrink">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {t.scale.shopifyTitle}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {t.scale.shopifyText}
                </p>
              </div>
              <div className="md:w-full flex-1">
								<a
									href="#contact"
									className="inline-flex min-h-[52px] min-w-[160px] items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground whitespace-nowrap"
								>
									{t.scale.shopifyCta}
								</a>
							</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
