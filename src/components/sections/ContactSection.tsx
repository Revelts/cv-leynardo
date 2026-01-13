'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Send, User, MessageSquare } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'leynardo@example.com',
    href: 'mailto:leynardo@example.com',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Revelts',
    href: 'https://github.com/Revelts',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/leynardo-yosef',
    href: 'https://www.linkedin.com/in/leynardo-yosef-6a3a5226a/',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 812 1333 1315',
    href: 'https://wa.me/6281213331315',
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/30',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send to an API
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.open(`mailto:leynardo@example.com?subject=${subject}&body=${body}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <SectionWrapper id="contact" title="COMMUNICATION INTERFACE">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold font-heading text-neon-cyan mb-6">
            CONNECT WITH ME
          </h3>
          <p className="text-text-muted mb-8 leading-relaxed">
            Feel free to reach out through any of these channels. I'm always open to 
            discussing new opportunities, collaborations, or just having a chat about technology.
          </p>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`flex items-center gap-4 p-4 rounded-xl glass-card hover:border-${method.color.split('-')[1]}/50 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-lg ${method.bgColor} border ${method.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <div>
                  <p className="text-sm text-text-muted font-mono uppercase mb-1">
                    {method.label}
                  </p>
                  <p className={`text-text-primary font-medium ${method.color}`}>
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold font-heading text-neon-cyan mb-6">
            SEND MESSAGE
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-mono uppercase text-text-muted mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:border-neon-cyan/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-mono uppercase text-text-muted mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:border-neon-cyan/50 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-mono uppercase text-text-muted mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-text-muted" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:border-neon-cyan/50 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 rounded-lg bg-neon-cyan text-background font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-6 rounded-xl mt-8 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-3 h-3 rounded-full bg-success"
          />
          <p className="text-text-muted font-mono uppercase text-sm">
            System Status: <span className="text-success">Available for Opportunities</span>
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
