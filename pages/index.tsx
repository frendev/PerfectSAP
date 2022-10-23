import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUS from "../components/AboutUS";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Perfect SAP | Home</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <Hero />
      <AboutUS />

      <Services />
      <ContactForm />
    </div>
  );
};

export default Home;
