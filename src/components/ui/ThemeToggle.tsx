"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        flex h-9 w-9
        items-center justify-center
        rounded-full
        border border-border
        bg-background/80
        backdrop-blur-md
        transition-all duration-300
        hover:scale-105
        hover:bg-accent
      "
      aria-label="Toggle theme"
    >
      <span className="transition-all duration-300">
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}