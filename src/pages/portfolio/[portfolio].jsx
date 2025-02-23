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

  return {
    props: {
      portfolioData: detailData || slideData,
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
        <title>Portfolio Details Dark</title>
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
