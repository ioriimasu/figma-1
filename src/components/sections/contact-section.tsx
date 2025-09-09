"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  MessageCircle, 
  Globe, 
  MapPin, 
  Calendar, 
  ExternalLink,
  Send,
  Phone
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const contactMethods = [
  {
    title: "Email",
    value: "sayedimam.fahim@gmail.com",
    icon: Mail,
    color: "#4CAF50",
    action: "mailto:sayedimam.fahim@gmail.com",
    description: "Best for detailed discussions and project inquiries"
  },
  {
    title: "WhatsApp",
    value: "+8801729809879",
    icon: MessageCircle,
    color: "#66BB6A",
    action: "https://wa.me/8801729809879",
    description: "Quick messages and real-time communication"
  },
  {
    title: "Website",
    value: "www.stitchos.app",
    icon: Globe,
    color: "#81C784",
    action: "https://www.stitchos.app",
    description: "Explore StitchOS platform and capabilities"
  }
]

const availability = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", timezone: "GMT+6 (Dhaka)" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM", timezone: "GMT+6 (Dhaka)" },
  { day: "Sunday", hours: "By Appointment", timezone: "GMT+6 (Dhaka)" }
]

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Here you would integrate with Supabase or your preferred backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Message sent successfully! I'll get back to you soon.")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#66BB6A]">
              Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative software solutions? 
            Let's discuss how we can build systems that compound value for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="mt-1"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] hover:from-[#66BB6A] hover:to-[#81C784]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${method.color}20` }}
                    >
                      <method.icon size={20} style={{ color: method.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-sm"
                      >
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={14} />
                          {method.value}
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#4CAF50]" size={20} />
                <h4 className="font-semibold">Availability</h4>
              </div>
              
              <div className="space-y-3">
                {availability.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <div>
                      <div className="font-medium text-sm">{schedule.day}</div>
                      <div className="text-xs text-muted-foreground">{schedule.timezone}</div>
                    </div>
                    <div className="text-sm text-[#4CAF50] font-medium">{schedule.hours}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Urgent Projects:</strong> Available for emergency consultations 
                  and critical system issues outside regular hours.
                </p>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#66BB6A]" size={20} />
                <h4 className="font-semibold">Location</h4>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="font-medium">Chittagong, Bangladesh</div>
                  <div className="text-sm text-muted-foreground">
                    Working with clients globally, with extensive experience in USA and Canadian markets.
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Remote Collaboration:</strong> Experienced in remote project 
                  management and global team coordination across time zones.
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}