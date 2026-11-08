import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
    const now = Date.now()
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
    recent.push(now)
    hits.set(ip, recent)
    return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (v: string) =>
    v.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

export async function POST(request: Request) {
    let body: Record<string, unknown>
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    // Honeypot: bots fill hidden fields. Pretend success.
    if (typeof body.website === 'string' && body.website.length > 0) {
        return NextResponse.json({ ok: true })
    }

    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (
        name.length < 2 ||
        name.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        email.length > 200 ||
        message.length < 10 ||
        message.length > 4000
    ) {
        return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    if (rateLimited(ip)) {
        return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    if (!apiKey || !to) {
        return NextResponse.json({ error: 'not_configured' }, { status: 503 })
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from:
                process.env.CONTACT_FROM_EMAIL ??
                'Portfolio <onboarding@resend.dev>',
            to: [to],
            reply_to: email,
            subject: `Portfolio message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
            html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
        }),
    })

    if (!res.ok) {
        return NextResponse.json({ error: 'send_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
}
