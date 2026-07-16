# CloudLab JP — Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Deploy](https://github.com/cloudlab-jp/docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/cloudlab-jp/docs/actions/workflows/deploy.yml)

📖 **Sitio en vivo:** [cloudlab-jp.github.io/docs](https://cloudlab-jp.github.io/docs/)

Documentación técnica de **CloudLab JP**, una iniciativa open-source enfocada en
Cloud Engineering, Platform Engineering, DevOps e Infraestructura como Código.
El objetivo es construir recursos de aprendizaje production-ready, plantillas
reutilizables, automatización y buenas prácticas de ingeniería.

## Contenido

- **AWS** — guías de arquitectura, redes, IAM, Lambda, S3, EC2, VPC
- **Terraform** — módulos de Infraestructura como Código, patrones reutilizables
- **Docker** — contenedores, imágenes, Dockerfiles, Compose
- **Kubernetes** — fundamentos, workloads, networking, Helm, clústeres en producción
- **GitHub** — estándares de repositorio, workflows, Actions
- **Platform Engineering** — plataformas internas de desarrollo, GitOps, CI/CD

## Stack

Construido con [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
desplegado automáticamente en GitHub Pages vía GitHub Actions en cada push a `main`.

## Desarrollo local

Requisitos: Node.js.

```bash
git clone https://github.com/cloudlab-jp/docs.git
cd docs
npm install
npm run dev
```

El sitio queda disponible en `localhost:4321`.

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias |
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Genera el sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza el build antes de desplegar |

## Estructura

```
.
├── src/content/docs/   # Contenido en Markdown/MDX
├── src/assets/          # Imágenes y branding
├── public/               # Assets estáticos (favicons, etc.)
└── astro.config.mjs      # Configuración de Astro/Starlight
```

Cada archivo `.md`/`.mdx` dentro de `src/content/docs/` se expone como una ruta
según su nombre de archivo.

## Contribuir

Este es un proyecto abierto dentro de CloudLab JP. Si quieres proponer una
guía, corregir contenido o agregar un nuevo tema, abre un issue o un pull
request.