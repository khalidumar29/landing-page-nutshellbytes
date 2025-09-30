# Nutshell Bytes - Dual Domain Landing Pages

This project contains two distinct landing pages for different target audiences:

## 🌐 Domains

### 1. www.nutshellbytes.com - Premium Web Development

**Target**: Businesses looking for high-quality web solutions
**Focus**:

- SaaS Development
- Enterprise Websites
- Payload CMS Solutions
- Medusa Commerce Platforms
- Premium UI/UX Design

**Features**:

- Professional, polished design
- Technology stack showcase
- Portfolio highlighting enterprise work
- Client testimonials
- Premium service offerings

### 2. n8nutshellbytes.com - Problem Solving & Automation

**Target**: Businesses with operational challenges
**Focus**:

- Business Process Automation
- Workflow Optimization
- System Integration
- Problem Identification & Solutions
- Efficiency Improvements

**Features**:

- Problem-focused messaging
- Minimal, direct design
- Case studies with results
- Urgency-driven CTAs
- Solution-oriented content

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the main Nutshell Bytes landing page.

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.jsx              # Main landing (www.nutshellbytes.com)
│   ├── nutshellbytes.jsx      # Nutshell Bytes main page
│   └── n8nutshellbytes.jsx    # N8N problem-solving page
├── components/
│   ├── hero/
│   │   ├── NutshellHero.jsx   # Premium web dev hero
│   │   └── N8NHero.jsx        # Problem-solving hero
│   ├── service/
│   │   ├── NutshellServices.jsx  # Web dev services
│   │   └── N8NProblems.jsx       # Problem solutions
│   ├── portfolio/
│   │   ├── NutshellPortfolio.jsx # Full portfolio
│   │   └── N8NPortfolio.jsx      # Minimal case studies
│   └── cta/
│       ├── NutshellCTA.jsx    # Premium CTA
│       └── N8NCTA.jsx         # Urgent problem-solving CTA
└── styles/
    └── nutshell.css           # Custom animations & styles
```

## 🎨 Design Philosophy

### Nutshell Bytes (Premium)

- **Colors**: Purple gradient (#667eea to #764ba2)
- **Style**: Professional, polished, premium
- **Animation**: Smooth, elegant GSAP animations
- **Content**: Technology-focused, feature-rich

### N8N Solutions (Problem-Solving)

- **Colors**: Red/Orange gradient (#ff6b6b to #ee5a24)
- **Style**: Minimal, direct, urgent
- **Animation**: Sharp, attention-grabbing
- **Content**: Problem-focused, results-driven

## 🛠 Technologies Used

- **Framework**: Next.js 13
- **Animations**: GSAP with ScrollTrigger
- **Styling**: Custom CSS with Bootstrap
- **Icons**: Font Awesome
- **Fonts**: Custom typography stack

## 📱 Responsive Design

Both landing pages are fully responsive with:

- Mobile-first design approach
- Optimized layouts for tablets and mobile
- Touch-friendly interactions
- Performance optimized images

## 🚀 Deployment

The project uses Next.js rewrites to handle domain routing:

- `www.nutshellbytes.com` → `/nutshellbytes`
- `n8nutshellbytes.com` → `/n8nutshellbytes`

Configure your DNS to point both domains to your deployment.

## 📈 Performance Features

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- GSAP animations with performance optimization
- Minimal bundle sizes for fast loading

## 🎯 Conversion Optimization

### Nutshell Bytes

- Clear value propositions for each service
- Technology credibility indicators
- Social proof through testimonials
- Multiple contact options

### N8N Solutions

- Problem-focused headlines
- Urgency-driven messaging
- Clear before/after scenarios
- Direct response CTAs

---

Built with ❤️ by Nutshell Bytes
