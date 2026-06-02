import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Réalisations — MASIT Consulting" },
      { name: "description", content: "Projets d'audit, formations, solutions IA et plateformes digitales livrées par MASIT Consulting." },
      { property: "og:title", content: "Réalisations — MASIT Consulting" },
      { property: "og:description", content: "Aperçu de nos projets et missions récentes." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  { cat: "Audit", title: "Audit organisationnel — institution éducative", desc: "Diagnostic complet et plan de restructuration sur 6 mois." },
  { cat: "Formation", title: "Programme Google Workspace pour ONG", desc: "Renforcement des capacités de 80+ collaborateurs." },
  { cat: "Digital", title: "Plateforme web pour PME industrielle", desc: "Site institutionnel & portail client sur mesure." },
  { cat: "IA", title: "Assistant IA pour service client", desc: "Chatbot multilingue intégré aux canaux WhatsApp & web." },
  { cat: "Conseil", title: "Étude de marché — secteur agroalimentaire", desc: "Cartographie concurrentielle et recommandations stratégiques." },
  { cat: "Formation", title: "Bootcamp IA générative", desc: "3 cohortes formées aux outils IA pour la productivité." },
];

const palette = ["bg-primary", "bg-gold", "bg-primary", "bg-gold", "bg-primary", "bg-gold"];

function Portfolio() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Réalisations</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance max-w-3xl">
            Des missions concrètes, des résultats mesurables
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80">
            Un aperçu de projets livrés pour des PME, écoles, ONG et institutions publiques.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className={`relative h-44 ${palette[i]} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                    backgroundSize: "18px 18px"
                  }} />
                  <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
