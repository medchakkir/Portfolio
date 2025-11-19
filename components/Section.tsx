import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen flex items-center py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

