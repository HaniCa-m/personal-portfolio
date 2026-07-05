"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="py-28 px-6 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] -translate-x-1/2 h-[450px] w-[450px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          {t("title")}
        </motion.h2>

        <p className="text-muted-foreground mt-3 mb-10">
          {t("subtitle")}
        </p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            relative p-6 sm:p-8 rounded-2xl
            border border-border
            bg-background/50 backdrop-blur-xl
            shadow-lg
          "
        >

          {/* Glow border effect */}
          <div className="
            absolute inset-0 rounded-2xl
            opacity-0 hover:opacity-100
            transition duration-500
            bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10
            blur-xl -z-10
          " />

          <div className="space-y-4 text-left">

            {/* Name */}
            <input
              type="text"
              placeholder={t("name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="
                w-full px-4 py-3 rounded-xl
                bg-background/60 border border-border
                focus:outline-none focus:ring-2 focus:ring-primary/40
                transition
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder={t("email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="
                w-full px-4 py-3 rounded-xl
                bg-background/60 border border-border
                focus:outline-none focus:ring-2 focus:ring-primary/40
                transition
              "
            />

            {/* Message */}
            <textarea
              rows={5}
              placeholder={t("message")}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="
                w-full px-4 py-3 rounded-xl
                bg-background/60 border border-border
                focus:outline-none focus:ring-2 focus:ring-primary/40
                transition resize-none
              "
            />

            {/* Button */}
            <button
              className="
                group w-full flex items-center justify-center gap-2
                py-3 rounded-xl
                bg-primary text-primary-foreground
                hover:opacity-90 transition
              "
            >
              {t("button")}
              <Send className="h-4 w-4 group-hover:translate-x-1 transition" />
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}