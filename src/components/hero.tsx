"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 overflow-hidden">

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="text-center max-w-4xl">

        {/* Badge (static ok) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-md mb-6"
        >
          <Code2 className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">
            Frontend Developer • Next.js • TypeScript
          </span>
        </motion.div>

        {/* Title (FIXED i18n) */}
        <motion.h1
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle (FIXED i18n) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA (FIXED i18n) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-full
              bg-primary text-primary-foreground
              hover:opacity-90 transition
            "
          >
            {t("cta.projects")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-full
              border border-border
              hover:bg-accent transition
            "
          >
            {t("cta.contact")}
          </a>
        </motion.div>

      </div>
    </section>
  );
}