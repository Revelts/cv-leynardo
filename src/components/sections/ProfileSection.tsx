'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Brain, Users, Target, Zap } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'

const profileData = {
  dateOfBirth: '01 September 1997',
  location: 'Indonesia',
  description: `I specialize in backend system architecture, RESTful API development, 
    database optimization, authentication, and distributed system design. 
    Experienced in both B2B and B2C environments.`,
}

const softSkills = [
  { icon: Brain, label: 'System Thinking', color: 'text-neon-cyan' },
  { icon: Target, label: 'Problem Solving', color: 'text-neon-blue' },
  { icon: Users, label: 'Leadership & Mentoring', color: 'text-success' },
  { icon: Zap, label: 'Agile Collaboration', color: 'text-yellow-500' },
]

export function ProfileSection() {
  return (
    <SectionWrapper id="profile" title="SYSTEM PROFILE">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold font-heading mb-6 text-neon-cyan">
            CORE INFORMATION
          </h3>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-mono uppercase">Date of Birth</p>
                <p className="text-text-primary font-medium">{profileData.dateOfBirth}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-mono uppercase">Location</p>
                <p className="text-text-primary font-medium">{profileData.location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-text-muted leading-relaxed">
              {profileData.description}
            </p>
          </div>
        </motion.div>

        {/* Right Column - Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold font-heading mb-6 text-neon-cyan">
            SOFT SKILLS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-lg hover:border-neon-cyan/30 transition-all cursor-pointer"
              >
                <skill.icon className={`w-8 h-8 mb-3 ${skill.color}`} />
                <p className="text-text-primary font-medium">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-8 rounded-xl mt-8"
      >
        <h3 className="text-2xl font-bold font-heading mb-6 text-neon-cyan">
          EDUCATION
        </h3>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold text-text-primary mb-2">
              Bachelor of Computer Science
            </h4>
            <p className="text-text-muted mb-1">Universitas Bina Nusantara</p>
            <p className="text-sm text-text-muted font-mono">Teknik Informatika</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-text-muted font-mono text-sm mb-1">2016 - 2023</p>
            <p className="text-lg font-bold text-neon-cyan">GPA: 2.80</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
