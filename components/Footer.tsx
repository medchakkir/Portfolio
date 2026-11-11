import { Container } from './Container'
import { profile } from '@/data/content'

export function Footer() {
    return (
        <footer className="text-muted py-6 text-sm">
            <Container className="flex justify-between gap-4">
                <p>
                    © {new Date().getFullYear()} {profile.name}. All rights
                    reserved.
                </p>
                <p>{profile.location}</p>
            </Container>
        </footer>
    )
}
