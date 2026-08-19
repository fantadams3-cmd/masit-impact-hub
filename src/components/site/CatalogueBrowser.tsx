import { useState } from "react";
import { ChevronDown, Sparkles, Tag, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { domaines, formatPrice, type Formation } from "./catalogue";
import { DevisDialog } from "./DevisDialog";

export function CatalogueBrowser() {
  const [activeDomain, setActiveDomain] = useState(domaines[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [devis, setDevis] = useState<{ title: string; domaine: string } | null>(null);

  const domain = domaines.find((d) => d.id === activeDomain) ?? domaines[0];

  return (
    <div>
      {/* Domain tabs */}
      <div className="flex flex-wrap gap-2">
        {domaines.map((d) => {
          const active = d.id === domain.id;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setActiveDomain(d.id);
                setOpenIndex(0);
              }}
              className={`rounded-full border px-5 text-sm font-semibold transition ${
                active
                  ? "border-transparent bg-burgundy text-primary-foreground shadow-burgundy"
                  : "border-border bg-card text-foreground hover:border-burgundy/40"
              }`}
            >
              {d.name}
              <span className={`ml-2 text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {d.formations.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Formation list */}
      <div className="mt-8 space-y-3">
        {domain.formations.map((f, i) => (
          <FormationRow
            key={f.title}
            formation={f}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            onDevis={() => setDevis({ title: f.title, domaine: domain.name })}
          />
        ))}
      </div>

      <DevisDialog
        open={devis !== null}
        onOpenChange={(v) => !v && setDevis(null)}
        formationTitle={devis?.title ?? ""}
        domaine={devis?.domaine ?? ""}
      />
    </div>
  );
}

function FormationRow({
  formation,
  open,
  onToggle,
  onDevis,
}: {
  formation: Formation;
  open: boolean;
  onToggle: () => void;
  onDevis: () => void;
}) {
  const { title, description, price, duration, programme, custom } = formation;
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-card shadow-card-soft transition ${
        custom ? "border-gold/50 bg-gold/5" : "border-border"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-5 text-left md:p-6"
      >
        <div className="min-w-0 flex-1">
          {custom && (
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-0.5 text-[11px] font-bold text-gold-foreground">
              <Sparkles size={12} /> Sur mesure
            </span>
          )}
          <h3 className="font-display text-lg font-bold leading-snug md:text-xl">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                price === null
                  ? "border border-burgundy/30 bg-burgundy/10 text-burgundy"
                  : "bg-gold-gradient text-gold-foreground shadow-gold"
              }`}
            >
              <Tag size={12} /> {formatPrice(price)}
            </span>
            {duration && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3 py-1 text-xs font-semibold text-burgundy">
                <Clock size={12} /> {duration}
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-burgundy transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-6 pt-5 md:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Programme de la formation
          </div>
          <ul className="mt-3 space-y-2">
            {programme.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-lg border border-border bg-background p-3 text-sm">
                <ArrowRight size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {price === null ? (
            <div className="mt-5 rounded-xl border border-burgundy/20 bg-burgundy/5 p-4">
              <p className="text-sm">
                <span className="font-semibold">Tarif sur demande.</span> Faites une demande de
                devis&nbsp;: nous vous répondons via WhatsApp{" "}
                <span className="font-semibold">662&nbsp;40&nbsp;05&nbsp;32</span> ou par email.
              </p>
              <button
                type="button"
                onClick={onDevis}
                className="mt-4 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground hover:opacity-90"
              >
                <MessageCircle size={18} /> Demander un devis
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onDevis}
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground hover:opacity-90"
            >
              S'inscrire / demander une session <ArrowRight size={16} />
            </button>
          )}
        </div>
      )}
    </article>
  );
}
