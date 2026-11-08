'use client'

import { useState, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { FaPaperPlane } from 'react-icons/fa'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'unavailable'

const fieldClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100'

export function ContactForm() {
    const t = useTranslations('contact.form')
    const [status, setStatus] = useState<Status>('idle')

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))
        setStatus('sending')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                form.reset()
                setStatus('success')
            } else if (res.status === 503) {
                setStatus('unavailable')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 max-w-2xl space-y-4 text-left"
        >
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
                {t('title')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('name')}
                    <input
                        name="name"
                        required
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        className={`${fieldClass} mt-1`}
                    />
                </label>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('email')}
                    <input
                        name="email"
                        type="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        className={`${fieldClass} mt-1`}
                    />
                </label>
            </div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('message')}
                <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={4000}
                    rows={5}
                    className={`${fieldClass} mt-1 resize-y`}
                />
            </label>
            {/* Honeypot, hidden from people */}
            <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 disabled:opacity-60"
            >
                <FaPaperPlane className="h-4 w-4" />
                {status === 'sending' ? t('sending') : t('send')}
            </button>
            <p role="status" aria-live="polite" className="min-h-6 text-sm">
                {status === 'success' && (
                    <span className="text-emerald-600 dark:text-emerald-400">
                        {t('success')}
                    </span>
                )}
                {status === 'error' && (
                    <span className="text-rose-600 dark:text-rose-400">
                        {t('error')}
                    </span>
                )}
                {status === 'unavailable' && (
                    <span className="text-amber-600 dark:text-amber-400">
                        {t('unavailable')}
                    </span>
                )}
            </p>
        </form>
    )
}
