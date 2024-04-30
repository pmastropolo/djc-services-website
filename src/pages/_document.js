import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* favicon */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          {/* public assets end */}

          <Script 
  src="https://chimpstatic.com/mcjs-connected/js/users/efcfec60b837c71d5e756a138/96beb85639cbd8c95d34d9c80.js"
  strategy="afterInteractive" 
/>



        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
