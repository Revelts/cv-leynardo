export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leynardo Yosef',
    jobTitle: 'Backend Engineer',
    description: 'Backend Engineer specializing in Go and Node.js with experience in logistics, government systems, NFT platforms, and scalable backend architecture.',
    url: 'https://leynardo.vercel.app',
    sameAs: [
      'https://github.com/Revelts',
      'https://www.linkedin.com/in/leynardo-yosef-6a3a5226a/',
    ],
    knowsAbout: [
      'Backend Development',
      'Go Programming',
      'Node.js',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'RabbitMQ',
      'Docker',
      'Distributed Systems',
      'RESTful APIs',
      'System Architecture',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universitas Bina Nusantara',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'PT. Logkar Indonesia',
        startDate: '2022-06',
        endDate: '2024-12',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
