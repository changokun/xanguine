import React from 'react';
import Icon from './ui/AppIcon';
import { useLanguage } from './LanguageProvider';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden pb-24 pt-16 md:pt-20">
      <div className="hairline-red absolute left-0 top-0 h-px w-full" aria-hidden="true" />
      <div className="blob-primary pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-8">
              <div>
                <span className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {t?.contact?.eyebrow}
                </span>
                <h2 className="mt-3 text-section-xl font-display font-semibold text-foreground">
                  {t?.contact?.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {t?.contact?.intro}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}