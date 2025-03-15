// Web Development Portfolio Data
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

// Digital Marketing Portfolio Data

export const digitalMarketingSlides = [
  {
    id: 1,
    title: "FitFuel Social Boost",
    type: "",
    year: "2024",
    image: "/portfolio/fitfuel/main.png",
    slug: "fitfuel-social-growth",
    headerInfo: {
      category: {
        name: "Social Media Growth",
        link: "/category/social-media-growth",
      },
      client: "FitFuel Nutrition",
      startDate: "January 2024",
      handover: "June 2024",
    },
  },
  ,
  {
    id: 2,
    title: "PeakGear PPC Success",
    type: "",
    year: "2024",
    image: "/portfolio/peak-gear/main.jpg",
    slug: "peakgear-ppc-growth",
    headerInfo: {
      category: {
        name: "Ad Campaign Performance",
        link: "/category/ad-performance",
      },
      client: "PeakGear Outdoors",
      startDate: "February 2024",
      handover: "July 2024",
    },
  },
  {
    id: 3,
    title: "LushGlow Social Revamp",
    type: "",
    year: "2024",
    image: "/portfolio/lushglow/home.png",
    slug: "lushglow-social-audit",
    headerInfo: {
      category: {
        name: "Brand Strategy & Social Media Audit",
        link: "/category/social-audit",
      },
      client: "LushGlow Skincare",
      startDate: "March 2024",
      handover: "August 2024",
    },
  },
];

