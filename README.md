# Saaed Imam - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features advanced animations, dark mode support, and seamless Vercel deployment.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with fluid breakpoints
- **Advanced Animations**: Framer Motion for smooth scroll effects and interactions
- **Dark Mode**: System-based theme switching with next-themes
- **Performance Optimized**: Image optimization, lazy loading, and code splitting
- **SEO Ready**: Meta tags, Open Graph, structured data, and sitemap
- **Contact Form**: Integrated with Supabase for form submissions
- **Analytics Ready**: Vercel Analytics integration
- **Accessibility**: WCAG AA compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - Supabase URL and keys
   - Vercel Analytics ID (optional)
   - Contact email settings

4. **Set up Supabase (Optional)**
   
   Create the following tables in your Supabase project:
   
   ```sql
   -- Contact submissions table
   CREATE TABLE contact_submissions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     subject TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   
   -- Enable RLS
   ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
   
   -- Create policy for inserting contact submissions
   CREATE POLICY "Anyone can submit contact form" ON contact_submissions
     FOR INSERT WITH CHECK (true);
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
│   └── supabase.ts       # Supabase client
└── types/                # TypeScript types
```

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // Add your brand colors
}
```

### Content

1. **Personal Information**: Update content in section components
2. **Projects**: Modify the projects array in `src/components/sections/projects-section.tsx`
3. **Skills**: Update skills data in `src/components/sections/about-section.tsx`
4. **Contact**: Update contact methods in `src/components/sections/contact-section.tsx`

### SEO

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  // ... other metadata
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📊 Performance

This portfolio is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Optimized Google Fonts loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Supabase](https://supabase.com/) - Backend as a service
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: sayedimam.fahim@gmail.com
- WhatsApp: +8801729809879
- Website: [www.stitchos.app](https://www.stitchos.app)

---

Built with ❤️ by [Saaed Imam](https://github.com/saaedimam)