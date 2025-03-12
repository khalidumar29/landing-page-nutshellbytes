import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioElementV4 from "@/components/portfolio/PortfolioElementV4";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";
import { digitalMarketingSlides, portfolioSlides } from "@/data/portfolio";

const PortfolioV4Dark = () => {
  return (
    <>
      <Head>
        <title>Our Work | Transforming Ideas into Digital Reality</title>
        <meta
          name='description'
          content='Explore our portfolio of innovative digital solutions. From AI-powered platforms to seamless e-commerce experiences, discover how we help businesses thrive in the digital world.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <RootLayout header='header1' footer='footer1' defaultMode='dark'>
          <PortfolioElementV4
            title={"Web Design & Development"}
            description={
              "Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
            }
            portfolio={portfolioSlides}
          />
          <PortfolioElementV4
            title='Digital Marketing'
            description={
              " Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services."
            }
            portfolio={digitalMarketingSlides}
          />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV4Dark;
