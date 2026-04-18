# Partner Logo Setup Guide

## Current Status
Partner logos are currently showing **placeholder images**. You need to replace them with actual logo URLs.

## Where to Update
File: `/app/frontend/src/data/mock.js`

Look for the `PARTNERS` array (around line 170-195)

## How to Get Real Logo URLs

### Option 1: Upload Logos to Your Server (Recommended)
1. Save the actual logo files (PNG or SVG format, transparent background preferred)
2. Upload them to `/app/frontend/public/images/partners/` folder
3. Reference them like: `logo: '/images/partners/swift-finance-logo.png'`

### Option 2: Use External URLs
Find official logos from these sources:

**Swift Finance:**
- Visit: https://www.swiftfinance.fr
- Right-click on their logo → "Copy image address"
- Or contact them for official brand assets

**Goodyear:**
- Official logos: https://news.goodyear.com/logos
- Or use: https://brandfetch.com/goodyear.com

**Intact Insurance:**
- Official site: https://www.intact.ca
- Or brand assets at their media center

**EXIA:**
- Visit: https://www.exia-conseil.com
- Extract logo from their website

## How to Replace Placeholders

### Method 1: Direct URL Replacement
Replace the placeholder URLs in `/app/frontend/src/data/mock.js`:

```javascript
export const PARTNERS = [
  {
    name: 'Swift Finance',
    description: '...',
    website: 'https://www.swiftfinance.fr',
    logo: 'YOUR_SWIFT_FINANCE_LOGO_URL_HERE', // ← Replace this
  },
  {
    name: 'Goodyear',
    description: '...',
    website: 'https://www.goodyear.com',
    logo: 'YOUR_GOODYEAR_LOGO_URL_HERE', // ← Replace this
  },
  // ... etc
];
```

### Method 2: Upload to Public Folder
1. Create folder: `mkdir -p /app/frontend/public/images/partners`
2. Upload logo files to that folder
3. Update mock.js:

```javascript
logo: '/images/partners/swift-finance.png',
logo: '/images/partners/goodyear.png',
logo: '/images/partners/intact.png',
logo: '/images/partners/exia.png',
```

## Logo Best Practices
- **Format**: PNG with transparent background or SVG
- **Size**: Recommended width 200-300px
- **Aspect Ratio**: Horizontal logos work best
- **Background**: Transparent background preferred
- **Color**: Original brand colors (the white box background will make them visible)

## Example: Adding a Local Logo

1. **Save logo file** to `/app/frontend/public/images/partners/swift-finance.png`

2. **Update mock.js**:
```bash
cd /app/frontend/src/data
nano mock.js
```

3. **Change the logo line**:
```javascript
logo: '/images/partners/swift-finance.png',
```

4. **The frontend will auto-reload** with the new logo

## Testing
After updating logos, visit:
https://nezz-consulting.preview.emergentagent.com/about

Scroll to the "Our Partners" section to see the logos.

## Need Help?
If you have the logo files ready, you can:
1. Upload them to the public folder
2. Let me know the file names
3. I'll update the mock.js file for you

---
**Current Placeholder URLs** (to be replaced):
- Swift Finance: https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Swift+Finance
- Goodyear: https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Goodyear
- Intact Insurance: https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Intact
- EXIA: https://via.placeholder.com/200x80/2ecc8a/ffffff?text=EXIA
