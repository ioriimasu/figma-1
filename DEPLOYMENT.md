# Deployment Instructions

## Prerequisites

1. Set the following environment variables:
   ```bash
   export VERCEL_TOKEN=<YOUR_VERCEL_TOKEN>
   export VERCEL_ORG_ID=<YOUR_VERCEL_ORG_ID>
   export VERCEL_PROJECT_NAME=<YOUR_VERCEL_PROJECT_NAME>
   ```

2. Replace the placeholder values in the deployment script with your actual values:
   - `<YOUR_SUPABASE_URL>`
   - `<YOUR_SUPABASE_ANON_KEY>`
   - `<YOUR_SITE_URL>`
   - `<OPTIONAL_RESEND_API_KEY>`
   - `<YOUR_CONTACT_EMAIL>`

## Deploy to Vercel

Run the deployment script:
```bash
./deploy-to-vercel.sh
```

Or run the commands manually:

1. Link the project:
   ```bash
   npx vercel link --yes --project $VERCEL_PROJECT_NAME --scope $VERCEL_ORG_ID --token $VERCEL_TOKEN
   ```

2. Set environment variables (replace placeholders with actual values):
   ```bash
   npx vercel env add NEXT_PUBLIC_SUPABASE_URL <YOUR_SUPABASE_URL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
   npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY <YOUR_SUPABASE_ANON_KEY> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
   npx vercel env add NEXT_PUBLIC_SITE_URL <YOUR_SITE_URL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
   npx vercel env add RESEND_API_KEY <OPTIONAL_RESEND_API_KEY> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
   npx vercel env add CONTACT_EMAIL <YOUR_CONTACT_EMAIL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
   ```

3. Deploy to production:
   ```bash
   npx vercel --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --prod --confirm
   ```

## Verification

After deployment, verify the following endpoints return 200 status:
- `/` - Main page
- `/sitemap.xml` - XML sitemap

## Changes Made

### Configuration Updates
- **tsconfig.json**: Updated target to ES2020, lib to ["DOM", "DOM.Iterable", "ES2020"]
- **next.config.js**: Removed experimental.appDir, eslint.ignoreDuringBuilds, typescript.ignoreBuildErrors
- **tailwind.config.ts**: Removed pages directory from content array (App Router only)
- **vercel.json**: Updated runtime to nodejs20.x

### New Features
- **src/app/api/sitemap/route.ts**: Created XML sitemap API route using NEXT_PUBLIC_SITE_URL

### Environment & Security
- **.env.example**: Updated with placeholder values only (no real credentials)
- **Cleanup**: Removed unused root index.html and unused UI components

### Build & Type Safety
- All TypeScript errors resolved
- Clean production build verified
- Dependencies optimized (removed unused UI components)