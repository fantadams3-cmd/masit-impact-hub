import { Brain, Code2, GraduationCap, ClipboardCheck, Users } from "lucide-react";
import poleAi from "@/assets/pole-ai.jpg";
import poleTech from "@/assets/pole-tech.jpg";
import poleFormation from "@/assets/pole-formation.jpg";
import poleAudit from "@/assets/pole-audit.jpg";
import poleRh from "@/assets/pole-rh.jpg";

type Pole = {
  icon: typeof Code2;
  title: string;
  tag: string;
  image: string;
  href?: "/formations" | "/conseil-business";
  description: string;
  items: readonly string[];
};

export const poles: readonly Pole[] = [
  {
    icon: Code2,
    title: "Numérique et solutions technologiques",
    tag: "Numérique",
    image: poleTech,
    description: "Des outils innovants pour une entreprise plus performante.",
    items: [
      "Applications web, mobiles et desktop",
      "Applications métiers et logiciels de gestion",
      "Bases de données, automatisation des processus",
      "Tableaux de bord et reporting",
      "Sites web et transformation digitale",
      "Appui et déploiement de projets SI",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation professionnelle et logiciels métiers",
    tag: "Formation",
    image: poleFormation,
    href: "/formations",
    description: "Développez les compétences de vos équipes.",
    items: [
      "Bureautique, Microsoft Office et Google Workspace",
      "Logiciels métiers : SAGE et Odoo ERP",
      "Data Analyst, Business Intelligence et IA",
      "Développement web et mobile",
      "Management et renforcement des capacités",
      "Formations personnalisées sur mesure",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit contractuel, conseil en organisation et gestion des PME",
    tag: "Audit & Conseil",
    image: poleAudit,
    href: "/conseil-business",
    description: "Optimisez vos processus, renforcez votre performance.",
    items: [
      "Formalisation de la gestion des PME",
      "Organisation administrative et procédures",
      "Structuration de la gestion financière",
      "Tableaux de bord et suivi recettes / dépenses",
      "Digitalisation des processus administratifs",
      "Audit contractuel, financier et opérationnel",
      "Audit organisationnel et des systèmes d'information",
      "Diagnostic et accompagnement des organisations",
      "Études de marché et développement d'activité",
    ],
  },
  {
    icon: Brain,
    title: "Data, Business Intelligence et IA",
    tag: "Data & IA",
    image: poleAi,
    description: "Transformez vos données en décisions stratégiques.",
    items: [
      "Analyse et valorisation des données",
      "Tableaux de bord et Business Intelligence",
      "AI for Education",
      "Automatisation des processus",
      "Solutions IA pour entreprises",
      "Formation en IA générative",
    ],
  },
  {
    icon: Users,
    title: "Intérim, recrutement et gestion de la paie",
    tag: "Ressources humaines",
    image: poleRh,
    description: "Les talents pour vos projets, au bon moment.",
    items: [
      "Intérim et mise à disposition de personnel",
      "Recrutement adapté aux besoins de votre organisation",
      "Gestion de la paie",
    ],
  },
];
