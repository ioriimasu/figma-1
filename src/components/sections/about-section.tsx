"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Cpu, 
  Globe,
  Award,
  Users,
  Building2
} from 'lucide-react'
import Image from 'next/image'
import profilePic from '@/assets/profile/saaed-imam.jpg'

const skills = [
  { name: "Python", level: 95, icon: Code2, color: "#4CAF50" },
  { name: "Supabase", level: 92, icon: Database, color: "#66BB6A" },
  { name: "FastAPI", level: 90, icon: Code2, color: "#4CAF50" },
  { name: "Next.js", level: 88, icon: Globe, color: "#66BB6A" },
  { name: "Docker", level: 85, icon: Cloud, color: "#4CAF50" },
  { name: "Flutter", level: 82, icon: Smartphone, color: "#66BB6A" },
  { name: "AWS", level: 88, icon: Cloud, color: "#4CAF50" },
  { name: "RFID & IoT", level: 90, icon: Cpu, color: "#66BB6A" },
]

const achievements = [
  { 
    title: "Co-Founder & Platform Architect", 
    company: "StitchOS", 
    year: "2024",
    description: "Leading platform architecture for textile industry RFID solutions"
  },
  { 
    title: "Lead – Web & Software Development", 
    company: "Kattali Textile Ltd.", 
    year: "2023",
    description: "Spearheading digital transformation for 850+ employee operations"
  },
  { 
    title: "Digital Transformation Leader", 
    company: "KTLBD", 
    year: "2023",
    description: "Implementing comprehensive digitization across factory operations"
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about building systems that scale and compound value over time. 
            Specializing in industrial IoT, SaaS platforms, and digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden glitch-border">
                  <Image 
                    src={profilePic} 
                    alt="Saaed Imam" 
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Saaed Imam</h3>
              <p className="text-[#4CAF50] mb-4 font-medium">Co-Founder & Platform Architect</p>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3 justify-center">
                  <Building2 size={16} className="text-[#4CAF50]" />
                  <span>Chittagong, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Users size={16} className="text-[#4CAF50]" />
                  <span>850+ Team Members</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Globe size={16} className="text-[#4CAF50]" />
                  <span>Global B2B Operations</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl text-[#4CAF50] font-bold">850+</div>
                    <div className="text-sm text-muted-foreground">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#66BB6A] font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Digital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#4CAF50] font-bold">B2B</div>
                    <div className="text-sm text-muted-foreground">Export</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Skills and Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-[#4CAF50]" size={24} />
                  <h3 className="text-xl font-bold">Technical Expertise</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <skill.icon size={16} style={{ color: skill.color }} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-[#66BB6A]" size={24} />
                  <h3 className="text-xl font-bold">Key Achievements</h3>
                </div>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-muted-foreground mb-2">{achievement.company}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        {achievement.year}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}