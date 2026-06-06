import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  Database,
  BarChart3,
  Code2,
  GraduationCap,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      { title: "Catalogue de Formations — MASIT Consulting" },
      {
        name: "description",
        content:
          "Parcours Data Analyst : Excel, SQL, Data Visualisation (Metabase/Tableau) et Python Pandas. Téléchargez notre catalogue PDF.",
      },
      { property: "og:title", content: "Catalogue de Formations — MASIT Consulting" },
      {
        property: "og:description",
        content:
          "4 modules progressifs pour devenir Data Analyst. Programmes, durées et tarifs.",
      },
      { property: "og:url", content: "/formations" },
    ],
    links: [{ rel: "canonical", href: "/formations" }],
  }),
  component: Formations,
});

type Module = {
  num: number;
  icon: typeof FileSpreadsheet;
  tag: string;
  title: string;
  duration: string;
  price: string;
  why: string;
  content: string[];
  trap: string;
};

const modules: Module[] = [
  {
    num: 1,
    icon: FileSpreadsheet,
    tag: "Fondations",
    title: "Excel / Google Sheets + Statistiques de base",
    duration: "2 semaines",
    price: "1 500 000 GNF",
    why: "90% des entreprises testent encore sur Excel. Vous devez maîtriser moyenne, médiane, pourcentages, graphiques — avant d'écrire la moindre ligne de code.",
    content: [
      "Tableaux, formules essentielles, références absolues / relatives",
      "Tableaux croisés dynamiques & filtres avancés",
      "Statistiques descriptives : moyenne, médiane, écart-type",
      "Graphiques pertinents et storytelling visuel",
      "Cas pratique : tableau de bord commercial sur Google Sheets",
    ],
    trap: "Sauter cette étape, c'est ne jamais comprendre ce que calcule réellement votre code Python.",
  },
  {
    num: 2,
    icon: Database,
    tag: "Le langage du métier",
    title: "SQL Fondamental",
    duration: "4 semaines",
    price: "2 500 000 GNF",
    why: "C'est 80% du quotidien d'un Data Analyst. Sans SQL, vous ne pouvez rien extraire. MySQL d'abord, car c'est le plus simple pour démarrer.",
    content: [
      "SELECT, WHERE, ORDER BY, LIMIT — les requêtes de base",
      "JOIN, GROUP BY, HAVING, sous-requêtes",
      "Fonctions d'agrégation et fonctions de fenêtre",
      "Optimisation simple et lecture d'un plan d'exécution",
      "Projet : extraction de KPI réels sur une base e-commerce",
    ],
    trap: "Sans SQL, impossible d'alimenter Python ou Metabase — vous restez bloqué sur des CSV figés.",
  },
  {
    num: 3,
    icon: BarChart3,
    tag: "Montrer les résultats",
    title: "Data Visualisation & BI — Metabase / Tableau",
    duration: "3 semaines",
    price: "2 000 000 GNF",
    why: "Un analyste qui ne sait pas montrer ses résultats n'existe pas. Metabase est gratuit et très demandé sur le marché — Tableau complète pour le haut de gamme.",
    content: [
      "Connexion à une base SQL et modélisation de questions",
      "Dashboards Metabase : filtres, paramètres, partage",
      "Tableau Desktop : LOD, calculs, design exécutif",
      "Bonnes pratiques de design : choix de graphiques, couleurs, hiérarchie",
      "Projet : tableau de bord direction d'une PME",
    ],
    trap: "Coder sans savoir restituer, c'est livrer un travail invisible pour les métiers.",
  },
  {
    num: 4,
    icon: Code2,
    tag: "Analyse avancée",
    title: "Python & Pandas",
    duration: "5 semaines",
    price: "3 500 000 GNF",
    why: "Une fois que vous savez extraire avec SQL, Python sert à nettoyer, transformer et analyser plus loin — sur des volumes que Excel ne tient plus.",
    content: [
      "Python : bases du langage orientées data",
      "Pandas : Series, DataFrame, indexation, merge, groupby",
      "Nettoyage de données réelles & gestion des valeurs manquantes",
      "Visualisation avec Matplotlib / Seaborn / Plotly",
      "Projet final : analyse complète d'un dataset métier",
    ],
    trap: "Pandas sans SQL en amont = travailler sur des CSV de 100 lignes, sans valeur business.",
  },
];

function Formations() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-burgundy/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
              <GraduationCap size={14} /> Catalogue 2026
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Parcours
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                Data Analyst
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
              Quatre modules progressifs pensés pour les vrais débutants. De
              l'Excel maîtrisé jusqu'à Python Pandas — sans brûler les étapes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/catalogue-formations-masit.pdf"
                download
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-6 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
              >
                <Download size={16} /> Télécharger le catalogue PDF
              </a>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition backdrop-blur"
              >
                S'inscrire à une session
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "4", v: "Modules" },
              { k: "14", v: "Semaines" },
              { k: "12", v: "Max / groupe" },
              { k: "100%", v: "Pratique" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-gold/30 bg-primary-foreground/5 backdrop-blur p-5"
              >
                <div className="font-display text-3xl font-bold text-gold">{s.k}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl container-px py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
            La bonne progression
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
            Pourquoi cet ordre&nbsp;? Parce que <span className="text-burgundy">l'ordre fait tout.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pour un débutant, démarrer par Airflow + AWS, c'est se noyer avant de
            savoir faire un <code className="px-1.5 py-0.5 rounded bg-muted text-sm">GROUP BY</code>.
            Notre parcours respecte la logique métier réelle d'un Data Analyst.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-fade">
        <div className="mx-auto max-w-7xl container-px py-12 md:py-20 space-y-10">
          {modules.map(({ num, icon: Icon, tag, title, duration, price, why, content, trap }) => (
            <article
              key={num}
              className="relative grid gap-8 rounded-2xl border border-border bg-card p-7 md:p-10 shadow-card-soft md:grid-cols-[0.9fr_1.1fr] items-start overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gold-gradient" aria-hidden />
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-burgundy text-primary-foreground shadow-burgundy">
                    <Icon size={26} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Module 0{num} · {tag}
                    </div>
                    <h3 className="mt-1 font-display text-xl md:text-2xl font-bold leading-tight">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 text-burgundy px-3 py-1 text-xs font-semibold">
                    <Clock size={13} /> {duration}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gold-gradient text-gold-foreground px-3 py-1 text-xs font-bold shadow-gold">
                    {price}
                  </span>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Pourquoi cet ordre&nbsp;: </span>
                  {why}
                </p>
                <div className="mt-5 rounded-lg border border-burgundy/20 bg-burgundy/5 p-3">
                  <p className="text-xs italic text-burgundy">
                    <span className="font-semibold not-italic">Piège à éviter&nbsp;: </span>
                    {trap}
                  </p>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                  Programme du module
                </div>
                <ul className="mt-4 space-y-3">
                  {content.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-burgundy" />
                      <span className="text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Réserver ce module <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="relative overflow-hidden bg-burgundy-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl container-px py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Le catalogue complet, au format <span className="text-gold">PDF</span>.
            </h2>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Programmes détaillés, durées, tarifs, modalités d'inscription —
              tout dans un document élégant à partager avec votre équipe.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="/catalogue-formations-masit.pdf"
              download
              className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-7 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-95 transition"
            >
              <Download size={16} /> Télécharger le PDF
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
