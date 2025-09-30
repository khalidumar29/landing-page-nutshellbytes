# Deployment Guide - Nutshell Bytes Dual Domain Landing Pages

## 🚀 Deployment Overview

This project is designed to serve two different landing pages based on the domain:

- `www.nutshellbytes.com` → Premium web development services
- `n8nutshellbytes.com` → Problem-solving and automation services

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Domain access for both domains
- Hosting platform (Vercel, Netlify, or custom server)

## 🌐 Domain Configuration

### DNS Setup

Point both domains to your hosting provider:

```dns
# For Vercel/Netlify
www.nutshellbytes.com    CNAME    your-project.vercel.app
n8nutshellbytes.com      CNAME    your-project.vercel.app

# For custom server
www.nutshellbytes.com    A        YOUR_SERVER_IP
n8nutshellbytes.com      A        YOUR_SERVER_IP
```

### Domain Routing

The project uses Next.js rewrites in `next.config.js`:

```javascript
async rewrites() {
  return [
    {
      source: '/',
      destination: '/nutshellbytes',
      has: [{ type: 'host', value: 'www.nutshellbytes.com' }],
    },
    {
      source: '/',
      destination: '/n8nutshellbytes',
      has: [{ type: 'host', value: 'n8nutshellbytes.com' }],
    },
  ]
}
```

## 🚀 Vercel Deployment

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Deploy Project

```bash
vercel
```

### 3. Configure Domains in Vercel Dashboard

1. Go to your project dashboard
2. Navigate to "Settings" → "Domains"
3. Add both domains:
   - `www.nutshellbytes.com`
   - `n8nutshellbytes.com`

### 4. Environment Variables (if needed)

```bash
# In Vercel dashboard or .env.local
NEXT_PUBLIC_SITE_URL=https://www.nutshellbytes.com
CONTACT_EMAIL=hello@nutshellbytes.com
```

## 🌊 Netlify Deployment

### 1. Build Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  conditions = {Host = ["www.nutshellbytes.com"]}

[[redirects]]
  from = "/*"
  to = "/n8nutshellbytes.html"
  status = 200
  conditions = {Host = ["n8nutshellbytes.com"]}
```

### 2. Deploy

```bash
# Via Git
git push origin main

# Or via CLI
npm install -g netlify-cli
netlify deploy --prod
```

## 🖥️ Custom Server Deployment

### 1. Build Project

```bash
npm run build
```

### 2. Server Configuration (Nginx)

```nginx
server {
    listen 80;
    server_name www.nutshellbytes.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name n8nutshellbytes.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. PM2 Process Manager

```bash
npm install -g pm2
pm2 start npm --name "nutshell-landing" -- start
pm2 save
pm2 startup
```

## 🔧 Environment Configuration

### Production Environment Variables

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.nutshellbytes.com
NEXT_PUBLIC_N8N_SITE_URL=https://n8nutshellbytes.com
CONTACT_EMAIL=hello@nutshellbytes.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 📊 Analytics & Monitoring

### Google Analytics Setup

Add to both pages in `pages/_app.js`:

```javascript
import { useEffect } from "react";
import { useRouter } from "next/router";

// Google Analytics
const GA_TRACKING_ID = "G-XXXXXXXXXX";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
```

### Performance Monitoring

- Enable Vercel Analytics
- Add Sentry for error tracking
- Configure Web Vitals reporting

## 🔒 Security Considerations

### Headers Configuration

```javascript
// next.config.js
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
```

## 🧪 Testing Before Deployment

### Local Testing with Host Mapping

Add to `/etc/hosts` (macOS/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows):

```
127.0.0.1    www.nutshellbytes.com
127.0.0.1    n8nutshellbytes.com
```

Then test:

- http://www.nutshellbytes.com:3001
- http://n8nutshellbytes.com:3001

### Performance Testing

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://www.nutshellbytes.com --view
lighthouse https://n8nutshellbytes.com --view

# Load testing
npm install -g artillery
artillery quick --count 100 --num 10 https://www.nutshellbytes.com
```

## 📈 SEO Configuration

### Sitemap Generation

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nutshellbytes.com</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://n8nutshellbytes.com</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://www.nutshellbytes.com/sitemap.xml
Sitemap: https://n8nutshellbytes.com/sitemap.xml
```

## 🚨 Troubleshooting

### Common Issues

1. **Domain Routing Not Working**

   - Check DNS propagation: `dig www.nutshellbytes.com`
   - Verify hosting provider domain configuration
   - Ensure rewrites are correctly configured

2. **CSS/Assets Not Loading**

   - Check `next.config.js` assetPrefix configuration
   - Verify public folder structure
   - Check for CORS issues

3. **GSAP Animation Issues**
   - Ensure proper licensing for production
   - Check for SSR compatibility
   - Verify ScrollTrigger initialization

### Support Checklist

- [ ] Both domains resolve correctly
- [ ] SSL certificates are installed
- [ ] Analytics tracking is working
- [ ] Contact forms are functional
- [ ] Performance scores are acceptable
- [ ] Mobile responsiveness is tested
- [ ] Cross-browser compatibility confirmed

---

## 📞 Support

For deployment support:

- Email: tech@nutshellbytes.com
- Documentation: Check project README
- Issues: Create GitHub issue with deployment logs
