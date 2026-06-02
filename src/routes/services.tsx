import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { poles } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MASIT Consulting" },
      { name: "description", content: "IA, développement web, formation, audit & comptabilité, conseil stratégique : découvrez l'ensemble de nos services." },
      { property: "og:title", content: "Services — MASIT Consulting" },
      { property: "og:description", content: "IA, digital, audit, formation, conseil — toutes nos expertises." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Nos services</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance max-w-3xl">
            Une offre intégrée pour transformer votre organisation
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80">
            Cinq pôles complémentaires, mobilisés individuellement ou en synergie selon vos enjeux.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24 space-y-8">
          {poles.map(({ icon: Icon, title, tag, items }, idx) => (
            <article
              key={title}
              className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:p-12 shadow-card-soft md:grid-cols-[1fr_1.5fr] items-start"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                  0{idx + 1} · {tag}
                </span>
                <div className="mt-4 grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon size={26} />
                </div>
                <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">{title}</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 p-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span className="text-sm font-medium">{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-fade">
        <div className="mx-auto max-w-7xl container-px py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Un besoin spécifique ?</h2>
          <p className="mt-3 text-muted-foreground">Nous construisons des solutions sur mesure.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90"
          >
            Discuter de votre projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
