export const portfolioSlides = [
  {
    id: 1,
    title: "callmi",
    type: "Website",
    year: "2023",
    image: "/assets/imgs/portfolio/3/callmi.png",
    slug: "callmi-website",
    // Add any additional fields needed for details view
    headerInfo: {
      category: {
        name: "Website",
        link: "/category/website",
      },
      client: "walid daniel dib",
      startDate: "feugust 2023",
      handover: "February 2024",
    },
  },
  {
    id: 2,
    title: "Arbor Assistant",
    type: "",
    year: "2023",
    image: "/assets/imgs/portfolio/3/arboarassistant.png",
    slug: "arbor-assistant",
    // Add any additional fields needed for details view
    headerInfo: {
      category: {
        name: "Website",
        link: "/category/website",
      },
      client: "Benjon Inc",
      startDate: "January 2012",
      handover: "March 2012",
    },
  },
  {
    id: 3,
    title: "Foresee Ai",
    type: "Website",
    year: "2023",
    image: "/portfolio/foresee/home.png",
    slug: "foresee-ai",
    headerInfo: {
      category: {
        name: "Website",
        link: "/category/website",
      },
      client: "Gary Eisen & Robert Eisen",
      startDate: "September 2023",
      handover: "On Going",
    },
  },
  {
    id: 4,
    title: "Road Mobility",
    type: "Website",
    year: "2023",
    image: "/portfolio/road/home.png",
    slug: "road-mobility",
    // Add any additional fields needed for details view
    headerInfo: {
      category: {
        name: "Website",
        link: "/category/website",
      },
      client: "Gary Eisen & Robert Eisen",
      startDate: "December 2023",
      handover: "On Going",
    },
  },
  // ...other slides
];

