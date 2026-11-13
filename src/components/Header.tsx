import React, { useEffect, useState } from 'react';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

const LINKEDIN_URL = 'https://www.linkedin.com/jobs/';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t?.nav?.whatWeDo, href: '/#what-we-do' },
    { label: t?.nav?.contact, href: '/#contact' },
    { label: t?.nav?.theRole, href: '/open-role' },
  ];

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-black/60 backdrop-blur-md backdrop-brightness-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <a href="/" className="flex shrink-0 items-center gap-2" aria-label={t?.nav?.homeLabel}>
          <AppLogo size={36} />
          <span className="font-sansation text-xl font-bold tracking-wide text-foreground">
            Xanguine
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t?.nav?.primary}>
          {navLinks?.map((l) => (
            <a
              key={l?.href}
              href={l?.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l?.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 md:gap-5">
          <LanguageSwitcher />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-flex"
          >
            {t?.nav?.hiring}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t?.nav?.closeMenu : t?.nav?.openMenu}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background px-4 pb-6 pt-2 shadow-xl md:hidden">
          <nav className="flex flex-col" aria-label={t?.nav?.mobile}>
            {navLinks?.map((l) => (
              <a
                key={l?.href}
                href={l?.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-border font-display text-xl text-foreground"
              >
                {l?.label}
              </a>
            ))}
          </nav>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-[52px] items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground"
          >
            {t?.nav?.viewRole}
          </a>
        </div>
      )}
    </header>
  );
}