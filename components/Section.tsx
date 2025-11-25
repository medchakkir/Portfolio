import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  showDivider?: boolean;
  isHero?: boolean;
}

export function Section({ children, className = "", id, showDivider = true, isHero = false }: SectionProps) {
  const sectionClasses = isHero 
    ? `h-screen flex items-center ${className}`
    : `min-h-screen flex items-center py-20 sm:py-28 lg:py-32 ${className}`;
  
  return (
    <>
      <section id={id} className={sectionClasses}>
        {children}
      </section>
      {showDivider && (
        <div 
          id={id ? `divider-${id}` : undefined}
          className="relative scroll-marker" 
          data-section-id={id}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-gray-900 px-4 text-gray-400 dark:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

