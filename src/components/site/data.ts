import { Brain, Code2, GraduationCap, ClipboardCheck, Briefcase, Network, Building2 } from "lucide-react";
import poleAi from "@/assets/pole-ai.jpg";
import poleTech from "@/assets/pole-tech.jpg";
import poleFormation from "@/assets/pole-formation.jpg";
import poleAudit from "@/assets/pole-audit.jpg";
import poleConseil from "@/assets/pole-conseil.jpg";
import poleSi from "@/assets/pole-si.jpg";
import poleManagement from "@/assets/pole-management.jpg";

type Pole = {
  icon: typeof Code2;
  title: string;
  tag: string;
  image: string;
  href?: string;
  items: readonly string[];
};

export const poles: readonly Pole[] = [
  {
    icon: Code2,
    title: "Solutions numériques & Applications",
    tag: "Pôle Tech",
    image: poleTech,
    items: [
      "Applications web, mobiles et desktop",
      "Applications métiers et logiciels de gestion",
      "Bases de données, automatisation des processus",
      "Tableaux de bord et reporting",
      "Sites web et transformation digitale",
    ],
  },
  {
    icon: Network,
    title: "Appui & Déploiement de Projets SI",
    tag: "Pôle Projets SI",
    image: poleSi,
    items: [
      "Analyse des besoins et cadrage de projet",
      "Planification et coordination des intervenants",
      "Déploiement de solutions et d'équipements",
      "Installation, mise en service et formation",
      "Suivi post-déploiement, assistance et reporting",
    ],
  },
  {
    icon: Building2,
    title: "Management & Administration",
    tag: "Pôle Management",
    image: poleManagement,
    items: [
      "Formalisation de la gestion des PME",
      "Organisation administrative et procédures",
      "Structuration de la gestion financière",
      "Tableaux de bord et suivi recettes / dépenses",
      "Digitalisation des processus administratifs",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    tag: "Pôle IA",
    image: poleAi,
    items: [
      "AI for Education",
      "Automatisation des processus",
      "Solutions IA pour entreprises",
      "Formation en IA générative",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Gestion",
    tag: "Pôle Audit",
    image: poleAudit,
    items: [
      "Audit financier et opérationnel",
      "Audit organisationnel et des systèmes d'information",
      "Conseil en systèmes d'information",
      "Comptabilité et contrôle interne",
      "Accompagnement des PME",
    ],
  },
  {
    icon: Briefcase,
    title: "Conseil & Business",
    tag: "Pôle Conseil",
    image: poleConseil,
    href: "/conseil-business",
    items: [
      "Études de marché (Market Research)",
      "Business Development",
      "Project Implementation",
      "Accompagnement PME / ONG / écoles",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    tag: "Pôle Formation",
    image: poleFormation,
    items: [
      "Google Workspace",
      "Bureautique et productivité",
      "IA et outils numériques",
      "Renforcement de capacités",
    ],
  },
];
