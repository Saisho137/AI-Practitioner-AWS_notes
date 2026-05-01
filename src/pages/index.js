import React from "react";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

const DOMAINS = [
  {
    number: "Dominio 1",
    title: "Fundamentos de IA y ML",
    weight: "20%",
    icon: "🤖",
    className: styles.domain1,
    href: "/docs/readiness-path/dominio-1",
    topics: [
      "IA, ML, Deep Learning, GenAI",
      "Aprendizaje supervisado / no supervisado",
      "Ciclo de vida de ML",
      "Servicios: Rekognition, Kendra, Personalize",
    ],
  },
  {
    number: "Dominio 2",
    title: "Fundamentos de IA Generativa",
    weight: "24%",
    icon: "✨",
    className: styles.domain2,
    href: "/docs/readiness-path/dominio-2",
    topics: [
      "Foundation Models y Transformers",
      "Parámetros de inferencia (temp, top-k, top-p)",
      "Ventana de contexto",
      "Bedrock, SageMaker, Amazon Q",
    ],
  },
  {
    number: "Dominio 3",
    title: "Aplicaciones de Foundation Models",
    weight: "28%",
    icon: "🔧",
    className: styles.domain3,
    href: "/docs/readiness-path/dominio-3",
    topics: [
      "RAG y bases de datos vectoriales",
      "Guardrails y Agentes de Bedrock",
      "Prompt Engineering (Zero/Few/CoT)",
      "Métricas de evaluación (ROUGE, BLEU)",
    ],
  },
  {
    number: "Dominio 4",
    title: "Directrices para IA Responsable",
    weight: "14%",
    icon: "⚖️",
    className: styles.domain4,
    href: "/docs/readiness-path/dominio-4",
    topics: [
      "Sesgo en datos y modelos",
      "Amazon A2I, Clarify, Model Monitor",
      "Transparencia y explicabilidad",
      "Diseño centrado en el ser humano",
    ],
  },
  {
    number: "Dominio 5",
    title: "Seguridad, Cumplimiento y Gobernanza",
    weight: "14%",
    icon: "🔐",
    className: styles.domain5,
    href: "/docs/readiness-path/dominio-5",
    topics: [
      "IAM, KMS, Macie, VPC, PrivateLink",
      "CloudWatch, CloudTrail, Config, Inspector",
      "Audit Manager, Artifact, Trusted Advisor",
      "Defensa en profundidad",
    ],
  },
];

const RESOURCES = [
  {
    icon: "📖",
    title: "Readiness Path",
    desc: "5 dominios completos con teoría, quiz y resumen",
    href: "/docs/readiness-path/dominio-1",
  },
  {
    icon: "🛡️",
    title: "Prompt Engineering",
    desc: "Parámetros de inferencia y ataques de seguridad",
    href: "/docs/skill-builder/prompt-engineering",
  },
  {
    icon: "📊",
    title: "Notas Adicionales",
    desc: "Métricas ML, algoritmos, vectores, SageMaker avanzado",
    href: "/docs/extra/notas-adicionales",
  },
  {
    icon: "🎯",
    title: "Guía Oficial AWS",
    desc: "Documento oficial del examen AI Practitioner",
    href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    icon: "📄",
    title: "Material PDF",
    desc: "Exam Guide oficial + sesiones de estudio en PDF",
    href: "/PDFs/AWS-Certified-AI-Practitioner_Exam-Guide.pdf",
  },
];

function HeroBanner() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroBadge}>AWS Certified</div>
        <h1 className={styles.heroTitle}>
          <span>AWS</span> AI Practitioner
        </h1>
        <p className={styles.heroSubtitle}>
          Guía de estudio completa con los 5 dominios del examen oficial,
          técnicas de prompt engineering, métricas de ML y todo lo que necesitas
          para certificarte.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Comenzar a estudiar →
          </Link>
          <a
            className="button button--lg"
            href={withBaseUrl("/docs/readiness-path/dominio-1")}
            style={{
              color: "#fff",
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.45)",
            }}
          >
            Ver Dominio 1
          </a>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Dominios</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>90+</span>
            <span className={styles.statLabel}>Diagramas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Servicios AWS</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Quiz</span>
            <span className={styles.statLabel}>por dominio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DomainsSection() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className={clsx("container", styles.domainsSection)}>
      <h2 className={styles.sectionTitle}>Estructura del Examen</h2>
      <p className={styles.sectionSubtitle}>
        100 preguntas · 90 minutos · 5 dominios con distintos pesos
      </p>
      <div className={styles.domainGrid}>
        {DOMAINS.map((d) => (
          <a
            key={d.number}
            href={withBaseUrl(d.href)}
            className={clsx(styles.domainCard, d.className)}
          >
            <div className={styles.domainHeader}>
              <span className={styles.domainIcon}>{d.icon}</span>
              <span className={styles.domainWeight}>{d.weight}</span>
            </div>
            <div className={styles.domainNumber}>{d.number}</div>
            <div className={styles.domainTitle}>{d.title}</div>
            <ul className={styles.domainTopics}>
              {d.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

function ResourcesSection() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className={styles.resourcesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Material de Estudio</h2>
        <p className={styles.sectionSubtitle}>
          Todo lo que necesitas en un solo lugar
        </p>
        <div className={styles.resourceGrid}>
          {RESOURCES.map((r) => {
            const isExternal = r.href.startsWith("http");
            return (
              <a
                key={r.title}
                href={isExternal ? r.href : withBaseUrl(r.href)}
                className={styles.resourceCard}
                style={{ textDecoration: "none" }}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <span className={styles.resourceIcon}>{r.icon}</span>
                <span className={styles.resourceTitle}>{r.title}</span>
                <p className={styles.resourceDesc}>{r.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroBanner />
      <main>
        <DomainsSection />
        <ResourcesSection />
      </main>
    </Layout>
  );
}
