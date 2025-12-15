'use client';

export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:bg-gray-100 dark:focus:text-gray-900"
    >
      Skip to main content
    </a>
  );
}
