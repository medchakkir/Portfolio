'use client';

import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohamed Chakkir',
      jobTitle: 'Full-Stack Developer',
      description:
        'Full-stack developer crafting efficient, reliable, and innovative digital products.',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://medchakkir.vercel.app',
      sameAs: [
        'https://github.com/medchakkir',
        'https://linkedin.com/in/medchakkir',
      ],
      email: 'demahomali01@gmail.com',
      knowsAbout: [
        'Web Development',
        'Full-Stack Development',
        'Next.js',
        'React',
        'TypeScript',
        'Laravel',
        'PHP',
        'MySQL',
        'PostgreSQL',
        'Tailwind CSS',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
