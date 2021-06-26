import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';


import "./global.scss"



function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RopeNflash</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
