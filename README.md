# AWS AI Practitioner — Notas de Estudio

> 🌐 **Sitio web**: [https://saisho137.github.io/AI-Practitioner-AWS_notes/](https://saisho137.github.io/AI-Practitioner-AWS_notes/)

Notas personales de estudio para la certificación **AWS Certified AI Practitioner**, publicadas como sitio Docusaurus con los 5 dominios del examen, técnicas de prompt engineering y notas adicionales de ML.

---

## 🗂️ Estructura del Repositorio

```text
docs/                        # Contenido del sitio (Docusaurus)
├── intro.md                 # Índice general + tabla de PDFs
├── readiness-path/          # 5 dominios del examen oficial
│   ├── dominio-1.md         # Fundamentos de IA y ML (20%)
│   ├── dominio-2.md         # Fundamentos de IA Generativa (24%)
│   ├── dominio-3.md         # Aplicaciones de Foundation Models (28%)
│   ├── dominio-4.md         # IA Responsable (14%)
│   └── dominio-5.md         # Seguridad y Gobernanza (14%)
├── skill-builder/
│   └── prompt-engineering.md
└── extra/
    └── notas-adicionales.md

static/
└── PDFs/                    # Material de estudio en PDF
    ├── AWS-Certified-AI-Practitioner_Exam-Guide.pdf
    ├── sesion-1-dominio-1.pdf
    ├── sesion-2-dominio-2.pdf
    ├── sesion-3-dominio-3.pdf
    └── sesion-4-dominio-4-y-5.pdf

src/pages/index.js           # Home page
.github/workflows/deploy.yml # CI/CD → GitHub Pages
```

---

## 📋 Dominios del Examen

| Dominio | Tema                                 | Peso |
| ------- | ------------------------------------ | ---- |
| 1       | Fundamentos de IA y ML               | 20%  |
| 2       | Fundamentos de IA Generativa         | 24%  |
| 3       | Aplicaciones de Foundation Models    | 28%  |
| 4       | Directrices para la IA Responsable   | 14%  |
| 5       | Seguridad, Cumplimiento y Gobernanza | 14%  |

---

## 🚀 Desarrollo Local

```bash
npm install
npm start        # http://localhost:3000/AI-Practitioner-AWS_notes/
npm run build    # genera build/
```

El sitio se despliega automáticamente a GitHub Pages en cada push a `main` mediante el workflow de GitHub Actions.

---

**Autor**: Santiago Betancur  
**Última actualización**: Abril 2026
