// Mock data for Nezz Consulting website

export const BRAND_COLORS = {
  navy: '#0a1628',
  green: '#2ecc8a',
};

export const LOGO_URL = 'https://customer-assets.emergentagent.com/job_nezz-consulting/artifacts/p7ijtf3w_Screenshot%202024-12-15%20132404%20-%20Copy.jpg';

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBjb25zdWx0YW50JTIwZGF0YSUyMHNjcmVlbnN8ZW58MHx8fHwxNzc1Njk1MDE4fDA&ixlib=rb-4.1.0&q=85',
  about: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDB8fHx8MTc3NTY5NTAyM3ww&ixlib=rb-4.1.0&q=85',
  services: {
    fpa: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86',
    bi: 'https://images.unsplash.com/photo-1644088379091-d574269d422f',
    strategic: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
    excel: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  whoWeServe: {
    smb: 'https://images.unsplash.com/photo-1760346546771-a81d986459ff',
    pe: 'https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9',
  },
};

export const STATS = [
  { value: '$1B+', label: 'Budget and Forecast Managed' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const SERVICES = [
  {
    id: 'fpa',
    title: 'FP&A Services',
    shortDescription: 'Strategic financial planning and analysis to drive business performance.',
    fullDescription: 'Our FP&A services transform your financial planning process from reactive to strategic. We build comprehensive budgeting frameworks, rolling forecasts, and variance analysis systems that give you the clarity to make confident decisions. Whether you need to implement a new planning cycle or optimize an existing one, we bring best-in-class methodology tailored to your business.',
    image: IMAGES.services.fpa,
    features: [
      'Annual budgeting and multi-year planning',
      'Rolling forecasts and scenario modeling',
      'Variance analysis and performance reporting',
      'Board-ready financial presentations',
      'KPI framework design and tracking',
    ],
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    shortDescription: 'Turn your data into actionable insights with powerful BI dashboards.',
    fullDescription: 'We help organizations move beyond static spreadsheets into dynamic, driver-based financial models. We design and implement BI dashboards that connect your operational metrics directly to financial outcomes, giving you real-time visibility into performance and enabling faster, data-driven decisions.',
    image: IMAGES.services.bi,
    features: [
      'Custom dashboard and reporting design',
      'Driver-based financial modeling',
      'Data integration and automation',
      'Real-time performance monitoring',
      'Executive-level data visualization',
    ],
  },
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    shortDescription: 'Build a roadmap for sustainable growth and value creation.',
    fullDescription: 'Strategic planning is about turning vision into executable action. We work with leadership teams to develop clear, financially grounded strategies that align resources with priorities. From market analysis to scenario planning, we help you chart a course that balances growth ambitions with operational reality.',
    image: IMAGES.services.strategic,
    features: [
      'Strategic roadmap development',
      'Market and competitive analysis',
      'Scenario planning and sensitivity analysis',
      'Value creation planning for PE-backed companies',
      'Operational alignment and execution planning',
    ],
  },
  {
    id: 'excel-automation',
    title: 'Excel Automation & Modeling',
    shortDescription: 'Eliminate manual work and build scalable, error-free financial models.',
    fullDescription: 'Manual processes drain time and introduce risk. We design advanced Excel solutions that automate repetitive tasks, improve accuracy, and scale with your business. From financial models to custom reporting tools, we build solutions that work the way you work—only faster and more reliably.',
    image: IMAGES.services.excel,
    features: [
      'Advanced financial model development',
      'VBA and Power Query automation',
      'Template standardization and documentation',
      'Legacy model audit and rebuild',
      'Training and knowledge transfer',
    ],
  },
];

export const WHO_WE_SERVE = [
  {
    id: 'smb',
    title: 'Small & Medium Businesses',
    subtitle: 'Enterprise-grade financial rigor, built for growing companies.',
    description: 'You\'re scaling fast, and your financial processes need to keep up. We bring the tools, frameworks, and expertise that large companies rely on—adapted for the pace and reality of a growing business. From building your first real budget to implementing dashboards that actually get used, we make sophisticated finance accessible.',
    image: IMAGES.whoWeServe.smb,
    benefits: [
      'Scalable planning processes that grow with you',
      'Clear visibility into cash flow and profitability drivers',
      'Reporting that supports fundraising and investor relations',
      'Financial infrastructure built to last',
    ],
  },
  {
    id: 'pe-backed',
    title: 'PE-Backed Companies',
    subtitle: 'Performance management that supports value creation.',
    description: 'Private equity ownership brings opportunity—and scrutiny. We help portfolio companies deliver the reporting quality, forecasting accuracy, and operational insights that PE firms expect. Whether you\'re integrating acquisitions, preparing for exit, or driving operational improvements, we build the financial infrastructure that supports your value creation plan.',
    image: IMAGES.whoWeServe.pe,
    benefits: [
      'Portfolio consolidation and standardized reporting',
      'KPI alignment across platform companies',
      'Board-ready financial packages and commentary',
      'Integration support for add-on acquisitions',
      'Operational performance tracking and analysis',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Nezz Consulting transformed how we look at our financials. We finally have dashboards that make sense and help us make faster decisions.',
    author: 'CFO',
    company: 'Montreal SMB',
  },
  {
    id: 2,
    quote: 'Their work on our FP&A process saved our team hours every week and gave our investors the reporting clarity they needed.',
    author: 'CEO',
    company: 'PE-backed company',
  },
  {
    id: 3,
    quote: 'Professional, sharp, and genuinely invested in our success. The financial model they built became the backbone of our planning process.',
    author: 'VP Finance',
    company: 'Growing Retailer',
  },
];

export const FOUNDER = {
  name: 'Younes Younes',
  title: 'Founder & Lead Consultant',
  bio: 'Younes brings extensive experience across financial planning & analysis, business intelligence, and strategic finance. With a proven track record of managing the budgeting and financial performance of organizations generating over $1 billion in revenue, he specializes in delivering actionable insights through advanced financial modeling, forecasting, and performance evaluation. His mission is to make enterprise-level financial rigor accessible to growing businesses and PE-backed companies alike.',
  image: IMAGES.about,
};

export const COMPANY_VALUES = [
  {
    title: 'Clarity Over Complexity',
    description: 'Financial rigor doesn\'t have to be complicated. We cut through the noise to deliver insights that are clear, actionable, and actually useful.',
  },
  {
    title: 'Built to Scale',
    description: 'We don\'t build temporary fixes. Every solution is designed to grow with your business and support you through the next stage of growth.',
  },
  {
    title: 'Partnership, Not Projects',
    description: 'We\'re not here to drop a deliverable and disappear. We invest in understanding your business and building solutions that genuinely move the needle.',
  },
];

export const PARTNERS = [
  {
    name: 'Swift Finance',
    description: 'Official partner of Swift Finance (by Exia Conseil), a leading FP&A platform. Through this partnership, we help organizations build dynamic financial models, improve forecast quality, connect operational drivers to financial results, and move beyond static reporting toward real performance management.',
    website: 'https://www.swiftfinance.fr',
    logo: 'https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Swift+Finance', // Replace with actual logo URL
  },
  {
    name: 'Goodyear',
    description: 'Strategic partnership providing financial planning and analysis expertise for operational excellence.',
    website: 'https://www.goodyear.com',
    logo: 'https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Goodyear', // Replace with actual logo URL
  },
  {
    name: 'Intact Insurance',
    description: 'Delivering business intelligence and financial modeling solutions to support strategic growth initiatives.',
    website: 'https://www.intact.ca',
    logo: 'https://via.placeholder.com/200x80/2ecc8a/ffffff?text=Intact', // Replace with actual logo URL
  },
  {
    name: 'EXIA',
    description: 'Collaborative partnership leveraging advanced analytics and financial expertise for engineering consulting excellence.',
    website: 'https://www.exia-conseil.com',
    logo: 'https://via.placeholder.com/200x80/2ecc8a/ffffff?text=EXIA', // Replace with actual logo URL
  },
];

export const SWIFT_FINANCE = {
  title: 'Our Partners',
  description: 'Strategic partnerships that enhance our service delivery and bring additional value to our clients.',
};

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Why PE Portfolio Consolidation Is a Value Creation Tool',
    excerpt: 'In private equity, the quality of consolidation has a direct effect on the quality of decision-making. Here\'s why robust reporting is part of your value creation infrastructure.',
    date: 'March 15, 2025',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Building a Driver-Based Financial Model for SMBs',
    excerpt: 'Most small businesses rely on static spreadsheets. A driver-based model changes that — linking your operations directly to your financial outcomes.',
    date: 'March 8, 2025',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'From Static Reporting to Performance Management',
    excerpt: 'There\'s a difference between reporting what happened and managing what\'s next. Here\'s how BI dashboards make that shift possible.',
    date: 'March 1, 2025',
    readTime: '7 min read',
  },
];

export const CONTACT_INFO = {
  location: 'Montreal, QC',
  email: 'younesnezzar@nezzconsulting.com',
  phone: '+1 (438) 220-1565',
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Who We Serve', path: '/who-we-serve' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];
