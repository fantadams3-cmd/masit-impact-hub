export const DEVIS_WHATSAPP = "224662400532";
export const DEVIS_EMAIL = "cabinetmasit@gmail.com";

export type Formation = {
  title: string;
  description: string;
  /** Tarif en GNF, ou null si sur devis */
  price: number | null;
  duration?: string;
  programme: string[];
  custom?: boolean;
};

export type Domaine = {
  id: string;
  name: string;
  short: string;
  formations: Formation[];
};

const gnf = (n: number) => n;

export function formatPrice(p: number | null) {
  if (p === null) return "Sur devis";
  return `${p.toLocaleString("fr-FR").replace(/\u202f|\s/g, " ")} GNF`;
}

const customFor = (domaine: string, exemples: string[]): Formation => ({
  title: `Formation personnalisée en ${domaine} (sur mesure)`,
  description: `Un parcours conçu spécifiquement pour votre organisation : contenu, durée, niveau et cas pratiques adaptés à vos besoins réels. Tarif communiqué après étude de votre demande.`,
  price: null,
  custom: true,
  programme: [
    "Entretien de cadrage et analyse de vos besoins",
    "Définition des objectifs pédagogiques et du niveau des participants",
    ...exemples,
    "Cas pratiques bâtis sur vos propres données / processus",
    "Évaluation des acquis et accompagnement post-formation",
  ],
});

