import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioElementV4 from "@/components/portfolio/PortfolioElementV4";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";

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
          <PortfolioElementV4 />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV4Dark;
