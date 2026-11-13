import React from 'react';
import { SUPPORTED_LANGUAGES } from '../lib/i18n';
import { useLanguage } from './LanguageProvider';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`flex items-center text-sm font-medium ${className}`}
    >
      {SUPPORTED_LANGUAGES.map((code, i) => {
        const active = code === language;
        return (
          <React.Fragment key={code}>
            {i > 0 && (
              <span className="px-2 text-foreground/30" aria-hidden="true">
                |
              </span>
            )}
            {active ? (
              <span aria-current="true" className="cursor-default font-bold text-foreground">
                {code.toUpperCase()}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setLanguage(code)}
                lang={code}
                className="text-foreground/50 transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                {code.toUpperCase()}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
