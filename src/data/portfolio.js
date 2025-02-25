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
    image: "/assets/imgs/portfolio/3/benjon.png",
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
    image: "/assets/imgs/portfolio/3/benjon.png",
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
  "benjon-website": {
    id: 1,
    title: "callmi.co",
    headerInfo: {
      category: {
        name: "Development",
        link: "/category",
      },
      client: "Webflow",
      startDate: "23 January 2021",
      handover: "05 March 2021",
    },
    mainImage: "/assets/imgs/portfolio/detail/1.jpg",
    sections: [
      {
        title: "Build, streamline and evolve together with solution",
        description:
          "Always ready to push the boundaries, especially when it comes to our own platform, Our analytical eye to create a site that was visually engaging and also optimised for maximum performance. It also perfectly reflects the journey to help it tell a story to increase its understanding and drive action. To create a site that was visually engaging for maximum performance.",
        features: [
          "Brand Development",
          "UX/UI Design",
          "Front-end Development",
          "Copywriting",
          "Shopify Development",
        ],
        image: "/assets/imgs/portfolio/detail/2.jpg",
      },
      {
        title: "Visual and typograpy hierarchy",
        description:
          "Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out elements logically and strategically, designers influence users' perceptions and guide them to desired actions. Users notice larger elements more easily can convert.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "This is text message" },
            { type: "medium", text: "Medium typography" },
            { type: "semibold", text: "Just Amazing" },
            { type: "bold", text: "Awesome" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/assets/imgs/portfolio/detail/3.jpg",
          alt: "Portfolio Image",
        },
        {
          image: "/assets/imgs/portfolio/detail/4.jpg",
          alt: "Portfolio Image",
        },
      ],
      fullWidth: {
        image: "/assets/imgs/portfolio/detail/5.jpg",
        alt: "Portfolio Image",
      },
      conclusion: {
        images: [
          {
            image: "/assets/imgs/portfolio/detail/6.jpg",
            alt: "Portfolio Image",
          },
          {
            image: "/assets/imgs/portfolio/detail/7.jpg",
            alt: "Portfolio Image",
          },
        ],
        text: "For those of us who are blessed with good sight. So we seldom consider it. That's why going off to investigate the whys and hows involved is a little like trying to get behind the wind",
      },
    },
    navigation: {
      prev: {
        link: "/portfolio/test-websiteg",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/benjon-website",
        text: "Next Project",
      },
    },
  },
  "test-website": {
    id: 1,
    title: "Test Website",
    headerInfo: {
      category: {
        name: "Development",
        link: "/category",
      },
      client: "Webflow",
      startDate: "23 January 2021",
      handover: "05 March 2021",
    },
    mainImage: "/assets/imgs/portfolio/detail/1.jpg",
    sections: [
      {
        title: "Build, streamline and evolve together with solution",
        description:
          "Always ready to push the boundaries, especially when it comes to our own platform, Our analytical eye to create a site that was visually engaging and also optimised for maximum performance. It also perfectly reflects the journey to help it tell a story to increase its understanding and drive action. To create a site that was visually engaging for maximum performance.",
        features: [
          "Brand Development",
          "UX/UI Design",
          "Front-end Development",
          "Copywriting",
          "Shopify Development",
        ],
        image: "/assets/imgs/portfolio/detail/2.jpg",
      },
      {
        title: "Visual and typograpy hierarchy",
        description:
          "Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out elements logically and strategically, designers influence users' perceptions and guide them to desired actions. Users notice larger elements more easily can convert.",
        typography: {
          fontImage: "/assets/imgs/portfolio/detail/shape.png",
          styles: [
            { type: "regular", text: "This is text message" },
            { type: "medium", text: "Medium typography" },
            { type: "semibold", text: "Just Amazing" },
            { type: "bold", text: "Awesome" },
          ],
        },
      },
    ],
    gallery: {
      split: [
        {
          image: "/assets/imgs/portfolio/detail/3.jpg",
          alt: "Portfolio Image",
        },
        {
          image: "/assets/imgs/portfolio/detail/4.jpg",
          alt: "Portfolio Image",
        },
      ],
      fullWidth: {
        image: "/assets/imgs/portfolio/detail/5.jpg",
        alt: "Portfolio Image",
      },
      conclusion: {
        images: [
          {
            image: "/assets/imgs/portfolio/detail/6.jpg",
            alt: "Portfolio Image",
          },
          {
            image: "/assets/imgs/portfolio/detail/7.jpg",
            alt: "Portfolio Image",
          },
        ],
        text: "For those of us who are blessed with good sight. So we seldom consider it. That's why going off to investigate the whys and hows involved is a little like trying to get behind the wind",
      },
    },
    navigation: {
      prev: {
        link: "/portfolio/benjon-website",
        text: "Previous Project",
      },
      next: {
        link: "/portfolio/test-website",
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
