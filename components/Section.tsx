import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface SectionProps {
    id?: string
    children: ReactNode
    className?: string
    showDivider?: boolean
}

export function Section({
    id,
    children,
    className = '',
    showDivider = true,
}: SectionProps) {
    return (
        <>
            <section
                id={id}
                className={cn(
                    'box-border flex py-12 sm:py-16 lg:py-20',
                    className
                )}
            >
                {children}
            </section>
            {showDivider && (
                <div
                    id={id ? `divider-${id}` : undefined}
                    className="scroll-marker relative"
                    data-section-id={id}
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-gray-400 dark:bg-gray-900 dark:text-gray-600">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}
