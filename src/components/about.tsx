"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative py-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs text-muted-foreground">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("title")}
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* RIGHT SIDE (Skills preview) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "React",
            "Framer Motion",
            "UI Design",
          ].map((skill) => (
            <div
  key={skill}
  className="
    card-hover
    p-4
    rounded-xl
    border
    border-border
    bg-card/60
    backdrop-blur-md
  "
>
              <div className="flex items-center gap-2 text-sm">
                <Code2 className="h-4 w-4" />
                {skill}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}