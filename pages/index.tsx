import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Perfect SAP | Home</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <Hero />
      <About />
      <Services />
      <ContactForm />
    </div>
  );
};

export default Home;
