"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("experience");

  const experiences = t.raw("items") as {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];

  return (
    <section id="experience" className="py-24 px-6 relative">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] -translate-x-1/2 h-[400px] w-[400px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-3">
            {t("subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="mb-10 relative"
            >

              {/* dot */}
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary" />

              {/* card */}
              <div className="
                p-5 rounded-xl border border-border
                bg-background/50 backdrop-blur-md
                hover:bg-accent/10 transition
              ">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                  <h3 className="font-semibold text-lg">
                    {exp.role}
                  </h3>

                  <span className="text-xs text-muted-foreground">
                    {exp.period}
                  </span>

                </div>

                <p className="text-sm text-primary mt-1">
                  {exp.company}
                </p>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}