"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { projects } from "@/data/projects";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-3 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                card-hover
                group
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-background/50
                backdrop-blur-xl
              "
            >

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={project.image}
                  alt={t(
                    `items.${project.id}.title`
                  )}
                  fill
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />


                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-background/80
                    via-transparent
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

              </div>


              {/* Content */}
              <div className="p-6">

                <h3 className="mb-2 text-xl font-semibold">
                  {t(
                    `items.${project.id}.title`
                  )}
                </h3>


                <p className="mb-5 text-sm text-muted-foreground">
                  {t(
                    `items.${project.id}.description`
                  )}
                </p>


                {/* Tech */}
                <div className="mb-5 flex flex-wrap gap-2">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-primary/10
                        px-3
                        py-1
                        text-xs
                        text-primary
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>


                {/* Links */}
                <div className="flex items-center gap-4">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        transition
                        hover:text-primary
                      "
                    >
                      <ExternalLink className="h-4 w-4" />

                      {t("cta.live")}
                    </a>
                  )}


                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        transition
                        hover:text-primary
                      "
                    >
                      <FaGithub className="h-4 w-4" />

                      {t("cta.github")}
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}