'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, MessageCircle } from 'lucide-react'
import { TypewriterText } from '@/components/common/TypewriterText'
import { ParticleBackground } from '@/components/common/ParticleBackground'

export function HeroSection() {
  const handleDownloadCV = () => {
    // In production, link to actual CV file
    window.open('/cv-leynardo-yosef.pdf', '_blank')
  }

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const phoneNumber = '6281234567890'
    const message = 'Hi Leynardo, I would like to connect with you!'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* System Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-xs font-mono uppercase tracking-wider">
              SYSTEM STATUS: OPERATIONAL
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 neon-text"
          >
            LEYNARDO YOSEF
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-text-primary"
          >
            <TypewriterText text="BACKEND ENGINEER" />
          </motion.div>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm md:text-base font-mono text-text-muted mb-6 uppercase tracking-wider"
          >
            GO • NODE.JS • DISTRIBUTED SYSTEM • SCALABLE BACKEND
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-3xl mx-auto text-base md:text-lg text-text-muted mb-10 leading-relaxed"
          >
            Backend Engineer with 4+ years of experience building scalable, secure, and 
            high-performance systems across logistics, government, crypto/NFT, and community platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="group px-8 py-4 rounded-lg bg-neon-cyan text-background font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>

            <motion.button
              onClick={handleViewProjects}
              className="group px-8 py-4 rounded-lg glass-card border border-neon-cyan/50 font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neon-cyan/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Deployed Systems
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              className="group px-8 py-4 rounded-lg glass-card border border-success/50 font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-success/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Connect via WhatsApp
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-neon-cyan/50 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
