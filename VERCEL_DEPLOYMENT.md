# Nezz Consulting - Vercel Deployment Instructions

## Quick Setup (Recommended)

### Step 1: Vercel Dashboard Configuration
1. Go to https://vercel.com/new
2. Import your Git repository
3. **IMPORTANT:** Configure these settings:

**Project Settings:**
- **Framework Preset:** Create React App
- **Root Directory:** `frontend` ← CRITICAL!
- **Build Command:** Leave default (`yarn build`)
- **Output Directory:** Leave default (`build`)
- **Install Command:** Leave default (`yarn install`)
- **Node.js Version:** 16.x or 18.x

### Step 2: Deploy
Click "Deploy" - that's it!

---

## Alternative: Deploy from Root Directory

If you want to deploy from the root directory instead:

1. **Delete or rename** `/app/vercel.json` to `/app/vercel.json.backup`
2. In Vercel Dashboard settings:
   - **Root Directory:** Leave empty (root)
   - **Build Command:** `cd frontend && yarn install && yarn build`
   - **Output Directory:** `frontend/build`
   - **Install Command:** `cd frontend && yarn install`

---

## Troubleshooting

### Error: "Command 'cd frontend && yarn install' exited with 1"
**Solution:** Set **Root Directory** to `frontend` in Vercel settings, and leave Install/Build commands as default.

### Error: "react-scripts build exited with 1"
**Solutions:**
1. Ensure Node.js version is 16.x or 18.x
2. Clear Vercel build cache: Settings → General → Clear Build Cache
3. Redeploy

### Error: "Cannot find module"
**Solution:** 
1. Delete `node_modules` and `yarn.lock` locally
2. Run `yarn install`
3. Commit and push
4. Redeploy on Vercel

### Routes show 404 errors
**Solution:** The `vercel.json` in root handles SPA routing. Ensure it exists.

---

## Environment Variables (Optional)

If you need to connect to a backend API later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - **Key:** `REACT_APP_BACKEND_URL`
   - **Value:** Your API URL (e.g., `https://api.yourbackend.com`)
3. Redeploy

---

## Current Status
✅ Build passes locally (`CI=true yarn build`)
✅ All ESLint errors resolved
✅ React 19 compatible
✅ vercel.json configured for SPA routing
✅ Node.js 16.x specified in .nvmrc

---

## Recommended Vercel Settings

```
Framework Preset:    Create React App
Root Directory:      frontend
Build Command:       (default) yarn build
Output Directory:    (default) build
Install Command:     (default) yarn install
Node.js Version:     16.x
```

**Deploy and your site will be live!** 🚀
