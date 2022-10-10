import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyles } from './globals.js';
import { theme } from './themes/theme.js';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
