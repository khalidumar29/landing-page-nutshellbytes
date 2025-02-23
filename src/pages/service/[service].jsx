import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { useRouter } from "next/router";

const ServiceDetailsDark = () => {
  const router = useRouter();
  console.log(router.query.service);

  return (
    <>
      <Head>
        <title>Service Details Dark | {router.query.service}</title>
        <meta name='description' content='Service Details Dark Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <RootLayout header='header3' footer='footer3' defaultMode='dark'>
          <ServiceDetailsDevelopment />
          <ServiceDetailsWorkflow />
          <ServiceDetailsService />
          <ServiceDetailsFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetailsDark;
