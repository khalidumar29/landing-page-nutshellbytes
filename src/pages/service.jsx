import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceV6Hero from "@/components/hero/ServiceV6Hero";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";

const ServiceV6Dark = () => {
  return (
    <div>
      <Head>
        <title>Our Services | Digital Solutions & Web Development</title>
        <meta
          name='description'
          content='Transform your business with our comprehensive digital solutions. We offer web development, UI/UX design, e-commerce solutions, and cutting-edge technology services tailored to your needs.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <RootLayout header='header1' footer='footer1' defaultMode='dark'>
          <ServiceV6Hero />
          <CreativeAgencyService />
          <CreativeAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default ServiceV6Dark;
