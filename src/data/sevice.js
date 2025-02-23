const services = {
  // Basic service list data
  servicesData: [
    {
      id: "mobile-development",
      slug: "mobile-development",
      title: "Mobile Development",
      highlight: "design",
      description:
        "We help brands stand out through thoughtful, elegant visual design. Our design philosophy focuses on creating meaningful experiences.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Logo Design",
        "Marketing Collateral",
        "Brand Guidelines",
      ],
      image: "/assets/imgs/service/1/1.jpg",
    },
    {
      id: "web-development",
      slug: "web-development",
      title: "Web",
      highlight: "Development",
      description:
        "Create powerful web applications using modern technologies and frameworks. We build scalable solutions that grow with your business.",
      features: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
        "SEO Implementation",
      ],
      image: "/assets/imgs/service/1/2.jpg",
    },
    {
      id: "digital-marketing",
      slug: "digital-marketing",
      title: "Digital",
      highlight: "Marketing",
      description:
        "Strategic digital marketing solutions to grow your online presence. Data-driven approaches for maximum ROI.",
      features: [
        "SEO Strategy",
        "Content Marketing",
        "Social Media",
        "Email Campaigns",
        "Analytics & Reporting",
      ],
      image: "/assets/imgs/service/1/3.jpg",
    },
  ],

  // Digital Agency section data
  digitalAgency: [
    {
      id: 1,
      slug: "web-development",
      number: "01",
      title: "Web Development",
      description:
        "We create scalable web applications using modern technologies. Full-stack development with focus on performance and user experience.",
      image: "/assets/imgs/service/1/1.jpg",
      link: "/service/web-development",
    },
    {
      id: 2,
      slug: "mobile-development",
      number: "02",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications. Building powerful mobile experiences for iOS and Android platforms.",
      image: "/assets/imgs/service/1/2.png",
      link: "/service/mobile-development",
    },
    {
      id: 3,
      slug: "digital-marketing",
      number: "03",
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your business. Data-driven approaches for maximum impact and ROI.",
      image: "/assets/imgs/service/1/3.png",
      link: "/service/digital-marketing",
    },
  ],

  // Detailed service pages data
  serviceDetails: {
    "web-development": {
      id: "web-development",
      title: "Web Development",
      description: "Custom web development solutions for modern businesses",
      headerInfo: {
        category: {
          name: "Development",
          link: "/category/development",
        },
        client: "Various Clients",
        startDate: "Ongoing",
        handover: "Project Based",
      },
      development: {
        title: "Web Development Expertise",
        subtitle: "Creating Digital Excellence",
        description:
          "We build scalable and performant web applications using cutting-edge technologies",
        features: [
          {
            icon: "frontend",
            title: "Frontend Development",
            description: "Modern, responsive interfaces with React and Next.js",
          },
          {
            icon: "backend",
            title: "Backend Development",
            description: "Scalable server solutions with Node.js and Python",
          },
          {
            icon: "database",
            title: "Database Design",
            description:
              "Efficient data structures with SQL and NoSQL solutions",
          },
          {
            icon: "api",
            title: "API Development",
            description: "RESTful and GraphQL API implementations",
          },
        ],
      },
      workflow: {
        title: "Our Development Process",
        description: "A proven methodology for successful project delivery",
        steps: [
          {
            number: "01",
            title: "Discovery",
            description: "Requirements gathering and analysis",
          },
          {
            number: "02",
            title: "Planning",
            description: "Architecture design and project roadmap",
          },
          {
            number: "03",
            title: "Development",
            description: "Agile development with regular updates",
          },
          {
            number: "04",
            title: "Testing",
            description: "Quality assurance and user testing",
          },
          {
            number: "05",
            title: "Deployment",
            description: "Launch and maintenance support",
          },
        ],
      },
      faq: [
        {
          question: "What technologies do you use?",
          answer:
            "We use modern technologies like React, Next.js, Node.js, and various databases depending on project requirements.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary based on complexity, but typically range from 2-6 months for full implementations.",
        },
        {
          question: "Do you provide maintenance?",
          answer:
            "Yes, we offer ongoing maintenance and support packages for all our web development projects.",
        },
        {
          question: "What about hosting?",
          answer:
            "We can help set up and manage hosting on major cloud providers like AWS, Google Cloud, or custom solutions.",
        },
      ],
    },

    "mobile-development": {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
      headerInfo: {
        category: {
          name: "Development",
          link: "/category/development",
        },
        client: "Various Clients",
        startDate: "Ongoing",
        handover: "Project Based",
      },
      development: {
        title: "Mobile Development Expertise",
        subtitle: "Creating Mobile Excellence",
        description:
          "We build powerful mobile applications for both iOS and Android platforms",
        features: [
          {
            icon: "ios",
            title: "iOS Development",
            description: "Native iOS apps with Swift and SwiftUI",
          },
          {
            icon: "android",
            title: "Android Development",
            description: "Native Android apps with Kotlin",
          },
          {
            icon: "cross-platform",
            title: "Cross-Platform",
            description: "Efficient solutions with React Native",
          },
        ],
      },
      workflow: {
        title: "Mobile Development Process",
        description: "Streamlined approach for quality mobile apps",
        steps: [
          {
            number: "01",
            title: "Planning",
            description: "App architecture and user flow design",
          },
          {
            number: "02",
            title: "Design",
            description: "UI/UX design and prototyping",
          },
          {
            number: "03",
            title: "Development",
            description: "Native or cross-platform development",
          },
        ],
      },
      faq: [
        {
          question: "Native or Cross-platform?",
          answer:
            "We recommend the best approach based on your specific needs and budget.",
        },
        {
          question: "App Store submission?",
          answer:
            "We handle the entire app store submission and review process.",
        },
      ],
    },

    "digital-marketing": {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions",
      headerInfo: {
        category: {
          name: "Marketing",
          link: "/category/marketing",
        },
        client: "Various Clients",
        startDate: "Ongoing",
        handover: "Monthly Services",
      },
      development: {
        title: "Marketing Expertise",
        subtitle: "Driving Growth",
        description:
          "Data-driven digital marketing strategies for business growth",
        features: [
          {
            icon: "seo",
            title: "SEO Optimization",
            description: "Improve search engine rankings",
          },
          {
            icon: "social",
            title: "Social Media",
            description: "Engaging social media management",
          },
          {
            icon: "analytics",
            title: "Analytics",
            description: "Detailed performance tracking",
          },
        ],
      },
      workflow: {
        title: "Marketing Process",
        description: "Strategic approach to digital marketing",
        steps: [
          {
            number: "01",
            title: "Analysis",
            description: "Market and competitor analysis",
          },
          {
            number: "02",
            title: "Strategy",
            description: "Custom marketing strategy development",
          },
          {
            number: "03",
            title: "Implementation",
            description: "Campaign execution and optimization",
          },
        ],
      },
      faq: [
        {
          question: "Reporting frequency?",
          answer:
            "We provide detailed monthly reports and real-time dashboard access.",
        },
        {
          question: "Contract length?",
          answer: "We offer flexible 3-month, 6-month, and 12-month contracts.",
        },
      ],
    },
  },
};

// Export helpers for accessing specific data sections
export const getServicesData = () => services.servicesData;
export const getDigitalAgencyData = () => services.digitalAgency;
export const getServiceDetails = (slug) => services.serviceDetails[slug];
export const getAllServiceSlugs = () => Object.keys(services.serviceDetails);

export default services;
