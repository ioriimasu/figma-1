"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Github, 
  Database, 
  Cpu, 
  Shield, 
  Globe,
  Package,
  Building2,
  ShoppingCart,
  Calculator
} from 'lucide-react'

const projects = [
  {
    title: "StitchOS",
    description: "SaaS + IoT platform for real-time RFID tracking of textile assets. Modular architecture designed for industrial-scale operations.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "FastAPI", "Supabase", "Next.js", "Docker", "RFID"],
    metrics: [
      { label: "Processing", value: "< 100ms" },
      { label: "Accuracy", value: "99.9%" },
      { label: "Uptime", value: "99.95%" },
      { label: "Assets", value: "1M+" }
    ],
    features: [
      { title: "Edge Ingest", description: "Real-time RFID data collection", icon: Database },
      { title: "Core API", description: "FastAPI-powered backend", icon: Cpu },
      { title: "Ledger", description: "Immutable transaction logging", icon: Shield },
      { title: "Trace", description: "Complete asset tracking", icon: Package }
    ],
    links: {
      live: "https://www.stitchos.app",
      github: null
    },
    featured: true
  },
  {
    title: "Kattali Digital Transformation",
    description: "Leading digital transformation for 850+ employee factory operations. Comprehensive digitization across all factory operations.",
    image: "/api/placeholder/600/400",
    tags: ["Digital Transformation", "IoT", "ERP", "Mobile Apps"],
    metrics: [
      { label: "Employees", value: "850+" },
      { label: "Systems", value: "12" },
      { label: "Efficiency", value: "+35%" },
      { label: "Markets", value: "2" }
    ],
    features: [
      { title: "Corporate Website", description: "Modern B2B showcase", icon: Globe },
      { title: "RFID Production", description: "Real-time tracking", icon: Package },
      { title: "Uniform SaaS", description: "Digital management", icon: Building2 },
      { title: "ERP Integration", description: "Seamless workflows", icon: Cpu }
    ],
    links: {
      live: null,
      github: null
    },
    featured: true
  },
  {
    title: "CartCount",
    description: "Mobile app for small food shops & tea stalls inventory management with real-time tracking and analytics.",
    image: "/api/placeholder/600/400",
    tags: ["Flutter", "SQLite", "Firebase", "Mobile"],
    features: [
      { title: "Inventory Tracking", description: "Real-time stock management", icon: Package },
      { title: "Barcode Scanning", description: "Simple product entry", icon: ShoppingCart },
      { title: "Sales Analytics", description: "Performance insights", icon: Database },
      { title: "Offline Mode", description: "Works without internet", icon: Cpu }
    ],
    links: {
      live: null,
      github: null
    },
    featured: false
  },
  {
    title: "QuickBill",
    description: "Lightweight accounting app for small businesses and freelancers with automated invoicing and expense tracking.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "PostgreSQL", "SaaS"],
    features: [
      { title: "Invoice Generation", description: "Automated billing", icon: Calculator },
      { title: "Expense Tracking", description: "Cost management", icon: Database },
      { title: "Tax Calculations", description: "Automated compliance", icon: Shield },
      { title: "Payment Reminders", description: "Automated follow-ups", icon: Globe }
    ],
    links: {
      live: null,
      github: null
    },
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative software solutions addressing diverse business needs, 
            from industrial IoT to small business management.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/20 flex items-center justify-center">
                      <div className="text-6xl text-[#4CAF50]/30">
                        {project.title === "StitchOS" ? "🧵" : "🏭"}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {project.title === "StitchOS" ? "SaaS Platform" : "Digital Transformation"}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-[#4CAF50]">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-8 h-8 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                            <feature.icon size={16} className="text-[#4CAF50]" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{feature.title}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.links.live && (
                        <Button asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" size={16} />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" size={16} />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                        {project.title === "CartCount" ? 
                          <ShoppingCart size={20} className="text-[#4CAF50]" /> :
                          <Calculator size={20} className="text-[#4CAF50]" />
                        }
                      </div>
                      <div>
                        <h4 className="font-bold">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.title === "CartCount" ? "Mobile App" : "SaaS"}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                          <span>{feature.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}