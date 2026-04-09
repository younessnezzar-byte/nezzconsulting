# Nezz Consulting Website - Product Requirements Document

## Project Overview
Professional 6-page website for Nezz Consulting, a financial consulting firm in Vaudreuil-Dorion, QC serving SMBs and PE-backed companies.

**Brand Colors:**
- Navy: #0a1628
- Green: #2ecc8a

**Technology Stack:**
- Frontend: React + React Router
- Font: Manrope (400, 500, 700 weights)
- UI: Shadcn components + Tailwind CSS
- Backend: FastAPI (planned for Phase 2)
- Database: MongoDB (planned for Phase 2)

---

## User Personas

### Primary Users
1. **SMB Decision Makers** - CFOs and finance leaders at growing businesses seeking enterprise-grade financial solutions
2. **PE-Backed Companies** - Portfolio companies needing sophisticated FP&A and reporting infrastructure
3. **Business Owners** - Looking for strategic planning and business intelligence solutions

---

## Core Requirements (Static)

### Global Components
- Sticky navigation with mobile hamburger menu
- Active page highlighting in navigation
- Consistent footer with company info and links
- Manrope font family throughout
- Responsive design (desktop, tablet, mobile)

### Pages Required
1. **Home** - Hero section, stats, services overview, who we serve preview
2. **Services** - 4 detailed service sections (FP&A, BI/Swift Finance, Strategic Planning, Excel Automation)
3. **Who We Serve** - SMB and PE-backed company segments with testimonials
4. **About** - Mission, values, founder profile, Swift Finance partnership
5. **Insights** - Blog posts and newsletter signup
6. **Contact** - Contact form and company information

---

## What's Been Implemented ✅

### Phase 1 - Frontend MVP (December 2025)

#### Recent Updates (Latest):
- ✅ Updated stats: "$1B+" now reads "Budget and Forecast Managed"
- ✅ Services: Removed "Swift Finance" from Business Intelligence service title and features
- ✅ Partners Section: Moved Swift Finance partnership to "Our Partners" section on About page
- ✅ Trust bar: Removed "across Canada" to make it more general

#### Pages Completed:
- ✅ Home page with hero, stats, services cards, who we serve preview, CTA
- ✅ Services page with 4 detailed service sections and features
- ✅ Who We Serve page with SMB and PE-backed segments + testimonials
- ✅ About page with mission, values, founder profile (Younes Younes), Swift Finance partnership
- ✅ Insights page with 3 blog posts and newsletter form (frontend mock)
- ✅ Contact page with form validation and contact info (frontend mock)

#### Global Components:
- ✅ Navbar with sticky positioning, mobile menu, active page highlighting
- ✅ Footer with company info, quick links, services, contact details
- ✅ Toast notifications using Sonner

#### Design & UX:
- ✅ Professional stock images from Unsplash (hero, services, about, who we serve)
- ✅ Navy (#0a1628) and green (#2ecc8a) brand colors
- ✅ Manrope font family (400, 500, 700 weights)
- ✅ Responsive design with mobile-first approach
- ✅ Smooth scroll behavior and transitions
- ✅ Hover states and micro-interactions

#### Mock Data:
- All content currently uses frontend mock data in `/app/frontend/src/data/mock.js`
- Contact form and newsletter: Frontend validation with success toasts (no backend)

---

## Prioritized Backlog

### P0 Features (Critical - Next Phase)
- [ ] Backend API development
  - Contact form submission endpoint
  - Newsletter signup endpoint
  - Email integration (EmailJS or Formspree)
- [ ] Database integration
  - Store contact form submissions
  - Store newsletter subscribers
- [ ] Form backend integration
  - Remove mock.js dependencies for forms
  - Real email notifications

### P1 Features (High Priority)
- [ ] Blog CMS integration or admin panel
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization
  - Meta tags for all pages
  - Open Graph tags
  - Sitemap
- [ ] Performance optimization
  - Image lazy loading
  - Code splitting

### P2 Features (Nice to Have)
- [ ] Case studies section
- [ ] Client testimonials carousel
- [ ] Resources/downloads section
- [ ] Multi-language support (French/English)
- [ ] Live chat integration
- [ ] Cookie consent banner

---

## Next Tasks

### Immediate Next Steps:
1. **User Review** - Client reviews the frontend design and provides feedback
2. **Content Refinement** - Update any copy or images based on client feedback
3. **Backend Development Planning** - Define API contracts for forms and newsletter
4. **Email Service Setup** - Choose and configure email service (EmailJS/Formspree/SendGrid)

### Backend Development Tasks:
1. Create `/api/contact` endpoint for form submissions
2. Create `/api/newsletter` endpoint for newsletter signups
3. Set up email notification service
4. Create MongoDB models for contacts and newsletter subscribers
5. Integrate frontend forms with backend APIs
6. Add form submission confirmation emails
7. Testing and validation

---

## API Contracts (Planned)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "phone": "string (optional)",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll get back to you within 24 hours."
}
```

### POST /api/newsletter
**Request:**
```json
{
  "email": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to our newsletter!"
}
```

---

## Notes
- All forms currently have frontend-only validation
- Mock data simulates successful submissions with 1-1.5s delay
- Images sourced from Unsplash via vision_expert_agent
- Design follows professional financial consulting industry standards
- Mobile responsive with hamburger menu on smaller screens
