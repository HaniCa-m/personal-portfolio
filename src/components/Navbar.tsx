"use client";

import Logo from "@/components/ui/logo";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          w-full
          border-b border-border/40
          bg-background/70
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto flex h-16 max-w-7xl
            items-center justify-between
            px-4 sm:px-6 lg:px-8
          "
        >
          <Logo />

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY FIXED */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/40 backdrop-blur-sm
            overflow-hidden
          "
        >
          {/* RIGHT PANEL */}
          <div
            className="
              absolute right-0 top-0
              h-full w-72 max-w-[85vw]
              bg-background border-l border-border
              p-6
              flex flex-col gap-6
              shadow-xl
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="self-end p-2 rounded-md hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav */}
            <div onClick={() => setOpen(false)}>
              <NavLinks />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-auto">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}