import '../styles/globals.css'
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#cc0000',
    },
    secondary: {
      main: '#edf2ff',
    },
    warning: {
      main: '#ff9800',
    },
  },
  components: {},
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp