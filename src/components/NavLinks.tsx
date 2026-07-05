"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { navigation } from "@/lib/navigation";
import useScrollSpy from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const t = useTranslations("navbar");

  const activeSection = useScrollSpy(
    navigation.map((item) => item.href.replace("#", ""))
  );

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        {navigation.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <li key={item.key}>
              <Link
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* active indicator */}
                <span
  className={cn(
  "relative py-1 text-sm font-medium transition-all duration-300",
  isActive
    ? "text-foreground"
    : "text-muted-foreground hover:text-foreground"
)}
/>

                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}