export const digitalMarketingDetails = {
  "fitfuel-social-growth": {
    id: 1,
    title: "FitFuel Social Media Growth Strategy",
    headerInfo: {
      category: {
        name: "Social Media Growth",
        link: "#",
      },
      client: "FitFuel Nutrition",
      startDate: "January 2024",
      handover: "June 2024",
    },
    mainImage: "/portfolio/fitfuel/main.png",
    sections: [
      {
        title: "Revamping FitFuel’s Digital Presence",
        description:
          "FitFuel Nutrition, a growing brand in the health and wellness sector, struggled to gain traction on social media despite having quality products. Our goal was to increase their follower count, engagement rate, and brand trust across Instagram, TikTok, and Twitter.",
        features: [
          "Strategic Audience Targeting",
          "Platform-Specific Content Creation",
          "Influencer & Community Collaboration",
          "Paid & Organic Growth Strategy",
          "Data-Driven Engagement Optimization",
        ],
      },
      {
        title: "Content Strategy & Engagement Boost",
        description:
          "We developed a content mix that aligned with FitFuel’s brand mission, incorporating educational content, engaging fitness challenges, and influencer collaborations. We leveraged short-form video content, carousels, and interactive Q&A sessions to keep the audience engaged.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Nutrition Tips" },
            { type: "medium", text: "Workout Challenges" },
            { type: "semibold", text: "Influencer Partnerships" },
            { type: "bold", text: "Community Spotlights" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/fitfuel/insta-matric.png",
          alt: "Instagram Growth Metrics",
        },
        {
          image: "/portfolio/fitfuel/tiktok-viral.png",
          alt: "TikTok Viral Campaign",
        },
      ],
      fullWidth: {
        image: "/portfolio/fitfuel/g3.png",
        alt: "Multi-Platform Strategy Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/fitfuel/engagement-metrics-dashboard.png",
            alt: "Engagement Metrics Dashboard",
          },
          {
            image: "/portfolio/fitfuel/influencer-collaboration.png",
            alt: "Influencer Collaboration Performance",
          },
        ],
        text: "The FitFuel social media campaign led to outstanding results, including a 180% increase in Instagram engagement, 60K new followers across platforms, and a 28% rise in direct sales via social media. By leveraging high-quality content, interactive community engagement, and a mix of paid and organic strategies, we positioned FitFuel as a top nutrition brand in the digital space.",
      },
    },
    stats: {
      metrics: [
        { label: "Engagement Growth", value: "180%" },
        { label: "New Followers Gained", value: "60K" },
        { label: "Direct Sales Increase", value: "28%" },
      ],
    },
    technologies: [
      "Instagram",
      "TikTok",
      "Twitter",
      "Hootsuite",
      "Canva Pro",
      "Meta Ads Manager",
      "Google Analytics",
    ],
    navigation: {
      prev: {
        link: "/portfolio/urbanescape-email",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/ecostyle-content",
        text: "Next Project",
      },
    },
  },
  "peakgear-ppc-growth": {
    id: 6,
    title: "PeakGear PPC & Ad Campaign Strategy",
    headerInfo: {
      category: {
        name: "Ad Campaign Performance",
        link: "#",
      },
      client: "PeakGear Outdoors",
      startDate: "February 2024",
      handover: "July 2024",
    },
    mainImage: "/portfolio/peak-gear/main.jpg",
    sections: [
      {
        title: "Scaling PeakGear’s Ad Performance",
        description:
          "PeakGear Outdoors, a premium outdoor gear brand, wanted to improve its paid advertising efficiency across Facebook Ads, Google Ads, and TikTok. Despite a solid product lineup, their previous campaigns had high acquisition costs and low conversion rates. We took over their ad strategy with a data-driven approach to maximize ROI while lowering costs.",
        features: [
          "Campaign Restructuring & Optimization",
          "Advanced Audience Segmentation",
          "Landing Page A/B Testing",
          "Retargeting & Lookalike Audiences",
          "Creative Refresh for Higher CTR",
        ],
      },
      {
        title: "Strategic Approach & Execution",
        description:
          "We completely overhauled PeakGear's ad campaigns by testing multiple creative variations, refining audience targeting, and introducing a structured retargeting funnel. Our optimizations led to a significant drop in acquisition costs and a sharp increase in ROAS.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Video Ads (Reels & Shorts)" },
            { type: "medium", text: "Carousel & Dynamic Ads" },
            { type: "semibold", text: "Google Performance Max" },
            { type: "bold", text: "A/B Testing & Analytics" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/peak-gear/g1.png",
          alt: "Google Ads Campaign Performance",
        },
        {
          image: "/portfolio/peak-gear/g2.png",
          alt: "Facebook Ad Engagement Metrics",
        },
      ],
      fullWidth: {
        image: "/portfolio/peak-gear/g3.png",
        alt: "Multi-Platform Ad Strategy Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/peak-gear/g4.png",
            alt: "Ad ROAS Growth Dashboard",
          },
          {
            image: "/portfolio/peak-gear/g5.png",
            alt: "Conversion Rate Improvement Metrics",
          },
        ],
        text: "Our revamped ad strategy transformed PeakGear’s paid marketing efforts. The campaigns achieved a 5.2x ROAS, a 47% reduction in customer acquisition cost (CAC), and a 31% increase in conversion rates across all platforms. With a structured approach to testing and optimization, we helped PeakGear reach a larger, more engaged audience while maximizing profitability.",
      },
    },
    stats: {
      metrics: [
        { label: "Return on Ad Spend (ROAS)", value: "5.2x" },
        { label: "Customer Acquisition Cost (CAC)", value: "-47%" },
        { label: "Conversion Rate Increase", value: "31%" },
      ],
    },
    technologies: [
      "Facebook Ads Manager",
      "Google Ads",
      "TikTok Ads",
      "Google Analytics",
      "Meta Business Suite",
      "Unbounce",
      "Klaviyo",
    ],
    navigation: {
      prev: {
        link: "/portfolio/ecostyle-content",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/fitfuel-social-growth",
        text: "Next Project",
      },
    },
  },
  "lushglow-social-audit": {
    id: 3,
    title: "LushGlow Skincare Social Media Audit & Brand Strategy",
    headerInfo: {
      category: {
        name: "Brand Strategy & Social Media Audit",
        link: "#",
      },
      client: "LushGlow Skincare",
      startDate: "March 2024",
      handover: "August 2024",
    },
    mainImage: "/portfolio/lushglow/main.png",
    sections: [
      {
        title: "Rebuilding LushGlow’s Digital Brand Presence",
        description:
          "LushGlow Skincare, an emerging clean beauty brand, was struggling with inconsistent branding, low engagement, and ineffective social media messaging. We conducted an in-depth audit of their social media presence and developed a brand strategy that aligned with their target audience’s expectations while improving engagement and sales.",
        features: [
          "Social Media Performance Analysis",
          "Competitor Benchmarking",
          "Brand Messaging & Positioning",
          "Content Pillar Development",
          "Engagement & Community Strategy",
        ],
      },
      {
        title: "Audit Insights & Key Improvements",
        description:
          "Our audit revealed gaps in content consistency, audience engagement, and brand storytelling. By redefining LushGlow’s brand voice, optimizing content formats, and enhancing community engagement efforts, we repositioned them as a go-to clean beauty brand for millennials and Gen Z audiences.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Brand Tone Refinement" },
            { type: "medium", text: "Content Strategy Realignment" },
            { type: "semibold", text: "User-Generated Content Focus" },
            { type: "bold", text: "Engagement Playbook" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/lushglow/g1.png",
          alt: "Social Media Audit Dashboard",
        },
        {
          image: "/portfolio/lushglow/g2.png",
          alt: "Brand Identity Realignment",
        },
      ],
      fullWidth: {
        image: "/portfolio/lushglow/g3.png",
        alt: "New Social Media Strategy Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/lushglow/g4.png",
            alt: "Engagement Rate Improvement",
          },
          {
            image: "/portfolio/lushglow/g5.png",
            alt: "Customer Sentiment Analysis",
          },
        ],
        text: "Our strategic overhaul resulted in a 120% increase in social media engagement, a 55% boost in audience growth, and a 22% increase in website traffic from social platforms. By fine-tuning LushGlow’s brand messaging and implementing a robust community engagement strategy, we helped establish them as a trusted name in the clean beauty space.",
      },
    },
    stats: {
      metrics: [
        { label: "Engagement Growth", value: "120%" },
        { label: "New Audience Reach", value: "55%" },
        { label: "Website Traffic Increase", value: "22%" },
      ],
    },
    technologies: [
      "Instagram Insights",
      "Facebook Analytics",
      "Hootsuite",
      "Brandwatch",
      "Canva Pro",
      "Sprout Social",
      "Google Analytics",
    ],
    navigation: {
      prev: {
        link: "/portfolio/peakgear-ppc-growth",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/fitfuel-social-growth",
        text: "Next Project",
      },
    },
  },
};

export const getPortfolioDetail = (slug) => portfolioDetails[slug];
export const getDigitalMarketingDetail = (slug) =>
  digitalMarketingDetails[slug];
export const getAllPortfolioSlugs = () => [
  ...Object.keys(portfolioDetails, digitalMarketingDetails),
  ...portfolioSlides.map((slide) => slide.slug),
  ...DigitalMarketingSlides.map((slide) => slide.slug),
];
