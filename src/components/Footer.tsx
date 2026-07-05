"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              Hani Maleki
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {t("subtitle")}
            </p>
          </div>

          {/* Middle Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">
              {t("about")}
            </a>
            <a href="#projects" className="hover:text-foreground transition">
              {t("projects")}
            </a>
            <a href="#contact" className="hover:text-foreground transition">
              {t("contact")}
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">

          <p>
            © {year} Hani Maleki. {t("rights")}
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}