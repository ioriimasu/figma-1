#!/bin/bash

# Vercel deployment script
# This script requires the following environment variables to be set:
# - VERCEL_TOKEN=<YOUR_VERCEL_TOKEN>
# - VERCEL_ORG_ID=<YOUR_VERCEL_ORG_ID>
# - VERCEL_PROJECT_NAME=<YOUR_VERCEL_PROJECT_NAME>

set -e

echo "Checking required environment variables..."
if [ -z "$VERCEL_TOKEN" ] || [ -z "$VERCEL_ORG_ID" ] || [ -z "$VERCEL_PROJECT_NAME" ]; then
    echo "Error: Missing required environment variables:"
    echo "  VERCEL_TOKEN=${VERCEL_TOKEN:-<YOUR_VERCEL_TOKEN>}"
    echo "  VERCEL_ORG_ID=${VERCEL_ORG_ID:-<YOUR_VERCEL_ORG_ID>}"
    echo "  VERCEL_PROJECT_NAME=${VERCEL_PROJECT_NAME:-<YOUR_VERCEL_PROJECT_NAME>}"
    echo ""
    echo "Please set these environment variables and run the script again."
    exit 1
fi

echo "Linking project to Vercel..."
npx vercel link --yes --project $VERCEL_PROJECT_NAME --scope $VERCEL_ORG_ID --token $VERCEL_TOKEN

echo "Setting environment variables on Vercel..."
npx vercel env add NEXT_PUBLIC_SUPABASE_URL <YOUR_SUPABASE_URL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY <YOUR_SUPABASE_ANON_KEY> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
npx vercel env add NEXT_PUBLIC_SITE_URL <YOUR_SITE_URL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
npx vercel env add RESEND_API_KEY <OPTIONAL_RESEND_API_KEY> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes
npx vercel env add CONTACT_EMAIL <YOUR_CONTACT_EMAIL> --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --yes

echo "Deploying to production..."
npx vercel --token $VERCEL_TOKEN --scope $VERCEL_ORG_ID --prod --confirm

echo "Deployment completed!"