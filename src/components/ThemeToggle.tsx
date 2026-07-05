"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme =
    theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-border
        bg-background/80 backdrop-blur-md
        transition-all duration-300
        hover:scale-105 hover:bg-accent
      "
      aria-label="Toggle Theme"
    >
      {/* Sun */}
      <Sun
        className={`
          h-5 w-5 transition-all duration-300
          ${isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100"}
        `}
      />

      {/* Moon */}
      <Moon
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-0 -rotate-90"}
        `}
      />
    </button>
  );
}