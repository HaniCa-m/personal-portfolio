"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Send, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ErrorState = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const t = useTranslations("contact");

  const locale = useLocale();

  const isRTL = locale === "fa";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const validate = () => {
    const newErrors: ErrorState = {};

    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      newErrors.name = t("validation.nameRequired");
    } else if (!nameRegex.test(form.name)) {
      newErrors.name = t("validation.nameInvalid");
    }

    if (!form.email.trim()) {
      newErrors.email = t("validation.emailRequired");
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = t("validation.emailInvalid");
    }

    if (!form.message.trim()) {
      newErrors.message = t("validation.messageRequired");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error();
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <p className="mb-10 mt-3 text-muted-foreground">{t("subtitle")}</p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-2xl
            border border-border
            bg-background/60
            p-6
            shadow-lg
            backdrop-blur-xl
            sm:p-8
          "
        >
          {/* Glow border effect */}
          <div
            className="
              absolute inset-0
              -z-10
              rounded-2xl
              bg-gradient-to-r
              from-primary/10
              via-accent/10
              to-primary/10
              opacity-0
              blur-xl
              transition duration-500
              hover:opacity-100
            "
          />

          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${isRTL ? "text-right" : "text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {[
              {
                key: "name",
                type: "text",
              },
              {
                key: "email",
                type: "email",
              },
            ].map((item) => (
              <div key={item.key}>
                <input
                  type={item.key === "email" ? "text" : "text"}
                  placeholder={t(item.key)}
                  value={form[item.key as keyof FormState]}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [item.key]: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border border-border
                    bg-background/70
                    px-4 py-3
                    transition
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                  "
                />

                {errors[item.key as keyof ErrorState] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[item.key as keyof ErrorState]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <textarea
                rows={5}
                placeholder={t("message")}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border border-border
                  bg-background/70
                  px-4 py-3
                  transition
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary/40
                "
              />

              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                group
                flex w-full
                items-center justify-center
                gap-2
                rounded-xl
                bg-primary
                py-3
                text-primary-foreground
                transition
                hover:opacity-90
                disabled:opacity-60
              "
            >
              {loading ? t("sending") : t("button")}

              {!loading && (
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </motion.div>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              className="
                mx-auto mt-8
                max-w-md
                rounded-2xl
                border border-border
                bg-background/80
                p-5
                shadow-xl
                backdrop-blur-xl
              "
            >
              {status === "success" ? (
                <>
                  <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-green-500" />

                  <h3 className="text-lg font-bold">{t("success.title")}</h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("success.description")}
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="mx-auto mb-3 h-10 w-10 text-red-500" />

                  <h3 className="text-lg font-bold">{t("error.title")}</h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("error.description")}
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
