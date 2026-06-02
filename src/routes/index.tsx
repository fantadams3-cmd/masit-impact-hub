import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { poles } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MASIT Consulting — Digital, IA, Audit & Formation en Guinée" },
      { name: "description", content: "Cabinet de conseil basé à Conakry : transformation digitale, intelligence artificielle, audit, formation et accompagnement des PME, ONG et écoles." },
      { property: "og:title", content: "MASIT Consulting — Digital, IA, Audit & Formation" },
      { property: "og:description", content: "Accompagner les organisations dans leur transformation digitale et leur performance." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" aria-hidden />
        <div className="relative mx-auto max-w-7xl container-px py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              <Sparkles size={14} /> Cabinet de conseil · Conakry, Guinée
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-balance md:text-6xl">
              Digital, IA, Audit & Formation <span className="text-gold">en Guinée</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 text-balance">
              Accompagner les organisations dans leur transformation digitale et leur performance —
              avec rigueur, innovation et impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-6 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
              >
                Nous contacter <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition backdrop-blur"
              >
                Découvrir nos services
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 max-w-xl gap-6 border-t border-primary-foreground/10 pt-8">
              {[
                { k: "5", v: "Pôles d'expertise" },
                { k: "50+", v: "Projets accompagnés" },
                { k: "100%", v: "Engagement client" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-bold text-gold">{s.k}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POLES */}
      <section className="bg-fade">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Nos pôles d'expertise</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl text-balance">
              Cinq domaines, une exigence : la performance de nos clients
            </h2>
            <p className="mt-4 text-muted-foreground">
              De la stratégie à l'implémentation, nous couvrons toute la chaîne de valeur pour PME,
              ONG, écoles, entreprises publiques et privées.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {poles.map(({ icon: Icon, title, tag, items }) => (
              <article
                key={title}
                className="group relative rounded-xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-gold/40"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24 grid gap-10 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Prêt à accélérer la transformation de votre organisation ?
            </h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl">
              Échangeons sur vos enjeux. Nous concevons des solutions sur mesure, ancrées dans le
              contexte africain et alignées sur les standards internationaux.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-7 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
            >
              Démarrer un projet <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
