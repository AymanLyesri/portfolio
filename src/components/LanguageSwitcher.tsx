"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="group relative flex items-center gap-2 px-4 py-1.5 text-xs font-light text-white/40 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-500"
        aria-label="Change language"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-28 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 shadow-xl z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-light transition-all duration-500 ${
                  locale === lang.code
                    ? "bg-white/5 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-sm">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