export const portfolioDetails = {
  "callmi-website": {
    id: 1,
    title: "Callmi Expert Connection Platform",
    headerInfo: {
      category: {
        name: "Knowledge Sharing & Consulting",
        link: "https://callmi.co/",
      },
      client: "Walid Daniel Dib",
      startDate: "August 2023",
      handover: "February 2024",
    },
    mainImage: "/portfolio/callmi/main.png",
    sections: [
      {
        title: "On-Demand Expert Consultation Platform",
        description:
          "Callmi is a specialized platform connecting users with Middle East's elite experts for personalized 1:1 video consultations. We developed a comprehensive solution that enables users to book on-demand sessions with founders, operators, and investors to discuss challenges and find winning solutions, eliminating the need for trial and error learning.",
        features: [
          "Expert Profile Management",
          "Video Call Integration",
          "Appointment Scheduling",
          "Secure Payment Processing",
          "User Account Management",
        ],
      },
      {
        title: "User-Centered Design System",
        description:
          "Our design approach focused on creating an intuitive interface that serves both experts and knowledge seekers. The system architecture ensures smooth navigation, clear information hierarchy, and responsive design across all devices. We implemented advanced booking systems while maintaining a user-friendly experience.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Expert Discovery" },
            { type: "medium", text: "Session Booking" },
            { type: "semibold", text: "Video Consultations" },
            { type: "bold", text: "Knowledge Exchange" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/callmi/g1.png",
          alt: "Expert Discovery Interface",
        },
        {
          image: "/portfolio/callmi/g2.png",
          alt: "Booking Management View",
        },
      ],
      fullWidth: {
        image: "/portfolio/callmi/g3.png",
        alt: "Callmi Platform Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/callmi/g4.png",
            alt: "Mobile Application View",
          },
          {
            image: "/portfolio/callmi/g5.png",
            alt: "Expert Dashboard",
          },
        ],
        text: "Callmi has transformed knowledge sharing in the Middle East by creating a platform that connects users with elite experts for personalized advice. The solution enables direct learning from experienced founders, operators, and investors, helping users overcome challenges through proven solutions rather than trial and error.",
      },
    },
    stats: {
      metrics: [
        { label: "Expert Satisfaction", value: "95%" },
        { label: "Knowledge Transfer", value: "+80%" },
        { label: "User Problem Resolution", value: "+85%" },
      ],
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "AWS Services"],
    navigation: {
      prev: {
        link: "/portfolio/road-mobility",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/arbor-assistant",
        text: "Next Project",
      },
    },
  },
  "arbor-assistant": {
    id: 2,
    title: "Arbor Assistant",
    headerInfo: {
      category: {
        name: "AI-Powered Platform",
        link: "https://arborassistant.com/",
      },
      client: "Benjon Inc",
      startDate: "January 2023",
      handover: "March 2023",
    },
    mainImage: "/portfolio/abrod/main.png",
    sections: [
      {
        title: "Revolutionizing Tree Care Management",
        description:
          "Arbor Assistant represents a breakthrough in arborist technology, combining AI-powered analysis with intuitive management tools. Our team developed a comprehensive platform that enables arborists to streamline their workflows, enhance decision-making, and provide better care for urban forests.",
        features: [
          "AI Tree Analysis",
          "Mobile-First Design",
          "Real-time Reporting",
          "Inventory Management",
          "Client Portal Integration",
        ],
      },
      {
        title: "Intelligent Interface Design",
        description:
          "The interface was carefully crafted to balance sophisticated functionality with ease of use. We implemented an adaptive design system that works seamlessly across devices, ensuring arborists can access critical information whether in the office or in the field.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Field Data Collection" },
            { type: "medium", text: "Risk Assessment Reports" },
            { type: "semibold", text: "Tree Health Analytics" },
            { type: "bold", text: "Emergency Response" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/abrod/g1.png",
          alt: "Tree Analysis Dashboard",
        },
        {
          image: "/portfolio/abrod/g2.png",
          alt: "Mobile Field Interface",
        },
      ],
      fullWidth: {
        image: "/portfolio/abrod/g3.png",
        alt: "Arbor Assistant Platform Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/abrod/g4.png",
            alt: "Mobile Application Interface",
          },
          {
            image: "/portfolio/abrod/g5.png",
            alt: "Advanced Reporting Dashboard",
          },
        ],
        text: "Arbor Assistant demonstrates how cutting-edge technology can transform traditional industries. By combining AI capabilities with user-centered design, we've created a tool that not only improves efficiency but also contributes to the sustainable management of urban forests.",
      },
    },
    navigation: {
      prev: {
        link: "/portfolio/callmi-website",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/foresee-ai",
        text: "Next Project",
      },
    },
  },
  "foresee-ai": {
    id: 3,
    title: "Foresee AI Platform",
    headerInfo: {
      category: {
        name: "AI & Machine Learning",
        link: "",
      },
      client: "Gary Eisen & Robert Eisen",
      startDate: "September 2023",
      handover: "Ongoing Development",
    },
    mainImage: "/portfolio/foresee/main.png",
    sections: [
      {
        title: "Next-Generation AI Prediction Platform",
        description:
          "Foresee AI is revolutionizing predictive analytics by combining advanced machine learning algorithms with intuitive user interfaces. Our platform enables businesses to harness the power of AI for accurate forecasting and data-driven decision making, all while maintaining transparency and ease of use.",
        features: [
          "Advanced AI Algorithms",
          "Real-time Predictions",
          "Data Visualization",
          "Automated Reporting",
          "Custom Model Training",
        ],
      },
      {
        title: "Intelligent Dashboard Design",
        description:
          "We created a sophisticated yet accessible interface that transforms complex AI operations into understandable insights. The dashboard presents predictions and analytics in clear, actionable formats while allowing deep customization for power users.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Data Analysis" },
            { type: "medium", text: "Prediction Models" },
            { type: "semibold", text: "Real-time Insights" },
            { type: "bold", text: "Strategic Planning" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/foresee/g1.png",
          alt: "AI Dashboard Interface",
        },
        {
          image: "/portfolio/foresee/g2.png",
          alt: "Predictive Analytics View",
        },
      ],
      fullWidth: {
        image: "/portfolio/foresee/g3.png",
        alt: "Foresee AI Platform Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/foresee/g4.png",
            alt: "Mobile Analytics Interface",
          },
          {
            image: "/portfolio/foresee/g5.png",
            alt: "AI Model Configuration",
          },
        ],
        text: "Foresee AI is setting new standards in predictive analytics by making advanced AI capabilities accessible to businesses of all sizes. The platform's ongoing development continues to push the boundaries of what's possible in AI-driven decision making.",
      },
    },
    stats: {
      metrics: [
        { label: "Prediction Accuracy", value: "94%" },
        { label: "Processing Speed", value: "<100ms" },
        { label: "Data Sources Integrated", value: "50+" },
      ],
    },
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "Node.js",
      "AWS SageMaker",
      "Docker",
      "Kubernetes",
    ],
    achievements: [
      "Successfully processed over 1M predictions",
      "Integrated with 50+ data sources",
      "Reduced decision-making time by 60%",
      "Achieved 94% prediction accuracy",
    ],
    navigation: {
      prev: {
        link: "/portfolio/arbor-assistant",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/road-mobility",
        text: "Next Project",
      },
    },
  },
  "road-mobility": {
    id: 4,
    title: "Road Mobility Platform",
    headerInfo: {
      category: {
        name: "Transportation Technology",
        link: "",
      },
      client: "Gary Eisen & Robert Eisen",
      startDate: "December 2023",
      handover: "Ongoing Development",
    },
    mainImage: "/portfolio/road/main.png",
    sections: [
      {
        title: "Smart Transportation Solutions",
        description:
          "Road Mobility is transforming urban transportation through intelligent routing and real-time traffic management. Our platform combines IoT sensors, predictive analytics, and user-friendly interfaces to create smarter, more efficient transportation systems for modern cities.",
        features: [
          "Real-time Traffic Monitoring",
          "Smart Route Optimization",
          "Fleet Management Integration",
          "Predictive Maintenance",
          "Emergency Response System",
        ],
      },
      {
        title: "Connected Infrastructure Platform",
        description:
          "We developed an integrated system that connects various transportation stakeholders - from city planners to commuters. The platform provides real-time insights, predictive analytics, and automated response systems to optimize traffic flow and enhance road safety.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Traffic Analytics" },
            { type: "medium", text: "Route Planning" },
            { type: "semibold", text: "Fleet Management" },
            { type: "bold", text: "Emergency Alerts" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/road/g1.png",
          alt: "Traffic Management Dashboard",
        },
        {
          image: "/portfolio/road/g2.png",
          alt: "Transportation Analytics View",
        },
      ],
      fullWidth: {
        image: "/portfolio/road/g3.png",
        alt: "Road Mobility System Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/road/g4.png",
            alt: "Mobile Driver Interface",
          },
          {
            image: "/portfolio/road/g5.png",
            alt: "Command Center Dashboard",
          },
        ],
        text: "Road Mobility represents the future of intelligent transportation systems, helping cities and organizations optimize their transportation networks while improving safety and efficiency for all road users.",
      },
    },

    navigation: {
      prev: {
        link: "/portfolio/foresee-ai",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/callmi-website",
        text: "Next Project",
      },
    },
  },
};

export const getPortfolioDetail = (slug) => portfolioDetails[slug];
export const getAllPortfolioSlugs = () => [
  ...Object.keys(portfolioDetails),
  ...portfolioSlides.map((slide) => slide.slug),
];
