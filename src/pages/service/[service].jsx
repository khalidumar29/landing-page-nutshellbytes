import Head from "next/head";
import Link from "next/link";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { getServiceDetails, getAllServiceSlugs } from "@/data/sevice";

const ServiceDetailsDark = ({ serviceData, navigation }) => {
  if (!serviceData) {
    return (
      <RootLayout header='header3' footer='footer3' defaultMode='dark'>
        <div className='container py-100'>
          <div className='text-center'>
            <h1 className='sec-title'>Service not found</h1>
            <p className='mt-4'>The requested service could not be found.</p>
            <Link href='/services' className='wc-btn-primary mt-4'>
              View All Services
            </Link>
          </div>
        </div>
      </RootLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{serviceData.title} | Professional Services</title>
        <meta name='description' content={serviceData.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:title'
          content={`${serviceData.title} | Professional Services`}
        />
        <meta property='og:description' content={serviceData.description} />
        <meta property='og:type' content='website' />
      </Head>

      <main>
        <RootLayout header='header3' footer='footer3' defaultMode='dark'>
          <ServiceDetailsDevelopment data={serviceData.development} />
          <ServiceDetailsWorkflow data={serviceData.workflow} />
          <ServiceDetailsService data={serviceData} />
          <ServiceDetailsFaq data={serviceData.faq} />

          {navigation && (
            <section className='service__navigation pb-120'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xxl-12'>
                    <div className='service__nav d-flex justify-content-between'>
                      {navigation.prev && (
                        <Link
                          href={`/service/${navigation.prev}`}
                          className='wc-btn-primary btn-hover'
                        >
                          <span></span> Previous Service
                        </Link>
                      )}
                      {navigation.next && (
                        <Link
                          href={`/service/${navigation.next}`}
                          className='wc-btn-primary btn-hover'
                        >
                          <span></span> Next Service
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllServiceSlugs().map((slug) => ({
    params: { service: slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const serviceData = getServiceDetails(params.service);

  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  // Get the array of all slugs
  const allSlugs = getAllServiceSlugs();
  const currentIndex = allSlugs.indexOf(params.service);

  // Calculate previous and next slugs
  const navigation = {
    prev: currentIndex > 0 ? allSlugs[currentIndex - 1] : null,
    next:
      currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null,
  };

  return {
    props: {
      serviceData,
      navigation,
    },
  };
}

export default ServiceDetailsDark;
