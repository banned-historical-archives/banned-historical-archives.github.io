import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

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

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);