import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from './ui/AppLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';
import constants from '../lib/constants.json';

const { LINKEDIN_URL } = constants;

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t?.nav?.whatWeDo, href: '/#what-we-do' },
    { label: t?.nav?.contact, href: '/#contact' },
    { label: t?.nav?.theRole, href: '/careers' },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-2">
          <AppLogo size={36} />
          {/* <span className="font-sansation text-lg font-bold tracking-wide text-foreground">
            Xanguine
          </span> */}
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-2" aria-label={t?.nav?.footer}>
          {links?.map((l) => (
            <Link
              key={l?.href}
              to={l?.href}
              className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {l?.label}
            </Link>
          ))}
					{LINKEDIN_URL && (
						<a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
						>
							LinkedIn
						</a>
					)}
        </nav>

        <div className="flex flex-col gap-1 text-[15px] text-muted-foreground md:items-end">
          <LanguageSwitcher className="min-h-[44px]" />
          <span>{t?.footer?.copyright}</span>
          <span className="flex gap-4">
            <Link to="/privacy" className="inline-flex min-h-[44px] items-center transition-colors hover:text-foreground">
              {t?.footer?.privacy}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}