import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PayloadCMS from "@/components/PayloadCMS";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <PayloadCMS />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
