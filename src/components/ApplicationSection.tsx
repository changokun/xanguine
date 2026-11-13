import React from 'react';
import { useLanguage } from './LanguageProvider';
import Reveal from './Reveal';
import ApplicationForm from './ApplicationForm';

export default function ApplicationSection() {
  const { t } = useLanguage();
  const f = t?.role?.form;

  return (
    <section id="apply" className="relative overflow-hidden pb-20 pt-4 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Reveal>
          <div className="mb-8">
            <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {f?.eyebrow}
            </span>
            <h2 className="mt-3 text-section-xl font-display font-semibold text-foreground">
              {f?.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f?.intro}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}
