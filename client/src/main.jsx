import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyles } from './styles/globals.js';
import { theme } from './styles/theme.js';
import { ThemeProvider } from 'styled-components';
console.log(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
