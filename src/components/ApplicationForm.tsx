import React, { useRef, useState } from 'react';
import Icon from './ui/AppIcon';
import { useLanguage } from './LanguageProvider';
import { submitApplicationForm, ApplicationFormData } from '../lib/api';

interface FormState extends ApplicationFormData {
  // phone is already in ApplicationFormData
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  file?: string;
}

const initial: FormState = { name: '', email: '', phone: '', message: '' };
const MAX_FILE_BYTES = 5 * 1024 * 1024;

const fieldClass =
  'w-full min-h-[48px] rounded-xl border border-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring';

export default function ApplicationForm() {
  const { t } = useLanguage();
  const f = t.role.form;
  const [values, setValues] = useState<FormState>(initial);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] ?? null;
    if (!picked) {
      setFile(null);
      return;
    }
    const isPdf = picked.type === 'application/pdf' || picked.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      setFile(null);
      setErrors((prev) => ({ ...prev, file: f.errFileType }));
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    if (picked.size > MAX_FILE_BYTES) {
      setFile(null);
      setErrors((prev) => ({ ...prev, file: f.errFileSize }));
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    setErrors((prev) => ({ ...prev, file: undefined }));
    setFile(picked);
  };

  const clearFile = () => {
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    const next: FormErrors = {};
		values.message = values.message || '';
    if (!values.name.trim()) next.name = f.errName;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = f.errEmail;
    // if (values.phone.replace(/[^\d]/g, '').length < 7) next.phone = f.errPhone;
    if (values.message.trim().length < 10) next.message = f.errMessage;
    // if (!file) next.file = f.errFileRequired;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    try {
      await submitApplicationForm(values, file);
      setSent(true);
      setValues(initial);
      clearFile();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : f.submitError || 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground">
          <Icon name="CheckIcon" size={28} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{f.sentTitle}</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{f.sentText}</p>
        {/* <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 min-h-[44px] rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-primary"
        >
          {f.sendAnother}
        </button> */}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-name" className="mb-2 block text-sm font-medium text-foreground">
            {f.name}
          </label>
          <input id="app-name" name="name" value={values.name} onChange={onChange} className={fieldClass} autoComplete="name" />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="app-email" className="mb-2 block text-sm font-medium text-foreground">
            {f.email}
          </label>
          <input id="app-email" name="email" type="email" value={values.email} onChange={onChange} className={fieldClass} autoComplete="email" />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="app-phone" className="mb-2 block text-sm font-medium text-foreground">
          {f.phone}
        </label>
        <input id="app-phone" name="phone" type="tel" value={values.phone} onChange={onChange} className={fieldClass} autoComplete="tel" />
        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
      </div>
      <div className="mt-5">
        <label htmlFor="app-message" className="mb-2 block text-sm font-medium text-foreground">
          {f.message}
        </label>
        <textarea
          id="app-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} min-h-[140px] py-3`}
          placeholder={f.messagePlaceholder}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>
      <div className="mt-5">
        <label htmlFor="app-file" className="mb-2 block text-sm font-medium text-foreground">
          {f.file}
        </label>
        <input
          ref={fileRef}
          id="app-file"
          name="file"
          type="file"
          accept="application/pdf,.pdf"
          onChange={onFileChange}
          className="sr-only"
        />
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="app-file"
            className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-input px-4 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <Icon name="ArrowUpTrayIcon" size={18} />
            {file ? f.replaceFile : f.chooseFile}
          </label>
          {file && (
            <span className="inline-flex min-h-[44px] items-center gap-2 text-sm text-foreground">
              <span className="max-w-[200px] truncate sm:max-w-xs">{file.name}</span>
              <button
                type="button"
                onClick={clearFile}
                aria-label={f.removeFile}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon name="XMarkIcon" size={16} />
              </button>
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{f.fileHint}</p>
        {errors.file && <p className="mt-1 text-sm text-destructive">{errors.file}</p>}
      </div>
      {submitError && (
        <p className="mt-1 text-sm text-destructive">{submitError}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? f.submitting || 'Sending...' : f.submit}
        <Icon name="ArrowRightIcon" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
