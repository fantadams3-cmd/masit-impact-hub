import { Brain, Code2, GraduationCap, ClipboardCheck, Briefcase } from "lucide-react";

export const poles = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    tag: "Pôle IA",
    items: [
      "AI for Education",
      "Automatisation des processus",
      "Solutions IA pour entreprises",
      "Formation en IA générative",
    ],
  },
  {
    icon: Code2,
    title: "Numérique & Technologie",
    tag: "Pôle Tech",
    items: [
      "Développement de sites web",
      "Développement d'applications",
      "Transformation digitale",
      "Solutions sur mesure",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    tag: "Pôle Formation",
    items: [
      "Google Workspace",
      "Bureautique et productivité",
      "IA et outils numériques",
      "Renforcement de capacités",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Gestion",
    tag: "Pôle Audit",
    items: [
      "Audit financier et opérationnel",
      "Comptabilité",
      "Contrôle interne",
      "Analyse organisationnelle",
    ],
  },
  {
    icon: Briefcase,
    title: "Conseil & Business",
    tag: "Pôle Conseil",
    items: [
      "Études de marché (Market Research)",
      "Business Development",
      "Project Implementation",
      "Accompagnement PME / ONG / écoles",
    ],
  },
] as const;