export const domaines: Domaine[] = [
  {
    id: "ia",
    name: "Intelligence Artificielle",
    short: "IA",
    formations: [
      {
        title: "Intelligence Artificielle et Développement d'Applications Web et Mobile",
        description:
          "Maîtriser l'intégration de l'intelligence artificielle dans le développement d'applications web et mobile : modèles de machine learning, API d'IA et frameworks modernes.",
        price: gnf(2500000),
        programme: [
          "Panorama de l'IA appliquée au développement logiciel",
          "Utilisation des API d'IA (génération de texte, vision, audio)",
          "Intégration de modèles de machine learning dans une application",
          "Frameworks modernes web et mobile avec fonctionnalités intelligentes",
          "Projet : application intelligente de bout en bout",
        ],
      },
      {
        title: "Intelligence Artificielle pour les Professionnels Comptables",
        description:
          "Exploiter l'IA pour automatiser les tâches comptables, améliorer l'analyse financière, détecter les anomalies et optimiser le reporting.",
        price: gnf(2500000),
        programme: [
          "Comprendre l'IA générative dans un contexte comptable",
          "Automatisation de la saisie et du classement des pièces",
          "Analyse financière assistée par IA",
          "Détection d'anomalies et contrôle interne",
          "Reporting automatisé et tableaux de bord",
        ],
      },
      customFor("Intelligence Artificielle", [
        "Prompt engineering appliqué à votre métier",
        "Automatisation de vos processus internes avec l'IA",
        "Sélection des outils IA adaptés à votre budget",
      ]),
    ],
  },
  {
    id: "office",
    name: "Microsoft Office",
    short: "Office",
    formations: [
      {
        title: "Excel Avancé pour Tout Manager",
        description:
          "Améliorer votre maîtrise d'Excel avec des techniques avancées et des astuces pour gagner du temps et de l'efficacité.",
        price: gnf(1500000),
        programme: [
          "Formules avancées et références absolues / relatives",
          "Tableaux croisés dynamiques et filtres avancés",
          "Mise en forme conditionnelle et validation des données",
          "Graphiques de pilotage et tableaux de bord",
          "Automatisation simple et gain de temps au quotidien",
        ],
      },
      {
        title: "Excel Avancé pour les Financiers",
        description:
          "Approfondir Excel pour mieux gérer, modéliser et analyser les données financières.",
        price: gnf(1800000),
        programme: [
          "Modélisation financière sur Excel",
          "Fonctions financières (VAN, TRI, amortissements)",
          "Budgets, prévisions et analyse des écarts",
          "Consolidation multi-sources et contrôle de cohérence",
          "Reporting financier automatisé",
        ],
      },
      {
        title: "Excel Avancé pour Gestionnaire RH",
        description:
          "Utiliser Excel de manière avancée pour mieux gérer les données RH.",
        price: gnf(1800000),
        programme: [
          "Structuration d'une base de données du personnel",
          "Suivi des congés, absences et effectifs",
          "Calculs de paie et indicateurs RH",
          "Tableaux de bord RH et indicateurs sociaux",
          "Sécurisation et confidentialité des données",
        ],
      },
      {
        title: "Excel Avancé (Programme personnalisé) & Power BI",
        description:
          "Améliorer votre capacité à analyser et visualiser les données en utilisant Power BI et Excel.",
        price: gnf(1500000),
        programme: [
          "Power Query : import et transformation des données",
          "Modèle de données et relations",
          "Mesures DAX essentielles",
          "Construction de rapports Power BI",
          "Publication et partage des tableaux de bord",
        ],
      },
      {
        title: "MS Project",
        description:
          "Destinée aux chefs de projets, planificateurs et personnes impliquées dans la gestion et l'exécution des projets.",
        price: gnf(1800000),
        programme: [
          "Création d'un projet et découpage WBS",
          "Planification, durées et dépendances",
          "Affectation des ressources et des coûts",
          "Suivi d'avancement et chemin critique",
          "Rapports de pilotage et communication",
        ],
      },
      {
        title: "MS Access",
        description:
          "Pour les professionnels et développeurs qui doivent créer, gérer et analyser des bases de données.",
        price: gnf(1500000),
        programme: [
          "Conception d'une base relationnelle",
          "Tables, relations et intégrité référentielle",
          "Requêtes de sélection et d'action",
          "Formulaires de saisie et états",
          "Application de gestion complète",
        ],
      },
      customFor("Microsoft Office", [
        "Choix des modules (Excel, Word, PowerPoint, Access, Project)",
        "Niveau débutant, intermédiaire ou expert",
        "Modèles de documents à vos couleurs",
      ]),
    ],
  },
  {
    id: "sage",
    name: "SAGE",
    short: "SAGE",
    formations: [
      {
        title: "Sage Comptabilité : Fondamentaux",
        description: "Apprendre les bases de la comptabilité avec Sage.",
        price: gnf(1500000),
        programme: [
          "Prise en main de l'interface Sage",
          "Paramétrage du dossier et plan comptable",
          "Saisie des écritures courantes",
          "Lettrage et rapprochement bancaire",
          "Éditions comptables de base",
        ],
      },
      {
        title: "Sage Comptabilité : Avancé",
        description: "Approfondir la connaissance de Sage pour les professionnels comptables.",
        price: gnf(1800000),
        programme: [
          "Comptabilité analytique et budgétaire",
          "Déclarations fiscales et TVA",
          "Travaux de clôture et états financiers",
          "Contrôles, révisions et corrections",
          "Import / export et automatisation",
        ],
      },
      {
        title: "Sage : Paie et RH",
        description: "Utiliser Sage pour la gestion de la paie et des ressources humaines.",
        price: gnf(1500000),
        programme: [
          "Paramétrage des profils salariés et rubriques",
          "Calcul et édition des bulletins de paie",
          "Cotisations sociales et déclarations",
          "Congés, absences et soldes de tout compte",
          "États de paie et archivage",
        ],
      },
      {
        title: "Sage : Immobilisation",
        description: "Utiliser Sage pour la gestion des immobilisations.",
        price: gnf(1500000),
        programme: [
          "Fiches d'immobilisations et catégories",
          "Plans d'amortissement",
          "Cessions, mises au rebut et réévaluations",
          "Inventaire physique et rapprochement",
          "États et intégration comptable",
        ],
      },
      {
        title: "Sage Gestion Commerciale",
        description: "Gérer vos opérations commerciales avec expertise grâce à Sage.",
        price: gnf(1500000),
        programme: [
          "Fichiers articles, clients et fournisseurs",
          "Devis, commandes, bons de livraison, factures",
          "Gestion des stocks et des tarifs",
          "Suivi des règlements et relances",
          "Statistiques commerciales",
        ],
      },
      {
        title: "Sage : Trésorerie",
        description: "Utiliser Sage pour la gestion de la trésorerie.",
        price: gnf(1500000),
        programme: [
          "Paramétrage des comptes de trésorerie",
          "Prévisions et plan de trésorerie",
          "Suivi des encaissements et décaissements",
          "Rapprochement bancaire automatisé",
          "Tableaux de bord de trésorerie",
        ],
      },
      customFor("SAGE", [
        "Modules ciblés : Compta, Paie, Gestion commerciale, Immobilisations",
        "Formation sur votre propre dossier Sage",
        "Accompagnement au démarrage / migration",
      ]),
    ],
  },
  {
    id: "odoo",
    name: "Odoo ERP",
    short: "Odoo",
    formations: [
      {
        title: "Module Comptabilité Odoo",
        description:
          "Plan comptable, écritures, lettrage, rapprochement bancaire, états financiers et clôture. Public : comptables, assistants comptables et responsables financiers.",
        price: gnf(1500000),
        duration: "30 heures",
        programme: [
          "Configuration comptable et plan comptable",
          "Saisie des écritures et journaux",
          "Lettrage et rapprochement bancaire",
          "États financiers (bilan, compte de résultat)",
          "Travaux de clôture",
        ],
      },
      {
        title: "Module Achat Odoo",
        description:
          "Cycle d'achat complet : demandes de prix, bons de commande, réception, factures fournisseurs et suivi des dépenses.",
        price: gnf(1300000),
        duration: "20 heures",
        programme: [
          "Fiches fournisseurs et articles",
          "Demandes de prix et appels d'offres",
          "Bons de commande et réceptions",
          "Factures fournisseurs et contrôle à 3 voies",
          "Suivi et analyse des dépenses",
        ],
      },
      {
        title: "Module Vente Odoo",
        description:
          "Cycle de vente : devis, commandes clients, facturation, suivi commercial et gestion de la relation client.",
        price: gnf(1500000),
        duration: "20 heures",
        programme: [
          "Catalogue produits et tarifs",
          "Devis et commandes clients",
          "Facturation et règlements",
          "CRM : pipeline et opportunités",
          "Rapports de performance commerciale",
        ],
      },
      {
        title: "Module Ressources Humaines (RH) Odoo",
        description:
          "Gestion RH avec Odoo : employés, contrats, congés, paie, recrutement et évaluation.",
        price: gnf(2000000),
        duration: "25 heures",
        programme: [
          "Fiches employés et structure organisationnelle",
          "Contrats et gestion administrative",
          "Congés, présences et feuilles de temps",
          "Recrutement et intégration",
          "Évaluations et tableaux de bord RH",
        ],
      },
      {
        title: "Pack Comptable / Chef Comptable Odoo",
        description:
          "Pack premium incluant les modules Comptabilité + Achat + Vente. Profil visé : comptable, chef comptable, directeur financier.",
        price: gnf(5000000),
        duration: "70 heures",
        programme: [
          "Comptabilité Odoo complète (30 h)",
          "Cycle achat de bout en bout (20 h)",
          "Cycle vente et facturation (20 h)",
          "Pilotage financier consolidé",
          "Projet final : gestion complète d'une entreprise fictive",
        ],
      },
      customFor("Odoo ERP", [
        "Choix des modules selon vos processus (Stock, Fabrication, Projet...)",
        "Formation sur votre instance Odoo",
        "Accompagnement au paramétrage et à la reprise de données",
      ]),
    ],
  },
  {
    id: "data",
    name: "Data et Analyse Statistique",
    short: "Data",
    formations: [
      {
        title: "Analyse des données statistiques avec SPSS",
        description: "Analyser vos données avec SPSS, de la saisie à l'interprétation.",
        price: gnf(1500000),
        programme: [
          "Prise en main de SPSS et préparation des données",
          "Statistiques descriptives et tableaux croisés",
          "Tests statistiques (t, khi-deux, ANOVA)",
          "Corrélations et régressions",
          "Interprétation et restitution des résultats",
        ],
      },
      {
        title: "Analyse des données statistiques avec STATA",
        description: "Analyser vos données avec STATA.",
        price: gnf(1500000),
        programme: [
          "Interface, do-files et gestion des données",
          "Nettoyage et transformation des variables",
          "Statistiques descriptives et graphiques",
          "Modèles de régression",
          "Export des résultats et reproductibilité",
        ],
      },
      {
        title: "Analyse des données statistiques avec SPHINX",
        description: "Concevoir des enquêtes et analyser vos données avec SPHINX.",
        price: gnf(1000000),
        programme: [
          "Conception de questionnaires",
          "Collecte et saisie des réponses",
          "Traitements et tris croisés",
          "Analyses avancées et segmentation",
          "Rapports d'enquête automatisés",
        ],
      },
      {
        title: "Analyse des données statistiques avec EPI INFO",
        description: "Analyser vos données épidémiologiques et de terrain avec EPI INFO.",
        price: gnf(800000),
        programme: [
          "Création de formulaires de collecte",
          "Saisie et contrôle qualité des données",
          "Analyses descriptives et épidémiologiques",
          "Cartographie et visualisation",
          "Rapports d'analyse",
        ],
      },
      {
        title: "Analyse des données statistiques avec R",
        description: "Analyser et visualiser vos données avec R.",
        price: gnf(1500000),
        programme: [
          "Bases du langage R et RStudio",
          "Manipulation de données avec dplyr",
          "Statistiques descriptives et inférentielles",
          "Visualisation avec ggplot2",
          "Rapports reproductibles avec R Markdown",
        ],
      },
      customFor("Data et Analyse Statistique", [
        "Choix de l'outil : SPSS, STATA, R, Python, Power BI...",
        "Parcours Data Analyst complet (Excel → SQL → BI → Python)",
        "Analyse de vos propres jeux de données",
      ]),
    ],
  },
  {
    id: "dev",
    name: "Développement Web et Mobile",
    short: "Développement",
    formations: [
      {
        title: "Développement Web avec WordPress",
        description: "Créer et gérer un site web professionnel avec WordPress.",
        price: gnf(1800000),
        programme: [
          "Installation, hébergement et nom de domaine",
          "Thèmes, personnalisation et identité visuelle",
          "Extensions essentielles et sécurité",
          "Pages, articles et référencement (SEO)",
          "Mise en ligne et maintenance",
        ],
      },
      {
        title: "Développement d'applications mobiles avec WINDEV",
        description: "Développer des applications mobiles avec WINDEV Mobile.",
        price: gnf(1800000),
        programme: [
          "Environnement WINDEV Mobile",
          "Interfaces mobiles et navigation",
          "Accès aux données locales et distantes",
          "Fonctions natives (caméra, GPS, notifications)",
          "Déploiement Android / iOS",
        ],
      },
      {
        title: "Gestion de base de données avec ORACLE",
        description: "Gérer et administrer une base de données ORACLE.",
        price: gnf(2000000),
        programme: [
          "Architecture Oracle et installation",
          "SQL et PL/SQL",
          "Administration des utilisateurs et droits",
          "Sauvegarde, restauration et sécurité",
          "Optimisation des performances",
        ],
      },
      {
        title: "Développement d'applications avec WINDEV",
        description: "Développer des applications de gestion avec WINDEV.",
        price: gnf(1500000),
        programme: [
          "Prise en main de WINDEV et du langage WLangage",
          "Analyse et modélisation des données",
          "Fenêtres, états et traitements",
          "Requêtes et logique métier",
          "Génération et déploiement de l'application",
        ],
      },
      {
        title: "Gestion de base de données ACCESS",
        description: "Créer et gérer une base de données avec ACCESS.",
        price: gnf(1000000),
        programme: [
          "Conception d'une base relationnelle",
          "Tables, relations et contrôles de saisie",
          "Requêtes et calculs",
          "Formulaires et états",
          "Partage et sauvegarde",
        ],
      },
      customFor("Développement Web et Mobile", [
        "Technologies au choix : WordPress, React, Flutter, WINDEV...",
        "Développement d'une application métier de votre organisation",
        "Accompagnement jusqu'à la mise en production",
      ]),
    ],
  },
  {
    id: "management",
    name: "Management",
    short: "Management",
    formations: [
      {
        title: "Professionnels polyvalents en gestion d'entreprise",
        description:
          "Acquérir les compétences clés pour être polyvalent dans la gestion d'une entreprise.",
        price: null,
        programme: [
          "Organisation et fonctions de l'entreprise",
          "Gestion administrative et documentaire",
          "Notions de comptabilité et de finance",
          "Gestion commerciale et relation client",
          "Outils numériques de gestion",
        ],
      },
      {
        title: "Assistant RH appliqué à Sage",
        description: "Utiliser Sage pour la gestion de la paie et des ressources humaines.",
        price: null,
        programme: [
          "Rôle et missions de l'assistant RH",
          "Dossier du personnel dans Sage",
          "Préparation et édition de la paie",
          "Déclarations sociales",
          "Reporting RH",
        ],
      },
      {
        title: "Contrôle de gestion et pilotage de la performance",
        description: "Contrôler la gestion et piloter la performance dans une entreprise.",
        price: null,
        programme: [
          "Fondamentaux du contrôle de gestion",
          "Construction budgétaire et analyse des écarts",
          "Comptabilité analytique et coûts",
          "Indicateurs et tableaux de bord",
          "Communication des résultats à la direction",
        ],
      },
      {
        title: "Management de projet avec MS Project",
        description: "Gérer un projet de bout en bout avec MS Project.",
        price: null,
        programme: [
          "Cadrage et découpage du projet",
          "Planification et diagramme de Gantt",
          "Ressources, charges et budget",
          "Suivi d'avancement et gestion des risques",
          "Clôture et retour d'expérience",
        ],
      },
      {
        title: "Stratégies de marketing numérique",
        description: "Mettre en place des stratégies digitales pour atteindre un public plus large.",
        price: null,
        programme: [
          "Diagnostic de présence en ligne",
          "Stratégie de contenu et réseaux sociaux",
          "Publicité en ligne et ciblage",
          "Emailing et WhatsApp Business",
          "Mesure de performance et ROI",
        ],
      },
      {
        title: "Formation en gestion budgétaire",
        description: "Gérer un budget dans une entreprise ou une entité.",
        price: null,
        programme: [
          "Cycle budgétaire et acteurs",
          "Élaboration du budget prévisionnel",
          "Suivi d'exécution et engagements",
          "Analyse des écarts et actions correctives",
          "Reporting budgétaire",
        ],
      },
      {
        title: "Développement de compétences en communication interne et externe",
        description: "Développer vos compétences en communication interne et externe.",
        price: null,
        programme: [
          "Fondamentaux de la communication professionnelle",
          "Communication interne et cohésion d'équipe",
          "Communication externe et image de marque",
          "Prise de parole et conduite de réunion",
          "Gestion de la communication de crise",
        ],
      },
      {
        title: "Introduction à l'analyse de données et à la prise de décision",
        description:
          "Comprendre les bases de l'analyse de données et de la décision fondée sur les données.",
        price: null,
        programme: [
          "Culture de la donnée dans l'organisation",
          "Collecte et qualité des données",
          "Lecture et interprétation des indicateurs",
          "Visualisation utile à la décision",
          "Cas pratiques de décision managériale",
        ],
      },
      {
        title: "Compétences en communication interculturelle",
        description: "Communiquer efficacement dans un environnement diversifié.",
        price: null,
        programme: [
          "Culture, valeurs et perceptions",
          "Obstacles à la communication interculturelle",
          "Adaptation du discours et de la posture",
          "Travail en équipe multiculturelle",
          "Études de cas et mises en situation",
        ],
      },
      {
        title: "Santé et sécurité au travail",
        description: "Assurer la santé et la sécurité au travail dans une entreprise.",
        price: null,
        programme: [
          "Cadre réglementaire et obligations",
          "Identification et évaluation des risques",
          "Prévention et équipements de protection",
          "Procédures d'urgence et premiers secours",
          "Culture sécurité et sensibilisation",
        ],
      },
      {
        title: "Gestion de la relation client",
        description: "Gérer et fidéliser la relation client.",
        price: null,
        programme: [
          "Connaissance et segmentation client",
          "Qualité de service et accueil",
          "Traitement des réclamations",
          "Outils CRM et suivi des interactions",
          "Fidélisation et satisfaction",
        ],
      },
      {
        title: "Gestion de la chaîne logistique et des opérations",
        description: "Gérer la chaîne logistique et les opérations d'une entreprise.",
        price: null,
        programme: [
          "Vue d'ensemble de la supply chain",
          "Achats et gestion des approvisionnements",
          "Gestion des stocks et entreposage",
          "Transport et distribution",
          "Indicateurs de performance logistique",
        ],
      },
      customFor("Management", [
        "Thématiques au choix : leadership, gestion d'équipe, organisation...",
        "Format intra-entreprise ou coaching individuel",
        "Cas pratiques issus de votre organisation",
      ]),
    ],
  },
];
