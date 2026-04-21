# Vercel Deployment Guide for Nezz Consulting Website

## Prerequisites
1. Vercel account (https://vercel.com)
2. Git repository with this code

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your Git repository
3. Configure build settings:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `yarn install`

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables (if using backend)
If you want to connect to a backend API, set in Vercel Dashboard:
- `REACT_APP_BACKEND_URL` = Your backend API URL

## Build Configuration
The project uses:
- **React 19**
- **CRACO** for custom webpack config
- **Tailwind CSS**
- **Node 16.x** (specified in .nvmrc)

## Troubleshooting

### Build fails with "react-scripts build exited with 1"
- Ensure Node version is 16.x or higher
- Check that all dependencies install correctly
- Verify no ESLint errors (run `yarn build` locally first)

### Routes not working (404 errors)
- Vercel automatically handles SPA routing for Create React App
- If issues persist, check vercel.json configuration

### Environment variables not loading
- Ensure variables are prefixed with `REACT_APP_`
- Set them in Vercel Dashboard under Settings > Environment Variables
- Redeploy after adding environment variables

## Post-Deployment
1. Test all pages: Home, Services, Pricing, Who We Serve, About, Insights, Contact
2. Verify language toggle (EN/FR) works
3. Test forms (they use frontend validation only)
4. Check mobile responsiveness

## Current Status
✅ Build passes locally (`yarn build`)
✅ All ESLint errors resolved  
✅ React 19 compatible
✅ Production-ready configuration
✅ Vercel configuration files created
