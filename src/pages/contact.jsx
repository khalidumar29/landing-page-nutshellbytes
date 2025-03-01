import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";

const ContactDark = () => {
  return (
    <>
      <Head>
        <title>Nutshell Bytes | Contact</title>
        <meta name='description' content='Contact Dark Description' />
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
