import { HeroSection } from '@/components/sections/HeroSection'
import { ProfileSection } from '@/components/sections/ProfileSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { StructuredData } from '@/components/seo/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
