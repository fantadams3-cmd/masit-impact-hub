import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import founderImg from "@/assets/founder.jpg";
import poleConseil from "@/assets/pole-conseil.jpg";
import poleFormation from "@/assets/pole-formation.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { poles } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MASIT Consulting — Digital, IA, Audit & Formation en Guinée" },
      { name: "description", content: "Cabinet de conseil basé à Conakry : transformation digitale, intelligence artificielle, audit, formation et accompagnement des PME, ONG et écoles." },
      { property: "og:title", content: "MASIT Consulting — Digital, IA, Audit & Formation" },
      { property: "og:description", content: "Accompagner les organisations dans leur transformation digitale et leur performance." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* MOT DU FONDATEUR — opening */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-burgundy/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl container-px py-16 md:py-24 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-25 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-gold/40 shadow-elegant">
              <img
                src={founderImg}
                alt="Fondateur & Gérant de MASIT Consulting"
                width={1080}
                height={1440}
                className="h-full w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent p-5">
                <div className="text-xs uppercase tracking-widest text-gold">Fondateur & Gérant</div>
                <div className="font-display text-lg font-semibold">MASIT Consulting</div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
              <Quote size={14} /> Le mot du Fondateur
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              « Mettre l'expertise et l'innovation
              <span className="block bg-gold-gradient bg-clip-text text-transparent">au service de l'Afrique. »</span>
            </h2>
            <p className="mt-6 text-primary-foreground/85 leading-relaxed max-w-xl">
              Chez MASIT Consulting, nous croyons qu'une Afrique performante se construit par des
              organisations bien outillées, des dirigeants bien accompagnés et des équipes bien
              formées. Nous mettons notre rigueur, notre exigence et notre passion au service de
              votre transformation — avec un engagement total à vos côtés.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <div>
                <div className="font-display text-lg font-semibold">Le Fondateur</div>
                <div className="text-sm text-primary-foreground/70">Conakry · Guinée</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO — image-led split */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-burgundy/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
              <Sparkles size={14} /> Cabinet de conseil · Conakry, Guinée
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">
              Digital, IA, Audit & Formation
              <span className="block bg-gold-gradient bg-clip-text text-transparent">en Guinée</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 text-balance">
              Tout pour votre entreprise : <span className="text-gold font-semibold">technologie</span>,
              accompagnement, <span className="text-gold font-semibold">gestion & audit</span>,
              <span className="text-gold font-semibold"> solutions IA</span>, formation et conseil —
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
                className="inline-flex h-12 items-center rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition backdrop-blur"
              >
                Découvrir nos services
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 max-w-xl gap-6 border-t border-primary-foreground/15 pt-8">
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

          {/* Hero image card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-gold/40 shadow-elegant">
              <img
                src={heroImg}
                alt="Direction MASIT Consulting à Conakry"
                width={1920}
                height={1280}
                className="h-full w-full object-cover aspect-[4/5] lg:aspect-[5/6]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent p-6">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <div className="h-10 w-1 bg-gold rounded-full" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold">Excellence</div>
                    <div className="font-display text-lg font-semibold">Standards internationaux, ancrage africain</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card text-card-foreground rounded-xl shadow-burgundy px-5 py-4 max-w-[220px]">
              <div className="text-xs uppercase tracking-widest text-burgundy font-semibold">Notre promesse</div>
              <div className="mt-1 font-display text-sm font-bold">Conseil d'élite, à l'échelle africaine.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER BAND — Devex */}
      <section className="relative border-y border-border bg-cream/50">
        <div className="mx-auto max-w-7xl container-px py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-burgundy/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-burgundy">
              Partenariat
            </span>
            <p className="font-display text-base md:text-lg font-semibold">
              En collaboration avec <span className="text-burgundy">Devex</span> — entreprise spécialisée en sondage & études terrain.
            </p>
          </div>
          <span className="text-xs text-muted-foreground">Données fiables · Insights actionnables</span>
        </div>
      </section>


      {/* POLES — image-rich cards */}
      <section className="relative">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">Nos pôles d'expertise</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl text-balance">
              Cinq domaines, une exigence : <span className="text-burgundy">la performance</span> de nos clients
            </h2>
            <p className="mt-4 text-muted-foreground">
              De la stratégie à l'implémentation, nous couvrons toute la chaîne de valeur pour PME,
              ONG, écoles, entreprises publiques et privées.
            </p>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {poles.map(({ icon: Icon, title, tag, items, image }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/85 via-burgundy/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-burgundy">
                    {tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-gradient text-gold-foreground shadow-gold">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary-foreground">{title}</h3>
                  </div>
                </div>
                <ul className="p-6 space-y-2.5 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-burgundy" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE BAND */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gold/20 blur-2xl" aria-hidden />
            <img
              src={poleConseil}
              alt="Équipe MASIT en réunion stratégique"
              width={1280}
              height={896}
              loading="lazy"
              className="relative rounded-2xl object-cover aspect-[4/3] w-full ring-1 ring-gold/40 shadow-elegant"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Notre approche</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
              Une expertise terrain, des résultats mesurables.
            </h2>
            <p className="mt-5 text-primary-foreground/80 leading-relaxed">
              Nous combinons les standards internationaux du conseil avec une connaissance fine du
              tissu économique africain. Chaque mission est co-construite avec nos clients pour
              générer un impact durable.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Méthodes éprouvées et benchmarks internationaux",
                "Équipes pluridisciplinaires basées à Conakry",
                "Livrables exécutables, pas de présentations creuses",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative">
        <div className="mx-auto max-w-5xl container-px py-20 md:py-24">
          <div className="relative rounded-3xl bg-card p-10 md:p-14 shadow-elegant border border-border overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gold/20 blur-3xl rounded-full" aria-hidden />
            <Quote size={48} className="text-burgundy/30" />
            <p className="mt-4 font-display text-xl md:text-2xl leading-relaxed text-balance">
              « MASIT Consulting a transformé notre manière de piloter l'organisation. Une équipe
              rigoureuse, à l'écoute, qui livre concrètement. »
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={poleFormation}
                alt="Témoignage client"
                width={64}
                height={64}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-gold"
              />
              <div>
                <div className="font-semibold">Direction Générale</div>
                <div className="text-sm text-muted-foreground">Institution partenaire · Conakry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-95" aria-hidden />
        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-24 grid gap-10 md:grid-cols-[1.5fr_1fr] items-center text-primary-foreground">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Prêt à accélérer la transformation de votre organisation ?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl">
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
