const services = {
  // Basic service list data
  servicesData: [
    {
      id: "bespoke-website-design",
      slug: "bespoke-website-design",
      title: "Bespoke Website Design",
      highlight: "Tailored Solutions",
      description:
        "Custom-built websites that align with your brand identity and business goals. We craft digital experiences that captivate and convert.",
      features: [
        "Unique Design Concepts",
        "Brand-Centric Aesthetics",
        "Conversion-Focused Layouts",
        "Custom UI/UX Elements",
        "Optimized for Performance",
      ],
    },
    {
      id: "high-performance-development",
      slug: "high-performance-development",
      title: "High-Performance Development",
      highlight: "Frontend & Backend Mastery",
      description:
        "Robust, scalable, and secure web applications built with cutting-edge technologies to deliver seamless experiences.",
      features: [
        "Optimized Codebase",
        "Scalable Infrastructure",
        "API-Driven Solutions",
        "Performance Enhancements",
        "Secure Development Practices",
      ],
      image: "/assets/imgs/service/2/2.jpg",
    },
    {
      id: "ecommerce-ecosystems",
      slug: "ecommerce-ecosystems",
      title: "E-Commerce Ecosystems",
      highlight: "Seamless Shopping Experience",
      description:
        "Fully integrated e-commerce platforms designed for conversions and customer retention, powered by modern technologies.",
      features: [
        "Custom Storefront Design",
        "Secure Payment Integration",
        "Inventory & Order Management",
        "User-Friendly Navigation",
        "Mobile-Optimized Shopping",
      ],
      image: "/assets/imgs/service/2/3.jpg",
    },
    {
      id: "continuous-support-optimization",
      slug: "continuous-support-optimization",
      title: "Continuous Support & Optimization",
      highlight: "Ensuring Peak Performance",
      description:
        "Ongoing support, maintenance, and optimization to keep your digital presence at its best.",
      features: [
        "Regular Performance Audits",
        "Bug Fixes & Troubleshooting",
        "SEO & Speed Enhancements",
        "Security Updates",
        "Technical Support",
      ],
      image: "/assets/imgs/service/2/4.jpg",
    },
    {
      id: "experience-driven-ux-design",
      slug: "experience-driven-ux-design",
      title: "Experience-Driven UX Design",
      highlight: "User-Centered Approach",
      description:
        "Designing intuitive experiences that enhance usability and engagement, tailored to user needs.",
      features: [
        "Data-Driven Insights",
        "Behavioral Analysis",
        "User Flow Optimization",
        "Accessibility & Usability",
        "Wireframing & Prototyping",
      ],
      image: "/assets/imgs/service/2/5.jpg",
    },
    {
      id: "aesthetically-refined-ui-design",
      slug: "aesthetically-refined-ui-design",
      title: "Aesthetically Refined UI Design",
      highlight: "Visually Stunning Interfaces",
      description:
        "Creating sophisticated, polished, and functional interfaces that enhance brand identity and user experience.",
      features: [
        "Pixel-Perfect Designs",
        "Brand Consistency",
        "Interactive Components",
        "Responsive & Adaptive Layouts",
        "Visual Hierarchy Optimization",
      ],
      image: "/assets/imgs/service/2/6.jpg",
    },
    {
      id: "interactive-prototyping",
      slug: "interactive-prototyping",
      title: "Interactive Prototyping",
      highlight: "Bringing Ideas to Life",
      description:
        "Building realistic prototypes that allow users to interact with the product before development begins.",
      features: [
        "Clickable Wireframes",
        "User Journey Testing",
        "Real-Time Feedback",
        "Design Iterations",
        "Cross-Device Compatibility",
      ],
      image: "/assets/imgs/service/2/7.jpg",
    },
    {
      id: "iterative-usability-testing",
      slug: "iterative-usability-testing",
      title: "Iterative Usability Testing",
      highlight: "Refining User Experience",
      description:
        "A structured testing process to enhance usability, improve accessibility, and maximize engagement.",
      features: [
        "User Testing Sessions",
        "A/B Testing & Heatmaps",
        "Behavior Analysis",
        "Feedback Implementation",
        "Optimization Strategies",
      ],
      image: "/assets/imgs/service/2/8.jpg",
    },
  ],

  // Digital Agency section data
  digitalAgency: [
    {
      id: 1,
      slug: "bespoke-website-design",
      number: "01",
      title: "Bespoke Website Design",
      description:
        "Custom-built websites that align with your brand identity and business goals. We craft digital experiences that captivate and convert.",
      image: "/service/bespoke/2nd.jpg",
    },
    {
      id: 2,
      slug: "high-performance-development",
      number: "02",
      title: "High-Performance Development",
      description:
        "Robust, scalable, and secure web applications built with cutting-edge technologies to deliver seamless experiences.",
      image: "/service/high-perfo-backend/2nd.jpg",
    },
    {
      id: 3,
      slug: "ecommerce-ecosystems",
      number: "03",
      title: "E-Commerce Ecosystems",
      description:
        "Fully integrated e-commerce platforms designed for conversions and customer retention, powered by modern technologies.",
      image: "/service/ecom/2nd.jpg",
    },
  ],

  // Detailed service pages data
  serviceDetails: {
    "bespoke-website-design": {
      id: "bespoke-website-design",
      title: "Bespoke Website Design",
      description:
        "We craft unique, custom websites that truly represent your brand",
      description2:
        "Your website is the digital face of your brand. It's the first impression you make on potential customers, and it's the foundation of your online presence. We understand the importance of a well-designed website, and we're here to bring your vision to life.",
      image: "/service/bespoke/3rd.jpg",
      headerInfo: {
        category: {
          name: "Design",
          link: "/category/design",
        },
        client: "Global Brands",
        startDate: "Flexible",
        handover: "8-12 weeks",
      },
      development: {
        title: "Custom Website Creation",
        subtitle: "Your Vision, Our Expertise",
        description:
          "We don't just build websites - we create digital experiences that captivate your audience and drive results. Every pixel, every interaction is thoughtfully crafted to reflect your brand's unique identity.",
        description2:
          " Create robust applications that handle millions of users while maintaining lightning-fast performance. Our solutions are built to grow with your business.",
        features: [
          {
            icon: "palette",
            title: "Custom Design",
            description:
              "Unique designs that make you stand out from the crowd",
          },
          {
            icon: "brand",
            title: "Brand Integration",
            description: "Seamless incorporation of your brand elements",
          },
          {
            icon: "mobile",
            title: "Responsive Design",
            description: "Perfect viewing on all devices and screens",
          },
          {
            icon: "speed",
            title: "Performance",
            description: "Lightning-fast loading and smooth interactions",
          },
        ],
        images: {
          main: "/service/bespoke/1st.jpg",
          secondary: "/service/bespoke/2nd.jpg",
        },
      },
      workflow: {
        title: "Our Design Journey",
        description: "A collaborative process to bring your vision to life",
        steps: [
          {
            number: "01",
            title: "Discovery",
            description: "Understanding your brand, goals, and audience",
          },
          {
            number: "02",
            title: "Concept",
            description: "Creating initial designs and getting your feedback",
          },
          {
            number: "03",
            title: "Development",
            description: "Building your site with attention to detail",
          },
          {
            number: "04",
            title: "Testing",
            description: "Ensuring everything works perfectly",
          },
          {
            number: "05",
            title: "Launch",
            description: "Your site goes live to the world",
          },
        ],
      },
      faq: [
        {
          question: "How long will it take to design my website?",
          answer:
            "Most custom websites take 8-12 weeks from start to finish. This includes the design phase, development, and testing. We'll provide you with a detailed timeline during our initial consultation.",
        },
        {
          question: "Will my website work on mobile devices?",
          answer:
            "Absolutely! We design all our websites with a mobile-first approach. Your site will look and function beautifully on all devices - from phones to tablets to desktop computers.",
        },
        {
          question: "Can I update the website myself?",
          answer:
            "Yes! We build your site on user-friendly platforms and provide training so you can easily make updates. Plus, we're always here if you need help.",
        },
        {
          question: "What about SEO?",
          answer:
            "SEO is built into every website we create. We follow best practices for search engine optimization and provide guidelines for maintaining good SEO when you add new content.",
        },
      ],
    },

    "high-performance-development": {
      id: "high-performance-development",
      title: "High-Performance Development",
      description:
        "Building powerful, scalable applications that drive business growth",

      description2:
        "Our development team is experts in web development, mobile development, and backend development. We specialize in building scalable, secure, and performant applications that drive business growth. We ensure that our solutions are built to grow with your business.",
      image: "/service/high-perfo-backend/3rd.jpg",
      headerInfo: {
        category: {
          name: "Development",
          link: "/category/development",
        },
        client: "Enterprise & Startups",
        startDate: "Flexible",
        handover: "3-6 months",
      },
      development: {
        title: "Enterprise-Grade Solutions",
        subtitle: "Performance at Scale",
        description:
          "We create robust applications that handle millions of users while maintaining lightning-fast performance. Our solutions are built to grow with your business.",
        description2:
          " Our solutions are built to grow with your business and adapt to changing needs.",

        features: [
          {
            icon: "speed",
            title: "High Performance",
            description: "Blazing fast applications optimized for scale",
          },
          {
            icon: "security",
            title: "Enterprise Security",
            description: "Bank-grade security protocols and best practices",
          },
          {
            icon: "cloud",
            title: "Cloud Native",
            description: "Modern cloud architecture for maximum flexibility",
          },
          {
            icon: "api",
            title: "API Development",
            description: "Robust APIs for seamless integration",
          },
        ],
        images: {
          main: "/service/high-perfo-backend/1st.jpg",
          secondary: "/service/high-perfo-backend/2nd.jpg",
        },
      },
      workflow: {
        title: "Development Process",
        description: "Agile methodology for efficient delivery",
        steps: [
          {
            number: "01",
            title: "Planning",
            description: "Detailed architecture and technology selection",
          },
          {
            number: "02",
            title: "Development",
            description: "Iterative development with regular updates",
          },
          {
            number: "03",
            title: "Testing",
            description: "Comprehensive testing and optimization",
          },
          {
            number: "04",
            title: "Deployment",
            description: "Smooth deployment and monitoring setup",
          },
        ],
      },
      faq: [
        {
          question: "What technologies do you specialize in?",
          answer:
            "We're experts in modern technologies like React, Node.js, Python, and cloud platforms (AWS, Google Cloud, Azure). We choose the best tools for your specific needs.",
        },
        {
          question: "How do you handle scalability?",
          answer:
            "We design applications with scalability in mind from day one. Using microservices architecture, container orchestration, and cloud-native solutions, your application can handle growth seamlessly.",
        },
        {
          question: "What about maintenance and updates?",
          answer:
            "We provide comprehensive maintenance plans including monitoring, security updates, performance optimization, and feature additions. Your application will stay current and secure.",
        },
        {
          question: "Can you work with our existing systems?",
          answer:
            "Absolutely! We have extensive experience integrating with existing systems and can build solutions that work seamlessly with your current infrastructure.",
        },
      ],
    },
    "ecommerce-ecosystems": {
      id: "ecommerce-ecosystems",
      title: "E-Commerce Ecosystems",
      description:
        "Building powerful online stores that drive sales and delight customers",

      description2:
        "We create seamless shopping experiences that convert visitors into loyal customers. Our e-commerce platforms are built for reliability, scalability, and easy management.",
      image: "/service/ecom/3rd.jpg",
      headerInfo: {
        category: {
          name: "E-Commerce",
          link: "/category/ecommerce",
        },
        client: "Retail & Digital Brands",
        startDate: "Flexible",
        handover: "12-16 weeks",
      },
      development: {
        title: "Complete E-Commerce Solutions",
        subtitle: "Your Store, Your Success",
        description:
          "We create seamless shopping experiences that convert visitors into loyal customers. Our e-commerce platforms are built for reliability, scalability, and easy management.",

        description2:
          " Our e-commerce platforms are built for reliability, scalability, and easy management.",

        features: [
          {
            icon: "storefront",
            title: "Custom Storefront",
            description:
              "Unique, brand-aligned shopping experience that stands out",
          },
          {
            icon: "payment",
            title: "Secure Payments",
            description: "Multi-gateway integration with bulletproof security",
          },
          {
            icon: "inventory",
            title: "Smart Inventory",
            description: "Real-time stock management and automated ordering",
          },
          {
            icon: "mobile",
            title: "Mobile Commerce",
            description: "Optimized shopping experience across all devices",
          },
        ],
        images: {
          main: "/service/ecom/1st.jpg",
          secondary: "/service/ecom/2nd.jpg",
        },
      },
      workflow: {
        title: "E-Commerce Development Process",
        description: "From concept to successful online store",
        steps: [
          {
            number: "01",
            title: "Requirements",
            description:
              "Understanding your products, market, and business goals",
          },
          {
            number: "02",
            title: "Architecture",
            description: "Planning the platform and integration points",
          },
          {
            number: "03",
            title: "Design & Development",
            description: "Creating your custom e-commerce solution",
          },
          {
            number: "04",
            title: "Testing",
            description: "Thorough testing of all store functions",
          },
          {
            number: "05",
            title: "Launch",
            description: "Careful deployment and monitoring",
          },
          {
            number: "06",
            title: "Support",
            description: "Ongoing maintenance and optimization",
          },
        ],
      },
      faq: [
        {
          question: "Which e-commerce platforms do you work with?",
          answer:
            "We specialize in Shopify, WooCommerce, and custom solutions built with modern frameworks. We'll recommend the best platform based on your specific needs, scale, and budget.",
        },
        {
          question: "Can you handle large product catalogs?",
          answer:
            "Absolutely! Our solutions are built to handle thousands of products with complex variations, custom attributes, and dynamic pricing. We implement efficient search and filtering for easy navigation.",
        },
        {
          question: "Do you integrate with existing systems?",
          answer:
            "Yes, we can integrate your e-commerce platform with your ERP, CRM, accounting software, shipping providers, and other business systems for seamless operations.",
        },
        {
          question: "What about payment processing?",
          answer:
            "We integrate all major payment gateways with support for credit cards, digital wallets, and alternative payment methods. Security is our top priority, ensuring PCI compliance.",
        },
        {
          question: "How do you handle mobile commerce?",
          answer:
            "Mobile-first design is standard for all our e-commerce projects. We ensure smooth shopping experiences across all devices, optimizing for touch interfaces and fast loading.",
        },
      ],
    },
    "continuous-support-optimization": {
      id: "continuous-support-optimization",
      title: "Continuous Support & Optimization",
      description:
        "Keep your digital platforms running at peak performance with our dedicated maintenance and optimization services",

      description2:
        " Keep your digital platforms running at peak performance with our dedicated maintenance and optimization services. Our team is here to ensure your website, app, or platform is always up-to-date, secure, and performing at its best.",
      image: "/service/support/3rd.jpg",
      headerInfo: {
        category: {
          name: "Support & Maintenance",
          link: "/category/support-maintenance",
        },
        client: "Ongoing Partnerships",
        startDate: "Immediate",
        handover: "Monthly/Annual Plans",
      },
      development: {
        title: "Proactive Support Solutions",
        subtitle: "Peace of Mind for Your Digital Assets",
        description:
          "We don't just wait for problems to happen - we prevent them. Our team constantly monitors, updates, and optimizes your digital platforms to ensure they're always performing at their best. Think of us as your technical guardian angels!",

        description2:
          " Our team constantly monitors, updates, and optimizes your digital platforms to ensure they're always performing at their best.",
        features: [
          {
            icon: "monitoring",
            title: "24/7 Monitoring",
            description:
              "Round-the-clock monitoring to catch and fix issues before they affect your users",
          },
          {
            icon: "performance",
            title: "Performance Optimization",
            description:
              "Regular speed and performance tune-ups to keep your site lightning fast",
          },
          {
            icon: "security",
            title: "Security Management",
            description:
              "Proactive security updates and real-time threat protection",
          },
          {
            icon: "updates",
            title: "Content Updates",
            description:
              "Quick and reliable content updates whenever you need them",
          },
        ],
        images: {
          main: "/service/support/1st.jpg",
          secondary: "/service/support/2nd.jpg",
        },
      },
      workflow: {
        title: "Our Support Process",
        description:
          "A systematic approach to keeping your digital presence in top shape",
        steps: [
          {
            number: "01",
            title: "Initial Audit",
            description:
              "Comprehensive review of your current digital infrastructure",
          },
          {
            number: "02",
            title: "Strategy Planning",
            description:
              "Creating a tailored maintenance and optimization plan",
          },
          {
            number: "03",
            title: "Regular Maintenance",
            description: "Scheduled updates and preventive maintenance",
          },
          {
            number: "04",
            title: "Performance Reviews",
            description: "Monthly reports and optimization recommendations",
          },
          {
            number: "05",
            title: "Emergency Support",
            description: "Rapid response to urgent issues and concerns",
          },
        ],
      },
      faq: [
        {
          question: "What's included in your support packages?",
          answer:
            "Our support packages are comprehensive! They include regular security updates, performance optimization, content updates, technical support, and monthly health reports. We can customize the package to match your specific needs and budget.",
        },
        {
          question: "How quickly do you respond to issues?",
          answer:
            "We take response time seriously! Critical issues are addressed within 1 hour, and general support requests are handled within 24 hours. Plus, our team is available 24/7 for emergency support.",
        },
        {
          question: "Do you provide regular reports?",
          answer:
            "Yes, absolutely! You'll receive detailed monthly reports covering performance metrics, security status, completed updates, and recommendations for improvements. We believe in full transparency.",
        },
        {
          question: "Can you help with content updates?",
          answer:
            "Of course! Whether it's updating product information, adding new pages, or making design tweaks, we're here to help. Just send us your requirements, and we'll take care of it promptly.",
        },
        {
          question: "What if I need help outside regular hours?",
          answer:
            "Don't worry! Our emergency support line is available 24/7. For critical issues that can't wait until morning, we're just a phone call away. Your peace of mind is our priority.",
        },
      ],
    },
    "experience-driven-ux-design": {
      id: "experience-driven-ux-design",
      title: "Experience-Driven UX Design",
      description:
        "Creating digital experiences that truly understand and delight your users",

      description2:
        "  We blend analytics with empathy to create experiences that users love. Every click, every interaction is thoughtfully crafted based on real user behavior and needs. Think of it as building a digital space that feels like home for your users!",
      image: "/service/ui_ux/3rd.jpg",
      headerInfo: {
        category: {
          name: "UX Design",
          link: "/category/ux-design",
        },
        client: "Startups to Enterprise",
        startDate: "Flexible",
        handover: "6-8 weeks",
      },
      development: {
        title: "Human-Centered Design Process",
        subtitle: "Where Data Meets Creativity",
        description:
          "We blend analytics with empathy to create experiences that users love. Every click, every interaction is thoughtfully crafted based on real user behavior and needs. Think of it as building a digital space that feels like home for your users!",

        description2:
          "The result? A digital space that feels like home for your users.",
        features: [
          {
            icon: "research",
            title: "User Research",
            description:
              "Deep dive into your users' needs, behaviors, and pain points",
          },
          {
            icon: "analytics",
            title: "Data Analytics",
            description:
              "Making decisions backed by solid user data and insights",
          },
          {
            icon: "flowchart",
            title: "User Journey Mapping",
            description: "Crafting seamless paths through your digital product",
          },
          {
            icon: "prototype",
            title: "Interactive Prototyping",
            description:
              "Bringing ideas to life before full development begins",
          },
        ],
        images: {
          main: "/service/ui_ux/1st.jpg",
          secondary: "/service/ui_ux/2nd.jpg",
        },
      },
      workflow: {
        title: "Our Design Process",
        description:
          "A methodical approach to creating user-centered experiences",
        steps: [
          {
            number: "01",
            title: "Research & Discovery",
            description:
              "Understanding your users through interviews and data analysis",
          },
          {
            number: "02",
            title: "User Journey Mapping",
            description: "Plotting the perfect path for different user types",
          },
          {
            number: "03",
            title: "Wireframing",
            description: "Creating the blueprint of your digital experience",
          },
          {
            number: "04",
            title: "Prototyping",
            description: "Building interactive versions for testing",
          },
          {
            number: "05",
            title: "User Testing",
            description: "Getting real feedback from actual users",
          },
          {
            number: "06",
            title: "Refinement",
            description: "Polishing based on user feedback and data",
          },
        ],
      },
      faq: [
        {
          question: "How do you ensure the design meets user needs?",
          answer:
            "Great question! We start with extensive user research - interviews, surveys, and behavior analysis. We then create user personas and journey maps to understand exactly how people will interact with your product. Everything we design is tested with real users before finalization.",
        },
        {
          question: "What's your approach to accessibility?",
          answer:
            "Accessibility isn't an afterthought - it's built into everything we do! We follow WCAG guidelines and ensure your product works for everyone, regardless of their abilities. This includes proper contrast, screen reader compatibility, and keyboard navigation.",
        },
        {
          question: "How do you measure the success of a UX design?",
          answer:
            "We use a combination of quantitative and qualitative metrics. This includes user satisfaction scores, task completion rates, time-on-task measurements, and direct user feedback. We'll work with you to define specific KPIs that align with your business goals.",
        },
        {
          question: "Can you improve our existing product's UX?",
          answer:
            "Absolutely! We start with a thorough UX audit of your current product, identifying pain points and opportunities. Then we'll create a strategic plan to enhance the experience while maintaining familiarity for your existing users.",
        },
        {
          question: "Do you provide documentation for developers?",
          answer:
            "Yes! We create detailed documentation including design systems, interaction specifications, and component libraries. This ensures developers can implement the design exactly as intended, maintaining the integrity of the user experience.",
        },
      ],
    },
    "aesthetically-refined-ui-design": {
      id: "aesthetically-refined-ui-design",
      title: "Aesthetically Refined UI Design",
      description:
        "Creating visually stunning and functionally superior interfaces that elevate your brand",

      description2:
        "Aesthetically Refined UI Design with a design language that allows you to create interfaces that improve  performance   and user experience. Our design team creates visually stunning interfaces that elevate your brand and engage your users. Every element is meticulously crafted to ensure a seamless and delightful experience.",
      image: "/service/ui_ux/3rd.jpg",
      headerInfo: {
        category: {
          name: "UI Design",
          link: "/category/ui-design",
        },
        client: "Brand-Conscious Businesses",
        startDate: "Flexible",
        handover: "4-6 weeks",
      },
      development: {
        title: "Visual Excellence in Design",
        subtitle: "Where Beauty Meets Function",
        description:
          "Your interface is your brand's digital face. We craft pixel-perfect, visually stunning designs that not only look amazing but work flawlessly. Every element is thoughtfully designed to create a lasting impression while ensuring intuitive usability.",

        description2:
          "The design  of a digital interface is your brand's digital face. We craft pixel-perfect, visually stunning designs that not only look amazing but work flawlessly.",
        features: [
          {
            icon: "design",
            title: "Pixel-Perfect Design",
            description:
              "Meticulously crafted interfaces with attention to every detail",
          },
          {
            icon: "brand",
            title: "Brand Harmony",
            description:
              "Consistent visual language that strengthens brand recognition",
          },
          {
            icon: "interaction",
            title: "Interactive Elements",
            description:
              "Engaging animations and micro-interactions that delight users",
          },
          {
            icon: "responsive",
            title: "Responsive Design",
            description:
              "Flawless presentation across all devices and screen sizes",
          },
        ],
        images: {
          main: "/service/ui_ux/1st.jpg",
          secondary: "/service/ui_ux/2nd.jpg",
        },
      },
      workflow: {
        title: "Our Design Process",
        description:
          "A systematic approach to creating beautiful, functional interfaces",
        steps: [
          {
            number: "01",
            title: "Visual Discovery",
            description:
              "Understanding your brand's visual language and design goals",
          },
          {
            number: "02",
            title: "Style Exploration",
            description: "Creating mood boards and visual direction options",
          },
          {
            number: "03",
            title: "Component Design",
            description: "Crafting individual UI elements and interactions",
          },
          {
            number: "04",
            title: "Layout Creation",
            description: "Assembling components into cohesive page designs",
          },
          {
            number: "05",
            title: "Visual Testing",
            description: "Ensuring consistency and aesthetic appeal",
          },
          {
            number: "06",
            title: "Handover",
            description: "Delivering complete design systems and assets",
          },
        ],
      },
      faq: [
        {
          question: "How do you maintain consistency across different screens?",
          answer:
            "We create comprehensive design systems with reusable components, clear guidelines, and detailed documentation. This ensures visual consistency whether your users are on mobile, tablet, or desktop.",
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer:
            "Absolutely! We excel at translating brand guidelines into digital interfaces. We'll maintain your brand's essence while optimizing it for digital interactions and user experience.",
        },
        {
          question: "Do you provide design systems documentation?",
          answer:
            "Yes! Every UI project includes a detailed design system with component libraries, style guides, interaction patterns, and usage guidelines. This makes implementation and future updates seamless.",
        },
        {
          question: "How do you handle animations and interactions?",
          answer:
            "We design purposeful animations that enhance user experience without sacrificing performance. Each interaction is crafted to provide visual feedback and guide users naturally through your interface.",
        },
        {
          question: "What deliverables can we expect?",
          answer:
            "You'll receive complete design files, interactive prototypes, design system documentation, asset libraries, and animation specifications. Everything your development team needs for perfect implementation.",
        },
      ],
    },
    "interactive-prototyping": {
      id: "interactive-prototyping",
      title: "Interactive Prototyping",
      description:
        "Transform concepts into tangible experiences with interactive prototypes that validate ideas early",

      description2:
        "Transform concepts into tangible experiences with interactive prototypes that validate ideas early and collect valuable user feedback. Our prototyping solutions help you make informed decisions, reduce development risks, and create products that users love.",
      image: "/service/prototype/3rd.jpg",
      headerInfo: {
        category: {
          name: "Prototyping",
          link: "/category/prototyping",
        },
        client: "Product Teams & Startups",
        startDate: "Immediate",
        handover: "2-4 weeks",
      },
      development: {
        title: "Rapid Prototyping Solutions",
        subtitle: "From Concept to Reality",
        description:
          "We create high-fidelity prototypes that feel like real products. Test interactions, validate user flows, and gather feedback before investing in full development. Our prototypes help you make informed decisions and reduce development risks.",

        description2:
          "A high-fidelity prototype that feel like real products. Test interactions, validate user flows, and gather feedback before investing in full development.",
        features: [
          {
            icon: "wireframe",
            title: "Interactive Wireframes",
            description:
              "Clickable layouts that demonstrate core functionality and user flows",
          },
          {
            icon: "testing",
            title: "User Journey Validation",
            description:
              "Test complete user scenarios and gather real feedback",
          },
          {
            icon: "iteration",
            title: "Rapid Iterations",
            description: "Quick updates based on feedback and testing results",
          },
          {
            icon: "devices",
            title: "Multi-Device Testing",
            description: "Ensure consistent experience across all platforms",
          },
        ],
        images: {
          main: "/service/prototype/1st.jpg",
          secondary: "/service/prototype/2nd.jpg",
        },
      },
      workflow: {
        title: "Prototyping Process",
        description: "Efficient workflow to bring your ideas to life",
        steps: [
          {
            number: "01",
            title: "Initial Concept",
            description: "Understanding your product vision and user needs",
          },
          {
            number: "02",
            title: "Wireframing",
            description: "Creating the structural foundation of your product",
          },
          {
            number: "03",
            title: "Interactive Design",
            description: "Adding clickable elements and realistic interactions",
          },
          {
            number: "04",
            title: "User Testing",
            description: "Gathering feedback from real users",
          },
          {
            number: "05",
            title: "Refinement",
            description: "Implementing improvements based on feedback",
          },
          {
            number: "06",
            title: "Handover",
            description: "Preparing specifications for development",
          },
        ],
      },
      faq: [
        {
          question: "How realistic are your prototypes?",
          answer:
            "Our prototypes are highly realistic, featuring actual interactions, animations, and data. While they're not fully functional products, they provide an authentic experience of how your final product will work and feel.",
        },
        {
          question: "Can we test different design variations?",
          answer:
            "Yes! We can create multiple versions of key features or flows, allowing you to A/B test different approaches and make data-driven decisions about what works best for your users.",
        },
        {
          question: "What tools do you use for prototyping?",
          answer:
            "We use industry-leading tools like Figma, Protopie, and Framer for creating high-fidelity prototypes. The choice of tool depends on your specific needs and the complexity of interactions required.",
        },
        {
          question: "How quickly can we get a working prototype?",
          answer:
            "Initial prototypes can be ready in as little as 1-2 weeks. We focus on getting a testable version in your hands quickly, then iterate based on feedback and insights.",
        },
        {
          question: "What do we get at the end of the process?",
          answer:
            "You'll receive the interactive prototype, detailed documentation of user flows, interaction specifications, and insights from user testing. Everything needed to move confidently into development.",
        },
      ],
    },
    "iterative-usability-testing": {
      id: "iterative-usability-testing",
      title: "Iterative Usability Testing",
      description:
        "Scientific approach to understanding and improving how users interact with your digital products",

      description2:
        " This is a simple implementation of the iterative Usability Testing algorithm that is designed to help you understand how users interact with your digital products.",
      image: "/service/testing/3rd.jpg",
      headerInfo: {
        category: {
          name: "User Testing",
          link: "/category/user-testing",
        },
        client: "Digital Products & Services",
        startDate: "Flexible",
        handover: "Ongoing Cycles",
      },
      development: {
        title: "Data-Driven User Testing",
        subtitle: "Making User Experience Measurable",
        description:
          "Turn user feedback into actionable insights! We combine qualitative observations with quantitative data to identify exactly how users interact with your product and where improvements can make the biggest impact.",

        description2:
          " Turn user feedback into actionable insights! We combine Tome observations with incidental data to identify exactly how users interact with your product and where improvements can make the biggest impact.",
        features: [
          {
            icon: "testing",
            title: "Moderated Testing",
            description:
              "Live sessions with real users to uncover deep insights",
          },
          {
            icon: "analytics",
            title: "Analytics & Heatmaps",
            description:
              "Visual data showing exactly how users navigate your product",
          },
          {
            icon: "behavior",
            title: "Behavior Analysis",
            description: "Understanding user patterns and decision points",
          },
          {
            icon: "implementation",
            title: "Rapid Implementation",
            description: "Quick turnaround from insight to improvement",
          },
        ],
        images: {
          main: "/service/testing/1st.jpg",
          secondary: "/service/testing/2nd.jpg",
        },
      },
      workflow: {
        title: "Testing & Optimization Cycle",
        description: "Continuous improvement through structured testing",
        steps: [
          {
            number: "01",
            title: "Test Planning",
            description: "Defining clear objectives and testing methodologies",
          },
          {
            number: "02",
            title: "User Recruitment",
            description:
              "Finding the right participants for meaningful results",
          },
          {
            number: "03",
            title: "Testing Sessions",
            description: "Conducting thorough user testing and data collection",
          },
          {
            number: "04",
            title: "Data Analysis",
            description: "Converting observations into actionable insights",
          },
          {
            number: "05",
            title: "Recommendations",
            description: "Developing clear strategies for improvement",
          },
          {
            number: "06",
            title: "Implementation",
            description: "Making changes and validating improvements",
          },
        ],
      },
      faq: [
        {
          question: "How many users do you test with?",
          answer:
            "We typically work with 5-8 users per testing round, as research shows this uncovers about 85% of usability issues. For larger projects, we might run multiple rounds with different user groups to ensure comprehensive coverage.",
        },
        {
          question: "How long does a testing cycle take?",
          answer:
            "A complete testing cycle usually takes 2-3 weeks. This includes participant recruitment (3-5 days), testing sessions (2-3 days), analysis (3-4 days), and detailed reporting with recommendations (3-4 days).",
        },
        {
          question: "Can you test products that aren't launched yet?",
          answer:
            "Absolutely! We can test everything from early prototypes to beta versions. Early testing actually saves time and money by catching issues before they reach production.",
        },
        {
          question: "What kind of results can we expect?",
          answer:
            "You'll receive comprehensive reports with specific findings, video highlights of user sessions, heatmaps, success metrics, and prioritized recommendations. We focus on actionable insights that lead to measurable improvements.",
        },
        {
          question: "How do you measure success?",
          answer:
            "We track key metrics like task completion rates, time-on-task, error rates, and user satisfaction scores. We also gather qualitative feedback to understand the 'why' behind the numbers. Post-implementation testing validates improvements.",
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
