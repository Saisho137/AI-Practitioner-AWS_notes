// @ts-check
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AWS AI Practitioner",
  tagline:
    "Guía de estudio completa — Certificación AWS Certified AI Practitioner",
  favicon: "img/favicon.ico",

  url: "https://saisho137.github.io",
  baseUrl: "/AI-Practitioner-AWS_notes/",

  organizationName: "Saisho137",
  projectName: "AI-Practitioner-AWS_notes",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  markdown: {
    format: "md",
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: "warn",
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/docs",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",

      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "AWS AI Practitioner",
        logo: {
          alt: "AWS AI Practitioner Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Guía de Estudio",
          },
          {
            href: "https://github.com/Saisho137/AI-Practitioner-AWS_notes",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Dominios",
            items: [
              {
                label: "D1: Fundamentos de IA y ML",
                to: "/docs/readiness-path/dominio-1",
              },
              {
                label: "D2: IA Generativa",
                to: "/docs/readiness-path/dominio-2",
              },
              {
                label: "D3: Foundation Models",
                to: "/docs/readiness-path/dominio-3",
              },
              {
                label: "D4: IA Responsable",
                to: "/docs/readiness-path/dominio-4",
              },
              {
                label: "D5: Seguridad y Gobernanza",
                to: "/docs/readiness-path/dominio-5",
              },
            ],
          },
          {
            title: "Temas Avanzados",
            items: [
              {
                label: "Prompt Engineering",
                to: "/docs/skill-builder/prompt-engineering",
              },
              {
                label: "Notas Adicionales",
                to: "/docs/extra/notas-adicionales",
              },
            ],
          },
          {
            title: "Recursos",
            items: [
              {
                label: "AWS AI Practitioner Exam Guide",
                href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
              },
              {
                label: "AWS SkillBuilder",
                href: "https://skillbuilder.aws/",
              },
              {
                label: "GitHub",
                href: "https://github.com/Saisho137/AI-Practitioner-AWS_notes",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Santiago Betancur — Notas de estudio AWS AI Practitioner. Construido con Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "json", "yaml", "python", "sql"],
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
