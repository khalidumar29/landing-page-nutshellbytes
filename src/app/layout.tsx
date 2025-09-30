import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutshell Bytes - Premium Web Development Agency | Custom Software Solutions 2025",
  description:
    "🚀 Transform your business with cutting-edge web development, SaaS platforms, and intelligent automation. 500+ projects delivered. React, Next.js & N8N specialists. Get your free consultation today!",
  keywords:
    "web development agency, custom web development, SaaS development, React development company, Next.js development services, TypeScript experts, modern web applications, business automation, N8N workflow automation, API development services, UI/UX design agency, responsive web design, e-commerce development, custom software solutions, digital transformation, web app development, startup web development, enterprise software development, business process automation, workflow optimization, web development consultation, software development agency, tech consulting, digital solutions provider",
  authors: [{ name: "Nutshell Bytes Team" }],
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
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "Nutshell Bytes - Premium Web Development Agency | 500+ Projects Delivered",
    description:
      "🎯 Looking for expert web developers? We've delivered 500+ successful projects. Custom web apps, SaaS platforms & automation solutions. Free consultation available!",
    url: "https://nutshellbytes.com",
    siteName: "Nutshell Bytes",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nutshell Bytes - Premium Web Development Agency"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutshell Bytes - Premium Web Development Agency",
    description:
      "Transform your business with cutting-edge web development, SaaS solutions, and digital innovation. Trusted by businesses worldwide.",
    images: ["/og-image.jpg"],
    creator: "@nutshellbytes",
  },
  alternates: {
    canonical: "https://nutshellbytes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://nutshellbytes.com/#organization",
              name: "Nutshell Bytes",
              legalName: "Nutshell Bytes LLC",
              alternateName: ["Nutshell Bytes Digital Agency", "Nutshell Bytes Web Development"],
              url: "https://nutshellbytes.com",
              logo: {
                "@type": "ImageObject",
                url: "https://nutshellbytes.com/logo.svg",
                width: 400,
                height: 400
              },
              image: "https://nutshellbytes.com/og-image.jpg",
              description: "Premium web development and digital solutions agency. We transform businesses through custom web applications, SaaS platforms, and intelligent automation. Trusted by startups to enterprise clients worldwide.",
              foundingDate: "2020",
              slogan: "Transform Your Business with Premium Digital Solutions",
              knowsAbout: [
                "Web Development",
                "React Development", 
                "Next.js Development",
                "TypeScript Development",
                "SaaS Development",
                "N8N Automation",
                "Workflow Automation",
                "API Development",
                "UI/UX Design",
                "E-commerce Development",
                "Business Process Automation"
              ],
              areaServed: "Worldwide",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 0,
                  longitude: 0
                },
                geoRadius: "25000000"
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "team@nutshellbytes.com",
                  availableLanguage: ["en"],
                  contactOption: "TollFree"
                },
                {
                  "@type": "ContactPoint", 
                  contactType: "sales",
                  url: "https://cal.com/khalid-umar/30min",
                  availableLanguage: ["en"]
                }
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Global Service",
                addressRegion: "Worldwide",
                addressCountry: "International"
              },
              sameAs: [
                "https://n8n.nutshellbytes.com",
                "https://linkedin.com/company/nutshellbytes",
                "https://twitter.com/nutshellbytes"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Solutions & Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web Development",
                      description: "Bespoke web applications built with modern technologies",
                      provider: {
                        "@id": "https://nutshellbytes.com/#organization"
                      }
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS Platform Development",
                      description: "Scalable software-as-a-service solutions for businesses",
                      provider: {
                        "@id": "https://nutshellbytes.com/#organization"  
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service", 
                      name: "N8N Automation Solutions",
                      description: "Custom workflow automation and business process optimization",
                      provider: {
                        "@id": "https://nutshellbytes.com/#organization"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "API Development & Integration", 
                      description: "RESTful APIs and third-party service integrations",
                      provider: {
                        "@id": "https://nutshellbytes.com/#organization"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design & Prototyping",
                      description: "User-centered design and interactive prototypes",
                      provider: {
                        "@id": "https://nutshellbytes.com/#organization"
                      }
                    }
                  }
                ]
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1"
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating", 
                    ratingValue: "5"
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Mitchell"
                  },
                  reviewBody: "Exceptional web development services. Nutshell Bytes transformed our business with a beautiful, fast website that converts visitors into customers."
                }
              ],
              potentialAction: {
                "@type": "ContactAction",
                target: "https://cal.com/khalid-umar/30min",
                name: "Schedule Consultation"
              }
            })
          }}
        />
      </head>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  );
}
