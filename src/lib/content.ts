export type Track = "legacy" | "modern";

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  track: Track;
  context: string;
  detail: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Sep 2025 — Present",
    role: "System Programmer",
    company: "Multitecnica Industrial S.A",
    track: "legacy",
    current: true,
    context:
      "Enterprise software for ERP customization, process automation and systems integration.",
    detail:
      "Build and maintain TOTVS Protheus customizations in ADVPL — reports, business rules, integrations and automated workflows. Optimize SQL Server queries and ship internal web apps in Next.js, Angular and NestJS that extend the ERP into the browser.",
  },
  {
    period: "Oct 2024 — Sep 2025",
    role: "Software Development Analyst",
    company: "Alghorit Tecnologia Ltda",
    track: "modern",
    context: "Web, backend and mobile applications for enterprise clients.",
    detail:
      "Built and maintained applications in Angular, TypeScript, NestJS, Kotlin and Jetpack Compose — shipping features, integrating REST APIs and improving performance across the stack.",
  },
  {
    period: "Apr 2023 — Oct 2024",
    role: "Mobile Developer Intern",
    company: "Alghorit Tecnologia Ltda",
    track: "modern",
    context:
      "Native Android applications focused on modern, user-friendly mobile experiences.",
    detail:
      "Developed and maintained Kotlin + Jetpack Compose apps with SQLite persistence, working in an Agile team through feature builds, bug fixes and REST API integration.",
  },
  {
    period: "Apr 2022 — Dec 2022",
    role: "Technical Support Intern",
    company: "Intersete Telecom",
    track: "legacy",
    context:
      "Technical support and network infrastructure for residential and business customers.",
    detail:
      "Diagnosed connectivity issues over remote support and configured fiber and wireless network equipment — the ground floor for a career built on making infrastructure reliable.",
  },
];

export type ProjectEntry = {
  year: string;
  name: string;
  summary: string;
  stack: string[];
};

export const projects: ProjectEntry[] = [
  {
    year: "2026",
    name: "Brumafe Modas — Landing Page",
    summary:
      "Production landing page for a clothing store, built in Next.js. Pulls the latest Instagram posts live via the Instagram Graph API and real customer reviews via the Google Places API, cutting manual content upkeep to zero.",
    stack: ["Next.js", "Instagram Graph API", "Google Places API"],
  },
  {
    year: "2026",
    name: "Laboratory Operations Dashboard",
    summary:
      "Real-time monitoring dashboard for laboratory shifts, running on wall-mounted TVs. Auto-scrolling queues, visual indicators and audible alerts flag newly received samples the moment they land.",
    stack: ["Real-time UI", "TV Displays", "Alerting"],
  },
  {
    year: "2025",
    name: "Contourline Clientes",
    summary:
      "Cross-platform client app shipped to both the App Store and Google Play. Built and maintained new features, fixes and performance improvements across a single Ionic + Angular codebase.",
    stack: ["Ionic", "Angular", "iOS", "Android"],
  },
  {
    year: "2023 – 2025",
    name: "Alghorit Device",
    summary:
      "Industrial communication platform for field operations — real-time messaging, digital checklists and radio comms over a custom SFU (Selective Forwarding Unit) server.",
    stack: ["WebRTC", "SFU", "Mobile", "Backend"],
  },
];

export type SkillGroup = {
  label: string;
  track: Track | "neutral";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    track: "neutral",
    items: ["ADVPL", "TypeScript", "Kotlin", "Java", "SQL"],
  },
  {
    label: "Frontend",
    track: "modern",
    items: [
      "Next.js",
      "Angular",
      "React",
      "Jetpack Compose",
      "Ionic",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    label: "Backend",
    track: "modern",
    items: ["NestJS", "Node.js", "REST APIs"],
  },
  {
    label: "ERP & Enterprise",
    track: "legacy",
    items: [
      "TOTVS Protheus",
      "ERP Customization",
      "Business Rules",
      "Reports",
      "System Integrations",
    ],
  },
  {
    label: "Data",
    track: "neutral",
    items: ["SQL Server", "PostgreSQL", "SQLite"],
  },
  {
    label: "Real-Time",
    track: "modern",
    items: ["WebRTC", "SFU Architecture"],
  },
  {
    label: "Tools & Practice",
    track: "neutral",
    items: ["Git", "GitHub", "GitLab", "SVN", "Docker", "Agile / Scrum", "OOP"],
  },
];

export const languages = [
  { name: "Portuguese", level: "Native", value: 100 },
  { name: "English", level: "Professional working proficiency", value: 75 },
];

export const contact = {
  email: "marconijunior.dev@gmail.com",
  location: "Belo Horizonte, MG, Brazil",
  phone: "+55 (31) 9 9939-7039",
  github: "https://github.com/MarconiJunior",
  linkedin: "https://www.linkedin.com/in/marconijunior",
};
