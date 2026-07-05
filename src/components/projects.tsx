"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  const projects = [
    {
      title: t("items.movie.title"),
      description: t("items.movie.description"),
      tech: ["Next.js", "TypeScript", "Tailwind"],
      live: "#",
    },
    {
      title: t("items.law.title"),
      description: t("items.law.description"),
      tech: ["Next.js", "Framer Motion"],
      live: "#",
    },
    {
      title: t("items.portfolio.title"),
      description: t("items.portfolio.description"),
      tech: ["Next.js", "i18n", "Tailwind"],
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-3">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background/40"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <a
                href={project.live}
                className="inline-flex items-center gap-2 text-sm hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                {t("cta.view")}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}