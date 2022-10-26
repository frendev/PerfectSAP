import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#eff0f3]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}