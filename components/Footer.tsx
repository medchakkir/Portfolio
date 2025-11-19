"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t border-blue-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-blue-900/70">
            © {new Date().getFullYear()} Mohamed Chakkir. {t.footer.rights}.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/medchakkir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-900/70 transition-colors hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/medchakkir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-900/70 transition-colors hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="mailto:medchakkir@gmail.com"
              className="text-sm text-blue-900/70 transition-colors hover:text-blue-600"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

