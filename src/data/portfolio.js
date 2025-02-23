export const portfolioSlides = [
  {
    id: 1,
    title: "Benjon",
    type: "Website",
    year: "2012",
    image: "/assets/imgs/portfolio/3/1.jpg",
    slug: "benjon-website",
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
    id: 2,
    title: "Test Website",
    type: "Website",
    year: "2012",
    image: "/assets/imgs/portfolio/3/1.jpg",
    slug: "test-website",
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
  // ...other slides
];

export const portfolioDetails = {
  "benjon-website": {
    id: 1,
    title: "Benjon Website",
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
        link: "/portfolio-details",
        text: "Prev Work",
      },
      next: {
        link: "/portfolio-details",
        text: "Next Work",
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
        link: "/portfolio-details",
        text: "Prev Work",
      },
      next: {
        link: "/portfolio-details",
        text: "Next Work",
      },
    },
  },
};

export const getPortfolioDetail = (slug) => portfolioDetails[slug];
export const getAllPortfolioSlugs = () => [
  ...Object.keys(portfolioDetails),
  ...portfolioSlides.map((slide) => slide.slug),
];
