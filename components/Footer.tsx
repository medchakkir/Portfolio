import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mohamed Chakkir. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/medchakkir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/medchakkir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              LinkedIn
            </a>
            <a
              href="mailto:medchakkir@gmail.com"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

