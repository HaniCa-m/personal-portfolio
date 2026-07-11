"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[250px] w-[250px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Hani Maleki"
                width={42}
                height={42}
                className="rounded-xl"
              />

              <h3 className="text-xl font-bold">
                Hani Maleki
              </h3>
            </div>

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>


          <div>
            <h4 className="mb-4 font-semibold">
              {t("navigation")}
            </h4>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#about" className="transition hover:text-primary">
                {t("about")}
              </a>

              <a href="#projects" className="transition hover:text-primary">
                {t("projects")}
              </a>

              <a href="#contact" className="transition hover:text-primary">
                {t("contact")}
              </a>
            </div>
          </div>


          <div>
            <h4 className="mb-4 font-semibold">
              {t("connect")}
            </h4>

            <div className="flex flex-col gap-4 text-sm text-muted-foreground">

              <a
                href="https://github.com/HaniCa-m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="mailto:hxmaleki@gmail.com"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                <HiOutlineMail className="h-4 w-4" />
                Email
              </a>

              <a
                href="https://t.me/HaniCaco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                <FaTelegramPlane className="h-4 w-4" />
                Telegram
              </a>

            </div>
          </div>

        </div>


        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row">
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