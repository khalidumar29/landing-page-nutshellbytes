import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";

const ContactDark = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Let's Build Something Amazing Together</title>
        <meta
          name='description'
          content="Ready to transform your digital presence? Get in touch with our team of experts. We're here to discuss your project answer questions, and help bring your vision to life."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <RootLayout header='header1' footer='footer1' defaultMode='dark'>
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default ContactDark;
