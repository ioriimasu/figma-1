import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

export interface BlogPost {
  id?: string
  title: string
  slug: string
  content: string
  excerpt: string
  published: boolean
  created_at?: string
  updated_at?: string
}

export interface Project {
  id?: string
  title: string
  description: string
  image_url?: string
  tags: string[]
  live_url?: string
  github_url?: string
  featured: boolean
  created_at?: string
}