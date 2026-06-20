import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Briefcase, Target, Building2, GraduationCap, Users, BarChart3 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import poleConseil from "@/assets/pole-conseil.jpg";

export const Route = createFileRoute("/conseil-business")({
  head: () => ({
    meta: [
      { title: "Conseil & Business — MASIT Consulting" },
      { name: "description", content: "Études de marché, business development, project implementation et accompagnement PME / ONG / écoles. Découvrez nos interventions auprès d'AMACIF SA, GS Notre Mère et UHODA DIALLO." },
      { property: "og:title", content: "Conseil & Business — MASIT Consulting" },
      { property: "og:description", content: "Diagnostic, accompagnement stratégique et implémentation : nos références en Guinée." },
      { property: "og:image", content: poleConseil },
      { property: "og:url", content: "/conseil-business" },
    ],
    links: [{ rel: "canonical", href: "/conseil-business" }],
  }),
  component: ConseilBusiness,
});

const expertises = [
  {
    icon: BarChart3,
    title: "Études de marché (Market Research)",
    desc: "Collecte terrain, analyse concurrentielle, segmentation, tests de concept. Décisions appuyées par la donnée, pas par l'intuition.",
  },
  {
    icon: Target,
    title: "Business Development",
    desc: "Stratégie commerciale, structuration de l'offre, prospection, partenariats. Nous transformons votre potentiel en croissance mesurable.",
  },
  {
    icon: Briefcase,
    title: "Project Implementation",
    desc: "Cadrage, planification, pilotage et exécution. Du plan d'action au livrable, nous gérons vos projets jusqu'à l'impact réel.",
  },
  {
    icon: Users,
    title: "Accompagnement PME / ONG / Écoles",
    desc: "Diagnostic organisationnel, restructuration, coaching de direction, renforcement des équipes. Sur mesure pour chaque type de structure.",
  },
];

const projets = [
  {
    client: "AMACIF SA",
    secteur: "Microfinance",
    badge: "Diagnostic & restructuration",
    icon: Building2,
    mission:
      "Diagnostic organisationnel complet, revue des processus internes et accompagnement à la mise en place d'outils de pilotage. Renforcement du dispositif de contrôle interne et appui à la stratégie commerciale.",
    resultats: [
      "Cartographie des risques opérationnels actualisée",
      "Procédures internes formalisées et adoptées",
      "Tableaux de bord de pilotage mensuels mis en place",
    ],
  },
  {
    client: "GS Notre Mère",
    secteur: "Éducation",
    badge: "Accompagnement & structuration",
    icon: GraduationCap,
    mission:
      "Accompagnement stratégique du groupe scolaire : structuration administrative, digitalisation de la gestion pédagogique et formation des équipes encadrantes pour améliorer la qualité de service aux familles.",
    resultats: [
      "Organisation administrative restructurée",
      "Outils de suivi pédagogique digitalisés",
      "Équipes formées aux bonnes pratiques de gestion",
    ],
  },
  {
    client: "UHODA DIALLO",
    secteur: "Entreprise privée",
    badge: "Diagnostic & développement",
    icon: Briefcase,
    mission:
      "Diagnostic 360° de l'activité, identification des leviers de croissance et accompagnement à la mise en œuvre du plan de développement. Appui à la professionnalisation de la gestion.",
    resultats: [
      "Plan de développement validé et activé",
      "Processus de gestion structurés",
      "Pilotage financier renforcé",
    ],
  },
];

function ConseilBusiness() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-burgundy/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <Briefcase size={14} /> Pôle Conseil & Business
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Diagnostic, stratégie & <span className="bg-gold-gradient bg-clip-text text-transparent">exécution</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Nous accompagnons PME, ONG et écoles dans leur structuration, leur croissance et la
              réussite de leurs projets stratégiques — du diagnostic à l'impact mesurable.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-6 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
              >
                Discuter de mon projet <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" aria-hidden />
            <img
              src={poleConseil}
              alt="Équipe MASIT en mission de conseil"
              width={1280}
              height={896}
              className="relative h-full w-full rounded-2xl object-cover aspect-[4/5] ring-1 ring-gold/40 shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">Nos expertises</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
              Quatre axes d'intervention, une seule exigence : <span className="text-burgundy">l'impact</span>.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expertises.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-gold-gradient text-gold-foreground shadow-gold">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RÉFÉRENCES */}
      <section className="bg-cream/40 border-y border-border">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">Nos références</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
              Des missions menées sur le terrain, en Guinée.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Découvrez quelques interventions récentes auprès de structures que nous avons accompagnées
              dans leur diagnostic, leur restructuration et leur développement.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {projets.map(({ client, secteur, badge, icon: Icon, mission, resultats }) => (
              <article
                key={client}
                className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card-soft md:grid-cols-[1fr_1.6fr] items-start"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-burgundy/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-burgundy">
                    {badge}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-burgundy text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold">{client}</h3>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{secteur}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-burgundy">Notre mission</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mission}</p>
                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-burgundy">Résultats</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {resultats.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-burgundy" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-16 md:py-20 grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Vous avez un projet, une difficulté ou un cap à passer ?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl">
              Parlons-en. Diagnostic offert, recommandations claires, accompagnement sur mesure.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-7 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
