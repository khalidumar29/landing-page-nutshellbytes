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
    type: "Social Media Growth",
    year: "2024",
    image: "/portfolio/fitfuel/home.png",
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
    title: "EcoStyle",
    type: "Content Marketing",
    year: "2023",
    image: "/portfolio/foresee/home.png",
    slug: "ecostyle-content",
    headerInfo: {
      category: {
        name: "Content Marketing",
        link: "/category/content-marketing",
      },
      client: "EcoStyle Apparel",
      startDate: "January 2023",
      handover: "June 2023",
    },
  },
  {
    id: 3,
    title: "TechVision",
    type: "SEO & PPC",
    year: "2023",
    image: "/assets/imgs/portfolio/3/callmi.png",
    slug: "techvision-seo",
    headerInfo: {
      category: {
        name: "SEO & PPC",
        link: "/category/seo-ppc",
      },
      client: "TechVision Solutions",
      startDate: "May 2023",
      handover: "December 2023",
    },
  },
  {
    id: 4,
    title: "Urban Escape",
    type: "Email Marketing",
    year: "2024",
    image: "/portfolio/foresee/home.png",
    slug: "urbanescape-email",
    headerInfo: {
      category: {
        name: "Email Marketing",
        link: "/category/email-marketing",
      },
      client: "Urban Escape Hotels",
      startDate: "November 2023",
      handover: "March 2024",
    },
  },
  // ...other slides
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
          image: "/portfolio/fitfuel/g1.png",
          alt: "Instagram Growth Metrics",
        },
        {
          image: "/portfolio/fitfuel/g2.png",
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
            image: "/portfolio/fitfuel/g4.png",
            alt: "Engagement Metrics Dashboard",
          },
          {
            image: "/portfolio/fitfuel/g5.png",
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
  "ecostyle-content": {
    id: 2,
    title: "EcoStyle Content Marketing Strategy",
    headerInfo: {
      category: {
        name: "Content Marketing",
        link: "https://ecostyle.com/",
      },
      client: "EcoStyle Apparel",
      startDate: "January 2023",
      handover: "June 2023",
    },
    mainImage: "/portfolio/ecostyle/main.png",
    sections: [
      {
        title: "Sustainable Fashion Storytelling",
        description:
          "EcoStyle needed to position themselves as leaders in sustainable fashion while educating consumers about their eco-friendly practices. We developed a comprehensive content marketing strategy spanning their blog, podcast, and video channels to highlight their commitment to sustainability while showcasing their stylish apparel collections.",
        features: [
          "Editorial Calendar Development",
          "Blog Content Creation",
          "Podcast Series Production",
          "Video Content Strategy",
          "Sustainability Reporting",
        ],
      },
      {
        title: "Multi-Channel Content Ecosystem",
        description:
          "We created an interconnected content ecosystem that leveraged each channel's strengths while maintaining a cohesive brand narrative. Long-form blog content established thought leadership, podcast interviews brought in industry experts, and video content showcased products and manufacturing processes in action.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Educational Articles" },
            { type: "medium", text: "Expert Interviews" },
            { type: "semibold", text: "Behind-the-Scenes" },
            { type: "bold", text: "Sustainability Reports" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/ecostyle/g1.png",
          alt: "Blog Content Strategy",
        },
        {
          image: "/portfolio/ecostyle/g2.png",
          alt: "Podcast Series Branding",
        },
      ],
      fullWidth: {
        image: "/portfolio/ecostyle/g3.png",
        alt: "Content Marketing Ecosystem Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/ecostyle/g4.png",
            alt: "Content Performance Analytics",
          },
          {
            image: "/portfolio/ecostyle/g5.png",
            alt: "Audience Growth Dashboard",
          },
        ],
        text: "Our content marketing strategy helped EcoStyle build a loyal community of eco-conscious consumers who value both style and sustainability. By producing consistent, high-quality content across multiple channels, we increased website traffic by 78%, improved average time on site by 3.5 minutes, and helped position EcoStyle as a thought leader in sustainable fashion.",
      },
    },
    stats: {
      metrics: [
        { label: "Organic Traffic Growth", value: "78%" },
        { label: "Time on Site Increase", value: "3.5 min" },
        { label: "Newsletter Subscription", value: "+12K" },
      ],
    },
    technologies: [
      "WordPress",
      "Spotify for Podcasters",
      "YouTube",
      "Mailchimp",
      "SEMrush",
      "Ahrefs",
      "Google Analytics",
    ],
    navigation: {
      prev: {
        link: "/portfolio/nutriboost-campaign",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/techvision-seo",
        text: "Next Project",
      },
    },
  },
  "techvision-seo": {
    id: 3,
    title: "TechVision SEO & PPC Strategy",
    headerInfo: {
      category: {
        name: "Search Marketing",
        link: "https://techvision.com/",
      },
      client: "TechVision Solutions",
      startDate: "May 2023",
      handover: "December 2023",
    },
    mainImage: "/portfolio/techvision/main.png",
    sections: [
      {
        title: "Comprehensive Search Marketing Overhaul",
        description:
          "TechVision Solutions needed to improve their visibility in search results and generate more qualified leads for their enterprise software solutions. We implemented a dual-strategy approach combining technical SEO optimization with targeted PPC campaigns, resulting in dramatically improved search performance and lead generation.",
        features: [
          "Technical SEO Audit & Fixes",
          "Content Gap Analysis",
          "Keyword Strategy Development",
          "PPC Campaign Structure",
          "Conversion Rate Optimization",
        ],
      },
      {
        title: "Data-Driven Optimization Process",
        description:
          "We implemented a systematic, data-driven approach to search marketing that continuously improved performance. Our monthly optimization cycle included performance analysis, A/B testing, and strategic adjustments to both organic content and paid campaigns to maximize ROI.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Keyword Research" },
            { type: "medium", text: "Campaign Structure" },
            { type: "semibold", text: "Performance Analysis" },
            { type: "bold", text: "Conversion Optimization" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/techvision/g1.png",
          alt: "SEO Performance Dashboard",
        },
        {
          image: "/portfolio/techvision/g2.png",
          alt: "PPC Campaign Structure",
        },
      ],
      fullWidth: {
        image: "/portfolio/techvision/g3.png",
        alt: "Search Marketing Strategy Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/techvision/g4.png",
            alt: "Organic Traffic Growth",
          },
          {
            image: "/portfolio/techvision/g5.png",
            alt: "Conversion Funnel Analysis",
          },
        ],
        text: "Our comprehensive search marketing strategy helped TechVision achieve a 156% increase in organic traffic, a 42% reduction in cost-per-acquisition for paid campaigns, and a 68% increase in qualified leads. By aligning organic and paid search efforts, we created a cohesive search presence that maximized visibility and conversions.",
      },
    },
    stats: {
      metrics: [
        { label: "Organic Traffic Growth", value: "156%" },
        { label: "CPA Reduction", value: "42%" },
        { label: "Qualified Lead Increase", value: "68%" },
      ],
    },
    technologies: [
      "Google Search Console",
      "Google Analytics",
      "Google Ads",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "Unbounce",
    ],
    navigation: {
      prev: {
        link: "/portfolio/ecostyle-content",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/urbanescape-email",
        text: "Next Project",
      },
    },
  },
  "urbanescape-email": {
    id: 4,
    title: "Urban Escape Email Marketing Campaign",
    headerInfo: {
      category: {
        name: "Email Marketing",
        link: "https://urbanescape.com/",
      },
      client: "Urban Escape Hotels",
      startDate: "November 2023",
      handover: "March 2024",
    },
    mainImage: "/portfolio/urbanescape/main.png",
    sections: [
      {
        title: "Personalized Email Marketing Strategy",
        description:
          "Urban Escape Hotels wanted to increase direct bookings and customer loyalty through more effective email communications. We developed a segmented, automated email marketing strategy that delivered personalized content based on customer behavior, preferences, and booking history, resulting in significantly improved engagement and conversion rates.",
        features: [
          "Customer Segmentation Strategy",
          "Automated Email Workflows",
          "Personalized Content Creation",
          "A/B Testing Framework",
          "Performance Analytics & Reporting",
        ],
      },
      {
        title: "Customer Journey Email Framework",
        description:
          "We mapped the entire customer journey and created targeted email sequences for each stage, from initial interest to post-stay follow-up. Through dynamic content and strategic timing, we delivered relevant information and offers that drove booking decisions and encouraged repeat visits.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "Welcome Series" },
            { type: "medium", text: "Booking Reminders" },
            { type: "semibold", text: "Stay Enhancement" },
            { type: "bold", text: "Re-engagement Campaigns" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/portfolio/urbanescape/g1.png",
          alt: "Email Template Design System",
        },
        {
          image: "/portfolio/urbanescape/g2.png",
          alt: "Automation Workflow Structure",
        },
      ],
      fullWidth: {
        image: "/portfolio/urbanescape/g3.png",
        alt: "Email Marketing Campaign Overview",
      },
      conclusion: {
        images: [
          {
            image: "/portfolio/urbanescape/g4.png",
            alt: "Email Performance Metrics",
          },
          {
            image: "/portfolio/urbanescape/g5.png",
            alt: "Conversion Analytics Dashboard",
          },
        ],
        text: "Our email marketing strategy transformed Urban Escape's customer communications from generic mass emails to highly personalized, relevant content that drove business results. The campaign achieved a 52% open rate (industry average: 18%), 23% click-through rate (industry average: 2.5%), and generated a 38% increase in direct bookings, demonstrating the power of strategic segmentation and personalization.",
      },
    },
    stats: {
      metrics: [
        { label: "Open Rate", value: "52%" },
        { label: "Click-through Rate", value: "23%" },
        { label: "Direct Booking Increase", value: "38%" },
      ],
    },
    technologies: [
      "Mailchimp",
      "HubSpot",
      "ActiveCampaign",
      "Litmus",
      "Google Analytics",
      "Hotel PMS Integration",
    ],
    navigation: {
      prev: {
        link: "/portfolio/techvision-seo",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/nutriboost-campaign",
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
