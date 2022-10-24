import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SEO from "@bradgarropy/next-seo";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <SEO
          title="Perfect SAP"
          description="One stop solution for all your SAP needs."
          keywords={[
            "sap",
            "sap abap",
            "sap hana",
            "perectsap",
            "erp",
            "resource management",
            "data processing",
            "sap courses",
            "best sap training",
            "business intelligence",
          ]}
          facebook={{
            image: "public\\assets\\PerfectSAP-Logo.png",
            url: "http://www.perfectsap.com",
            type: "website",
          }}
        ></SEO>
        <Navbar />
        <Component {...pageProps} className="h-screen" />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
