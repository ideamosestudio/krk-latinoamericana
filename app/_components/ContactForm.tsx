"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { Language } from "./LanguageProvider";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ContactFormText = {
  conversation: string;
  name: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  help: string;
  helpPlaceholder: string;
  send: string;
  sending: string;
  sent: string;
  error: string;
  back: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ text, language }: { text: ContactFormText; language: Language }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || status === "sending") return;

    setStatus("sending");

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(`${assetBase}/api/contact.php`, {
        method: "POST",
        credentials: "same-origin",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, started_at: startedAt.current, language }),
      });

      if (!response.ok) throw new Error(`Contact request failed with ${response.status}`);

      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "success" ? text.sent : status === "error" ? text.error : "";

  return (
    <form className="contact-form" action={`${assetBase}/api/contact.php`} method="post" onSubmit={submitForm}>
      <label><span>{text.name}</span><input type="text" name="nombre" autoComplete="name" required maxLength={120} placeholder={text.namePlaceholder} /></label>
      <label><span>{text.companyLabel}</span><input type="text" name="empresa" autoComplete="organization" maxLength={160} placeholder={text.companyPlaceholder} /></label>
      <div className="form-row">
        <label><span>{text.email}</span><input type="email" name="email" autoComplete="email" required maxLength={254} placeholder={text.emailPlaceholder} /></label>
        <label><span>{text.phone}</span><input type="tel" name="telefono" autoComplete="tel" maxLength={50} placeholder="+54" /></label>
      </div>
      <label><span>{text.help}</span><textarea name="mensaje" required maxLength={4000} rows={3} placeholder={text.helpPlaceholder} /></label>
      <label className="form-honeypot" aria-hidden="true">
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-actions">
        <button type="submit" disabled={status === "sending"}>
          <span>{status === "sending" ? text.sending : text.send}</span><i>↗</i>
        </button>
        <a href="#top"><i>↓</i><span>{text.back}</span></a>
      </div>
      <p className={`form-status form-status-${status}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
