import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function LisbonClock() {
  const { t } = useLanguage();
  const [time, setTime] = useState('');
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Lisbon',
        hour12: false,
      });
      setTime(fmt?.format(now));
      const hour = Number(
        new Intl.DateTimeFormat('en-GB', { hour: '2-digit', hour12: false, timeZone: 'Europe/Lisbon' })?.format(now)
      );
      const day = new Intl.DateTimeFormat('en-GB', { weekday: 'short', timeZone: 'Europe/Lisbon' })?.format(now);
      setOpen(hour >= 9 && hour < 18 && day !== 'Sat' && day !== 'Sun');
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-secondary px-5 py-4">
      <div>
        <div className="font-sansation text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {t?.contact?.clockLabel}
        </div>
        <div className="mt-1 font-display text-3xl font-semibold text-foreground">{time || '--:--'}</div>
      </div>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <span className={`h-2 w-2 rounded-full ${open ? 'bg-success' : 'bg-muted-foreground'}`} />
        {open === null ? '' : open ? t?.contact?.teamOnline : t?.contact?.teamOffline}
      </div>
    </div>
  );
}