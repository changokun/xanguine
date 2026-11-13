import React, { useState } from 'react';
import Icon from './ui/AppIcon';
import { useLanguage } from './LanguageProvider';

interface FormState {
  name: string;
  email: string;
  business: string;
  message: string;
}

const initial: FormState = { name: '', email: '', business: '', message: '' };

const fieldClass =
  'w-full min-h-[48px] rounded-xl border border-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring';

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = f.errName;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = f.errEmail;
    if (values.message.trim().length < 10) next.message = f.errMessage;
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Backend connection point: send `values` to your form handler or email service here.
    setSent(true);
    setValues(initial);
  };

  if (sent) {
    return (
      <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground">
          <Icon name="CheckIcon" size={28} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{f.sentTitle}</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{f.sentText}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 min-h-[44px] rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-primary"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            {f.name}
          </label>
          <input id="name" name="name" value={values.name} onChange={onChange} className={fieldClass} placeholder={f.namePlaceholder} autoComplete="name" />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            {f.email}
          </label>
          <input id="email" name="email" type="email" value={values.email} onChange={onChange} className={fieldClass} placeholder={f.emailPlaceholder} autoComplete="email" />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="business" className="mb-2 block text-sm font-medium text-foreground">
          {f.business} <span className="text-muted-foreground">{f.optional}</span>
        </label>
        <input id="business" name="business" value={values.business} onChange={onChange} className={fieldClass} placeholder={f.businessPlaceholder} autoComplete="organization" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} min-h-[140px] py-3`}
          placeholder={f.messagePlaceholder}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="group mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {f.submit}
        <Icon name="ArrowRightIcon" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">{f.applyNote}</p>
    </form>
  );
}