'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, CheckCircle } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'

const experiences = [
  {
    role: 'Backend Engineer – Go',
    company: 'PT. Logkar Indonesia',
    period: 'Jun 2022 – Dec 2024',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    description: [
      'Designed B2B & B2C logistics systems',
      'Built order creation & shipment tracking services',
      'Developed driver rewards service',
      'Built RESTful JSON APIs',
      'Optimized PostgreSQL queries',
      'Implemented JWT authentication',
      'Used Redis & RabbitMQ for scalability',
    ],
    tech: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'JWT'],
  },
  {
    role: 'Backend Engineer – Node.js',
    company: '80and',
    period: 'Jan 2024 – Sep 2024',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    description: [
      'Designed backend architecture for NFT & crypto platform',
      'Optimized database queries (30% improvement)',
      'Integrated third-party services & APIs',
      'Conducted code reviews and mentored junior developers',
    ],
    tech: ['TypeScript', 'MySQL', 'TypeORM'],
  },
  {
    role: 'Backend Engineer – Node.js',
    company: 'Ministry of Investment / BKPM',
    period: 'Oct 2021 – Jun 2022',
    status: 'STABLE',
    statusColor: 'text-neon-blue',
    description: [
      'Maintained and optimized penalty services',
      'Refactored monolithic code into modular architecture',
      'Synchronized penalty data across services',
    ],
    tech: ['Node.js', 'ExpressJS', 'PostgreSQL'],
  },
  {
    role: 'Lead Backend Engineer',
    company: 'Ephorize Indonesia',
    period: 'Nov 2020 – Jun 2022',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    description: [
      'Founded and managed community platform (1,500+ users)',
      'Led 30+ staff and 6 developers',
      'Built microservices (Discord bot, statistics, logging)',
      'Used Redis for real-time systems',
    ],
    tech: ['Node.js', 'TypeScript', 'MySQL (MariaDB)', 'Redis', 'Docker'],
  },
]

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="EXECUTION HISTORY">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-background z-10">
                <motion.div
                  className="absolute inset-0 rounded-full bg-neon-cyan"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card-hover p-6 rounded-xl"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${exp.statusColor} bg-current/10 border border-current/30`}>
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-neon-cyan mb-2">
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-text-muted mb-1 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-text-muted text-sm font-mono ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 mb-4 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {index % 2 === 0 ? (
                          <>
                            <span className="text-text-muted text-sm flex-1">{item}</span>
                            <CheckCircle className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                            <span className="text-text-muted text-sm flex-1">{item}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-muted hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
