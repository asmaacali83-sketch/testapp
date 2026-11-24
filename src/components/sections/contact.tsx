"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-sun">
            Say hello
          </p>
          <h2
            id="contact-title"
            className="mt-4 max-w-lg font-display text-5xl leading-[1.05] tracking-[-.04em] text-white sm:text-6xl"
          >
            Let&apos;s make
            <span className="block text-coral">something colorful.</span>
          </h2>
          <p className="mt-6 max-w-md leading-7 text-white/55">
            Have a project in mind? Use the form to draft a message. Contact
            details can be added here when they are available.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/65">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[.07] text-aqua">
              <MessageCircle size={18} aria-hidden="true" />
            </span>
            Contact details coming soon
          </div>
        </div>
        <Card className="border-white/10 bg-white/[.04] p-6 sm:p-9">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple/20 text-purple">
              <Mail size={19} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-white">Send a message</h3>
              <p className="text-xs text-white/50">
                This preview form does not send or store messages.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Name"
                  className="min-h-12 w-full rounded-xl border border-white/15 bg-ink/70 px-4 text-sm text-white placeholder:text-white/35 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/60"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="min-h-12 w-full rounded-xl border border-white/15 bg-ink/70 px-4 text-sm text-white placeholder:text-white/35 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/60"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                placeholder="Tell me a little about your project..."
                className="w-full resize-y rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm leading-6 text-white placeholder:text-white/35 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/60"
              />
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit">
                Preview message <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
              <p
                aria-live="polite"
                className="max-w-xs text-xs leading-5 text-white/50"
              >
                {submitted
                  ? "Your message looks ready, but this form is not connected and nothing was sent."
                  : "Fields are validated in your browser. Nothing is sent or saved."}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
