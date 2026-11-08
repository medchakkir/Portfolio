import { ImageResponse } from 'next/og'

export const alt = 'Mohamed Chakkir | Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 80,
                    background:
                        'linear-gradient(135deg, #0b1020 0%, #1e1b4b 60%, #0e7490 100%)',
                    color: 'white',
                }}
            >
                <div style={{ fontSize: 34, color: '#a5b4fc' }}>
                    medchakkir.vercel.app
                </div>
                <div style={{ fontSize: 108, fontWeight: 800, marginTop: 24 }}>
                    Mohamed Chakkir
                </div>
                <div style={{ fontSize: 48, color: '#67e8f9', marginTop: 12 }}>
                    Full-Stack Developer
                </div>
                <div style={{ fontSize: 30, color: '#cbd5e1', marginTop: 40 }}>
                    Next.js · React · Laravel · AI & Security
                </div>
            </div>
        ),
        size
    )
}
