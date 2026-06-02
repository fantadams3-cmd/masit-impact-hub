import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Target, Award, Heart } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — MASIT Consulting" },
      { name: "description", content: "MASIT Consulting accompagne la transformation digitale en Afrique. Notre mission, notre vision et nos valeurs." },
      { property: "og:title", content: "À propos — MASIT Consulting" },
      { property: "og:description", content: "Notre mission, notre vision et nos valeurs." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Anticiper les usages, intégrer l'IA et concevoir des solutions adaptées à l'Afrique." },
  { icon: Target, title: "Rigueur", text: "Méthodes éprouvées, livrables soignés, qualité sans compromis." },
  { icon: Heart, title: "Impact", text: "Des résultats mesurables pour nos clients et leurs bénéficiaires." },
  { icon: Award, title: "Excellence", text: "Standards internationaux, ancrés dans le contexte local." },
];

function About() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">À propos</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance max-w-3xl">
            Un cabinet guinéen aux ambitions panafricaines
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80">
            MASIT Consulting est un cabinet de conseil basé à Conakry. Nous accompagnons entreprises,
            ONG, écoles et institutions publiques dans leur performance et leur transformation
            digitale, avec une expertise transverse en IA, audit, formation et business.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-24 grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={aboutImg}
            alt="Équipe MASIT Consulting"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-xl shadow-elegant w-full h-auto object-cover"
          />
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold">Notre mission</h2>
              <p className="mt-3 text-muted-foreground">
                Accompagner la transformation digitale des organisations africaines en
                combinant conseil stratégique, expertise technique et formation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Notre vision</h2>
              <p className="mt-3 text-muted-foreground">
                Devenir un acteur majeur du conseil et de l'IA en Afrique de l'Ouest,
                reconnu pour la qualité de ses interventions et la pertinence de ses solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fade">
        <div className="mx-auto max-w-7xl container-px py-20">
          <h2 className="font-display text-3xl font-bold text-center">Nos valeurs</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card-soft">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/15 text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
