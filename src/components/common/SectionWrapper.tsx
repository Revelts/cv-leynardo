'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

export function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">
            <span className="text-neon-cyan">{'>'}</span> {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
