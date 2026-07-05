"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");

  const skills = [
    { key: "nextjs", level: 90 },
    { key: "typescript", level: 88 },
    { key: "react", level: 92 },
    { key: "tailwind", level: 95 },
    { key: "framer", level: 80 },
    { key: "node", level: 70 },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold">
          {t("title")}
        </h2>

        <p className="text-muted-foreground mt-3 mb-12">
          {t("subtitle")}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                group relative p-5 rounded-xl
                border border-border
                bg-background/50 backdrop-blur-md
                hover:bg-accent/10
                transition-all duration-300
              "
            >
              {/* glow */}
              <div className="
                absolute inset-0 rounded-xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-primary/10 to-accent/10 blur-xl
              " />

              <div className="relative z-10">

                <h3 className="font-semibold text-sm sm:text-base">
                  {t(`items.${skill.key}.name`)}
                </h3>

                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <span className="text-xs text-muted-foreground mt-2 block">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}