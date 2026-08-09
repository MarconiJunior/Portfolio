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
      "Enterprise software for ERP customization, business process automation, systems integration and internal web applications.",
    detail:
      "Extend TOTVS Protheus with custom integrations and ship internal web apps in Next.js, Angular and NestJS. Optimized SQL Server queries for up to an 84% performance gain, and led the company's migration from SVN to Git — setting up the collaboration workflow now used by 15+ developers across internal and partner teams.",
  },
  {
    period: "Oct 2024 — Sep 2025",
    role: "Software Development Analyst",
    company: "Alghorit Tecnologia Ltda",
    track: "modern",
    context:
      "Android, backend and web applications for enterprise clients, delivering scalable software across multiple platforms.",
    detail:
      "Built scalable Android apps in Kotlin and Jetpack Compose following Clean Architecture and SOLID, plus backend services in NestJS and frontend apps in Angular — all backed by automated tests. Designed GitLab CI/CD pipelines with Docker that cut build times by up to 67%.",
  },
  {
    period: "Apr 2023 — Oct 2024",
    role: "Mobile Developer Intern",
    company: "Alghorit Tecnologia Ltda",
    track: "modern",
    context:
      "Native Android applications focused on modern, reliable and user-friendly mobile experiences.",
    detail:
      "Maintained native Android apps and led the migration of legacy XML layouts to Jetpack Compose. Implemented REST APIs and applied dependency injection with Hilt and Koin to improve scalability and maintainability.",
  },
  {
    period: "Apr 2022 — Dec 2022",
    role: "Technical Support Intern",
    company: "Intersete Telecom",
    track: "legacy",
    context:
      "Technical support and network infrastructure maintenance for residential and business customers.",
    detail:
      "Diagnosed and resolved connectivity issues for 20+ customers daily, keeping downtime to a minimum. Configured routers and fiber optic equipment, and supported field technicians on incident resolution.",
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
      "Real-time monitoring dashboard for laboratory shifts, running on wall-mounted TVs. Visual indicators and audible alerts flag newly received samples the moment they land, cutting response times for sample analyses.",
    stack: ["Real-time UI", "TV Displays", "Alerting"],
  },
  {
    year: "2025",
    name: "Contourline Clientes",
    summary:
      "Cross-platform client app developed and published to both the App Store and Google Play. Built and maintained new features, fixes and performance improvements across a single Ionic + Angular codebase.",
    stack: ["Ionic", "Angular", "iOS", "Android"],
  },
  {
    year: "2023 – 2025",
    name: "Alghorit Device",
    summary:
      "Industrial communication platform for field operations — real-time messaging and radio features built on a custom WebRTC SFU (Selective Forwarding Unit) server.",
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
    items: ["Kotlin", "Java", "TypeScript", "SQL", "ADVPL"],
  },
  {
    label: "Android",
    track: "modern",
    items: [
      "Jetpack Compose",
      "XML",
      "MVVM",
      "Coroutines",
      "Flow",
      "Hilt",
      "Koin",
      "Android SDK",
      "SQLite",
    ],
  },
  {
    label: "Frontend",
    track: "modern",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Ionic",
      "HTML5",
      "SCSS",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    track: "modern",
    items: ["NestJS", "Node.js", "REST APIs"],
  },
  {
    label: "Testing",
    track: "neutral",
    items: ["JUnit", "Mockito", "Jest", "Cypress"],
  },
  {
    label: "Database",
    track: "neutral",
    items: ["Microsoft SQL Server", "PostgreSQL", "SQLite", "MySQL"],
  },
  {
    label: "Architecture & Principles",
    track: "neutral",
    items: ["Clean Architecture", "SOLID", "OOP", "Design Patterns"],
  },
  {
    label: "DevOps & Infrastructure",
    track: "neutral",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "GitLab CI/CD",
      "Docker",
      "YAML",
      "Nginx",
      "Linux",
      "SVN",
    ],
  },
  {
    label: "ERP & Enterprise Systems",
    track: "legacy",
    items: [
      "TOTVS Protheus",
      "ERP Customization",
      "Business Rules",
      "System Integrations",
    ],
  },
  {
    label: "Real-Time Communication",
    track: "modern",
    items: ["WebRTC", "SFU Architecture"],
  },
  {
    label: "Methodologies",
    track: "neutral",
    items: ["Scrum", "Kanban", "Agile Software Development"],
  },
];

export const languages = [
  { name: "Portuguese", level: "Native", value: 100 },
  { name: "English", level: "Upper Intermediate", value: 80 },
];

export const contact = {
  email: "marconijunior.dev@gmail.com",
  location: "Belo Horizonte, MG, Brazil",
  phone: "+55 (31) 99939-7039",
  github: "https://github.com/MarconiJunior",
  linkedin: "https://www.linkedin.com/in/marconijunior",
};
