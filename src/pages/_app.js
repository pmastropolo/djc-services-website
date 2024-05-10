import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

import NavBar from "@components/navbar"

import AuthContextProvider from "../contexts/authContext";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <AuthContextProvider>
      
      <Component {...pageProps} />
      <NavBar />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
