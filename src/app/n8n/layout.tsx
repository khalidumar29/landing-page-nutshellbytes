import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "N8N Automation Specialists | Custom Workflow Agents | Nutshell Bytes",
  description:
    "Transform your business with custom N8N workflow agents. We create intelligent automation solutions that save 95% of manual work time. Expert N8N developers delivering proven results across 15+ industries.",
  keywords:
    "N8N automation, workflow agents, business automation, N8N specialists, custom workflows, process automation, N8N developers, automation consultants, workflow optimization, business process automation, N8N integration services, automated workflows, enterprise automation, digital transformation",
  authors: [{ name: "Nutshell Bytes N8N Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "N8N Automation Specialists | Custom Workflow Agents",
    description:
      "Expert N8N automation solutions that deliver 300% ROI. Custom workflow agents for e-commerce, lead generation, support, and more. 50+ successful deployments.",
    url: "https://n8n.nutshellbytes.com",
    siteName: "Nutshell Bytes N8N Specialists",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/n8n-automation-preview.svg",
        width: 1200,
        height: 630,
        alt: "N8N Automation Workflow Agents by Nutshell Bytes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N8N Automation Specialists | Custom Workflow Agents",
    description:
      "Expert N8N automation solutions that deliver 300% ROI. Custom workflow agents for e-commerce, lead generation, support, and more.",
    images: ["/n8n-automation-preview.svg"],
    creator: "@nutshellbytes",
  },
  alternates: {
    canonical: "https://n8n.nutshellbytes.com",
  },
};

export default function N8NLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* N8N Specific Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nutshell Bytes N8N Specialists",
            alternateName: "N8N Automation Experts",
            url: "https://n8n.nutshellbytes.com",
            logo: "https://nutshellbytes.com/logo.png",
            description:
              "Expert N8N automation specialists creating custom workflow agents that deliver measurable business results",
            foundingDate: "2020",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-0123",
              contactType: "customer service",
              email: "team@nutshellbytes.com",
              availableLanguage: "en",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Global",
              addressRegion: "Worldwide",
              addressCountry: "International",
            },
            sameAs: [
              "https://nutshellbytes.com",
              "https://linkedin.com/company/nutshellbytes",
              "https://twitter.com/nutshellbytes",
            ],
            offers: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "N8N Workflow Agent Development",
                description:
                  "Custom N8N automation solutions and workflow agents",
                provider: {
                  "@type": "Organization",
                  name: "Nutshell Bytes",
                },
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "50",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* Service Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "N8N Workflow Automation Services",
            description:
              "Professional N8N automation and workflow agent development services",
            provider: {
              "@type": "Organization",
              name: "Nutshell Bytes",
              url: "https://nutshellbytes.com",
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "N8N Automation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Order Automation Agent",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Lead Generation Automation Agent",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Customer Support Automation Agent",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
