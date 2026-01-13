'use client'

import { motion } from 'framer-motion'
import { Code, Database, Layers, Gauge, Box, Server, GitBranch, Monitor } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'

const skillCategories = [
  {
    icon: Code,
    title: 'Backend',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30',
    skills: ['Node.js (ExpressJS, NestJS)', 'Go (Gin, Go-Chi)'],
  },
  {
    icon: Monitor,
    title: 'Frontend',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30',
    skills: ['ReactJS', 'VueJS', 'JQuery'],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/30',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    icon: Layers,
    title: 'Messaging',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    skills: ['RabbitMQ'],
  },
  {
    icon: Gauge,
    title: 'Cache',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    skills: ['Redis'],
  },
  {
    icon: Box,
    title: 'DevOps',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    skills: ['Docker', 'Nginx', 'Apache'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    skills: ['Git (GitHub, Bitbucket)'],
  },
  {
    icon: Server,
    title: 'Operating Systems',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    skills: ['Linux', 'Ubuntu', 'Debian', 'Windows Server'],
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="CORE MODULES">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card-hover p-6 rounded-xl"
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-lg ${category.bgColor} border ${category.borderColor} flex items-center justify-center mb-4`}>
              <category.icon className={`w-7 h-7 ${category.color}`} />
            </div>

            {/* Title */}
            <h3 className={`text-lg font-bold font-heading mb-4 ${category.color}`}>
              {category.title}
            </h3>

            {/* Skills */}
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-text-muted text-sm flex items-start gap-2"
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${category.bgColor} flex-shrink-0`} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            {/* Decorative element */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className={`h-1 rounded-full ${category.bgColor} relative overflow-hidden`}>
                <motion.div
                  className={`absolute inset-0 ${category.bgColor.replace('/10', '/50')}`}
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-card p-8 rounded-xl mt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2"
            >
              4+
            </motion.div>
            <p className="text-text-muted text-sm font-mono uppercase">Years Experience</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-neon-blue mb-2"
            >
              10+
            </motion.div>
            <p className="text-text-muted text-sm font-mono uppercase">Technologies</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-success mb-2"
            >
              15+
            </motion.div>
            <p className="text-text-muted text-sm font-mono uppercase">Projects Delivered</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
            >
              99%
            </motion.div>
            <p className="text-text-muted text-sm font-mono uppercase">System Uptime</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
