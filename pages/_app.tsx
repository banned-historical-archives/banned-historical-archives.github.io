import '../styles/globals.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import { ReactElement, ReactNode, useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cc0000',
    },
  },
  components: {},
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="content-language" content="zh-CN" />
        <meta
          name="description"
          content="和谐历史档案馆 Banned Historical Archives"
        />
        <meta name="color-scheme" content="light only"></meta>
      </Head>
      <h1 style={{ position: 'fixed', left: '100%' }}>和谐历史档案馆</h1>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
