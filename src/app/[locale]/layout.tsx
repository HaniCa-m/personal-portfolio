import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // ✅ جایگزین hasLocale (درست و ساده)
  const isValidLocale = routing.locales.includes(locale as never);

  if (!isValidLocale) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const isRTL = locale === "fa";

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        lang={locale}
        className="min-h-screen"
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}