'use client'

import { motion } from 'framer-motion'
import { Truck, Building, Coins, Users, ExternalLink, CheckCircle } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'

const projects = [
  {
    icon: Truck,
    title: 'Logistics Platform',
    subtitle: 'B2B & B2C',
    description: 'Comprehensive logistics management system handling order creation, shipment tracking, and driver rewards. Built to scale with high availability and real-time tracking capabilities.',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    features: [
      'Order Management System',
      'Real-time Shipment Tracking',
      'Driver Rewards & Incentives',
      'RESTful API Integration',
      'Message Queue Processing',
    ],
    tech: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    icon: Building,
    title: 'Government Penalty System',
    subtitle: 'OSS Platform',
    description: 'Enterprise-level penalty management system for the Ministry of Investment. Refactored from monolithic to modular architecture with improved performance and maintainability.',
    status: 'STABLE',
    statusColor: 'text-neon-blue',
    features: [
      'Penalty Management',
      'Data Synchronization',
      'Modular Architecture',
      'Performance Optimization',
      'Service Integration',
    ],
    tech: ['Node.js', 'ExpressJS', 'PostgreSQL'],
    gradient: 'from-neon-blue to-purple-500',
  },
  {
    icon: Coins,
    title: 'NFT & Crypto Platform',
    subtitle: 'Web3 Integration',
    description: 'Backend infrastructure for NFT marketplace and cryptocurrency platform. Optimized database queries achieving 30% performance improvement with robust third-party integrations.',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    features: [
      'NFT Marketplace Backend',
      'Crypto Wallet Integration',
      'Query Optimization',
      'Third-party API Integration',
      'Code Review System',
    ],
    tech: ['TypeScript', 'MySQL', 'TypeORM'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Community Platform',
    subtitle: 'Gaming & E-learning',
    description: 'Community management platform serving 1,500+ active users. Microservices architecture with Discord integration, real-time statistics, and comprehensive logging system.',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    features: [
      'Discord Bot Integration',
      'Real-time Statistics',
      'Microservices Architecture',
      'User Management (1,500+ users)',
      'Event Logging System',
    ],
    tech: ['Node.js', 'TypeScript', 'MySQL', 'Redis', 'Docker'],
    gradient: 'from-success to-neon-cyan',
  },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="DEPLOYED SYSTEMS">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card-hover rounded-xl overflow-hidden"
          >
            {/* Header with Gradient */}
            <div className={`p-6 bg-gradient-to-r ${project.gradient} bg-opacity-10 border-b border-white/10`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono ${project.statusColor} bg-current/10 border border-current/30`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-neon-cyan mb-1">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm font-mono">{project.subtitle}</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-text-muted mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-mono uppercase text-text-muted mb-3 tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-muted hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-card p-8 rounded-xl mt-12 text-center"
      >
        <h3 className="text-2xl font-bold font-heading text-neon-cyan mb-4">
          Interested in Working Together?
        </h3>
        <p className="text-text-muted mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-neon-cyan text-background font-mono font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Initialize Communication
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  )
}
