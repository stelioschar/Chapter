import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "emotion-theming";
import { MainTheme } from "@chapter/Features/Themes";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default CustomApp;
