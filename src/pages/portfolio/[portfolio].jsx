import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import {
  portfolioDetails,
  portfolioSlides,
  digitalMarketingDetails,
} from "@/data/portfolio";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // Get paths from all three data sources
  const paths = [
    ...Object.keys(portfolioDetails).map((slug) => ({
      params: { portfolio: slug },
    })),
    ...portfolioSlides.map((slide) => ({
      params: { portfolio: slide.slug },
    })),
    ...Object.keys(digitalMarketingDetails).map((slug) => ({
      params: { portfolio: slug },
    })),
  ];

  return {
    paths,
    fallback: false,
  };
}

function getPortfolioNavigation(currentSlug) {
  // Combine all slugs from different sources
  const allSlugs = [
    ...Object.keys(portfolioDetails),
    ...portfolioSlides.map((slide) => slide.slug),
    ...Object.keys(digitalMarketingDetails),
  ];

  const currentIndex = allSlugs.indexOf(currentSlug);
  return {
    prev: currentIndex > 0 ? allSlugs[currentIndex - 1] : null,
    next:
      currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null,
  };
}

export async function getStaticProps({ params }) {
  // Try to get data from all three sources
  const detailData = portfolioDetails[params.portfolio];
  const slideData = portfolioSlides.find(
    (slide) => slide.slug === params.portfolio
  );
  const marketingData = digitalMarketingDetails[params.portfolio];

  // If none exists, return 404
  if (!detailData && !slideData && !marketingData) {
    return {
      notFound: true,
    };
  }

  const navigation = getPortfolioNavigation(params.portfolio);
  return {
    props: {
      portfolioData: detailData || slideData || marketingData,
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
