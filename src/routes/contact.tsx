import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MASIT Consulting" },
      { name: "description", content: "Contactez MASIT Consulting à Conakry : formulaire, email, WhatsApp. Réponse sous 24h ouvrées." },
      { property: "og:title", content: "Contact — MASIT Consulting" },
      { property: "og:description", content: "Parlons de votre projet." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().min(2, "Sujet requis").max(200),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    // Open mail client as a graceful fallback (no backend yet)
    const { name, email, subject, message } = result.data;
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:contact@masitconsulting.net?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance max-w-3xl">
            Parlons de votre projet
          </h1>
          <p className="mt-5 max-w-xl text-primary-foreground/80">
            Notre équipe vous répond sous 24 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card-soft space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <Field label="Sujet" name="subject" error={errors.subject} />
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                rows={6}
                maxLength={2000}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-elegant"
            >
              <Send size={16} /> Envoyer le message
            </button>
            {status === "sent" && (
              <p className="text-sm text-gold">Merci, votre client mail s'ouvre pour finaliser l'envoi.</p>
            )}
          </form>

          <aside className="space-y-4">
            <InfoCard icon={MapPin} title="Adresse">Conakry, Guinée</InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href="mailto:contact@masitconsulting.net" className="hover:text-gold">contact@masitconsulting.net</a>
            </InfoCard>
            <InfoCard icon={Phone} title="Téléphone">
              <a href="tel:+224620418295" className="hover:text-gold">+224 620 41 82 95</a>
            </InfoCard>
            <a
              href="https://wa.me/224620418295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#25D366] p-5 text-white shadow-card-soft hover:opacity-95"
            >
              <MessageCircle size={22} />
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-xs text-white/80">Discutons directement</div>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card-soft">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}
