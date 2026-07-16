// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://cloudlab-jp.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "CloudLab JP",

      description:
        "Open-source cloud engineering documentation, learning paths, reusable templates, and platform engineering resources.",

      logo: {
  light: "/src/assets/branding/cloudlabjp-logo-color.svg",
  dark: "/src/assets/branding/cloudlabjp-logo-dark.svg",
  replacesTitle: true,
},

      social: [
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/CloudLabJP",
  },
],

      sidebar: [
  {
    label: "Getting Started",
    items: [
      {
        autogenerate: {
          directory: "getting-started",
        },
      },
    ],
  },
  {
    label: "AWS",
    items: [
      {
        autogenerate: {
          directory: "aws",
        },
      },
    ],
  },
  {
    label: "Terraform",
    items: [
      {
        autogenerate: {
          directory: "terraform",
        },
      },
    ],
  },
  {
    label: "Docker",
    items: [
      {
        autogenerate: {
          directory: "docker",
        },
      },
    ],
  },
  {
    label: "Kubernetes",
    items: [
      {
        autogenerate: {
          directory: "kubernetes",
        },
      },
    ],
  },
  {
    label: "GitHub",
    items: [
      {
        autogenerate: {
          directory: "github",
        },
      },
    ],
  },
  {
    label: "Platform Engineering",
    items: [
      {
        autogenerate: {
          directory: "platform-engineering",
        },
      },
    ],
  },
  {
    label: "Architecture",
    items: [
      {
        autogenerate: {
          directory: "architecture",
        },
      },
    ],
  },
  {
    label: "Cloud",
    items: [
      {
        autogenerate: {
          directory: "cloud",
        },
      },
    ],
  },
  {
    label: "DevOps",
    items: [
      {
        autogenerate: {
          directory: "devops",
        },
      },
    ],
  },
  {
    label: "Certifications",
    items: [
      {
        autogenerate: {
          directory: "certifications",
        },
      },
    ],
  },
  {
    label: "Glossary",
    items: [
      {
        autogenerate: {
          directory: "glossary",
        },
      },
    ],
  },
]
})
  ]
});
