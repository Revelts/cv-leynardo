'use client'

import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Revelts', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/leynardo-yosef-6a3a5226a/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:leynardoyosef@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 glass-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-neon-cyan font-mono font-bold text-xl mb-4">
              <Terminal className="w-6 h-6" />
              <span>LEYNARDO.SYS</span>
            </div>
            <p className="text-text-muted text-sm">
              Backend Engineer specializing in scalable, secure, and high-performance systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-title text-xs mb-4">QUICK ACCESS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#profile" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                  System Profile
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                  Execution History
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                  Deployed Systems
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                  Communication Interface
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="section-title text-xs mb-4">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-neon-cyan/50 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-muted" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-text-muted text-sm font-mono">
            © {new Date().getFullYear()} LEYNARDO YOSEF • SYSTEM VERSION 1.0.0 • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
