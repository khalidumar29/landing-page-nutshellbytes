import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import {
  getAllPortfolioSlugs,
  getPortfolioDetail,
  portfolioDetails,
  portfolioSlides,
} from "@/data/portfolio";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // Get paths from both portfolioDetails and portfolioSlides
  const paths = [
    ...Object.keys(portfolioDetails).map((slug) => ({
      params: { portfolio: slug },
    })),
    ...portfolioSlides.map((slide) => ({
      params: { portfolio: slide.slug },
    })),
  ];

  return {
    paths,
    fallback: false,
  };
}

export const getPortfolioNavigation = (currentSlug) => {
  // Get all slugs from both sources
  const allSlugs = [
    ...Object.keys(portfolioDetails),
    ...portfolioSlides.map((slide) => slide.slug),
  ];

  const currentIndex = allSlugs.indexOf(currentSlug);

  if (currentIndex === -1) return null;

  return {
    prev: {
      link: `/portfolio/${
        currentIndex > 0
          ? allSlugs[currentIndex - 1]
          : allSlugs[allSlugs.length - 1]
      }`,
      text: "Previous Project",
    },
    next: {
      link: `/portfolio/${
        currentIndex < allSlugs.length - 1
          ? allSlugs[currentIndex + 1]
          : allSlugs[0]
      }`,
      text: "Next Project",
    },
  };
};

export async function getStaticProps({ params }) {
  // Try to get data from portfolioDetails first
  const detailData = portfolioDetails[params.portfolio];

  // If not in details, try to find in slides
  const slideData = portfolioSlides.find(
    (slide) => slide.slug === params.portfolio
  );

  // If neither exists, return 404
  if (!detailData && !slideData) {
    return {
      notFound: true,
    };
  }
  const navigation = getPortfolioNavigation(params.portfolio);
  return {
    props: {
      portfolioData: detailData || slideData,
      navigation,
    },
  };
}

const PortfolioDetailsDark = ({ portfolioData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Nutshell Bytes | {portfolioData.title}</title>
        <meta name='description' content='Portfolio Details Dark Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <RootLayout header='header3' footer='footer3' defaultMode='dark'>
          <PortfolioDetails1 data={portfolioData} />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetailsDark;
