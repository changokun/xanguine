import React from 'react';
import Icon from './ui/AppIcon';
import AppImage from './ui/AppImage';
import { useLanguage } from './LanguageProvider';
import Reveal from './Reveal';
import constants from '../lib/constants.json';

const { LINKEDIN_JOB_POSTING_URL } = constants;

export default function OpenRoleSection() {
  const { t } = useLanguage();
  const r = t?.role;

  return (
    <section id="role" className="relative overflow-hidden bg-secondary pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="hairline-red absolute left-0 top-0 h-px w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {r?.eyebrow}
              </span>
              <h2 className="mt-3 text-section-xl font-display font-semibold text-foreground">
                {r?.title}
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">{r?.intro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {/* Pitch */}
          <Reveal className="lg:col-span-4">
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="blob-primary absolute -right-20 -top-20 h-72 w-72 opacity-40" aria-hidden="true" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {r?.pitchTitle}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {r?.pitchText}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {r?.pitchPoints?.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <Icon name="CheckIcon" size={18} className="mt-0.5 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Photo (row-span 2) */}
          <Reveal delay={100} className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-border bg-secondary">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_441b39006-1794579877487.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Process */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">{r?.hiringTitle}</h3>
              <ol className="mt-5 space-y-5">
                {r?.steps?.map((s, idx) => (
                  <li key={s?.t} className="grid grid-cols-[auto,1fr] items-baseline gap-4">
                    <span className="font-sansation text-sm font-bold text-primary">
                      {String(idx + 1)?.padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s?.t}</div>
                      <div className="text-sm text-muted-foreground">{s?.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* CTA */}
					{LINKEDIN_JOB_POSTING_URL && (
						<Reveal delay={200} className="lg:col-span-2">
							<div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-8">
								<div className="grain absolute inset-0" aria-hidden="true" />
								<div className="relative">
									<h3 className="font-display text-2xl font-semibold text-primary-foreground">
										{r?.ctaTitle}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-primary-foreground">{r?.ctaText}</p>
								</div>
								<a
									href={LINKEDIN_JOB_POSTING_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative mt-8 inline-flex min-h-[52px] items-center justify-between rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
									>
									{r?.ctaButton}
									<Icon name="ArrowUpRightIcon" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
								</a>
							</div>
						</Reveal>
					)}
        </div>
      </div>
    </section>
  );
}