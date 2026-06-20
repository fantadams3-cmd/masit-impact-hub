import { Brain, Code2, GraduationCap, ClipboardCheck, Briefcase } from "lucide-react";
import poleAi from "@/assets/pole-ai.jpg";
import poleTech from "@/assets/pole-tech.jpg";
import poleFormation from "@/assets/pole-formation.jpg";
import poleAudit from "@/assets/pole-audit.jpg";
import poleConseil from "@/assets/pole-conseil.jpg";

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
    title: "Numérique & Technologie",
    tag: "Pôle Tech",
    image: poleTech,
    items: [
      "Développement de sites web",
      "Développement d'applications",
      "Transformation digitale",
      "Solutions sur mesure",
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
      "Comptabilité",
      "Contrôle interne",
      "Analyse organisationnelle",
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
